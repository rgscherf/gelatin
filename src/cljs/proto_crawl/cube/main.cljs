(ns proto-crawl.cube.main
  "Namespace for cube operations.

  Notation for cube faces:
  T: Top face
  S: South face
  N: North face
  E: East face
  W: West face
  B: Bottom face

  Cubes are oriented by their T,S,E faces.
  For example, the orientation for
  {:t 1 :s 3 :e 5} is
  {:t 1 :s 3 :e 5 :w 2 :b 6 :n 4}
  (this is easy to derive--opposing faces sum to 7, after all!)

  Rolling the cube:
  To determine the orientation of a cube being rolled,
  provide the current orientation plus the direction of the roll.
  (e.g. moving one tile to the north is a :north direction move).
  "
  (:require
    [clojure.core.match :refer [match]]
    [cljs.spec.alpha :as s]))


(defn less [n] (- 7 n))

(s/def ::face (s/and #(int? %)
                     #(< 0 % 7)))
(s/def ::t ::face)
(s/def ::s ::face)
(s/def ::e ::face)
(s/def ::b ::face)
(s/def ::w ::face)
(s/def ::n ::face)
(s/def ::orientation (s/keys :req-un [::t ::s ::e]
                             :opt-un [::b ::e ::w]))
(s/def ::orientation-vec (s/coll-of ::face :kind vector? :count 3))

(defn fill-orientation
  "Given a partial (tse) orientation, fill out the remaining faces."
  [{:keys [t s e] :as part}]
  (merge part
         {:w (less e)
          :n (less s)
          :b (less t)}))

(defn vec->orient
  "Take a 3-tuple of the cube's top, south, and east faces.
  Return a full orientation map conforming to ::orientation"
  [[t s e :as v]]
  {:pre [(s/valid? ::orientation-vec v)]}
  (fill-orientation {:t t :s s :e e}))

(defn ->orient
  [t s e]
  (vec->orient [t s e]))

(defn roll
  "Given an orientation and a direction, return the new orientation."
  [orient direction]
  (let [{:keys [t s e b n w]} (fill-orientation orient)]
    (fill-orientation
      (match direction
             :north (->orient s b e)
             :south (->orient n t e)
             :east (->orient w s t)
             :west (->orient e s b)))))

