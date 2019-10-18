(ns gelatin.view.sidebar
  (:require
    [cljs.core.match :refer-macros [match]]
    [gelatin.view.game-map :as game-map]
    [re-frame.core :as rf]))

(defn roll-preview-cell
  [face-id coll row]
  [:div {:style {:grid-column     (str coll "/span 1")
                 :grid-row        (str row "/span 1")
                 :display         "flex"
                 :position        "relative"
                 :justify-content "center"
                 :align-items     "center"}}
   (if-let [face (get @(rf/subscribe [:cube]) face-id)]
     ;; guides showing actual cube faces
     [:div {:style {:margin          "0.5vmin"
                    :width           "90%"
                    :height          "90%"
                    :display         "flex"
                    :justify-content "center"
                    :align-items     "center"
                    :border-radius   "0.5vmin"
                    :border          "0.1vmin solid white"}}
      [game-map/draw-renderable face]]

     ;; guides showing how bottom faces match
     (let [border-style "0.1vmin solid grey"]
       [:div {:style (merge
                       {:width    "100%"
                        :height   "100%"
                        :position "absolute"}
                       (match face-id
                              :horizontal
                              {:bottom        "50%"
                               :border-bottom border-style}
                              :vertical
                              {:left        "50%"
                               :border-left border-style}
                              :corner
                              {:bottom        "50%"
                               :left          "50%"
                               :border-bottom border-style
                               :border-left   border-style}))}
        [:span " "]]))])


(defn roll-preview
  []
  (let [{:keys [t s e b n w]} @(rf/subscribe [:player-orientation])]
    [:div {:id    "sidebar__roll-preview"
           :style {:display               "grid"
                   :grid-template-columns "repeat(4, 1fr)"
                   :grid-template-rows    "repeat(4, 1fr)"
                   :height                "30%" #_"25.28%"}}
     [roll-preview-cell t 3 2]
     [roll-preview-cell n 3 1]
     [roll-preview-cell s 3 3]
     [roll-preview-cell e 4 2]
     [roll-preview-cell w 2 2]
     [roll-preview-cell b 1 2]
     [roll-preview-cell b 3 4]
     ;; divs that render borders showing how bottom faces match
     ;; on horizontal/vertical
     [roll-preview-cell :horizontal 2 4]
     [roll-preview-cell :vertical 1 3]
     [roll-preview-cell :corner 1 4]]))

(defn sidebar
  []
  [:div {:id    "game__sidebar"
         :style {:grid-column      "1 / span 4"
                 :grid-row         "1 / span 12"
                 :display          "flex"
                 :flex-direction   "column"
                 :border           "1px solid white"
                 :color            "white"
                 :background-color "black"}}
   [roll-preview]
   (let [player @(rf/subscribe [:player])]
     [:div [:div (str "HP: " (:hp player))]
           [:div (str "AP: " (:ap player))]
           [:div (str "Targeting? " (:target-mode? player))]
           [:div (str "Target pos " (:target-pos player))]])])

(sidebar)
