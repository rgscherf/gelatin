(ns proto-crawl.re-frame.events
  "Re-Frame events"
  (:require
    [re-frame.core :as rf]
    [day8.re-frame.tracing :refer-macros [fn-traced]]
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
        (controls/take-move-input db key-pressed))
      ;; finally, if it wasn't a valid input, drop it.
      db)))
