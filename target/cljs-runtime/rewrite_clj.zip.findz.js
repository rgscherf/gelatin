goog.provide('rewrite_clj.zip.findz');
goog.require('cljs.core');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip.whitespace');
goog.require('clojure.zip');
rewrite_clj.zip.findz.tag_predicate = (function rewrite_clj$zip$findz$tag_predicate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46460 = arguments.length;
var i__4731__auto___46461 = (0);
while(true){
if((i__4731__auto___46461 < len__4730__auto___46460)){
args__4736__auto__.push((arguments[i__4731__auto___46461]));

var G__46462 = (i__4731__auto___46461 + (1));
i__4731__auto___46461 = G__46462;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return rewrite_clj.zip.findz.tag_predicate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

rewrite_clj.zip.findz.tag_predicate.cljs$core$IFn$_invoke$arity$variadic = (function (t,p__46401){
var vec__46402 = p__46401;
var additional = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46402,(0),null);
if(cljs.core.truth_(additional)){
return ((function (vec__46402,additional){
return (function (node){
var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.base.tag(node),t);
if(and__4120__auto__){
return (additional.cljs$core$IFn$_invoke$arity$1 ? additional.cljs$core$IFn$_invoke$arity$1(node) : additional.call(null,node));
} else {
return and__4120__auto__;
}
});
;})(vec__46402,additional))
} else {
return ((function (vec__46402,additional){
return (function (p1__46398_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.base.tag(p1__46398_SHARP_),t);
});
;})(vec__46402,additional))
}
});

rewrite_clj.zip.findz.tag_predicate.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
rewrite_clj.zip.findz.tag_predicate.cljs$lang$applyTo = (function (seq46399){
var G__46400 = cljs.core.first(seq46399);
var seq46399__$1 = cljs.core.next(seq46399);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46400,seq46399__$1);
});

rewrite_clj.zip.findz.in_range_QMARK_ = (function rewrite_clj$zip$findz$in_range_QMARK_(p__46405,p__46406){
var map__46407 = p__46405;
var map__46407__$1 = (((((!((map__46407 == null))))?(((((map__46407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46407):map__46407);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46407__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46407__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var end_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46407__$1,new cljs.core.Keyword(null,"end-row","end-row",-545103581));
var end_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46407__$1,new cljs.core.Keyword(null,"end-col","end-col",-724155879));
var map__46408 = p__46406;
var map__46408__$1 = (((((!((map__46408 == null))))?(((((map__46408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46408):map__46408);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46408__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46408__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var and__4120__auto__ = (r >= row);
if(and__4120__auto__){
var and__4120__auto____$1 = (r <= end_row);
if(and__4120__auto____$1){
var and__4120__auto____$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,row))?(c >= col):true);
if(and__4120__auto____$2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,end_row)){
return (c <= end_col);
} else {
return true;
}
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
/**
 * Find node satisfying the given predicate by repeatedly
 * applying the given movement function to the initial zipper
 * location.
 */
rewrite_clj.zip.findz.find = (function rewrite_clj$zip$findz$find(var_args){
var G__46412 = arguments.length;
switch (G__46412) {
case 2:
return rewrite_clj.zip.findz.find.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rewrite_clj.zip.findz.find.cljs$core$IFn$_invoke$arity$2 = (function (zloc,p_QMARK_){
return rewrite_clj.zip.findz.find.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_clj.zip.move.right,p_QMARK_);
});

rewrite_clj.zip.findz.find.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,p_QMARK_){
return cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(p_QMARK_),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(rewrite_clj.zip.move.end_QMARK_),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(f,zloc)))));
});

rewrite_clj.zip.findz.find.cljs$lang$maxFixedArity = 3;

/**
 * Find last node (if more than one node) that is in range of pos and
 *   satisfying the given predicate depth first from initial zipper
 *   location.
 */
rewrite_clj.zip.findz.find_last_by_pos = (function rewrite_clj$zip$findz$find_last_by_pos(var_args){
var G__46415 = arguments.length;
switch (G__46415) {
case 2:
return rewrite_clj.zip.findz.find_last_by_pos.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_last_by_pos.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rewrite_clj.zip.findz.find_last_by_pos.cljs$core$IFn$_invoke$arity$2 = (function (zloc,pos){
return rewrite_clj.zip.findz.find_last_by_pos.cljs$core$IFn$_invoke$arity$3(zloc,pos,cljs.core.constantly(true));
});

rewrite_clj.zip.findz.find_last_by_pos.cljs$core$IFn$_invoke$arity$3 = (function (zloc,pos,p_QMARK_){
return cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__46413_SHARP_){
var and__4120__auto__ = (p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__46413_SHARP_) : p_QMARK_.call(null,p1__46413_SHARP_));
if(cljs.core.truth_(and__4120__auto__)){
return rewrite_clj.zip.findz.in_range_QMARK_(cljs.core.meta(clojure.zip.node(p1__46413_SHARP_)),pos);
} else {
return and__4120__auto__;
}
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(rewrite_clj.zip.move.end_QMARK_),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(clojure.zip.next,zloc)))));
});

rewrite_clj.zip.findz.find_last_by_pos.cljs$lang$maxFixedArity = 3;

/**
 * Find node satisfying the given predicate by traversing
 * the zipper in a depth-first way.
 */
rewrite_clj.zip.findz.find_depth_first = (function rewrite_clj$zip$findz$find_depth_first(zloc,p_QMARK_){
return rewrite_clj.zip.findz.find.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_clj.zip.move.next,p_QMARK_);
});
/**
 * Find node other than the current zipper location matching
 * the given predicate by applying the given movement function
 * to the initial zipper location.
 */
rewrite_clj.zip.findz.find_next = (function rewrite_clj$zip$findz$find_next(var_args){
var G__46421 = arguments.length;
switch (G__46421) {
case 2:
return rewrite_clj.zip.findz.find_next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_next.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rewrite_clj.zip.findz.find_next.cljs$core$IFn$_invoke$arity$2 = (function (zloc,p_QMARK_){
return rewrite_clj.zip.findz.find_next.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_clj.zip.move.right,p_QMARK_);
});

rewrite_clj.zip.findz.find_next.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,p_QMARK_){
var G__46422 = zloc;
var G__46422__$1 = (((G__46422 == null))?null:(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46422) : f.call(null,G__46422)));
if((G__46422__$1 == null)){
return null;
} else {
return rewrite_clj.zip.findz.find.cljs$core$IFn$_invoke$arity$3(G__46422__$1,f,p_QMARK_);
}
});

rewrite_clj.zip.findz.find_next.cljs$lang$maxFixedArity = 3;

/**
 * Find node other than the current zipper location matching
 * the given predicate by traversing the zipper in a
 * depth-first way.
 */
rewrite_clj.zip.findz.find_next_depth_first = (function rewrite_clj$zip$findz$find_next_depth_first(zloc,p_QMARK_){
return rewrite_clj.zip.findz.find_next.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_clj.zip.move.next,p_QMARK_);
});
/**
 * Find node with the given tag by repeatedly applying the given
 * movement function to the initial zipper location.
 */
rewrite_clj.zip.findz.find_tag = (function rewrite_clj$zip$findz$find_tag(var_args){
var G__46425 = arguments.length;
switch (G__46425) {
case 2:
return rewrite_clj.zip.findz.find_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rewrite_clj.zip.findz.find_tag.cljs$core$IFn$_invoke$arity$2 = (function (zloc,t){
return rewrite_clj.zip.findz.find_tag.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_clj.zip.move.right,t);
});

rewrite_clj.zip.findz.find_tag.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,t){
return rewrite_clj.zip.findz.find.cljs$core$IFn$_invoke$arity$3(zloc,f,(function (p1__46423_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.base.tag(p1__46423_SHARP_),t);
}));
});

rewrite_clj.zip.findz.find_tag.cljs$lang$maxFixedArity = 3;

/**
 * Find node other than the current zipper location with the
 * given tag by repeatedly applying the given movement function to
 * the initial zipper location.
 */
rewrite_clj.zip.findz.find_next_tag = (function rewrite_clj$zip$findz$find_next_tag(var_args){
var G__46433 = arguments.length;
switch (G__46433) {
case 2:
return rewrite_clj.zip.findz.find_next_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_next_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rewrite_clj.zip.findz.find_next_tag.cljs$core$IFn$_invoke$arity$2 = (function (zloc,t){
return rewrite_clj.zip.findz.find_next_tag.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_clj.zip.move.right,t);
});

rewrite_clj.zip.findz.find_next_tag.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,t){
return rewrite_clj.zip.findz.find_next.cljs$core$IFn$_invoke$arity$3(zloc,f,rewrite_clj.zip.findz.tag_predicate(t));
});

rewrite_clj.zip.findz.find_next_tag.cljs$lang$maxFixedArity = 3;

/**
 * Find node with the given tag and pos depth-first from initial zipper location.
 */
rewrite_clj.zip.findz.find_tag_by_pos = (function rewrite_clj$zip$findz$find_tag_by_pos(zloc,pos,t){
return rewrite_clj.zip.findz.find_last_by_pos.cljs$core$IFn$_invoke$arity$3(zloc,pos,(function (p1__46439_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.base.tag(p1__46439_SHARP_),t);
}));
});
/**
 * Find token node matching the given predicate by applying the
 * given movement function to the initial zipper location, defaulting
 * to `right`.
 */
rewrite_clj.zip.findz.find_token = (function rewrite_clj$zip$findz$find_token(var_args){
var G__46442 = arguments.length;
switch (G__46442) {
case 2:
return rewrite_clj.zip.findz.find_token.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_token.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rewrite_clj.zip.findz.find_token.cljs$core$IFn$_invoke$arity$2 = (function (zloc,p_QMARK_){
return rewrite_clj.zip.findz.find_token.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_clj.zip.move.right,p_QMARK_);
});

rewrite_clj.zip.findz.find_token.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,p_QMARK_){
return rewrite_clj.zip.findz.find.cljs$core$IFn$_invoke$arity$3(zloc,f,rewrite_clj.zip.findz.tag_predicate.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p_QMARK_], 0)));
});

rewrite_clj.zip.findz.find_token.cljs$lang$maxFixedArity = 3;

/**
 * Find next token node matching the given predicate by applying the
 * given movement function to the initial zipper location, defaulting
 * to `right`.
 */
rewrite_clj.zip.findz.find_next_token = (function rewrite_clj$zip$findz$find_next_token(var_args){
var G__46451 = arguments.length;
switch (G__46451) {
case 2:
return rewrite_clj.zip.findz.find_next_token.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_next_token.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rewrite_clj.zip.findz.find_next_token.cljs$core$IFn$_invoke$arity$2 = (function (zloc,p_QMARK_){
return rewrite_clj.zip.findz.find_next_token.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_clj.zip.move.right,p_QMARK_);
});

rewrite_clj.zip.findz.find_next_token.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,p_QMARK_){
return rewrite_clj.zip.findz.find_token.cljs$core$IFn$_invoke$arity$3((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(zloc) : f.call(null,zloc)),f,p_QMARK_);
});

rewrite_clj.zip.findz.find_next_token.cljs$lang$maxFixedArity = 3;

/**
 * Find token node whose value matches the given one by applying the
 * given movement function to the initial zipper location, defaulting
 * to `right`.
 */
rewrite_clj.zip.findz.find_value = (function rewrite_clj$zip$findz$find_value(var_args){
var G__46456 = arguments.length;
switch (G__46456) {
case 2:
return rewrite_clj.zip.findz.find_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rewrite_clj.zip.findz.find_value.cljs$core$IFn$_invoke$arity$2 = (function (zloc,v){
return rewrite_clj.zip.findz.find_value.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_clj.zip.move.right,v);
});

rewrite_clj.zip.findz.find_value.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,v){
var p_QMARK_ = ((cljs.core.set_QMARK_(v))?cljs.core.comp.cljs$core$IFn$_invoke$arity$2(v,rewrite_clj.zip.base.sexpr):(function (p1__46453_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.base.sexpr(p1__46453_SHARP_),v);
}));
return rewrite_clj.zip.findz.find_token.cljs$core$IFn$_invoke$arity$3(zloc,f,p_QMARK_);
});

rewrite_clj.zip.findz.find_value.cljs$lang$maxFixedArity = 3;

/**
 * Find next token node whose value matches the given one by applying the
 * given movement function to the initial zipper location, defaulting
 * to `right`.
 */
rewrite_clj.zip.findz.find_next_value = (function rewrite_clj$zip$findz$find_next_value(var_args){
var G__46459 = arguments.length;
switch (G__46459) {
case 2:
return rewrite_clj.zip.findz.find_next_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_next_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rewrite_clj.zip.findz.find_next_value.cljs$core$IFn$_invoke$arity$2 = (function (zloc,v){
return rewrite_clj.zip.findz.find_next_value.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_clj.zip.move.right,v);
});

rewrite_clj.zip.findz.find_next_value.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,v){
return rewrite_clj.zip.findz.find_value.cljs$core$IFn$_invoke$arity$3((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(zloc) : f.call(null,zloc)),f,v);
});

rewrite_clj.zip.findz.find_next_value.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=rewrite_clj.zip.findz.js.map
