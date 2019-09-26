goog.provide('proto_crawl.main');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('expound.alpha');
goog.require('cljs.spec.alpha');
goog.require('proto_crawl.view.main');
goog.require('proto_crawl.re_frame.events');
goog.require('proto_crawl.re_frame.subs');
goog.require('proto_crawl.re_frame.state');
cljs.spec.alpha.check_asserts(true);
cljs.spec.alpha._STAR_explain_out_STAR_ = expound.alpha.printer;
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-game","init-game",1203428819),(function (_){
return proto_crawl.re_frame.state.init_game_state();
}));
if((typeof proto_crawl !== 'undefined') && (typeof proto_crawl.main !== 'undefined') && (typeof proto_crawl.main.add_key_listener_QMARK_ !== 'undefined')){
} else {
proto_crawl.main.add_key_listener_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
}
proto_crawl.main.on_game_keydown = (function proto_crawl$main$on_game_keydown(key_event){
var G__45059 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-down","key-down",998681515),key_event.key], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45059) : re_frame.core.dispatch.call(null,G__45059));
});
proto_crawl.main.add_global_event_listeners = (function proto_crawl$main$add_global_event_listeners(){
return document.addEventListener("keydown",proto_crawl.main.on_game_keydown);
});
proto_crawl.main.main = (function proto_crawl$main$main(){
var G__45060_45061 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-game","init-game",1203428819)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__45060_45061) : re_frame.core.dispatch_sync.call(null,G__45060_45061));

if(cljs.core.truth_(cljs.core.deref(proto_crawl.main.add_key_listener_QMARK_))){
proto_crawl.main.add_global_event_listeners();

cljs.core.reset_BANG_(proto_crawl.main.add_key_listener_QMARK_,false);
} else {
}

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [proto_crawl.view.main.game_root], null),document.getElementById("root"));
});

//# sourceMappingURL=proto_crawl.main.js.map
