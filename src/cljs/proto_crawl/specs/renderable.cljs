(ns proto-crawl.specs.renderable
  (:require [cljs.spec.alpha :as s]))

(s/def ::renderable
  (s/and (s/keys :req [::tile-art
                       ::animate?
                       ::image-url]
                 :opt [::tile-art-alt])
         ;; ensure that we have alt tile art when animate? is set
         ;; and fall through if animate is false
         (fn [{:keys [::animate? ::tile-art-alt]}]
           (if animate? tile-art-alt true))))

(s/def ::tile-art (s/coll-of integer? :kind vector? :count 2))
(s/def ::tile-art-alt ::tile-art)
(s/def ::animate? boolean?)
(s/def ::image-url string?)

(comment
  (s/explain ::renderable
             {::animate?     true
              ::tile-art     [1 1]
              ::type         :hello
              ::image-url    "a url"
              ::tile-art-alt [1 1]})
  (s/conform ::renderable
             {::animate?     true
              ::tile-art     [1 1]
              ::tile-art-alt [1 1]}))

