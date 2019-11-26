(ns gelatin.re-frame.events
  "Re-Frame events"
  (:require
    [re-frame.core :as rf]
    [day8.re-frame.tracing :refer-macros [fn-traced]]
    [gelatin.entities.main :as entities]
    [gelatin.re-frame.state :as state]
    [gelatin.controls.keys :as control-keys]
    [gelatin.controls.main :as controls]))

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

(rf/reg-event-fx
  :key-down
  (fn [{:keys [db]} [_ key-pressed]]
    (if (get control-keys/input-key-names key-pressed)
      (let [[_ updated-with-move] (controls/take-player-input key-pressed [true db])]
        {:db       updated-with-move
         :dispatch (if (>= 0 (get-in updated-with-move [:player :ap]))
                       [:player-ended-turn]
                       [:no-op])})
      {:db db})))

(rf/reg-event-db
  :alt-timeout
  (fn [db _]
    (update-in db [:metadata :show-alt?] not)))

