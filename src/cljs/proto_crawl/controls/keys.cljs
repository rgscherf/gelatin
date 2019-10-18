(ns proto-crawl.controls.keys
  (:require [clojure.set :as set]))

;; Actual keys used in the game
(def move-up-names
  #{"ArrowUp" "k"})
(def move-down-names
  #{"ArrowDown" "j"})
(def move-left-names
  #{"ArrowLeft" "h"})
(def move-right-names
  #{"ArrowRight" "l"})
(def interaction-key-names
  #{"z" " "})
(def cancel-key-names
  #{"x"})

;; When checking to see whether a certain 'type' of input was triggered,
;; use these categories.
(def movement-key-names
  (set/union move-up-names
             move-down-names
             move-left-names
             move-right-names))

(def input-key-names
  (set/union movement-key-names
             interaction-key-names
             cancel-key-names))
