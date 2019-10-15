(ns proto-crawl.main
  (:require
    [reagent.core :as r]
    [re-frame.core :as rf]
    [expound.alpha :as expound]
    [cljs.spec.alpha :as spec]
    [proto-crawl.view.main :as main-view]
    [proto-crawl.re-frame.events]
    [proto-crawl.re-frame.subs]
    [proto-crawl.re-frame.state :as game-state]))

(spec/check-asserts true)
(set! spec/*explain-out* expound/printer)

(rf/reg-event-db
  :init-game
  (fn [_]
    (game-state/init-game-state)))

(defonce add-key-listener? (r/atom true))

(defn on-game-keydown
  [key-event]
  (rf/dispatch [:key-down (.-key key-event)]))

(defn on-alt-timeout
  []
  (rf/dispatch [:alt-timeout]))

(defn add-global-event-listeners
  []
  (.setInterval js/window on-alt-timeout 750)
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









