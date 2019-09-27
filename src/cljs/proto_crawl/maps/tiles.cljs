(ns proto-crawl.maps.tiles
  (:require [proto-crawl.rot-js.rng :as rng]))


(defn single-tile
  [tile-coord]
  (identity tile-coord))

(defn random-of
  [& tile-coords]
  (rng/random-item tile-coords))

(def tile-template
  {:opacity 0.8
   :animate? false
   :player-passable? false})

(defn glyph-table
  []
  (reduce-kv (fn [acc k v]
               (assoc acc k (merge tile-template v)))
             {}
             {"w" {:tile-art [0 1]
                   :animate? true
                   :tile-art-alt [1 1]
                   :image-url "../resources/terrain.png"
                   :mapmaker-glyph "w"
                   :type :water}
              "d" {:tile-art [7 2]
                   :image-url "../resources/terrain.png"
                   :mapmaker-glyph "d"
                   :type :door
                   :player-passable? true}
              "." {:tile-art (random-of [10 0] [10 0] [10 0] [10 0] [10 0] [10 0] [10 0] [11 0] [12 0])
                   :image-url "../resources/terrain.png"
                   :opacity 0.4
                   :mapmaker-glyph "."
                   :type :floor
                   :player-passable? true}
              "#" {:tile-art (random-of [1 0] [2 0] [3 0] [4 0] [5 0] [6 0])
                   :image-url "../resources/terrain.png"
                   :mapmaker-glyph "#"
                   :type :wall}
              "b" {:tile-art [7 0]
                   :image-url "../resources/terrain.png"
                   :mapmaker-glyph "b"
                   :type :bridge
                   :player-passable? true}
              "*" {:tile-art [2 1]
                   :tile-art-alt [3 1]
                   :opacity 0.4
                   :animate? true
                   :image-url "../resources/terrain.png"
                   :mapmaker-glyph "*"
                   :type :void}}))
