(ns proto-crawl.re-frame.state
  "Initial game state."
  (:require
    [clojure.math.combinatorics :refer [cartesian-product]]
    [cljs.spec.alpha :as s]
    [proto-crawl.entities.main :as ents]
    [proto-crawl.cube.main :as cube]
    [proto-crawl.rot-js.rng :as rng]
    [proto-crawl.specs.pathable :as p]
    [proto-crawl.specs.renderable :as r]
    [proto-crawl.specs.game-state :as state]
    [proto-crawl.specs.player :as player]
    [proto-crawl.specs.game-state :as game]
    [proto-crawl.maps.main :as map-loader]))


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

(defn mkskill
  [skill]
  {:post [(s/assert ::r/renderable %)]}
  (merge {::r/image-url "Interface_Skills_B.png"
          ::r/type      :green
          ::r/animate?  false
          :opacity      1}
         skill))

(def skills
  {:hunker     (mkskill {::r/tile-art [1 5]
                         :name        "Hunker"})
   :regenerate (mkskill {::r/tile-art [2 5]
                         :name        "Regenerate"})
   :twin       (mkskill {::r/tile-art [4 2]
                         :name        "TwinShot"})
   :snipe      (mkskill {::r/tile-art [3 2]
                         :name        "Snipe"})
   :word       (mkskill {::r/tile-art [0 1]
                         :name        "HolyWord"})
   :slash      (mkskill {::r/tile-art [0 0]
                         :name        "Slash"})})

(defn init-player
  []
  {:post [(s/assert ::player/player %)]}
  (let [p (random-player-pos)]
    {:orientation  (cube/->orient 1 5 4)
     :cube         {1 (:hunker skills)
                    2 (:regenerate skills)
                    3 (:twin skills)
                    4 (:snipe skills)
                    5 (:word skills)
                    6 (:slash skills)}
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

(defn init-game-state
  []
  {:post [(s/assert ::game/state %)]}
  (let [level (map-loader/loader (random-map-name))]
    {:entities    (add-entities 3 level)
     :current-map level
     :metadata    {:map-config    {}
                   :show-alt?     false
                   :viewport-size 12}
     :player      (init-player)}))

