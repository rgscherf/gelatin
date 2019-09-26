(ns proto-crawl.rot-js.pathfinding
  (:require
    ["rot-js" :as rot]))

(def ^:private path
  (.-Path rot))

(defn path
  "Get the orthogonal path from origin to target.
  If there is no valid path, return :no-path
  Else, return a seq of [x y] steps, excluding origin but including target.
  'cb-passable?' param is a (fn [x y] ...) that returns passability info
  (true/false) for a given coordinates."
  [origin-x origin-y target-x target-y cb-passable?]
  (let [path (atom [])]
    (-> (new (-> path .-Dijkstra)
             target-x
             target-y
             cb-passable?
             (clj->js {"topology" 4}))
        (.compute origin-x
                  origin-y
                  (fn [x y] (swap! path conj [x y]))))
    (if (empty? @path)
        :no-path
        (rest @path))))





