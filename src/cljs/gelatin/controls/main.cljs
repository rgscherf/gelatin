(ns gelatin.controls.main
  "The player uses a set of INPUT KEYS to manipulate the game world.
  MOVEMENT KEYS move the player or targeting reticule (depending on targeting? flag).
  INTERACTION KEYS switch between moving and targeting, select menu options, etc."
  (:require
    [clojure.core.match :refer [match]]
    [gelatin.specs.pathable :as p]
    [gelatin.specs.game-state :as state-spec]
    [gelatin.controls.keys :as k]
    [gelatin.controls.movement :as movement]
    [cljs.spec.alpha :as s]
    [gelatin.rot-js.fov :as fov]
    [gelatin.rot-js.pathfinding :as pathfinding]
    [gelatin.re-frame.state :as game-state]))


(defn set-replace
  "Replace a set item with another item."
  [coll old-entry new-entry]
  (conj (disj coll old-entry) new-entry))

(defn calculate-interaction-result-entities
  [db target-pos {:keys [on-trigger]}]
  (let [ents          (:entities db)
        ent-at-target (first (filter #(= target-pos (::p/pos %)) ents))]
    (if (not ent-at-target)
      db
      (assoc db :entities
                (set-replace ents
                             ent-at-target
                             ((:action on-trigger) ent-at-target))))))

(defn calculate-interaction-result
  [db target-pos {:keys [affects on-trigger] :as ability}]
  (match affects
         :entity (calculate-interaction-result-entities db target-pos ability)
         :player (assoc db :player ((:action on-trigger) (:player db)))))

(defn execute-interaction
  "Pressing the 'interact' button, do we intend to start interacting
  or confirm an interaction? If confirm, end the turn (AP=0) and calculate
  the new db based on chosen ability."
  [targeting? _ db]
  [true (if targeting?
          ;; confirm an interaction
          ;; first, check that the targeted square is within those threatened by
          ;; the ability. if it is, trigger the ability and end player turn.
          ;; else, do nothing!
          (if (get (get-in db [:player :targeted-squares])
                   (get-in db [:player :target-pos]))
            (-> db
                (assoc-in [:player :ap] 0)
                (assoc-in [:player :targeted-squares] nil)
                (calculate-interaction-result
                  (get-in db [:player :target-pos])
                  (game-state/top-ability (:player db))))
            db)
          ;; begin an interaction
          (-> db
              (assoc-in [:player :target-mode?] true)
              (assoc-in [:player :targeted-squares]
                        (fov/calculate-fov (pathfinding/db->collision-map db)
                                           (get-in db [:player ::p/pos])
                                           (-> db :player game-state/top-ability :range)))
              (assoc-in [:player :target-pos] (get-in db
                                                      [:player ::p/pos]))))])

(defn execute-cancel
  [targeting? _ db]
  (if targeting?
    [true (assoc-in db [:player :target-mode?] false)]
    [false db]))

(defn execute-input
  "Given an intended input and the mode we're currently in,
  execute the FSM and give back an event-result."
  [input from mode with key-pressed db]
  {:pre  [(s/assert #{:move :interact :cancel} input)
          (s/assert #{:from} from)
          (s/assert #{:targeting :move} mode)
          (s/assert #{:with} with)
          (s/assert k/input-key-names key-pressed)
          (s/assert ::state-spec/state db)]
   :post [(s/assert ::state-spec/event-result %)]}
  (match mode
         :targeting
         (match input
                :move (movement/execute-reticle-movement key-pressed db)
                :interact (execute-interaction true key-pressed db)
                :cancel (execute-cancel true key-pressed db))
         :move
         (match input
                :move (movement/execute-movement key-pressed db)
                :interact (execute-interaction false key-pressed db)
                :cancel (execute-cancel false key-pressed db))))

(defn take-player-input
  "Construct data about the current step in input FSM,
  then feed result (and current keypress and db) into execute-input
  to calculate FSM step."
  [key-pressed [success? db :as evt-res]]
  {:pre  [(s/assert ::state-spec/event-result evt-res)]
   :post [(s/assert ::state-spec/event-result %)]}
  (if success?
    (let [input (cond
                  (k/movement-key-names key-pressed) :move
                  (k/interaction-key-names key-pressed) :interact
                  (k/cancel-key-names key-pressed) :cancel)
          mode  (if (get-in db [:player :target-mode?])
                   :targeting
                   :move)]
      (execute-input input :from mode :with key-pressed db))
    [false db]))


