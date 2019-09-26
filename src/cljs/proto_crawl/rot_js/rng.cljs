(ns proto-crawl.rot-js.rng
  "Wrapper for the ROT.RNG object."
  (:require
    [clojure.string :as string]
    ["rot-js" :as rot]))

(def ^:private
  rng
  (.-RNG rot))

(defn uniform
  "random number [0..1] with uniform distribution (similar to Math.random())"
  []
  (.getUniform rng))

(defn normal
  "random number with normal distribution,
  parametrized by a mean value and standard deviation"
  [mean st-dev]
  (.getNormal rng mean st-dev))

(defn percentage
  "random integer 1..100"
  []
  (.getPercentage rng))

(defn random-item
  "Pick a random item from a collection."
  [coll]
  (.getItem rng (to-array coll)))


(defn weighted-value
  "Choosing from a list of values with uneven weights
  is a common operation in Roguelike development.
  The getWeightedValue method is useful for this task;
  just give it a JS object with numeric weight values
  (arbitrary numbers) and a corresponding key will be picked randomly."
  [valmap]
  (let [selection (.getWeightedValue rng (apply js-obj
                                                (reduce concat valmap)))]
    (if (and (string? selection) ;; keyword keys are returned as strings :(
             (string/starts-with? selection ":"))
        (keyword (string/replace selection #":" ""))
        selection)))

