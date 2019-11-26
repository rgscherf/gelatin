(ns gelatin.re-frame.state
  "Initial game state."
  (:require
    [clojure.math.combinatorics :refer [cartesian-product]]
    [cljs.spec.alpha :as s]
    [gelatin.entities.main :as ents]
    [re-frame.db :as db]
    [gelatin.cube.main :as cube]
    [gelatin.rot-js.rng :as rng]
    [gelatin.specs.pathable :as p]
    [gelatin.specs.renderable :as r]
    [gelatin.specs.game-state :as state]
    [gelatin.specs.player :as player]
    [gelatin.specs.game-state :as game]
    [gelatin.maps.main :as map-loader]))


(defn random-map-name
  []
  (rng/random-item (keys map-loader/basic-maps)))

(defn random-player-pos
  "Pick a random starting position for the player:
  - At the left side of the screen,
  - In the 4th or 5th row.
  This places the player on top of a door."
  []
  [(rng/random-item [-1])                                   ;; x
   (rng/random-item [4 5])])                                ;; y

(def placeholder-ability-behavior
  {;; valid target type, #{:entity :player :terrain}
   :affects    :entity
   ;; on-trigger tells us what to do to the targeted thing if one can be found.
   :on-trigger {:action #(update % :hp dec)}})

(defn mk-ability
  [ability]
  {:post [(s/assert ::r/renderable %)]}
  (merge {::r/image-url "Interface_Skills_B.png"
          ::r/type      :green
          ::r/animate?  false
          :opacity      1}
         placeholder-ability-behavior
         ability))

(def abilities
  {:hunker     (mk-ability {::r/tile-art [1 5]
                            :name        "Hunker"})
   :regenerate (mk-ability {::r/tile-art [2 5]
                            :name        "Regenerate"})
   :twin       (mk-ability {::r/tile-art [4 2]
                            :name        "TwinShot"})
   :snipe      (mk-ability {::r/tile-art [3 2]
                            :name        "Snipe"})
   :word       (mk-ability {::r/tile-art [0 1]
                            :name        "HolyWord"})
   :slash      (mk-ability {::r/tile-art [0 0]
                            :name        "Slash"})})

{:range      2                                              ;; valid range
 :affects    :entity                                        ;; valid target type, #{:entity :player :terrain}
 ;; on-trigger tells us what to do to the targeted thing if one can be found.
 :on-trigger {:action #(update % :hp dec)}}

;; when an action is triggered, take the chosen coords
;; and try to find a matching "thing" based on the :affects entry.
;; e.g. for :affects :entity, search for an entity at the chosen position
;; and apply the :action from the :on-trigger key to it.
;; for :affects :player, just go directly to the player.
;; the :action key will always return a new "thing", which can be validated
;; and then put back.
;; TODO: is it smart for an ability to directly change a "thing"? what about e.g. damage resistance?

(defn top-ability
  [player]
  (get (:cube player)
       (get (:orientation player) :t)))

(defn init-player
  []
  {:post [(s/assert ::player/player %)]}
  (let [p (random-player-pos)]
    {:orientation  (cube/->orient 1 5 4)
     :cube         {1 (:hunker abilities)
                    2 (:regenerate abilities)
                    3 (:twin abilities)
                    4 (:snipe abilities)
                    5 (:word abilities)
                    6 (:slash abilities)}
     ::p/passable? false
     ::p/type      :player
     :hp           3
     :ap           2
     :target-mode? false
     :target-pos   p
     ::p/pos       p}))

(defn reset-player-turn
  [[success? db]]
  {:pre  [(s/assert ::state/event-result [success? db])]
   :post [(s/assert ::state/event-result %)]}
  [true (-> db
            (assoc-in [:player :ap] 2)
            (assoc-in [:player :target-mode?] false))])


(defn add-entities
  [num-enemies level]
  (let [verboten-spawns [[-1 4] [-1 5] [0 3] [0 4] [0 5] [0 6]]
        free-spaces     (->> (apply dissoc level verboten-spawns)
                             vals
                             (filter #(::p/passable? %))
                             shuffle)]
    (into #{} (map #(ents/rat (::p/pos %))
                   (take num-enemies free-spaces)))))

(def init-msg
  {:key     (random-uuid)
   :message "Welcome to the dungeon, cube!"})

(defn init-game-state
  []
  {:post [(s/assert ::game/state %)]}
  (let [level (map-loader/loader (random-map-name))]
    {:entities    (add-entities 3 level)
     :messages    (list init-msg)
     :current-map level
     :metadata    {:map-config    {}
                   :show-alt?     false
                   :viewport-size 12}
     :player      (init-player)}))

(defn mk-death-msg
  [ent]
  {:key     (random-uuid)
   :message (str (:name ent) "(" (:identifier ent) ") dies.")})

(defn validate-entities
  [{:keys [entities messages] :as db}]
  (let [dead-ents       (filter #(>= 0 (:hp %)) entities)
        death-messages  (map mk-death-msg dead-ents)
        conjed-messages (apply conj messages death-messages)
        alive-ents      (apply disj entities dead-ents)]
    (-> db
        (assoc :entities alive-ents)
        (assoc :messages conjed-messages))))

(defn validate-db
  "Validate and prune game state, doing things like removing dead enemies,
  advancing effects, etc."
  [db]
  (-> db
      validate-entities))

