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
  [player-orientation]
  [:fieldset
   {:style {:height "25%"
            :margin-bottom "1rem"}}
   [:legend "Cube Faces"]
   [:div {:style {:display         "flex"
                  :align-items     "center"
                  :justify-content "center"
                  :height          "80%"}}
    (let [{:keys [t s e b n w]} player-orientation]
      [:div {:id    "sidebar__roll-preview"
             :style {:display               "grid"
                     :grid-template-columns "repeat(4, 1fr)"
                     :grid-template-rows    "repeat(3, 1fr)"
                     :width                 "100%"
                     :height                "100%" #_"25.28%"}}
       [roll-preview-cell t 3 2]
       [roll-preview-cell s 3 1]
       [roll-preview-cell n 3 3]
       [roll-preview-cell w 4 2]
       [roll-preview-cell e 2 2]
       [roll-preview-cell b 1 2]
       ;[roll-preview-cell b 3 4]
       ;; divs that render borders showing how bottom faces match
       ;; on horizontal/vertical
       ;[roll-preview-cell :horizontal 2 4]
       ;[roll-preview-cell :vertical 1 3]
       #_[roll-preview-cell :corner 1 4]])]])


(def base-stat-pill-style
  {:flex      1
   :transform "skewX(-10deg)"
   :height    "1rem"
   :border    "1px solid white"
   :margin    "0 0.15rem"})

(def filled-stat-pill-style
  {:background-color "white"
   :border           "1px solid white"})

(defn stat-box
  [player legend-title max-field current-field]
  [:fieldset
   {:style {:margin-bottom "0.5rem"}}
   [:legend legend-title]
   [:div {:style {:display     "flex"
                  :align-items "center"}}
    (for [n (range (get player max-field))]
      (if (< n (get player current-field))
        ^{:key (str n)} [:div {:style (merge base-stat-pill-style filled-stat-pill-style)}]
        ^{:key (str n)} [:div {:style base-stat-pill-style} ""]))]])

(defn player-stats
  "This is the div containing high-level player stat info:
  HP, AP, and (in future) status."
  [player]
  [:div
   {:style {:margin-bottom "1.5rem"}}
   [stat-box player "Health" :max-hp :hp]
   [stat-box player "Action Points" :max-ap :ap]])

(defn message-box
  [messages]
  [:fieldset
   {:style {:border "none"
            :border-top "1px groove threedface"}}
   [:legend "Message Log"]
   [:div {:style {:font-size "0.7rem"}}
     (reverse
       (for [m messages]
         ^{:key (-> m :key str)} [:div (:message m)]))]])


(defn sidebar
  []
  (let [player      @(rf/subscribe [:player])
        messages    @(rf/subscribe [:messages])
        orientation @(rf/subscribe [:player-orientation])]
    [:div {:id    "game__sidebar"
           :style {:grid-column      "1 / span 4"
                   :grid-row         "1 / span 12"
                   :border           "1px solid white"
                   :color            "white"
                   :padding          "0.5rem"
                   :background-color "black"}}
     [roll-preview orientation]
     [player-stats player]
     [message-box messages]]))

