(ns proto-crawl.controls.main
  "The player uses a set of INPUT KEYS to manipulate the game world.
  MOVEMENT KEYS move the player or targeting reticule (depending on targeting? flag).
  INTERACTION KEYS switch between moving and targeting, select menu options, etc."
  (:require
    [clojure.set :as set]
    [proto-crawl.cube.main :as cube]
    [clojure.core.match :refer [match]]
    [proto-crawl.specs.pathable :as p]
    [proto-crawl.specs.game-state :as state]
    [proto-crawl.entities.utils :as entity-utils]
    [cljs.spec.alpha :as s]))

(def move-up-names
  #{"ArrowUp" "k"})
(def move-down-names
  #{"ArrowDown" "j"})
(def move-left-names
  #{"ArrowLeft" "h"})
(def move-right-names
  #{"ArrowRight" "l"})
(def interaction-names
  #{" "})

(def movement-key-names
  (set/union move-up-names
             move-down-names
             move-left-names
             move-right-names))

(def interaction-key-names
  interaction-names)

(def input-key-names
  (set/union movement-key-names
             interaction-key-names))


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

(defn execute-movement
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

(defn execute-interaction
  [_ db]
  [true (if (get-in db [:player :target-mode?])
          (assoc-in db [:player :target-mode?] false)
          (-> db
              (assoc-in [:player :target-mode?] true)
              (assoc-in [:player :target-pos] (get-in db [:player ::p/pos]))))])

(defn execute-reticle-movement
  [key-pressed db]
  (let [[dx dy] (keyname->move-map key-pressed)
        [rx ry] (get-in db [:player :target-pos])
        candidate-move [(+ dx rx) (+ dy ry)]]
    (if (get-in db [:current-map candidate-move])
      [true (assoc-in db [:player :target-pos] candidate-move)]
      [false db])))

(defn take-player-input
  "Take an interaction key name (defined in movement-key-names) and:
  1. update the db if it's a legal move, or
  2. return the db if it's an illegal move. "
  [key-pressed [success? db :as evt-res]]
  {:pre  [(s/assert ::state/event-result evt-res)]
   :post [(s/assert ::state/event-result %)]}
  (if success?
    (cond
      ;; if we are targeting and trying to move reticle
      (and (movement-key-names key-pressed)
           (get-in db [:player :target-mode?]))
      (execute-reticle-movement key-pressed db)
      ;; else if we are NOT targeting and trying to move
      (movement-key-names key-pressed)
      (execute-movement key-pressed db)
      ;; else if we're toggling interaction
      (interaction-key-names key-pressed)
      (execute-interaction key-pressed db)
      ;; else just return
      :else
      [false db])
    [false db]))

