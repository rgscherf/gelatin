(ns gelatin.specs.player
  (:require
    [gelatin.cube.main :as cube]
    [gelatin.specs.pathable :as p]
    [gelatin.specs.renderable :as r]
    [cljs.spec.alpha :as s]))

(s/def ::player (s/and ::p/pathable
                       (s/keys :req-un [::orientation
                                        ::target-mode?
                                        ::targeted-squares
                                        ::cube])))
(s/def ::orientation ::cube/orientation)
(s/def ::cube (s/map-of integer? ::r/renderable))
(s/def ::target-mode? boolean?)
(s/def ::targeted-squares #(or (nil? %)
                               (set? %)))



