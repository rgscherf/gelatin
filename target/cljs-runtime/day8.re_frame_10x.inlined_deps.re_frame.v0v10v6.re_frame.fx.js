goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v0v10v6.re-frame.registrar/kinds kind)"));
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,id,handler);
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__45262 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__45263 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__45263;

try{try{var seq__45264 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__45265 = null;
var count__45266 = (0);
var i__45267 = (0);
while(true){
if((i__45267 < count__45266)){
var vec__45275 = chunk__45265.cljs$core$IIndexed$_nth$arity$2(null,i__45267);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45275,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45275,(1),null);
var temp__5733__auto___45334 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___45334)){
var effect_fn_45335 = temp__5733__auto___45334;
(effect_fn_45335.cljs$core$IFn$_invoke$arity$1 ? effect_fn_45335.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_45335.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__45336 = seq__45264;
var G__45337 = chunk__45265;
var G__45338 = count__45266;
var G__45339 = (i__45267 + (1));
seq__45264 = G__45336;
chunk__45265 = G__45337;
count__45266 = G__45338;
i__45267 = G__45339;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45264);
if(temp__5735__auto__){
var seq__45264__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45264__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__45264__$1);
var G__45340 = cljs.core.chunk_rest(seq__45264__$1);
var G__45341 = c__4550__auto__;
var G__45342 = cljs.core.count(c__4550__auto__);
var G__45343 = (0);
seq__45264 = G__45340;
chunk__45265 = G__45341;
count__45266 = G__45342;
i__45267 = G__45343;
continue;
} else {
var vec__45278 = cljs.core.first(seq__45264__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45278,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45278,(1),null);
var temp__5733__auto___45344 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___45344)){
var effect_fn_45345 = temp__5733__auto___45344;
(effect_fn_45345.cljs$core$IFn$_invoke$arity$1 ? effect_fn_45345.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_45345.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__45346 = cljs.core.next(seq__45264__$1);
var G__45347 = null;
var G__45348 = (0);
var G__45349 = (0);
seq__45264 = G__45346;
chunk__45265 = G__45347;
count__45266 = G__45348;
i__45267 = G__45349;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var end__44991__auto___45350 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now();
var duration__44992__auto___45351 = (end__44991__auto___45350 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__44992__auto___45351,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_(end__44991__auto___45350);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__45262;
}} else {
var seq__45281 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__45282 = null;
var count__45283 = (0);
var i__45284 = (0);
while(true){
if((i__45284 < count__45283)){
var vec__45299 = chunk__45282.cljs$core$IIndexed$_nth$arity$2(null,i__45284);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45299,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45299,(1),null);
var temp__5733__auto___45352 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___45352)){
var effect_fn_45353 = temp__5733__auto___45352;
(effect_fn_45353.cljs$core$IFn$_invoke$arity$1 ? effect_fn_45353.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_45353.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__45354 = seq__45281;
var G__45355 = chunk__45282;
var G__45356 = count__45283;
var G__45357 = (i__45284 + (1));
seq__45281 = G__45354;
chunk__45282 = G__45355;
count__45283 = G__45356;
i__45284 = G__45357;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45281);
if(temp__5735__auto__){
var seq__45281__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45281__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__45281__$1);
var G__45358 = cljs.core.chunk_rest(seq__45281__$1);
var G__45359 = c__4550__auto__;
var G__45360 = cljs.core.count(c__4550__auto__);
var G__45361 = (0);
seq__45281 = G__45358;
chunk__45282 = G__45359;
count__45283 = G__45360;
i__45284 = G__45361;
continue;
} else {
var vec__45303 = cljs.core.first(seq__45281__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45303,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45303,(1),null);
var temp__5733__auto___45364 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___45364)){
var effect_fn_45365 = temp__5733__auto___45364;
(effect_fn_45365.cljs$core$IFn$_invoke$arity$1 ? effect_fn_45365.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_45365.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__45366 = cljs.core.next(seq__45281__$1);
var G__45367 = null;
var G__45368 = (0);
var G__45369 = (0);
seq__45281 = G__45366;
chunk__45282 = G__45367;
count__45283 = G__45368;
i__45284 = G__45369;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__45306 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__45307 = null;
var count__45308 = (0);
var i__45309 = (0);
while(true){
if((i__45309 < count__45308)){
var map__45314 = chunk__45307.cljs$core$IIndexed$_nth$arity$2(null,i__45309);
var map__45314__$1 = (((((!((map__45314 == null))))?(((((map__45314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45314):map__45314);
var effect = map__45314__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45314__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45314__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_(((function (seq__45306,chunk__45307,count__45308,i__45309,map__45314,map__45314__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(dispatch);
});})(seq__45306,chunk__45307,count__45308,i__45309,map__45314,map__45314__$1,effect,ms,dispatch))
,ms);
}


var G__45370 = seq__45306;
var G__45371 = chunk__45307;
var G__45372 = count__45308;
var G__45373 = (i__45309 + (1));
seq__45306 = G__45370;
chunk__45307 = G__45371;
count__45308 = G__45372;
i__45309 = G__45373;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45306);
if(temp__5735__auto__){
var seq__45306__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45306__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__45306__$1);
var G__45374 = cljs.core.chunk_rest(seq__45306__$1);
var G__45375 = c__4550__auto__;
var G__45376 = cljs.core.count(c__4550__auto__);
var G__45377 = (0);
seq__45306 = G__45374;
chunk__45307 = G__45375;
count__45308 = G__45376;
i__45309 = G__45377;
continue;
} else {
var map__45316 = cljs.core.first(seq__45306__$1);
var map__45316__$1 = (((((!((map__45316 == null))))?(((((map__45316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45316):map__45316);
var effect = map__45316__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45316__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45316__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_(((function (seq__45306,chunk__45307,count__45308,i__45309,map__45316,map__45316__$1,effect,ms,dispatch,seq__45306__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(dispatch);
});})(seq__45306,chunk__45307,count__45308,i__45309,map__45316,map__45316__$1,effect,ms,dispatch,seq__45306__$1,temp__5735__auto__))
,ms);
}


var G__45379 = cljs.core.next(seq__45306__$1);
var G__45380 = null;
var G__45381 = (0);
var G__45382 = (0);
seq__45306 = G__45379;
chunk__45307 = G__45380;
count__45308 = G__45381;
i__45309 = G__45382;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__45318 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__45319 = null;
var count__45320 = (0);
var i__45321 = (0);
while(true){
if((i__45321 < count__45320)){
var event = chunk__45319.cljs$core$IIndexed$_nth$arity$2(null,i__45321);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(event);


var G__45383 = seq__45318;
var G__45384 = chunk__45319;
var G__45385 = count__45320;
var G__45386 = (i__45321 + (1));
seq__45318 = G__45383;
chunk__45319 = G__45384;
count__45320 = G__45385;
i__45321 = G__45386;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45318);
if(temp__5735__auto__){
var seq__45318__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45318__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__45318__$1);
var G__45387 = cljs.core.chunk_rest(seq__45318__$1);
var G__45388 = c__4550__auto__;
var G__45389 = cljs.core.count(c__4550__auto__);
var G__45390 = (0);
seq__45318 = G__45387;
chunk__45319 = G__45388;
count__45320 = G__45389;
i__45321 = G__45390;
continue;
} else {
var event = cljs.core.first(seq__45318__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(event);


var G__45393 = cljs.core.next(seq__45318__$1);
var G__45394 = null;
var G__45395 = (0);
var G__45396 = (0);
seq__45318 = G__45393;
chunk__45319 = G__45394;
count__45320 = G__45395;
i__45321 = G__45396;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__45326 = cljs.core.seq(value);
var chunk__45327 = null;
var count__45328 = (0);
var i__45329 = (0);
while(true){
if((i__45329 < count__45328)){
var event = chunk__45327.cljs$core$IIndexed$_nth$arity$2(null,i__45329);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__45398 = seq__45326;
var G__45399 = chunk__45327;
var G__45400 = count__45328;
var G__45401 = (i__45329 + (1));
seq__45326 = G__45398;
chunk__45327 = G__45399;
count__45328 = G__45400;
i__45329 = G__45401;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45326);
if(temp__5735__auto__){
var seq__45326__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45326__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__45326__$1);
var G__45402 = cljs.core.chunk_rest(seq__45326__$1);
var G__45403 = c__4550__auto__;
var G__45404 = cljs.core.count(c__4550__auto__);
var G__45405 = (0);
seq__45326 = G__45402;
chunk__45327 = G__45403;
count__45328 = G__45404;
i__45329 = G__45405;
continue;
} else {
var event = cljs.core.first(seq__45326__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__45406 = cljs.core.next(seq__45326__$1);
var G__45407 = null;
var G__45408 = (0);
var G__45409 = (0);
seq__45326 = G__45406;
chunk__45327 = G__45407;
count__45328 = G__45408;
i__45329 = G__45409;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.js.map
