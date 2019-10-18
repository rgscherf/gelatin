(ns gelatin.style.main)

(defn grid-container
  "The most important attributes here is the ratio between grid-row and grid-column.
  The tileset uses a width:height of 1:1.5. Must be followed here.
  Keep all other measurements (parent dimensions, parent grid/cols, grid/cols
  for this element) equal."
  [size]
  {:display "grid"
   :color "white"
   :border "1px solid white"
   ; :z-index "-1"
   :grid-row "1 / span 12"
   :grid-column "5 / span 8"
   :grid-template-rows "repeat(12, 1fr)"
   :grid-template-columns "repeat(12, 1fr)"})
