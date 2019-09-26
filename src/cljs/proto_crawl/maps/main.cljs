(ns proto-crawl.maps.main)

(def glyph-table
  {"." :floor
   "#" :wall
   "*" :void
   "w" :water})

(def basic-maps
  {:feature ["00123DD67890"
             "0......####0"
             "1####..####1"
             "2..##...###2"
             "3........##3"
             "D..www.....D"
             "D..wwww....D"
             "6.....w....6"
             "7wwwwwwww..7"
             "8...##.....9"
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
       (map (fn [[k v]] {k (get glyph-table v)}))
       (reduce merge)))


(defn add-doors
  [glyph-map]
  (assoc glyph-map
         [-1 4] :door
         [-1 5] :door
         [10 4] :door
         [10 5] :door
         [4 -1] :door
         [5 -1] :door
         [4 10] :door
         [5 10] :door))

(defn str->level
  "Take a level defined by its visual representation and
  convert to data."
  [levelstr]
  (->> levelstr
       trim-sides
       (map trim-sides)
       trimmed-levelstr->levelmap
       str-table->data-table
       add-doors))

(defn loader
  [map-key]
  {:pre [(not (nil? (get basic-maps map-key)))]}
  (str->level (get basic-maps map-key)))



(loader :feature)
