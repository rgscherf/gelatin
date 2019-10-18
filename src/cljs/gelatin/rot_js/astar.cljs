(ns gelatin.rot-js.astar
  (:require [tailrecursion.priority-map :as priority]
            [cljs.spec.alpha :as s]))

(s/def ::pathfinding-result (s/keys :req-un [::result ::path]))
(s/def ::result #{:success :nearest :no-move :target-adjacent})
(s/def ::path (s/coll-of (s/tuple int? int?)))

(defn neighbors
  [[x y]]
  [[(inc x) y]
   [(dec x) y]
   [x (inc y)]
   [x (dec y)]])

(defn contents
  "Only used for testing."
  [level [x y]]
  (get (get level y) x))

(defn manhattan-distance
  [[ax ay] [bx by]]
  (+ (.abs js/Math (- ax bx))
     (.abs js/Math (- ay by))))


(defn evaluate-neighbors
  [current-node neighbors frontier came-from cost-so-far goal-node]
  (reduce (fn [[acc-frontier acc-came-from acc-cost-so-far] node]
            (let [new-cost  (inc (get acc-cost-so-far current-node))
                  manhattan (manhattan-distance current-node goal-node)
                  heuristic (+ new-cost manhattan)]
              (if (or (nil? (get acc-cost-so-far node))
                      (< new-cost (get acc-cost-so-far node)))
                [(assoc acc-frontier node heuristic)
                 (assoc acc-came-from node {:prev-node    current-node
                                            :est-distance heuristic})
                 (assoc acc-cost-so-far node new-cost)]
                [acc-frontier acc-came-from acc-cost-so-far])))
          [frontier came-from cost-so-far]
          neighbors))

(defn path-graph
  "For a given start and end node, get the backtrack graph of
  pos => tile-moved-from.
   Internally, we use three vars to track the path graph:
   - frontier, a priority map of which nodes need to be evaluated
   (with priority to nodes more likely to be on the correct path)
   - came-from, a map of the path we are walking. Keys are coords,
   vals are a map of {:prev-node => coord, :est-distance(to goal) int}
   - cost-so-far, a map of {coord => int} showing the cost of
   moving to a given node from start."
  [start-node end-node pathable-cb?]
  (loop [frontier    (priority/priority-map start-node 0)
         came-from   {start-node {:prev-node    :start
                                  :est-distance (manhattan-distance start-node
                                                                    end-node)}}
         cost-so-far {start-node 0}]
    (if (or (empty? frontier)
            (= end-node (-> frontier peek first)))
      came-from
      (let [current             (-> frontier peek first)
            reachable-neighbors (filter pathable-cb? (neighbors current))
            [new-front new-came-from new-cost-so-far] (evaluate-neighbors current
                                                                          reachable-neighbors
                                                                          (pop frontier)
                                                                          came-from
                                                                          cost-so-far
                                                                          end-node)]
        (recur new-front new-came-from new-cost-so-far)))))

(defn graph->pathseq
  "Turn a graph into the sequence of steps from :start to end-node,
  backtracking from end-node."
  [graph end-node]
  (loop [search-node end-node
         path        [end-node]]
    (let [{:keys [prev-node]} (get graph search-node)]
      (if (= :start prev-node)
        (reverse path)
        (recur prev-node (conj path prev-node))))))


(defn pathfind
  "For a given start and end node,
  get the seq of [x y] coords from start to end.
  Pathable-cb will be passed `level` and a node position.
  Return true if that node is passable, false otherwise."
  [start-node end-node pathable-cb?]
  {:post [(s/assert ::pathfinding-result %)]}
  (let [graph (path-graph start-node end-node pathable-cb?)
        path  (if (get graph end-node)
                (graph->pathseq graph end-node)
                (graph->pathseq graph (first (apply min-key :est-distance graph))))]
    (cond
      (= 1 (count path))
      {:result :no-move :path [start-node]}
      (= 2 (count path))                                    ;; next move is target
      {:result :target-adjacent :path [start-node end-node]}
      (get graph end-node)
      {:result :success :path path}
      :else
      {:result :nearest :path path})))

(first (first (apply max-key :hello [{:hello 1} {:hello 0} {:hello 1}])))
(def testgraph
  {[6 8] {:prev-node [7 8], :est-distance 12}, [6 9] {:prev-node [6 8], :est-distance 12}, [5 9] {:prev-node [5 8], :est-distance 12}, [0 8] {:prev-node [0 9], :est-distance 14}, [4 3] {:prev-node [5 3], :est-distance 16}, [0 5] {:prev-node [0 6], :est-distance 14}, [9 7] {:prev-node [9 8], :est-distance 16}, [5 3] {:prev-node [5 4], :est-distance 14}, [1 5] {:prev-node [1 6], :est-distance 14}, [4 6] {:prev-node [5 6], :est-distance 14}, [8 5] {:prev-node [8 6], :est-distance 14}, [7 9] {:prev-node [7 8], :est-distance 12}, [1 3] {:prev-node [1 4], :est-distance 14}, [5 6] {:prev-node [6 6], :est-distance 14}, [0 9] {:prev-node [1 9], :est-distance 14}, [9 6] {:prev-node [8 6], :est-distance 14}, [5 2] {:prev-node [5 3], :est-distance 16}, [-1 5] {:prev-node [0 5], :est-distance 14}, [2 9] {:prev-node [3 9], :est-distance 14}, [4 9] {:prev-node [5 9], :est-distance 14}, [2 7] {:prev-node [2 8], :est-distance 14}, [0 6] {:prev-node [1 6], :est-distance 14}, [8 8] {:prev-node [7 8], :est-distance 12}, [8 7] {:prev-node [8 8], :est-distance 14}, [9 5] {:prev-node [9 6], :est-distance 16}, [7 4] {:prev-node [7 5], :est-distance 14}, [8 4] {:prev-node [8 5], :est-distance 14}, [-1 4] {:prev-node [-1 5], :est-distance 16}, [5 4] {:prev-node [6 4], :est-distance 14}, [2 6] {:prev-node [2 7], :est-distance 14}, [9 9] {:prev-node [9 8], :est-distance 16}, [6 3] {:prev-node [6 4], :est-distance 14}, [8 6] {:prev-node [8 7], :est-distance 14}, [3 9] {:prev-node [4 9], :est-distance 14}, [6 6] {:prev-node [7 6], :est-distance 14}, [1 4] {:prev-node [1 5], :est-distance 14}, [1 8] {:prev-node [1 9], :est-distance 14}, [6 5] {:prev-node [6 6], :est-distance 14}, [1 9] {:prev-node [2 9], :est-distance 14}, [7 8] {:prev-node :start, :est-distance 11}, [7 5] {:prev-node [7 6], :est-distance 14}, [3 6] {:prev-node [4 6], :est-distance 14}, [5 8] {:prev-node [6 8], :est-distance 12}, [1 6] {:prev-node [2 6], :est-distance 14}, [9 8] {:prev-node [8 8], :est-distance 14}, [2 8] {:prev-node [2 9], :est-distance 14}, [8 9] {:prev-node [8 8], :est-distance 14}, [6 2] {:prev-node [6 3], :est-distance 16}, [6 4] {:prev-node [6 5], :est-distance 14}, [0 4] {:prev-node [0 5], :est-distance 14}, [7 6] {:prev-node [8 6], :est-distance 14}})

(first (apply max-key :est-distance testgraph))




(def testmap1
  [[1 1 1 1 1]
   [9 9 9 9 9]
   [1 1 9 1 1]
   [1 1 9 1 9]
   [1 9 9 9 9]
   [1 1 1 1 1]])

(def testmap2
  [[1 1 1 1 1 1 1 1 1 1 1 1]
   [9 9 9 9 1 1 1 1 1 1 1 1]
   [1 1 9 1 1 1 1 1 1 1 1 1]
   [1 1 9 1 9 1 1 1 1 1 1 1]
   [1 9 9 9 9 1 1 1 1 1 1 1]
   [1 9 9 9 9 1 1 1 1 1 1 1]
   [1 9 9 9 9 1 1 1 1 1 1 1]
   [1 9 9 9 9 1 1 1 1 1 1 1]
   [1 9 9 9 9 1 1 1 1 1 1 1]
   [1 1 1 1 1 1 1 1 1 1 1 1]])


(comment
  (def gg {[0 0] {:prev-node :start, :est-distance 3},
           [1 0] {:prev-node [0 0], :est-distance 4},
           [2 0] {:prev-node [1 0], :est-distance 4},
           [3 0] {:prev-node [2 0], :est-distance 6},
           [4 0] {:prev-node [3 0], :est-distance 8}})
  (def g (pathfind testmap1 [0 0] [1 2]))
  (contents testmap [0 1])
  (pathfind testmap1 #(and (not (nil? (contents %1 %2)))
                           (not (= 9 (contents %1 %2))))
            [0 0] [1 2])
  (pathfind testmap2 [0 0] [1 2]))

