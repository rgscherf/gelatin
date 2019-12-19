(ns gelatin.rot-js.fov
  (:require
    [gelatin.specs.pathable :as p]
    ["rot-js" :as rot]))

(defn input-cb
  "Logic for deciding whether a given cell is visible:
  1. Are we examining the origin cell? (to ensure we can 'see through' it)
  2. Is the examined cell NOT ::p/opaque?"
  [collision origin]
  (fn [x y]
    (or (= origin [x y])
        (not (get-in collision [[x y] ::p/opaque?])))))

(defn output-cb
  "Update the visibility atom for each visible cell.
  We check that the cell is actually in the collision map,
  And that the visibility 'amount' is = 1. (I think < 1 is for diagonals?)"
  [collision _ visible-cells]
  (fn [x y _ visibility]
    (if (and (get collision [x y])
             (= 1 visibility))
      (swap! visible-cells assoc [x y] true))))

(defn calculate-fov
  "Give back a map of visible cells for a given collision map and origin."
  [collision origin ability-range]
  (let [fov (new (-> rot .-FOV .-PreciseShadowcasting)
                 (input-cb collision origin))
        visible-cells (atom {})]
    (.compute fov
              (first origin)
              (second origin)
              ability-range
              (output-cb collision origin visible-cells))
    (-> @visible-cells keys set)))

(def testmap
  {[0 0] {::p/passable? true}
   [0 1] {::p/passable? true}
   [0 2] {::p/passable? true}
   [0 3] {::p/passable? true}
   [0 4] {::p/passable? true}
   [1 0] {::p/passable? true}
   [1 1] {::p/passable? true}
   [1 2] {::p/passable? true}
   [1 3] {::p/passable? true}
   [1 4] {::p/passable? true}
   [2 0] {::p/passable? true}
   [2 1] {::p/passable? true}
   [2 2] {::p/passable? true}
   [2 3] {::p/passable? true}
   [2 4] {::p/passable? true}
   [3 0] {::p/passable? true}
   [3 1] {::p/passable? true}
   [3 2] {::p/passable? true}
   [3 3] {::p/passable? true}
   [3 4] {::p/passable? true}
   [4 0] {::p/passable? true}
   [4 1] {::p/passable? true}
   [4 2] {::p/passable? true}
   [4 3] {::p/passable? true}
   [4 4] {::p/passable? true}})

;".....
; .....
; ..@..
; .....
; ....."

(calculate-fov testmap [2 2] 2)
