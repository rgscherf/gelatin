(ns gelatin.view.die-face-floor-preview
  (:require [cljs.core.match :refer [match]]))

(defn show-face-preview?
  [tile-pos player]
  (contains? (get player :face-previews) tile-pos))

(defn preview-overlay-style
  [m]
  {:style (merge {:position :absolute}
                 m)})

(def preview-container-style
  {:display       :grid
   :grid-template "1fr 1fr 1fr / 1fr 1fr 1fr"
   :place-items   "center"
   :height        "100%"
   :width         "100%"
   :opacity       "0.5"})

(defn preview-pos
  [pos]
  (let [single-area {:grid-area "2 / 2 / span 1 / span 1"
                     :height    "250%"
                     :width     "250%"}
        single-base {:height "135%"
                     :width  "135%"}
        from-n      (merge single-base {:grid-area  "1 / 2 / span 1 / span 1"
                                        :place-self "start center"})
        from-s      (merge single-base {:grid-area  "3 / 2 / span 1 / span 1"
                                        :place-self "end center"})
        from-e      (merge single-base {:grid-area  "2 / 3 / span 1 / span 1"
                                        :place-self "center end"})
        from-w      (merge single-base {:grid-area  "2 / 1 / span 1 / span 1"
                                        :place-self "center start"})]
    (match pos
           :single single-area
           :from-north from-n
           :from-south from-s
           :from-east from-e
           :from-west from-w)))



(defn wrap-preview-with-grid-position
  [preview-type draw-fn player tile-face html-key]
  ^{:key html-key}
  [:div
   {:style (preview-pos preview-type)}
   [draw-fn (get-in player [:cube tile-face]) {:style {:background "#111"}}]])

(defn draw-face-preview
  "For a given position, draw all the face previews at that position.
  The 'root' div covers 100% of the drawable surface, and is a grid.

  'Single' sized previews (ie can be reached with 1AP remaining)
    Are drawn large at the middle of the grid.
  'From-X' sized previews (moves that would exhaust AP)
    Are drawn small, at an appropriate grid position showing where the player
    would be moving from.

  The draw-fn argument is the same fn used in the main view to draw the
  player on the screen. We can manipulate parent div(s) to change the
  appearance of this element, for example to make it appear smaller,
  less opaque, etc."
  [tile-pos player draw-fn]
  [:div {:style preview-container-style}
   (for [preview (get-in player [:face-previews tile-pos])]
     (if (:accessible? preview)
       (let [tile-face  (:face preview)
             tile-name  (-> player :cube (get tile-face) :name)
             html-key   (str tile-pos "-" tile-face "-" tile-name)]
         (wrap-preview-with-grid-position (:type preview)
                                          draw-fn
                                          player
                                          tile-face
                                          html-key))))])
