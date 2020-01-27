(ns gelatin.view.game-map
  (:require
    [gelatin.style.main :as style]
    [cljs.core.match :refer [match]]
    [gelatin.view.die-face-floor-preview :as face-preview]
    [gelatin.specs.renderable :as renderable]
    [cljs.core.match :refer-macros [match]]
    [gelatin.specs.pathable :as p]
    [clojure.math.combinatorics :as comb]
    [re-frame.core :as rf]
    [gelatin.rot-js.pathfinding :as pathfinding]))

(def resource-location "../resources/")

(def palette
  {:water  "brightness(0) saturate(100%) invert(23%) sepia(72%) saturate(3058%) hue-rotate(236deg) brightness(98%) contrast(90%)"
   :green  "brightness(0) saturate(100%) invert(74%) sepia(66%) saturate(2096%) hue-rotate(83deg) brightness(94%) contrast(112%)"
   :yellow "brightness(0) saturate(100%) invert(71%) sepia(96%) saturate(268%) hue-rotate(348deg) brightness(103%) contrast(101%)"
   :white  "brightness(0) saturate(100%) invert(100%) sepia(37%) saturate(379%) hue-rotate(256deg) brightness(115%) contrast(90%)"
   :stone  "brightness(0) saturate(100%) invert(28%) sepia(10%) saturate(0%) hue-rotate(238deg) brightness(100%) contrast(86%)"
   :brick  "brightness(0) saturate(100%) invert(21%) sepia(75%) saturate(1918%) hue-rotate(349deg) brightness(95%) contrast(87%)"
   :red    "brightness(0) saturate(100%) invert(19%) sepia(87%) saturate(6238%) hue-rotate(354deg) brightness(98%) contrast(116%)"})

(def image-measurements
  {"terrain.png"            {:xrows           16
                             :yrows           11
                             ;; background-size should = number of tiles on x axis
                             ;; used to make sprite sizes responsive
                             :background-size 16}
   "Interface_Skills_B.png" {:xrows           6
                             :yrows           6
                             :background-size 6}
   "Monsters.png"           {:xrows           19
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

(defn draw-renderable
  "Draw a renderable tile. Handles animating between normal and alt art."
  [thing]
  (let [show-alt?     false #_@(rf/subscribe [:show-alt?])
        animate?      (::renderable/animate? thing)
        art           (::renderable/tile-art thing)
        alt           (::renderable/tile-art-alt thing)
        image-to-draw (if show-alt?
                        (if animate? alt art)
                        art)]
    [:div
     {:style
      {:width               "100%"
       :height              "100%"
       :image-rendering     "pixelated"
       :position            "absolute"
       :background-repeat   "no-repeat"
       :background-position (tile-coords->pct-coords thing image-to-draw)
       :opacity             (str (:opacity thing))
       :background-size     (str "calc(100% *" (tilenum thing :background-size) ")")
       :filter              (get palette (::renderable/type thing))
       :background-image    (str "url("
                                 (str resource-location
                                      (get thing ::renderable/image-url))
                                 ")")}}
     ""]))

(defn entity-bottom-bar
  [thing]
  [:div {:style {:font-size       "2.5vmin"
                 :z-index         "10"
                 :align-items     "baseline"
                 :justify-content "space-around"
                 :display         "flex"}}
   [:div {:style {:margin-right "0.5vmin"}}
    (:identifier thing)]
   [:div {:style {:position "relative"
                  :width    "2vmin"
                  :height   "1vmin"}}
    [:div {:style {:position         "absolute"
                   :width            "100%"
                   :height           "100%"
                   :background-color "red"}}]
    [:div {:style {:position         "absolute"
                   :height           "100%"
                   :width            (str (* 100 (/ (:hp thing) 3)) "%")
                   :background-color "green"}}]]])

(defn draw-entity
  [thing]
  [:div {:style {:display         "flex"
                 :height          "100%"
                 :width           "100%"
                 :justify-content "center"
                 :align-items     "center"
                 :flex-direction  "column"}}
   [:div {:style {:position "relative"
                  :width    "95%"
                  :height   "62.7%"}}
    [draw-renderable thing]]
   [entity-bottom-bar thing]])


(defn draw-player
  []
  (let [current-cube @(rf/subscribe [:cube])
        player       @(rf/subscribe [:player])]
    [:div {:style {:display         "flex"
                   :height          "100%"
                   :width           "100%"
                   :justify-content "center"
                   :align-items     "center"
                   :flex-direction  "column"}}
     [:div {:style {:position      "relative"
                    :width         "95%"
                    :border        "1px solid white"
                    :border-radius "0.25rem"
                    :height        "62.7%"}}
      [draw-renderable (get current-cube
                            (:t @(rf/subscribe [:player-orientation])))]]
     #_[:div
        {:style {:font-size "1.7vmin"}}
        (str "HP " (:hp player))]]))

(defn single-tile
  [[y x]]
  ^{:key (str x ", " y)}
  (let [current-map  @(rf/subscribe [:current-map])
        entities     @(rf/subscribe [:entities])
        player       @(rf/subscribe [:player])
        terrain-tile (get current-map [x y])
        collision    (pathfinding/collision-map player entities current-map)]
    [:div {:style {:max-height       "100%"
                   :font-size        "2vmin"
                   :display          "flex"
                   :align-items      "center"
                   :justify-content  "center"
                   :background-color "black"}}
     [:div {:style {:height          "100%"
                    :display         "flex"
                    :align-items     "center"
                    :justify-content "center"
                    :position        "relative"
                    :outline         (if (:target-mode? player)
                                       (cond (= [x y] (:target-pos player))
                                             "dashed red 3px"
                                             (let [targets (:targeted-squares player)]
                                               (and targets
                                                    (get targets [x y])))
                                             "dashed green 1px"
                                             :else nil))
                    :width           "100%"}}
      [draw-renderable terrain-tile]
      (match (::p/type (get collision [x y]))
             :player [draw-player]
             :entity [draw-entity (get collision [x y])]
             :else (if (face-preview/show-face-preview? [x y] player)
                     [face-preview/draw-face-preview [x y] player]))]]))

(comment
  (let [db @re-frame.db/app-db]
    (-> db :player :face-previews))
  (contains? {:hello :world :bye :butt} :butt))

;;[:div (:name (get cube (get player :face-previews)))]
(defn play-area
  []
  (let [map-size @(rf/subscribe [:viewport])]
    (into []
          (concat
            [:div {:id    "grid_container"
                   :style (style/grid-container map-size)}]
            (map single-tile (all-coords map-size))))))
