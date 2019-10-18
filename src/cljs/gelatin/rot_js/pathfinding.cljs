(ns gelatin.rot-js.pathfinding
  (:require
    [cljs.spec.alpha :as s]
    [cljs.core.match :refer [match]]
    [gelatin.specs.pathable :as p]
    [re-frame.db :as db]
    ["rot-js" :as rot]))

(def ^:private rot-path-lib
  (.-Path rot))

(defn transpose-coll-by
  "Reduce through a collection of maps, returning a map indexed by `key`
  in collection items."
  [key coll]
  {:pre  [(s/assert (or #{[nil] coll}
                        (s/coll-of map?))
                    coll)]
   :post [#(s/assert map? %)]}
  (if (#{[nil]} coll)
      nil
      (reduce (fn [acc x]
                (assoc acc (get x key) x))
              {}
              coll)))

(defn collision-map
  "Merge terrain, entities, and player down into one collision map.
  Pathfinding uses this collision map to find paths.
  Remember to get a new collision map every time a new entity acts."
  [player entities terrain]
  (merge terrain
         (transpose-coll-by ::p/pos entities)
         (transpose-coll-by ::p/pos [player])))

(defn remove-entity
  "Removes entity from collision calculations.
  If entity's position matches any ent in the entity seq, flip its
  ::p/passable? val to true."
  [ent entities]
  (into #{}
    (map #(if (= (:id %) (:id ent))
              (assoc % ::p/passable? true)
              %)
          entities)))

(defn db->collision-map
  "Turn a db into a collision map.
  Optionally takes kwargs for excluding player,
  excluding an entity (usually the entity currently acting),
  and/or excluding all terrain."
  [db & {:keys [exclude-player
                exclude-entity
                exclude-terrain]}]
  (let [player (if exclude-player nil (:player db))
        entities (if exclude-entity (remove-entity exclude-entity
                                                   (:entities db))
                                    (:entities db))
        terrain (if exclude-terrain nil (:current-map db))]
    (collision-map player entities terrain)))


;; If the goal for get-path can't be reached, it returns nil.
;; This means that 'blocked' enemies simply won't move toward player.
;; This is a rot-js limitation in the pathfinding lib.
;; I'll probably have to implement my own pathfinding, where ents will
;; move toward a space that's either the target or as close as possible to it.
;; here's a discussion about how to do that with a-star:
;; https://gamedev.stackexchange.com/questions/35253/tweaking-astar-to-find-closest-location-to-unreachable-destination

(defn get-path
  "Get the orthogonal path from origin to target.

  Returns a seq of [x y] steps to target, excluding origin but including target.
  If no path exists, returns nil.

  'cb-passable?' param is a (fn [x y] ...) that returns passability info
  (true/false) for a given coordinates."
  [[origin-x origin-y] [target-x target-y] cb-passable?]
  (let [path (atom [])]
    (-> (new (-> rot-path-lib .-AStar)
             target-x
             target-y
             cb-passable?
             (clj->js {"topology" 4}))
        (.compute origin-x
                  origin-y
                  (fn [x y] (swap! path conj [x y]))))
    (if (seq @path)
      (rest @path))))


(comment
  (def testmap
    {[0 0] true
     [0 1] false
     [0 2] true
     [1 0] false
     [1 1] true
     [1 2] true
     [2 0] true
     [2 1] true
     [2 2] true})
  (def test-pass
    (fn [x y]
      (get testmap [x y])))
  (get-path [0 0] [2 2] test-pass)
  (def collision (db->collision-map @db/app-db))
  (def collision (db->collision-map @db/app-db :exclude-entity {::p/pos [10 5]}))
  (get collision [10 5])
  (get collision [11 5])
  (get collision [-1 5])
  (get-path [11 5] [-1 5]
            (fn [x y]
              (let [tile      (get collision [x y])
                    passable? (::p/passable? tile)]
                passable?))))




