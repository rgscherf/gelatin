goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__41689 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__41690 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__41690;

try{try{var seq__41691 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__41692 = null;
var count__41693 = (0);
var i__41694 = (0);
while(true){
if((i__41694 < count__41693)){
var vec__41704 = chunk__41692.cljs$core$IIndexed$_nth$arity$2(null,i__41694);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41704,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41704,(1),null);
var temp__5733__auto___41750 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41750)){
var effect_fn_41752 = temp__5733__auto___41750;
(effect_fn_41752.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41752.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41752.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41753 = seq__41691;
var G__41754 = chunk__41692;
var G__41755 = count__41693;
var G__41756 = (i__41694 + (1));
seq__41691 = G__41753;
chunk__41692 = G__41754;
count__41693 = G__41755;
i__41694 = G__41756;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41691);
if(temp__5735__auto__){
var seq__41691__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41691__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__41691__$1);
var G__41760 = cljs.core.chunk_rest(seq__41691__$1);
var G__41761 = c__4550__auto__;
var G__41762 = cljs.core.count(c__4550__auto__);
var G__41763 = (0);
seq__41691 = G__41760;
chunk__41692 = G__41761;
count__41693 = G__41762;
i__41694 = G__41763;
continue;
} else {
var vec__41707 = cljs.core.first(seq__41691__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41707,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41707,(1),null);
var temp__5733__auto___41764 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41764)){
var effect_fn_41765 = temp__5733__auto___41764;
(effect_fn_41765.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41765.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41765.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41766 = cljs.core.next(seq__41691__$1);
var G__41767 = null;
var G__41768 = (0);
var G__41769 = (0);
seq__41691 = G__41766;
chunk__41692 = G__41767;
count__41693 = G__41768;
i__41694 = G__41769;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__41418__auto___41770 = re_frame.interop.now();
var duration__41419__auto___41771 = (end__41418__auto___41770 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41419__auto___41771,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__41418__auto___41770);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__41689;
}} else {
var seq__41711 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__41712 = null;
var count__41713 = (0);
var i__41714 = (0);
while(true){
if((i__41714 < count__41713)){
var vec__41722 = chunk__41712.cljs$core$IIndexed$_nth$arity$2(null,i__41714);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41722,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41722,(1),null);
var temp__5733__auto___41772 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41772)){
var effect_fn_41777 = temp__5733__auto___41772;
(effect_fn_41777.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41777.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41777.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41778 = seq__41711;
var G__41779 = chunk__41712;
var G__41780 = count__41713;
var G__41781 = (i__41714 + (1));
seq__41711 = G__41778;
chunk__41712 = G__41779;
count__41713 = G__41780;
i__41714 = G__41781;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41711);
if(temp__5735__auto__){
var seq__41711__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41711__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__41711__$1);
var G__41782 = cljs.core.chunk_rest(seq__41711__$1);
var G__41783 = c__4550__auto__;
var G__41784 = cljs.core.count(c__4550__auto__);
var G__41785 = (0);
seq__41711 = G__41782;
chunk__41712 = G__41783;
count__41713 = G__41784;
i__41714 = G__41785;
continue;
} else {
var vec__41725 = cljs.core.first(seq__41711__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41725,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41725,(1),null);
var temp__5733__auto___41786 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41786)){
var effect_fn_41787 = temp__5733__auto___41786;
(effect_fn_41787.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41787.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41787.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41788 = cljs.core.next(seq__41711__$1);
var G__41789 = null;
var G__41790 = (0);
var G__41791 = (0);
seq__41711 = G__41788;
chunk__41712 = G__41789;
count__41713 = G__41790;
i__41714 = G__41791;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__41728 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__41729 = null;
var count__41730 = (0);
var i__41731 = (0);
while(true){
if((i__41731 < count__41730)){
var map__41736 = chunk__41729.cljs$core$IIndexed$_nth$arity$2(null,i__41731);
var map__41736__$1 = (((((!((map__41736 == null))))?(((((map__41736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41736):map__41736);
var effect = map__41736__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41736__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41736__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__41728,chunk__41729,count__41730,i__41731,map__41736,map__41736__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__41728,chunk__41729,count__41730,i__41731,map__41736,map__41736__$1,effect,ms,dispatch))
,ms);
}


var G__41792 = seq__41728;
var G__41793 = chunk__41729;
var G__41794 = count__41730;
var G__41795 = (i__41731 + (1));
seq__41728 = G__41792;
chunk__41729 = G__41793;
count__41730 = G__41794;
i__41731 = G__41795;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41728);
if(temp__5735__auto__){
var seq__41728__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41728__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__41728__$1);
var G__41796 = cljs.core.chunk_rest(seq__41728__$1);
var G__41797 = c__4550__auto__;
var G__41798 = cljs.core.count(c__4550__auto__);
var G__41799 = (0);
seq__41728 = G__41796;
chunk__41729 = G__41797;
count__41730 = G__41798;
i__41731 = G__41799;
continue;
} else {
var map__41738 = cljs.core.first(seq__41728__$1);
var map__41738__$1 = (((((!((map__41738 == null))))?(((((map__41738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41738):map__41738);
var effect = map__41738__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41738__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41738__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__41728,chunk__41729,count__41730,i__41731,map__41738,map__41738__$1,effect,ms,dispatch,seq__41728__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__41728,chunk__41729,count__41730,i__41731,map__41738,map__41738__$1,effect,ms,dispatch,seq__41728__$1,temp__5735__auto__))
,ms);
}


var G__41800 = cljs.core.next(seq__41728__$1);
var G__41801 = null;
var G__41802 = (0);
var G__41803 = (0);
seq__41728 = G__41800;
chunk__41729 = G__41801;
count__41730 = G__41802;
i__41731 = G__41803;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__41740 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__41741 = null;
var count__41742 = (0);
var i__41743 = (0);
while(true){
if((i__41743 < count__41742)){
var event = chunk__41741.cljs$core$IIndexed$_nth$arity$2(null,i__41743);
re_frame.router.dispatch(event);


var G__41805 = seq__41740;
var G__41806 = chunk__41741;
var G__41807 = count__41742;
var G__41808 = (i__41743 + (1));
seq__41740 = G__41805;
chunk__41741 = G__41806;
count__41742 = G__41807;
i__41743 = G__41808;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41740);
if(temp__5735__auto__){
var seq__41740__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41740__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__41740__$1);
var G__41809 = cljs.core.chunk_rest(seq__41740__$1);
var G__41810 = c__4550__auto__;
var G__41811 = cljs.core.count(c__4550__auto__);
var G__41812 = (0);
seq__41740 = G__41809;
chunk__41741 = G__41810;
count__41742 = G__41811;
i__41743 = G__41812;
continue;
} else {
var event = cljs.core.first(seq__41740__$1);
re_frame.router.dispatch(event);


var G__41813 = cljs.core.next(seq__41740__$1);
var G__41814 = null;
var G__41815 = (0);
var G__41816 = (0);
seq__41740 = G__41813;
chunk__41741 = G__41814;
count__41742 = G__41815;
i__41743 = G__41816;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__41744 = cljs.core.seq(value);
var chunk__41745 = null;
var count__41746 = (0);
var i__41747 = (0);
while(true){
if((i__41747 < count__41746)){
var event = chunk__41745.cljs$core$IIndexed$_nth$arity$2(null,i__41747);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__41819 = seq__41744;
var G__41820 = chunk__41745;
var G__41821 = count__41746;
var G__41822 = (i__41747 + (1));
seq__41744 = G__41819;
chunk__41745 = G__41820;
count__41746 = G__41821;
i__41747 = G__41822;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41744);
if(temp__5735__auto__){
var seq__41744__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41744__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__41744__$1);
var G__41823 = cljs.core.chunk_rest(seq__41744__$1);
var G__41824 = c__4550__auto__;
var G__41825 = cljs.core.count(c__4550__auto__);
var G__41826 = (0);
seq__41744 = G__41823;
chunk__41745 = G__41824;
count__41746 = G__41825;
i__41747 = G__41826;
continue;
} else {
var event = cljs.core.first(seq__41744__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__41827 = cljs.core.next(seq__41744__$1);
var G__41828 = null;
var G__41829 = (0);
var G__41830 = (0);
seq__41744 = G__41827;
chunk__41745 = G__41828;
count__41746 = G__41829;
i__41747 = G__41830;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
