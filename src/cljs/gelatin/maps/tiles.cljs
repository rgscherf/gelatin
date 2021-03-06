(ns gelatin.maps.tiles
  (:require [gelatin.rot-js.rng :as rng]
            [cljs.spec.alpha :as s]
            [gelatin.specs.pathable :as p]
            [gelatin.specs.renderable :as r]))


(defn single-tile
  [tile-coord]
  (identity tile-coord))

(defn random-of
  [& tile-coords]
  (rng/random-item tile-coords))

(def tile-template
  {:opacity      0.8
   ::r/animate?  false
   ::p/type      :terrain
   ::r/type      :stone
   ::p/opaque?   :true
   ::p/passable? false})


(defn glyph-table
  []
  {:post [(s/assert (s/map-of string? ::r/renderable) %)]}
  (reduce-kv (fn [acc k v]
               (assoc acc k (merge tile-template v)))
             {}
             {"w" {:mapmaker-glyph  "w"
                   ::r/tile-art     [0 1]
                   ::r/animate?     true
                   ::r/tile-art-alt [1 1]
                   ::r/type         :water
                   ::p/opaque?      false
                   ::r/image-url    "terrain.png"}
              "d" {:mapmaker-glyph "d"
                   ::p/passable?   true
                   ::r/type        :brick
                   ::p/opaque?     true
                   ::r/tile-art    [7 2]
                   ::r/image-url   "terrain.png"}
              "." {:opacity        0.4
                   :mapmaker-glyph "."
                   ::r/type        :stone
                   ::p/opaque?     false
                   ::p/passable?   true
                   ::r/tile-art    (random-of [10 0] [10 0] [10 0] [10 0] [10 0] [10 0] [10 0] [11 0] [12 0])
                   ::r/image-url   "terrain.png"}
              "#" {:mapmaker-glyph "#"
                   ::r/tile-art    (random-of [1 0] [2 0] [3 0] [4 0] [5 0] [6 0])
                   ::r/type        :brick
                   ::p/opaque?     true
                   ::r/image-url   "terrain.png"}
              "b" {:mapmaker-glyph "b"
                   ::p/passable?   true
                   ::r/tile-art    [7 0]
                   ::r/type        :stone
                   ::p/opaque?     false
                   ::r/image-url   "terrain.png"}
              "*" {:opacity         0.4
                   :mapmaker-glyph  "*"
                   ::r/tile-art     [2 1]
                   ::r/tile-art-alt [3 1]
                   ::r/type         :yellow
                   ::p/opaque?      false
                   ::r/animate?     true
                   ::r/image-url    "terrain.png"}}))
