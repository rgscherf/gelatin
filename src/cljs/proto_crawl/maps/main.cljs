(ns proto-crawl.maps.main
  (:require [proto-crawl.maps.tiles :as tiles]))

(def basic-maps
  {:feature ["00123DD67890"
             "0......#***0"
             "1####..#***1"
             "2..##...#**2"
             "3........##3"
             "D..www.....D"
             "D..wwww....D"
             "6.....b....6"
             "7wwbwwwww..7"
             "8...ww.....9"
             "9..........9"
             "00123DD67890"]
   :blank   ["001234567890"
             "0..........0"
             "1..........1"
             "2..........2"
             "3..........3"
             "4..........4"
             "5..........5"
             "6..........6"
             "7..........7"
             "8..........9"
             "9..........9"
             "001234567890"]})

(defn trimmed-levelstr->levelmap
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

(defn str-table->data-table
  [data-table]
  (->> data-table
       (map (fn [[k v]] {k (get (tiles/glyph-table) v)}))
       (reduce merge)))

(defn add-outer-walls
  [tilemap]
  (reduce (fn [acc x] (assoc acc x (get (tiles/glyph-table) "#")))
          tilemap
          (reduce concat
                  [(map #(vector -1 %) (range -1 11)) ;; left bar
                   (map #(vector 10 %) (range -1 11)) ;; right bar
                   (map #(vector % -1) (range -1 11)) ;; top bar
                   (map #(vector % 10) (range -1 11))]))) ;; bottom bar

(defn add-doors
  [tilemap]
  (reduce (fn [acc x] (assoc acc x (get (tiles/glyph-table) "d")))
          tilemap
          [[-1 4] [-1 5] [10 4] [10 5]]))

(defn str->level
  "Take a level defined by its visual representation and
  convert to data."
  [levelstr]
  (->> levelstr
       trim-sides
       (map trim-sides)
       trimmed-levelstr->levelmap
       str-table->data-table
       add-outer-walls
       add-doors))

(comment

  (count (str->level (get basic-maps :blank)))
  (str->level (get basic-maps :blank)))

(defn loader
  [map-key]
  {:pre [(not (nil? (get basic-maps map-key)))]}
  (str->level (get basic-maps map-key)))
