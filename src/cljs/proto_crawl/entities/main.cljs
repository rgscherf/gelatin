(ns proto-crawl.entities.main
  (:require
    [proto-crawl.rot-js.rng :as rng]
    [cljs.spec.alpha :as s]
    [clojure.set :as set]
    [cljs.core.match :refer [match]]
    [proto-crawl.specs.renderable :as r]
    [proto-crawl.specs.pathable :as p]
    [proto-crawl.specs.game-state :as state]
    [proto-crawl.entities.utils :as entity-utils]
    [proto-crawl.entities.actions :as actions]))


(defn move-entities
  "Move entities one at a time.
  If not success?, return given db.
  Each entity returns an event-result, so we return its second as the new db."
  [[success? db :as evt-res]]
  {:pre  [(s/assert ::state/event-result evt-res)]
   :post [(s/assert ::state/event-result %)]}
  (if success?
    [true (let [ents (:entities db)]
            (reduce (fn [acc-db self]
                      (let [creature-action (get self :action)]
                        (second (creature-action self acc-db))))
                    db
                    ents))]
    [false db]))


(s/def ::action fn?)
(s/def ::position (s/coll-of int? :kind vector? :count 2))
(s/def ::name string?)
(s/def ::hp int?)
(s/def ::status (or nil? keyword?))
(s/def ::glyph string?)
(s/def ::enemy (s/and #(s/assert ::r/renderable %)
                      #(s/assert ::p/pathable %)
                      (s/keys :req-un [::name
                                       ::action
                                       ::hp
                                       ::status
                                       ::glyph])))

(defn rat-action
  "Move one step toward player."
  [self db]
  (actions/step-toward-player (:id self) [true db]))

(defn rat
  [pos]
  {:post [#(s/assert ::enemy %)]}
  {:name            "Harmless Rat"
   :id              (random-uuid)
   :hp              3
   :status          nil
   :action          rat-action
   :identifier      (rng/random-item entity-utils/greek-alphabet)
   :glyph           "R"
   ::r/animate?     true
   ::r/image-url    "Monsters.png"
   ::r/tile-art     [1 4]
   ::r/tile-art-alt [1 5]
   ::r/type         :red
   ::p/passable?    false
   ::p/pos          pos
   ::p/type         :entity})
