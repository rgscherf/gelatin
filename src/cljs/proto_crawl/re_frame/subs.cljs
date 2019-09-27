(ns proto-crawl.re-frame.subs
  (:require
    [re-frame.core :as rf]))

(rf/reg-sub
  :cube
  (fn [db _]
    (get-in db [:player :cube])))

(rf/reg-sub
  :player-orientation
  (fn [db _]
    (get-in db [:player :orientation])))

;(rf/reg-sub
;  :map-dimensions
;  (fn [db _]
;    (get-in db [:metadata :map-config :map-dimensions])))

(rf/reg-sub
  :current-map
  (fn [db _]
    (get-in db [:current-map])))

(rf/reg-sub
  :player
  (fn [db _]
    (get-in db [:player])))

(rf/reg-sub
  :viewport
  (fn [db _]
    (get-in db [:metadata :viewport-size])))

(rf/reg-sub
  :entities
  (fn [db _]
    (get-in db [:entities])))

(rf/reg-sub
  :show-alt?
  (fn [db _]
    (get-in db [:metadata :show-alt?])))
