(ns proto-crawl.re-frame.state
  "Initial game state."
  (:require
    [clojure.math.combinatorics :refer [cartesian-product]]
    [cljs.spec.alpha :as s]
    [proto-crawl.entities.main :as ents]
    [proto-crawl.cube.main :as cube]
    [proto-crawl.rot-js.rng :as rng]
    [proto-crawl.specs.pathable :as p]
    [proto-crawl.specs.player :as player]
    [proto-crawl.specs.game-state :as game]
    [proto-crawl.maps.main :as map-loader]))


(defn random-map-name
  []
  (rng/random-item (keys map-loader/basic-maps)))

(defn random-player-pos
  "Pick a random starting position for the player:
  - At the left side of the screen,
  - In the 4th or 5th row.
  This places the player on top of a door."
  []
  [(rng/random-item [-1])                                   ;; x
   (rng/random-item [4 5])])                                ;; y

(defn init-player
  []
  {:post [(s/assert ::player/player %)]}
  {:orientation  (cube/->orient 1 5 4)
   :cube         {1 "A"
                  2 "B"
                  3 "C"
                  4 "D"
                  5 "E"
                  6 "F"}
   ::p/passable? false
   ::p/type      :player
   ::p/pos       (random-player-pos)})

(defn add-entities
  [num-enemies level]
  (let [verboten-spawns [[-1 4] [-1 5] [0 3] [0 4] [0 5] [0 6]]
        free-spaces (->> (apply dissoc level verboten-spawns)
                         vals
                         (filter #(::p/passable? %))
                         shuffle)]
    (into #{} (map #(ents/rat (::p/pos %))
                   (take num-enemies free-spaces)))))

(defn init-game-state
  []
  {:post [(s/assert ::game/state %)]}
  (let [level (map-loader/loader (random-map-name))]
    {:entities    (add-entities 3 level)
     :current-map level
     :metadata    {:map-config    {}
                   :show-alt?     false
                   :viewport-size 12}
     :player      (init-player)}))

