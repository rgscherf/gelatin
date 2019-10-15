(ns proto-crawl.view.main
  (:require
    [clojure.math.combinatorics :as comb]
    [cljs.core.match :refer-macros [match]]
    [cljs.spec.alpha :as s]
    [re-frame.core :as rf]
    [proto-crawl.style.main :as style]
    [proto-crawl.specs.renderable :as renderable]
    [proto-crawl.specs.pathable :as p]
    [proto-crawl.entities.utils :as entity-utils]))

(def resource-location "../resources/")
(def image-measurements
  {"terrain.png"  {:xrows           16
                   :yrows           11
                   ;; background-size should = number of tiles on x axis
                   ;; used to make sprite sizes responsive
                   :background-size 16}
   "Monsters.png" {:xrows           19
                   :yrows           26
                   :background-size 19}})

(defn tilenum
  "Retrieve metadata about a given background image so sprites from that
  image can be displayed and sized."
  [tile-obj key]
  (let [image-name (get tile-obj ::renderable/image-url)]
    (get-in image-measurements [image-name key])))


(defn all-coords
  [map-size]
  (comb/cartesian-product (map dec (range map-size))
                          (map dec (range map-size))))

(defn bottom-bar
  []
  [:div {:id    "bottom-ui-panel"
         :style {:background  "black"
                 :display     "flex"
                 :grid-column "1 / span 4"
                 :height      "100%"}}
   [:div {:style {:display "flex"
                  :width   "100%"
                  :height  "100%"}}
    [:div "hello"]
    #_(if-let [tooltip-ent @(rf/subscribe [:entity-tooltip])]
        [entity-tooltip tooltip-ent])]])

(s/def ::tile-contents #(not= nil %))
(defn quick-tile-contents
  [current-map entities player-pos tile-pos]
  (cond (= player-pos tile-pos) :player
        (entity-utils/entity-at entities tile-pos) :monster
        :else (get current-map tile-pos)))

(defn tile-coords->pixel-coords
  [x y]
  (str "-" (* x 16) "px -" (* y 24) "px"))


(defn tile-coords->pct-coords
  "Convert coordinates of sprite sheet tiles (e.g. 0th from left, 2nd from top)
  To percentage units, e.g. begin rendering from left 0% and top 20% of image.
  This calculation is based on the # rows/columns of sprites in the image,
  so we also need metadata about the image file (given by the tilenum map)."
  [tile [x y]]
  (let [xmult (/ 100 (dec (tilenum tile :xrows)))
        ymult (/ 100 (dec (tilenum tile :yrows)))]
    (str (* x xmult)
         "% "
         (* y ymult)
         "%")))

(* 6.67 16)
(/ 100 16)

(defn mk-terrain
  "Draw the terrain image. Handles animating between normal and alt art."
  [tile]
  (let [show-alt?     @(rf/subscribe [:show-alt?])
        animate?      (::renderable/animate? tile)
        art           (::renderable/tile-art tile)
        alt           (::renderable/tile-art-alt tile)
        image-to-draw (if show-alt?
                        (if animate? alt art)
                        art)]
    [:div {:style {:width               "100%"
                   :height              "100%"
                   :background-position (tile-coords->pct-coords tile image-to-draw)
                   :image-rendering     "pixelated"
                   :opacity             (str (:opacity tile))
                   :background-size     (str "calc(100% *"
                                             (tilenum tile :background-size)
                                             ")")
                   :background-color    "black"
                   :background-image    (str "url("
                                             (str resource-location
                                                  (get tile ::renderable/image-url))
                                             ")")
                   :background-repeat   "no-repeat"}}]))


(defn single-tile
  [[y x]]
  ^{:key (str x ", " y)}
  (let [current-map   @(rf/subscribe [:current-map])
        current-cube  @(rf/subscribe [:cube])
        entities      @(rf/subscribe [:entities])
        tile-contents (quick-tile-contents current-map
                                           entities
                                           (::p/pos @(rf/subscribe [:player]))
                                           [x y])]
    [:div {:style {:max-height      "100%"
                   :font-size       "2vmin"
                   :display         "flex"
                   :align-items     "center"
                   :justify-content "center"
                   :background      (match tile-contents
                                           :player "#111111"
                                           :nothing "blue"
                                           :else "black")}}
     [:div {:style {:height          "100%"
                    :display         "flex"
                    :align-items     "center"
                    :justify-content "center"
                    :width           "100%"}}
      (match tile-contents
             :player (get current-cube
                          (:t @(rf/subscribe [:player-orientation])))
             :monster (let [ent (entity-utils/entity-at entities [x y])
                            g   (:glyph ent)
                            i   (:identifier ent)]
                        (mk-terrain ent)
                        #_(str g "(" i ")"))
             :else (mk-terrain tile-contents))]]))

(defn play-area
  []
  (let [map-size @(rf/subscribe [:viewport])]
    (into []
          (concat
            [:div {:id    "grid_container"
                   :style (style/grid-container map-size)}]
            (map single-tile (all-coords map-size))))))


(defn roll-preview-cell
  [face-id coll row]
  [:div {:style {:grid-column     (str coll "/span 1")
                 :grid-row        (str row "/span 1")
                 :display         "flex"
                 :position        "relative"
                 :justify-content "center"
                 :align-items     "center"}}
   (if-let [face (get @(rf/subscribe [:cube])
                      face-id)]
     ;; guides showing actual cube faces
     [:div {:style {:margin          "0.5vmin"
                    :width           "90%"
                    :height          "90%"
                    :display         "flex"
                    :justify-content "center"
                    :align-items     "center"
                    :border-radius   "0.5vmin"
                    :border          "0.1vmin solid white"}}
      [:div
       (str face)]]

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
   [:div "hi"]])

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

    [play-area]
    [sidebar]]])

(defn game-root
  []
  [game-area])

