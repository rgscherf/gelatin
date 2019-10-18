(ns gelatin.controls.movement
  (:require [gelatin.entities.utils :as entity-utils]
            [gelatin.specs.pathable :as p]
            [gelatin.controls.keys :as k]
            [gelatin.cube.main :as cube]))

(defn player-can-pass-tile?
  [game-map candidate-pos]
  (::p/passable? (get game-map candidate-pos)))

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
  (cond (get k/move-up-names keyname) [0 -1]
        (get k/move-down-names keyname) [0 1]
        (get k/move-left-names keyname) [-1 0]
        (get k/move-right-names keyname) [1 0]))

(defn keyname->direction
  "Take a keyname (e.g. 'ArrowUp') and translate it to a movement kw.
  valid keywords are #{:north :south :east :west}"
  [keyname]
  (cond (get k/move-up-names keyname) :north
        (get k/move-down-names keyname) :south
        (get k/move-left-names keyname) :west
        (get k/move-right-names keyname) :east))

(defn execute-movement
  "Move the player in a given direction, if able.
  When movement is not possible, return the DB."
  [key-pressed db]
  (let [[dx dy] (keyname->move-map key-pressed)
        direction           (keyname->direction key-pressed)
        current-orientation (get-in db [:player :orientation])
        [px py] (get-in db [:player ::p/pos])
        candidate-move      [(+ dx px) (+ dy py)]]
    (if (tile-free-for-player? db candidate-move)
      [true (-> db
                (assoc-in [:player ::p/pos] candidate-move)
                (assoc-in [:player :orientation] (cube/roll current-orientation direction))
                (update-in [:player :ap] dec))]
      [false db])))

(defn execute-reticle-movement
  "Move the targeting reticle."
  [key-pressed db]
  (let [[dx dy] (keyname->move-map key-pressed)
        [rx ry] (get-in db [:player :target-pos])
        candidate-move [(+ dx rx) (+ dy ry)]]
    (if (get-in db [:current-map candidate-move])
      [true (assoc-in db [:player :target-pos] candidate-move)]
      [false db])))

