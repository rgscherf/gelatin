(ns gelatin.specs.pathable
  (:require [cljs.spec.alpha :as s]))

(s/def ::pathable (s/keys :req [::passable?
                                ::pos
                                ::opaque?
                                ::type]))
(s/def ::passable? boolean?)
(s/def ::opaque? boolean?)
(s/def ::type #{:player :entity :terrain})
(s/def ::pos (s/coll-of integer? :kind vector? :count 2))
(comment
  (s/assert ::pathable {::passable? true
                        ::pos [1 1]
                        ::type :player}))

