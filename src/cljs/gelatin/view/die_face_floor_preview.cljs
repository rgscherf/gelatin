(ns gelatin.view.die-face-floor-preview
  (:require [cljs.core.match :refer [match]]))

(defn show-face-preview?
  [tile-pos player]
  (contains? (get player :face-previews) tile-pos))

(defn preview-overlay-style
  [m]
  {:style (merge {:position :absolute}
                 m)})

(defn draw-face-preview
  [tile-pos player]
  [:div {:style {:position  "relative"
                 :height    "100%"
                 :font-size "0.5rem"
                 :width     "100%"}}
   (for [preview (get-in player [:face-previews tile-pos])]
     (if (:accessible? preview)
       (let [tile-face  (:face preview)
             tile-name  (-> player :cube (get tile-face) :name)
             short-name (apply str (take 2 tile-name))]
         (match (:type preview)
                :single [:div
                         (preview-overlay-style {:top "50%" :left "50%" :font-size "1rem"})
                         short-name]
                :from-south [:div
                             (preview-overlay-style {:bottom "0%" :left "50%"})
                             short-name]
                :from-north [:div
                             (preview-overlay-style {:top "0%" :left "50%"})
                             short-name]
                :from-east [:div
                            (preview-overlay-style {:right "0%" :top "50%"})
                            short-name]
                :from-west [:div
                            (preview-overlay-style {:left "0%" :top "50%"})
                            short-name]
                :else [:div ""]))))])