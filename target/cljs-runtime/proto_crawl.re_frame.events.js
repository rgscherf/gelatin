goog.provide('proto_crawl.re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('day8.re_frame.tracing');
goog.require('proto_crawl.controls.main');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"player-ended-turn","player-ended-turn",-552138620),(function (db,_){
return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key-down","key-down",998681515),(function (db,p__44295){
var vec__44296 = p__44295;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44296,(0),null);
var key_pressed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44296,(1),null);
var or__4131__auto__ = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(proto_crawl.controls.main.movement_key_names,key_pressed))?proto_crawl.controls.main.take_move_input(db,key_pressed):null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return db;
}
}));

//# sourceMappingURL=proto_crawl.re_frame.events.js.map
