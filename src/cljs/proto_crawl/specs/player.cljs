(ns proto-crawl.specs.player
  (:require
    [proto-crawl.cube.main :as cube]
    [proto-crawl.specs.pathable :as p]
    [proto-crawl.specs.renderable :as r]
    [cljs.spec.alpha :as s]))

(s/def ::player (s/and ::p/pathable
                       (s/keys :req-un [::orientation
                                        ::cube])))
(s/def ::orientation ::cube/orientation)
(s/def ::cube (s/map-of integer? ::r/renderable))



