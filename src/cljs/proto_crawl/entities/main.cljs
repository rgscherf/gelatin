(ns proto-crawl.entities.main
  (:require
    [proto-crawl.rot-js.rng :as rng]
    [cljs.spec.alpha :as s]
    [proto-crawl.entities.utils :as entity-utils]))

(s/check-asserts true)
(s/def ::action fn?)
(s/def ::position (s/coll-of int? :kind vector? :count 2))
(s/def ::name string?)
(s/def ::hp int?)
(s/def ::status (or nil? keyword?))
(s/def ::glyph string?)
(s/def ::enemy (s/keys :req-un [::position
                                ::name
                                ::action
                                ::hp
                                ::status
                                ::glyph]))

(defn dan-d-doodad [] {})

(defn cleaner-bot-action [db] db)

(defn cleaner-bot
  []
  {:post [(s/assert ::enemy %)]}
  {:position   [9 9]
   :name       "ScrubBuddy 6000"
   :hp         0
   :status     nil
   :action     cleaner-bot-action
   :identifier (rng/random-item entity-utils/greek-alphabet)
   :glyph      "C"})



