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

(defn tile-previews
  "From a given player position, what are [pos] -> int-top-face
  mappings for the tiles that can be reached in one move?"
  [[x y] new-orientation db]
  (let [north       [x (dec y)]
        north-north [x (-> y dec dec)]
        south       [x (inc y)]
        south-south [x (-> y inc inc)]
        east        [(inc x) y]
        east-east   [(-> x inc inc) y]
        west        [(dec x) y]
        west-west   [(-> x dec dec) y]
        north-east  [(inc x) (dec y)]
        south-east  [(inc x) (inc y)]
        north-west  [(dec x) (dec y)]
        south-west  [(dec x) (inc y)]]
    {north       [{:type        :single
                   :accessible? (tile-free-for-player? db north)
                   :face        (:t (cube/roll new-orientation :north))}]
     north-north [{:type        :from-south
                   :accessible? (and (tile-free-for-player? db north)
                                     (tile-free-for-player? db north-north))
                   :face        (-> new-orientation (cube/roll :north) (cube/roll :north) :t)}]
     south       [{:type        :single
                   :accessible? (tile-free-for-player? db south)
                   :face        (:t (cube/roll new-orientation :south))}]
     south-south [{:type        :from-north
                   :accessible? (and (tile-free-for-player? db south)
                                     (tile-free-for-player? db south-south))
                   :face        (-> new-orientation (cube/roll :south) (cube/roll :south) :t)}]
     east        [{:type        :single
                   :accessible? (tile-free-for-player? db east)
                   :face        (:t (cube/roll new-orientation :east))}]
     east-east   [{:type        :from-west
                   :accessible? (and (tile-free-for-player? db east)
                                     (tile-free-for-player? db east-east))
                   :face        (-> new-orientation (cube/roll :east) (cube/roll :east) :t)}]
     west        [{:type        :single
                   :accessible? (tile-free-for-player? db west)
                   :face        (:t (cube/roll new-orientation :west))}]
     west-west   [{:type        :from-east
                   :accessible? (and (tile-free-for-player? db west)
                                     (tile-free-for-player? db west-west))
                   :face        (-> new-orientation (cube/roll :west) (cube/roll :west) :t)}]
     north-east  [{:type        :from-west
                   :accessible? (and (tile-free-for-player? db north)
                                     (tile-free-for-player? db north-east))
                   :face        (-> new-orientation (cube/roll :north) (cube/roll :east) :t)}
                  {:type        :from-south
                   :accessible? (and (tile-free-for-player? db east)
                                     (tile-free-for-player? db north-east))
                   :face        (-> new-orientation (cube/roll :east) (cube/roll :north) :t)}]
     south-east  [{:type        :from-north
                   :accessible? (and (tile-free-for-player? db east)
                                     (tile-free-for-player? db south-east))
                   :face        (-> new-orientation (cube/roll :east) (cube/roll :south) :t)}
                  {:type        :from-west
                   :accessible? (and (tile-free-for-player? db south)
                                     (tile-free-for-player? db south-east))
                   :face        (-> new-orientation (cube/roll :south) (cube/roll :east) :t)}]
     north-west  [{:type        :from-east
                   :accessible? (and (tile-free-for-player? db north)
                                     (tile-free-for-player? db north-west))
                   :face        (-> new-orientation (cube/roll :north) (cube/roll :west) :t)}
                  {:type        :from-south
                   :accessible? (and (tile-free-for-player? db west)
                                     (tile-free-for-player? db north-west))
                   :face        (-> new-orientation (cube/roll :west) (cube/roll :north) :t)}]
     south-west  [{:type        :from-east
                   :accessible? (and (tile-free-for-player? db south)
                                     (tile-free-for-player? db south-west))
                   :face        (-> new-orientation (cube/roll :south) (cube/roll :west) :t)}
                  {:type        :from-north
                   :accessible? (and (tile-free-for-player? db west)
                                     (tile-free-for-player? db south-west))
                   :face        (-> new-orientation (cube/roll :west) (cube/roll :south) :t)}]}))


;#_(let [pos-dir [(let [pos [nx (dec ny)]]
;                   {:pos pos [{:type :single
;                               :accessible? (tile-free-for-player? db pos)
;                               :orientation (:t (cube/roll new-orientation :north))}]})
;                 {:pos [nx (dec (dec ny))]
;                  :type :single-end
;                  :orientation (-> new-orientation (cube/roll :north) (cube/roll :north))}
;                 {:pos [nx (inc ny)]
;                  :type :single
;                  :orientation (cube/roll new-orientation :south)}
;                 {:pos [nx (inc (inc ny))]
;                  :type :single-end
;                  :orientation (-> new-orientation (cube/roll :south) (cube/roll :south))}
;                 {:pos [(inc nx) ny]
;                  :type :single
;                  :orientation (cube/roll new-orientation :east)}
;                 {:pos [(inc (inc nx)) ny]
;                  :type :single-end
;                  :orientation (-> new-orientation (cube/roll :east) (cube/roll :east))}
;                 {:pos [(dec nx) ny]
;                  :type :single
;                  :orientation (cube/roll new-orientation :west)}
;                 {:pos [(dec (dec nx)) ny]
;                  :type :single-end
;                  :orientation (-> new-orientation (cube/roll :west) (cube/roll :west))}]])


#_(apply merge
         (for [{:keys [pos orientation] :as preview} pos-dir
               :when (tile-free-for-player? db pos)]
           {pos (-> preview
                    (assoc :face (:t orientation))
                    (dissoc :orientation :pos))}))



(defn execute-movement
  "Move the player in a given direction, if able.
  When movement is not possible, return the DB."
  [key-pressed db]
  (let [[dx dy] (keyname->move-map key-pressed)
        direction             (keyname->direction key-pressed)
        current-orientation   (get-in db [:player :orientation])
        [px py] (get-in db [:player ::p/pos])
        candidate-move        [(+ dx px) (+ dy py)]
        candidate-orientation (cube/roll current-orientation direction)]
    (if (tile-free-for-player? db candidate-move)
      [true (-> db
                (assoc-in [:player ::p/pos] candidate-move)
                (assoc-in [:player :orientation] candidate-orientation)
                (assoc-in [:player :face-previews] (tile-previews candidate-move
                                                                  candidate-orientation
                                                                  db))
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

