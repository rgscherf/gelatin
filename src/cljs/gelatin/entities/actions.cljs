(ns gelatin.entities.actions
  "Each entity operation takes an ID (the ID of the acting entity) and the DB
  and returns an updated(?) DB.
  thus, we can chain actions:
  (->> db (step-toward-player id) (step-toward-player id))
  (->> db (step-toward-player id) (attack-player id))
  (->> db (step-toward-or-attack-player id) (buff-self id)) "
  (:require [clojure.set :as set]
            [cljs.core.match :refer [match]]
            [re-frame.db :refer [app-db]]
            [cljs.spec.alpha :as s]
            [gelatin.rot-js.pathfinding :as pathfinding]
            [gelatin.rot-js.astar :as astar]
            [gelatin.specs.game-state :as state]
            [gelatin.specs.pathable :as p]))

(defn simple-path-cb
  [collision]
  (fn [[x y]]
    (let [tile      (get collision [x y])
          passable? (::p/passable? tile)]
      passable?)))

(defn update-entity-set
  "Update the entity set, from an old entity."
  [s old new]
  (conj (set/difference (into #{} s)
                        #{old})
        new))

(defn get-entity-from-entities
  "Get an entity from the entities set, by ID."
  [id ents]
  (first (filter #(= id (:id %))
                 ents)))

(defn get-entity
  "Get entitity from DB, by ID."
  [id db]
  (get-entity-from-entities id (:entities db)))


(defn update-ent-from-id
  "Update entity from the entities set, by ID."
  [ents new]
  (let [old-ent (get-entity-from-entities (:id new) ents)]
    (update-entity-set ents old-ent new)))

(defn pack-ent-in-db
  "Pack an (updated?) entity back into the db."
  [db ent]
  (assoc db :entities (update-ent-from-id (:entities db) ent)))

(defn step-toward-player
  "Take a step toward player, if able."
  [id [run? db :as event-result]]
  {:pre  [(s/assert ::state/event-result event-result)]
   :post [(s/assert ::state/event-result %)]}
  (if run?
    (let [self      (get-entity id db)
          collision (pathfinding/db->collision-map db
                                                   :exclude-entity self
                                                   :exclude-player true)
          player    (:player db)
          {:keys [result path]} (astar/pathfind (::p/pos self)
                                                (::p/pos player)
                                                (simple-path-cb collision))]
      ;(println "finished pathfinding, returning" result)
      (match result
             :no-move [true db]
             :target-adjacent [true db]
             :nearest  [true (pack-ent-in-db db (assoc self ::p/pos (second path)))]
             :success [true (pack-ent-in-db db (assoc self ::p/pos (second path)))]))
    [false db]))



(comment
  (let [efirst (-> @app-db :entities first)
        db @app-db
        coll (pathfinding/collision-map (:player db)
                                        (:entities db)
                                        (:current-map db)
                                        :exclude-entity efirst
                                        :exclude-player true)]
    (::p/pos (:player db))
    #_(astar/pathfind (::p/pos efirst)
                      (::p/pos (:player db))
                      (simple-path-cb coll))))


