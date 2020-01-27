(ns gelatin.re-frame.events
  "Re-Frame events"
  (:require
    [re-frame.core :as rf]
    [day8.re-frame.tracing :refer-macros [fn-traced]]
    [gelatin.entities.main :as entities]
    [gelatin.re-frame.state :as state]
    [gelatin.specs.pathable :as p]
    [gelatin.controls.keys :as control-keys]
    [gelatin.controls.movement :as movement]
    [gelatin.controls.main :as controls]
    [gelatin.re-frame.state :as game-state]))

(rf/reg-event-fx
  :init-game
  (fn [_ _]
    {:db (game-state/init-game-state)
     :dispatch [:floor-face-previews]}))


(rf/reg-event-db
  :no-op
  (fn [db _]
    db))

(rf/reg-event-db
  :player-ended-turn
  (fn [db _]
    (->> [true (state/validate-db db)]
         entities/move-entities
         state/reset-player-turn
         second)))

(rf/reg-event-db
  :floor-face-previews
  (fn [db _]
    (let [player (:player db)]
      (assoc-in db
                [:player :face-previews]
                (movement/tile-previews (::p/pos player)
                                        (:orientation player)
                                        (:ap player)
                                        db)))))


(rf/reg-event-fx
  :key-down
  (fn [{:keys [db]} [_ key-pressed]]
    (cond (get control-keys/input-key-names key-pressed)
          (let [[_ updated-with-move] (controls/take-player-input key-pressed [true db])]
            {:db       updated-with-move
             :dispatch-n (if (>= 0 (get-in updated-with-move [:player :ap]))
                             (list [:player-ended-turn] [:floor-face-previews])
                             (list [:floor-face-previews]))})

          (= key-pressed "r") {:db db
                               :dispatch [:init-game]}
          :else {:db db})))

(rf/reg-event-db
  :alt-timeout
  (fn [db _]
    (update-in db [:metadata :show-alt?] not)))

