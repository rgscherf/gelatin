(ns gelatin.main
  (:require
    [reagent.core :as r]
    [re-frame.core :as rf]
    [expound.alpha :as expound]
    [cljs.spec.alpha :as spec]
    [gelatin.view.main :as main-view]
    [gelatin.re-frame.events]
    [gelatin.re-frame.subs]))

(spec/check-asserts true)
(set! spec/*explain-out* expound/printer)

(defonce add-key-listener? (r/atom true))

(defn on-game-keydown
  [key-event]
  (rf/dispatch [:key-down (.-key key-event)]))

(defn on-alt-timeout
  []
  (rf/dispatch [:alt-timeout]))

(defn add-global-event-listeners
  []
  (.setInterval js/window on-alt-timeout 800)
  (.addEventListener js/document "keydown" on-game-keydown))

(defn main
  []

  ;; First, init the game.
  (rf/dispatch-sync [:init-game])

  ;; Add event listeners...
  (if @add-key-listener?
    (do (add-global-event-listeners)
        (reset! add-key-listener? false)))

  ;; Then render the main scene.
  (r/render
    [main-view/game-root]
    (.getElementById js/document "root")))









