(ns gelatin.maps.main
  (:require
    [gelatin.specs.pathable :as p]
    [gelatin.specs.renderable :as r]
    [cljs.spec.alpha :as s]
    [gelatin.maps.tiles :as tiles]))

[".........."
 ".........."
 ".........."
 ".........."
 ".........."
 ".........."
 ".........."
 ".........."
 ".........."
 ".........."]

(def basic-maps
  {:feature       ["**********"
                   "#######***"
                   ".......#**"
                   "........##"
                   "..www....."
                   "..wwww...."
                   ".....b...."
                   "wwbwwwww.."
                   "...ww....."
                   ".........."]
   :straight-shot ["wwwwwww###"
                   "wbbbwww###"
                   "wbbbbwwwww"
                   "wwwbbbbwww"
                   "..wbwwbb.."
                   "..bbwwbw.."
                   "wwwbbbbwww"
                   "wwwwwbbbbw"
                   "###wwwbbbw"
                   "###wwwwwww"]})

(defn level-str->glyph-positions
  "Take a coll of colls and turn it into a map of
  [col-idx row-idx] => contents-of-intersection"
  [trimmed]
  (reduce (fn [acc [row-idx row]]
            (merge acc
                   (reduce (fn [row-map [col-idx glyph]]
                             (merge row-map {[col-idx row-idx] glyph}))
                           {}
                           (map-indexed vector row))))
          {}
          (map-indexed vector trimmed)))

(defn trim-sides
  "Trim first and last items from a coll."
  [coll]
  (->> coll
       (drop 1)
       (drop-last)))

(defn glyph-positions->tile-positions
  [data-table]
  (->> data-table
       (map (fn [[k v]] {k (get (tiles/glyph-table) v)}))
       (reduce merge)))

(defn tile-positions->add-outer-walls
  [tilemap]
  (reduce (fn [acc x] (assoc acc x (get (tiles/glyph-table) "#")))
          tilemap
          (reduce concat
                  [(map #(vector -1 %) (range -1 11))       ;; left bar
                   (map #(vector 10 %) (range -1 11))       ;; right bar
                   (map #(vector % -1) (range -1 11))       ;; top bar
                   (map #(vector % 10) (range -1 11))])))   ;; bottom bar

(defn tile-positions->add-doors
  [tilemap]
  (reduce (fn [acc x] (assoc acc x (get (tiles/glyph-table) "d")))
          tilemap
          [[-1 4] [-1 5] [10 4] [10 5]]))

(defn tile-positions->add-pos-to-tile-maps
  "Add the tile's position to each tile in the tilemap."
  [tilemap]
  (reduce-kv (fn [acc k v]
               (assoc acc k (assoc v ::p/pos k)))
             {}
             tilemap))

(def tilespec (s/and ::r/renderable ::p/pathable))

(defn str->level
  "Take a level defined by its visual representation and
  convert to data."
  [level-str]
  {:post [#(s/assert tilespec %)]}
  (->> level-str
       level-str->glyph-positions
       glyph-positions->tile-positions
       tile-positions->add-outer-walls
       tile-positions->add-doors
       tile-positions->add-pos-to-tile-maps))


(defn loader
  [map-key]
  {:pre [(not (nil? (get basic-maps map-key)))]}
  (str->level (get basic-maps map-key)))
