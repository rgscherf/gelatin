(ns gelatin.view.main
  (:require
    [cljs.core.match :refer-macros [match]]
    [gelatin.view.game-map :as game-map]
    [gelatin.view.sidebar :as sidebar]))


(defn game-area
  []
  [:div {:id    "game-area-container"
         :style {:display         "flex"
                 :justify-content "center"
                 :align-items     "center"}}
   [:div {:id    "game-area"
          :style {:display               "grid"
                  :height                "96vmin"
                  :width                 "96vmin"
                  :color                 "green"
                  :grid-template-columns "repeat(12, 1fr)"
                  :grid-template-rows    "repeat(12, 1fr)"
                  :margin                "0px"}}

    [game-map/play-area]
    [sidebar/sidebar]]])

(defn game-root
  []
  [game-area])
