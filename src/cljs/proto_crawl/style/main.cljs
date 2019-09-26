(ns proto-crawl.style.main)

(defn grid-container
  [size]
  {:display "grid"
   :color "white"
   :border "1px solid white"
   ; :z-index "-1"
   :grid-row "1 / span 6"
   :grid-column "3 / span 6"
   :grid-template-rows (str "repeat(" size "," (/ 100 size) "%)")
   :grid-template-columns (str "repeat(" size "," (* 0.66 (/ 100 size)) "%)")})
