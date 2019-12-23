(ns gelatin.cube.abilities
  (:require
    [cljs.spec.alpha :as s]
    [gelatin.specs.renderable :as r]))

(def placeholder-ability-behavior
  {;; valid target type, #{:entity :player :terrain}
   :affects    :entity
   :range      3
   ;; on-trigger tells us what to do to the targeted thing if one can be found.
   :on-trigger {:action #(update % :hp dec)}})

(defn mk-ability
  [ability]
  {:post [(s/assert ::r/renderable %)]}
  (merge {::r/image-url "Interface_Skills_B.png"
          ::r/type      :green
          ::r/animate?  false
          :opacity      1}
         ability))

(def ability-slash
  {::r/tile-art [0 0]
   :name        "Slash"
   :affects     :entity
   :range       1
   :on-trigger  {:action #(update % :hp (fn [x] (- x 2)))}})

(def ability-bowshot
  {::r/tile-art [3 2]
   :name        "Snipe"
   ;; valid target type, #{:entity :player :terrain}
   :affects     :entity
   :range       2
   ;; on-trigger tells us what to do to the targeted thing if one can be found.
   :on-trigger  {:action #(update % :hp dec)}})

(def abilities
  {:snipe (mk-ability ability-bowshot)
   :slash (mk-ability ability-slash)})

;; when an action is triggered, take the chosen coords
;; and try to find a matching "thing" based on the :affects entry.
;; e.g. for :affects :entity, search for an entity at the chosen position
;; and apply the :action from the :on-trigger key to it.
;; for :affects :player, just go directly to the player.
;; the :action key will always return a new "thing", which can be validated
;; and then put back.
;; TODO: is it smart for an ability to directly change a "thing"? what about e.g. damage resistance?

(defn top-ability
  [player]
  (get (:cube player)
       (get (:orientation player) :t)))
