(ns proto-crawl.controls.main
  (:require
    [clojure.set :as s]
    [proto-crawl.cube.main :as cube]
    [clojure.core.match :refer [match]]
    [proto-crawl.entities.utils :as entity-utils]))

(def move-up-names
  #{"ArrowUp" "k"})
(def move-down-names
  #{"ArrowDown" "j"})
(def move-left-names
  #{"ArrowLeft" "h"})
(def move-right-names
  #{"ArrowRight" "l"})

(def movement-key-names
  (s/union move-up-names
           move-down-names
           move-left-names
           move-right-names))

(defn player-can-pass-tile?
  [game-map candidate-pos]
  (match (get game-map candidate-pos)
         :floor true
         :wall false
         :void false
         :door true
         :water false))

(defn tile-free-for-player?
  "Can the player move into the candidate tile?
  Currently only checks that the candidate space is in the map.
  Will want to add collision detection for entities, obstacles, etc."
  [db candidate-vec]
  (let [game-map (get db :current-map)
        entities (get db :entities)]
    (and
      (not (entity-utils/entity-at? entities candidate-vec))
      (get game-map candidate-vec)
      (player-can-pass-tile? game-map candidate-vec))))

(defn keyname->move-map
  "Take a keyname (e.g. 'ArrowUp') and translate it to a movement map."
  [keyname]
  (cond (get move-up-names keyname) [0 -1]
        (get move-down-names keyname) [0 1]
        (get move-left-names keyname) [-1 0]
        (get move-right-names keyname) [1 0]))

(defn keyname->direction
  "Take a keyname (e.g. 'ArrowUp') and translate it to a movement kw.
  valid keywords are #{:north :south :east :west}"
  [keyname]
  (cond (get move-up-names keyname) :north
        (get move-down-names keyname) :south
        (get move-left-names keyname) :west
        (get move-right-names keyname) :east))

(defn take-move-input
  "Take a movement key name (defined in movement-key-names) and:
  1. update the db if it's a legal move, or
  2. return the db if it's an illegal move. "
  [db key-pressed]
  (let [[dx dy] (keyname->move-map key-pressed)
        direction           (keyname->direction key-pressed)
        current-orientation (get-in db [:player :orientation])
        [px py] (get-in db [:player :position])
        candidate-move      [(+ dx px) (+ dy py)]]
    (if (tile-free-for-player? db candidate-move)
      (-> db
        (assoc-in [:player :position] candidate-move)
        (assoc-in [:player :orientation] (cube/roll current-orientation direction)))
      db)))

