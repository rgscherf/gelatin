goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__48450 = arguments.length;
switch (G__48450) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
});

day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2;

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__48451 = cljs.core.seq(Object.keys(localStorage));
var chunk__48452 = null;
var count__48453 = (0);
var i__48454 = (0);
while(true){
if((i__48454 < count__48453)){
var k = chunk__48452.cljs$core$IIndexed$_nth$arity$2(null,i__48454);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__48456 = seq__48451;
var G__48457 = chunk__48452;
var G__48458 = count__48453;
var G__48459 = (i__48454 + (1));
seq__48451 = G__48456;
chunk__48452 = G__48457;
count__48453 = G__48458;
i__48454 = G__48459;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48451);
if(temp__5735__auto__){
var seq__48451__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48451__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48451__$1);
var G__48460 = cljs.core.chunk_rest(seq__48451__$1);
var G__48461 = c__4550__auto__;
var G__48462 = cljs.core.count(c__4550__auto__);
var G__48463 = (0);
seq__48451 = G__48460;
chunk__48452 = G__48461;
count__48453 = G__48462;
i__48454 = G__48463;
continue;
} else {
var k = cljs.core.first(seq__48451__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__48464 = cljs.core.next(seq__48451__$1);
var G__48465 = null;
var G__48466 = (0);
var G__48467 = (0);
seq__48451 = G__48464;
chunk__48452 = G__48465;
count__48453 = G__48466;
i__48454 = G__48467;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
