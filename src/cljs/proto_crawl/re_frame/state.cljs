(ns proto-crawl.re-frame.state
  "Initial game state."
  (:require
    [clojure.math.combinatorics :refer [cartesian-product]]
    [proto-crawl.entities.main :as ents]
    [proto-crawl.cube.main :as cube]
    [proto-crawl.maps.main :as map-loader]))


(defn init-game-state
  []
  {:entities    [(ents/cleaner-bot)]
   :current-map (map-loader/loader :feature)
   :metadata    {:map-config    {}
                 :viewport-size 12}
   :player      {:orientation (cube/->orient 1 5 4)
                 :cube        {1 "A"
                               2 "B"
                               3 "C"
                               4 "D"
                               5 "E"
                               6 "F"}
                 :position    [0 0]}})
