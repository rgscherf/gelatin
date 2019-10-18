(ns gelatin.entities.utils
  (:require
    [gelatin.specs.pathable :as p]))

(defn entity-at?
  "Is there an entity at pos in the collection of entities?"
  [entities pos]
  (seq (filter #(= pos (::p/pos %))
               entities)))

(defn entity-at
  "Get the first entity at position pos."
  [entities pos]
  (first
    (filter #(= pos (::p/pos %))
            entities)))

(def greek-alphabet ["α" "β" "γ" "δ" "ϵ" "ζ" "η" "θ" "ι" "κ" "λ" "μ" "ν" "ξ" "o" "π" "ρ" "σ" "τ" "υ" "ϕ" "χ" "ψ" "ω" "A" "B" "Γ" "Δ" "E" "Z" "H" "Θ" "I" "K" "Λ" "M" "N" "Ξ" "O" "Π" "P" "Σ" "T" "ϒ" "Φ" "X" "Ψ" "Ω"])

