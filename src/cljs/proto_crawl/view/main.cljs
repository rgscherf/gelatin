(ns proto-crawl.view.main
  (:require
    [cljs.core.match :refer-macros [match]]
    [proto-crawl.view.game-map :as game-map]
    [proto-crawl.view.sidebar :as sidebar]))


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
