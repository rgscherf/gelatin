(ns proto-crawl.re-frame.events
  "Re-Frame events"
  (:require
    [re-frame.core :as rf]
    [day8.re-frame.tracing :refer-macros [fn-traced]]
    [proto-crawl.entities.main :as entities]
    [proto-crawl.controls.main :as controls]))

(rf/reg-event-db
  :player-ended-turn
  (fn-traced [db _]
    db))

(rf/reg-event-db
  :key-down
  (fn-traced [db [_ key-pressed]]
    (or
      ;; check to see if we have movement input
      (if (get controls/movement-key-names key-pressed)
        (->> [true db]
             (controls/take-move-input key-pressed)
             entities/move-entities
             second))
      ;; finally, if it wasn't a valid input, drop it.
      db)))

(rf/reg-event-db
  :alt-timeout
  (fn-traced [db _]
    (update-in db [:metadata :show-alt?] not)))

