(ns gelatin.controls.main
  "The player uses a set of INPUT KEYS to manipulate the game world.
  MOVEMENT KEYS move the player or targeting reticule (depending on targeting? flag).
  INTERACTION KEYS switch between moving and targeting, select menu options, etc."
  (:require
    [clojure.core.match :refer [match]]
    [gelatin.specs.pathable :as p]
    [gelatin.specs.game-state :as state]
    [gelatin.controls.keys :as k]
    [gelatin.controls.movement :as movement]
    [cljs.spec.alpha :as s]))

(defn execute-interaction
  [targeting? _ db]
  [true (if targeting?
          (assoc-in db [:player :ap] 0)
          (-> db
              (assoc-in [:player :target-mode?] true)
              (assoc-in [:player :target-pos] (get-in db [:player ::p/pos]))))])

(defn execute-cancel
  [targeting? _ db]
  (if targeting?
    [true (assoc-in db [:player :target-mode?] false)]
    [false db]))

(defn execute-input
  "Given an intended input and the mode we're currently in,
  execute the FSM and give back an event-result."
  [input from mode with key-pressed db]
  {:pre [(s/assert #{:move :interact :cancel} input)
         (s/assert #{:from} from)
         (s/assert #{:targeting :move} mode)
         (s/assert #{:with} with)
         (s/assert k/input-key-names key-pressed)
         (s/assert ::state/state db)]
   :post [(s/assert ::state/event-result %)]}
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
  {:pre  [(s/assert ::state/event-result evt-res)]
   :post [(s/assert ::state/event-result %)]}
  (if success?
    (let [input (cond
                  (k/movement-key-names key-pressed) :move
                  (k/interaction-key-names key-pressed) :interact
                  (k/cancel-key-names key-pressed) :cancel)
          mode (if (get-in db [:player :target-mode?])
                   :targeting
                   :move)]
      (execute-input input :from mode :with key-pressed db))
    [false db]))


