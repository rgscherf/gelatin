(ns gelatin.specs.game-state
  (:require [cljs.spec.alpha :as s]
            [gelatin.specs.player :as player]
            [gelatin.specs.renderable :as r]
            [gelatin.specs.pathable :as p]))

(s/def ::state (s/keys :req-un [::entities
                                ::current-map
                                ::player
                                ::metadata]))

(s/def ::entities set?)
(s/def ::level (s/map-of (s/coll-of integer? :kind vector? :count 2)
                         (s/and ::r/renderable ::p/pathable)))
(s/def ::current-map ::level)
(s/def ::player ::player/player)
(s/def ::event-result (s/tuple boolean? ::state))

