goog.provide('clojure.math.combinatorics');
goog.require('cljs.core');
clojure.math.combinatorics._STAR__SINGLEQUOTE_ = cljs.core._STAR_;
clojure.math.combinatorics._PLUS__SINGLEQUOTE_ = cljs.core._PLUS_;
/**
 * Lazily concatenates a collection of collections into a flat sequence,
 *   because Clojure's `apply concat` is insufficiently lazy.
 */
clojure.math.combinatorics.join = (function clojure$math$combinatorics$join(colls){
return (new cljs.core.LazySeq(null,(function (){
var temp__5735__auto__ = cljs.core.seq(colls);
if(temp__5735__auto__){
var s = temp__5735__auto__;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(s),(function (){var G__40261 = cljs.core.rest(s);
return (clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1(G__40261) : clojure.math.combinatorics.join.call(null,G__40261));
})());
} else {
return null;
}
}),null,null));
});
/**
 * Uses join to achieve lazier version of mapcat (on one collection)
 */
clojure.math.combinatorics.mapjoin = (function clojure$math$combinatorics$mapjoin(f,coll){
return clojure.math.combinatorics.join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,coll));
});
/**
 * Annoyingly, the built-in distinct? doesn't handle 0 args, so we need
 *   to write our own version that considers the empty-list to be distinct
 */
clojure.math.combinatorics.all_different_QMARK_ = (function clojure$math$combinatorics$all_different_QMARK_(s){
if(cljs.core.seq(s)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,s);
} else {
return true;
}
});
clojure.math.combinatorics.index_combinations = (function clojure$math$combinatorics$index_combinations(n,cnt){
return (new cljs.core.LazySeq(null,(function (){
var c = cljs.core.vec(cljs.core.cons(null,(function (){var iter__4523__auto__ = (function clojure$math$combinatorics$index_combinations_$_iter__40262(s__40263){
return (new cljs.core.LazySeq(null,(function (){
var s__40263__$1 = s__40263;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40263__$1);
if(temp__5735__auto__){
var s__40263__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40263__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40263__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40265 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40264 = (0);
while(true){
if((i__40264 < size__4522__auto__)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40264);
cljs.core.chunk_append(b__40265,((j + cnt) + (- (n + (1)))));

var G__40512 = (i__40264 + (1));
i__40264 = G__40512;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40265),clojure$math$combinatorics$index_combinations_$_iter__40262(cljs.core.chunk_rest(s__40263__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40265),null);
}
} else {
var j = cljs.core.first(s__40263__$2);
return cljs.core.cons(((j + cnt) + (- (n + (1)))),clojure$math$combinatorics$index_combinations_$_iter__40262(cljs.core.rest(s__40263__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
})()));
var iter_comb = ((function (c){
return (function clojure$math$combinatorics$index_combinations_$_iter_comb(c__$1,j){
if((j > n)){
return null;
} else {
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,((c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)) - (1)));
if(((c__$2.cljs$core$IFn$_invoke$arity$1 ? c__$2.cljs$core$IFn$_invoke$arity$1(j) : c__$2.call(null,j)) < j)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$2,(j + (1))], null);
} else {
var c__$3 = c__$2;
var j__$1 = j;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j__$1,(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$3,j__$1], null);
} else {
var G__40513 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$3,(j__$1 - (1)),((c__$3.cljs$core$IFn$_invoke$arity$1 ? c__$3.cljs$core$IFn$_invoke$arity$1(j__$1) : c__$3.call(null,j__$1)) - (1)));
var G__40514 = (j__$1 - (1));
c__$3 = G__40513;
j__$1 = G__40514;
continue;
}
break;
}
}
}
});})(c))
;
var step = ((function (c,iter_comb){
return (function clojure$math$combinatorics$index_combinations_$_step(c__$1,j){
return cljs.core.cons(cljs.core.rseq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(c__$1,(1),(n + (1)))),(new cljs.core.LazySeq(null,((function (c,iter_comb){
return (function (){
var next_step = iter_comb(c__$1,j);
if(cljs.core.truth_(next_step)){
return clojure$math$combinatorics$index_combinations_$_step((next_step.cljs$core$IFn$_invoke$arity$1 ? next_step.cljs$core$IFn$_invoke$arity$1((0)) : next_step.call(null,(0))),(next_step.cljs$core$IFn$_invoke$arity$1 ? next_step.cljs$core$IFn$_invoke$arity$1((1)) : next_step.call(null,(1))));
} else {
return null;
}
});})(c,iter_comb))
,null,null)));
});})(c,iter_comb))
;
return step(c,(1));
}),null,null));
});
clojure.math.combinatorics.distribute = (function clojure$math$combinatorics$distribute(m,index,total,distribution,already_distributed){
var distribution__$1 = distribution;
var index__$1 = index;
var already_distributed__$1 = already_distributed;
while(true){
if((index__$1 >= cljs.core.count(m))){
return null;
} else {
var quantity_to_distribute = (total - already_distributed__$1);
var mi = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(index__$1) : m.call(null,index__$1));
if((quantity_to_distribute <= mi)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,quantity_to_distribute,total], null));
} else {
var G__40515 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__40516 = (index__$1 + (1));
var G__40517 = (already_distributed__$1 + mi);
distribution__$1 = G__40515;
index__$1 = G__40516;
already_distributed__$1 = G__40517;
continue;
}
}
break;
}
});
clojure.math.combinatorics.next_distribution = (function clojure$math$combinatorics$next_distribution(m,total,distribution){
var vec__40266 = cljs.core.peek(distribution);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40266,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40266,(1),null);
var this_and_to_the_left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40266,(2),null);
if((index < (cljs.core.count(m) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket,(1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pop(distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(this_bucket - (1)),(this_and_to_the_left - (1))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null)], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket,total)){
return null;
} else {
var distribution__$1 = cljs.core.pop(distribution);
while(true){
var vec__40269 = cljs.core.peek(distribution__$1);
var index__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40269,(0),null);
var this_bucket__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40269,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40269,(2),null);
var distribution__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket__$1,(1)))?cljs.core.pop(distribution__$1):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(m,(index__$1 + (1)))))){
return clojure.math.combinatorics.distribute(m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq(distribution__$2)){
var G__40518 = distribution__$2;
distribution__$1 = G__40518;
continue;
} else {
return null;

}
}
break;
}

}
}
});
clojure.math.combinatorics.bounded_distributions = (function clojure$math$combinatorics$bounded_distributions(m,t){
var step = (function clojure$math$combinatorics$bounded_distributions_$_step(distribution){
return cljs.core.cons(distribution,(new cljs.core.LazySeq(null,(function (){
var temp__5735__auto__ = clojure.math.combinatorics.next_distribution(m,t,distribution);
if(cljs.core.truth_(temp__5735__auto__)){
var next_step = temp__5735__auto__;
return clojure$math$combinatorics$bounded_distributions_$_step(next_step);
} else {
return null;
}
}),null,null)));
});
return step(clojure.math.combinatorics.distribute(m,(0),t,cljs.core.PersistentVector.EMPTY,(0)));
});
/**
 * Handles the case when you want the combinations of a list with duplicate items.
 */
clojure.math.combinatorics.multi_comb = (function clojure$math$combinatorics$multi_comb(l,t){
var f = cljs.core.frequencies(l);
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(l));
var domain = cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v));
var m = cljs.core.vec((function (){var iter__4523__auto__ = ((function (f,v,domain){
return (function clojure$math$combinatorics$multi_comb_$_iter__40272(s__40273){
return (new cljs.core.LazySeq(null,((function (f,v,domain){
return (function (){
var s__40273__$1 = s__40273;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40273__$1);
if(temp__5735__auto__){
var s__40273__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40273__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40273__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40275 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40274 = (0);
while(true){
if((i__40274 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40274);
cljs.core.chunk_append(b__40275,(function (){var G__40276 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40276) : f.call(null,G__40276));
})());

var G__40519 = (i__40274 + (1));
i__40274 = G__40519;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40275),clojure$math$combinatorics$multi_comb_$_iter__40272(cljs.core.chunk_rest(s__40273__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40275),null);
}
} else {
var i = cljs.core.first(s__40273__$2);
return cljs.core.cons((function (){var G__40277 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40277) : f.call(null,G__40277));
})(),clojure$math$combinatorics$multi_comb_$_iter__40272(cljs.core.rest(s__40273__$2)));
}
} else {
return null;
}
break;
}
});})(f,v,domain))
,null,null));
});})(f,v,domain))
;
return iter__4523__auto__(domain);
})());
var qs = clojure.math.combinatorics.bounded_distributions(m,t);
var iter__4523__auto__ = ((function (f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__40278(s__40279){
return (new cljs.core.LazySeq(null,((function (f,v,domain,m,qs){
return (function (){
var s__40279__$1 = s__40279;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40279__$1);
if(temp__5735__auto__){
var s__40279__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40279__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40279__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40281 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40280 = (0);
while(true){
if((i__40280 < size__4522__auto__)){
var q = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40280);
cljs.core.chunk_append(b__40281,clojure.math.combinatorics.join((function (){var iter__4523__auto__ = ((function (i__40280,q,c__4521__auto__,size__4522__auto__,b__40281,s__40279__$2,temp__5735__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__40278_$_iter__40282(s__40283){
return (new cljs.core.LazySeq(null,((function (i__40280,q,c__4521__auto__,size__4522__auto__,b__40281,s__40279__$2,temp__5735__auto__,f,v,domain,m,qs){
return (function (){
var s__40283__$1 = s__40283;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__40283__$1);
if(temp__5735__auto____$1){
var s__40283__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40283__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__40283__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__40285 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__40284 = (0);
while(true){
if((i__40284 < size__4522__auto____$1)){
var vec__40286 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__40284);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40286,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40286,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40286,(2),null);
cljs.core.chunk_append(b__40285,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__40520 = (i__40284 + (1));
i__40284 = G__40520;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40285),clojure$math$combinatorics$multi_comb_$_iter__40278_$_iter__40282(cljs.core.chunk_rest(s__40283__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40285),null);
}
} else {
var vec__40289 = cljs.core.first(s__40283__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40289,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40289,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40289,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__40278_$_iter__40282(cljs.core.rest(s__40283__$2)));
}
} else {
return null;
}
break;
}
});})(i__40280,q,c__4521__auto__,size__4522__auto__,b__40281,s__40279__$2,temp__5735__auto__,f,v,domain,m,qs))
,null,null));
});})(i__40280,q,c__4521__auto__,size__4522__auto__,b__40281,s__40279__$2,temp__5735__auto__,f,v,domain,m,qs))
;
return iter__4523__auto__(q);
})()));

var G__40521 = (i__40280 + (1));
i__40280 = G__40521;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40281),clojure$math$combinatorics$multi_comb_$_iter__40278(cljs.core.chunk_rest(s__40279__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40281),null);
}
} else {
var q = cljs.core.first(s__40279__$2);
return cljs.core.cons(clojure.math.combinatorics.join((function (){var iter__4523__auto__ = ((function (q,s__40279__$2,temp__5735__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__40278_$_iter__40292(s__40293){
return (new cljs.core.LazySeq(null,((function (q,s__40279__$2,temp__5735__auto__,f,v,domain,m,qs){
return (function (){
var s__40293__$1 = s__40293;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__40293__$1);
if(temp__5735__auto____$1){
var s__40293__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40293__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40293__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40295 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40294 = (0);
while(true){
if((i__40294 < size__4522__auto__)){
var vec__40296 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40294);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40296,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40296,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40296,(2),null);
cljs.core.chunk_append(b__40295,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__40522 = (i__40294 + (1));
i__40294 = G__40522;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40295),clojure$math$combinatorics$multi_comb_$_iter__40278_$_iter__40292(cljs.core.chunk_rest(s__40293__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40295),null);
}
} else {
var vec__40299 = cljs.core.first(s__40293__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40299,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40299,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40299,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__40278_$_iter__40292(cljs.core.rest(s__40293__$2)));
}
} else {
return null;
}
break;
}
});})(q,s__40279__$2,temp__5735__auto__,f,v,domain,m,qs))
,null,null));
});})(q,s__40279__$2,temp__5735__auto__,f,v,domain,m,qs))
;
return iter__4523__auto__(q);
})()),clojure$math$combinatorics$multi_comb_$_iter__40278(cljs.core.rest(s__40279__$2)));
}
} else {
return null;
}
break;
}
});})(f,v,domain,m,qs))
,null,null));
});})(f,v,domain,m,qs))
;
return iter__4523__auto__(qs);
});
/**
 * All the unique ways of taking t different elements from items
 */
clojure.math.combinatorics.combinations = (function clojure$math$combinatorics$combinations(items,t){
var v_items = cljs.core.vec(cljs.core.reverse(items));
if((t === (0))){
return (new cljs.core.List(null,cljs.core.List.EMPTY,null,(1),null));
} else {
var cnt = cljs.core.count(items);
if((t > cnt)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,(1))){
var iter__4523__auto__ = ((function (cnt,v_items){
return (function clojure$math$combinatorics$combinations_$_iter__40303(s__40304){
return (new cljs.core.LazySeq(null,((function (cnt,v_items){
return (function (){
var s__40304__$1 = s__40304;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40304__$1);
if(temp__5735__auto__){
var s__40304__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40304__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40304__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40306 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40305 = (0);
while(true){
if((i__40305 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40305);
cljs.core.chunk_append(b__40306,(new cljs.core.List(null,item,null,(1),null)));

var G__40523 = (i__40305 + (1));
i__40305 = G__40523;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40306),clojure$math$combinatorics$combinations_$_iter__40303(cljs.core.chunk_rest(s__40304__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40306),null);
}
} else {
var item = cljs.core.first(s__40304__$2);
return cljs.core.cons((new cljs.core.List(null,item,null,(1),null)),clojure$math$combinatorics$combinations_$_iter__40303(cljs.core.rest(s__40304__$2)));
}
} else {
return null;
}
break;
}
});})(cnt,v_items))
,null,null));
});})(cnt,v_items))
;
return iter__4523__auto__(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,cnt)){
return (new cljs.core.List(null,cljs.core.seq(items),null,(1),null));
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cnt,v_items){
return (function (p1__40302_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v_items,p1__40302_SHARP_);
});})(cnt,v_items))
,clojure.math.combinatorics.index_combinations(t,cnt));
}
} else {
return clojure.math.combinatorics.multi_comb(items,t);

}
}
}
}
});
/**
 * Given a sequence that may have chunks, return a sequence that is 1-at-a-time
 * lazy with no chunks. Chunks are good for efficiency when the data items are
 * small, but when being processed via map, for example, a reference is kept to
 * every function result in the chunk until the entire chunk has been processed,
 * which increases the amount of memory in use that cannot be garbage
 * collected.
 */
clojure.math.combinatorics.unchunk = (function clojure$math$combinatorics$unchunk(s){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.seq(s)){
return cljs.core.cons(cljs.core.first(s),(function (){var G__40307 = cljs.core.rest(s);
return (clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1(G__40307) : clojure.math.combinatorics.unchunk.call(null,G__40307));
})());
} else {
return null;
}
}),null,null));
});
/**
 * All the subsets of items
 */
clojure.math.combinatorics.subsets = (function clojure$math$combinatorics$subsets(items){
return clojure.math.combinatorics.mapjoin((function (n){
return clojure.math.combinatorics.combinations(items,n);
}),clojure.math.combinatorics.unchunk(cljs.core.range.cljs$core$IFn$_invoke$arity$1((cljs.core.count(items) + (1)))));
});
/**
 * All the ways to take one item from each sequence
 */
clojure.math.combinatorics.cartesian_product = (function clojure$math$combinatorics$cartesian_product(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40524 = arguments.length;
var i__4731__auto___40525 = (0);
while(true){
if((i__4731__auto___40525 < len__4730__auto___40524)){
args__4736__auto__.push((arguments[i__4731__auto___40525]));

var G__40526 = (i__4731__auto___40525 + (1));
i__4731__auto___40525 = G__40526;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = ((function (v_original_seqs){
return (function clojure$math$combinatorics$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5733__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5733__auto__){
var rst = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__40527 = (i - (1));
var G__40528 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__40527;
v_seqs__$2 = G__40528;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return clojure$math$combinatorics$step(increment(v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step(v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

clojure.math.combinatorics.cartesian_product.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq40308){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40308));
});

/**
 * All the ways of taking n (possibly the same) elements from the sequence of items
 */
clojure.math.combinatorics.selections = (function clojure$math$combinatorics$selections(items,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.cartesian_product,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(items)));
});
clojure.math.combinatorics.iter_perm = (function clojure$math$combinatorics$iter_perm(v){
var len = cljs.core.count(v);
var j = (function (){var i = (len - (2));
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
if(((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)) < (function (){var G__40309 = (i + (1));
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__40309) : v.call(null,G__40309));
})())){
return i;
} else {
var G__40529 = (i - (1));
i = G__40529;
continue;

}
}
break;
}
})();
if(cljs.core.truth_(j)){
var vj = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j));
var l = (function (){var i = (len - (1));
while(true){
if((vj < (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)))){
return i;
} else {
var G__40530 = (i - (1));
i = G__40530;
continue;
}
break;
}
})();
var v__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,j,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(l) : v.call(null,l)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l,vj], 0));
var k = (j + (1));
var l__$1 = (len - (1));
while(true){
if((k < l__$1)){
var G__40531 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v__$1,k,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(l__$1) : v__$1.call(null,l__$1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l__$1,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(k) : v__$1.call(null,k))], 0));
var G__40532 = (k + (1));
var G__40533 = (l__$1 - (1));
v__$1 = G__40531;
k = G__40532;
l__$1 = G__40533;
continue;
} else {
return v__$1;
}
break;
}
} else {
return null;
}
});
clojure.math.combinatorics.vec_lex_permutations = (function clojure$math$combinatorics$vec_lex_permutations(v){
if(cljs.core.truth_(v)){
return cljs.core.cons(v,(new cljs.core.LazySeq(null,(function (){
var G__40310 = clojure.math.combinatorics.iter_perm(v);
return (clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1(G__40310) : clojure.math.combinatorics.vec_lex_permutations.call(null,G__40310));
}),null,null)));
} else {
return null;
}
});
/**
 * DEPRECATED as a public function.
 * 
 * In prior versions of the combinatorics library, there were two similar functions: permutations and lex-permutations.  It was a source of confusion to know which to call.  Now, you can always call permutations.  When appropriate (i.e., when you pass in a sorted sequence of numbers), permutations will automatically call lex-permutations as a speed optimization.
 */
clojure.math.combinatorics.lex_permutations = (function clojure$math$combinatorics$lex_permutations(c){
return (new cljs.core.LazySeq(null,(function (){
var vec_sorted = cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(c));
if((cljs.core.count(vec_sorted) === (0))){
return (new cljs.core.List(null,cljs.core.PersistentVector.EMPTY,null,(1),null));
} else {
return clojure.math.combinatorics.vec_lex_permutations(vec_sorted);
}
}),null,null));
});
/**
 * Returns true iff s is a sequence of numbers in non-decreasing order
 */
clojure.math.combinatorics.sorted_numbers_QMARK_ = (function clojure$math$combinatorics$sorted_numbers_QMARK_(s){
var and__4120__auto__ = cljs.core.every_QMARK_(cljs.core.number_QMARK_,s);
if(and__4120__auto__){
var or__4131__auto__ = cljs.core.empty_QMARK_(s);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT__EQ_,s);
}
} else {
return and__4120__auto__;
}
});
/**
 * Handles the case when you want the permutations of a list with duplicate items.
 */
clojure.math.combinatorics.multi_perm = (function clojure$math$combinatorics$multi_perm(l){
var f = cljs.core.frequencies(l);
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(l));
var indices = clojure.math.combinatorics.join((function (){var iter__4523__auto__ = ((function (f,v){
return (function clojure$math$combinatorics$multi_perm_$_iter__40311(s__40312){
return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){
var s__40312__$1 = s__40312;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40312__$1);
if(temp__5735__auto__){
var s__40312__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40312__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40312__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40314 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40313 = (0);
while(true){
if((i__40313 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40313);
cljs.core.chunk_append(b__40314,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__40315 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40315) : f.call(null,G__40315));
})(),i));

var G__40534 = (i__40313 + (1));
i__40313 = G__40534;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40314),clojure$math$combinatorics$multi_perm_$_iter__40311(cljs.core.chunk_rest(s__40312__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40314),null);
}
} else {
var i = cljs.core.first(s__40312__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__40316 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40316) : f.call(null,G__40316));
})(),i),clojure$math$combinatorics$multi_perm_$_iter__40311(cljs.core.rest(s__40312__$2)));
}
} else {
return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),clojure.math.combinatorics.lex_permutations(indices));
});
/**
 * All the distinct permutations of items, lexicographic by index 
 *   (special handling for duplicate items).
 */
clojure.math.combinatorics.permutations = (function clojure$math$combinatorics$permutations(items){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_(items))){
return clojure.math.combinatorics.lex_permutations(items);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
var v = cljs.core.vec(items);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (v){
return (function (p1__40317_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,p1__40317_SHARP_);
});})(v))
,clojure.math.combinatorics.lex_permutations(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v))));
} else {
return clojure.math.combinatorics.multi_perm(items);

}
}
});
/**
 * Every permutation of every combination of t elements from items
 */
clojure.math.combinatorics.permuted_combinations = (function clojure$math$combinatorics$permuted_combinations(items,t){
return clojure.math.combinatorics.join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.permutations,clojure.math.combinatorics.combinations(items,t)));
});
clojure.math.combinatorics.factorial = (function clojure$math$combinatorics$factorial(n){
if(cljs.core.integer_QMARK_(n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if((!((n < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var acc = (1);
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return acc;
} else {
var G__40535 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(acc,n__$1) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,acc,n__$1));
var G__40536 = (n__$1 - (1));
acc = G__40535;
n__$1 = G__40536;
continue;
}
break;
}
});
/**
 * Input is a non-negative base 10 integer, output is the number in the
 * factorial number system (http://en.wikipedia.org/wiki/Factorial_number_system)
 * expressed as a list of 'digits'
 */
clojure.math.combinatorics.factorial_numbers = (function clojure$math$combinatorics$factorial_numbers(n){
if(cljs.core.integer_QMARK_(n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if((!((n < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var n__$1 = n;
var digits = cljs.core.List.EMPTY;
var divisor = (1);
while(true){
if((n__$1 === (0))){
return digits;
} else {
var q = cljs.core.quot(n__$1,divisor);
var r = cljs.core.rem(n__$1,divisor);
var G__40537 = q;
var G__40538 = cljs.core.cons(r,digits);
var G__40539 = (divisor + (1));
n__$1 = G__40537;
digits = G__40538;
divisor = G__40539;
continue;
}
break;
}
});
clojure.math.combinatorics.remove_nth = (function clojure$math$combinatorics$remove_nth(l,n){
var acc = cljs.core.PersistentVector.EMPTY;
var l__$1 = l;
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.rest(l__$1));
} else {
var G__40540 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.first(l__$1));
var G__40541 = cljs.core.rest(l__$1);
var G__40542 = (n__$1 - (1));
acc = G__40540;
l__$1 = G__40541;
n__$1 = G__40542;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
clojure.math.combinatorics.nth_permutation_distinct = (function clojure$math$combinatorics$nth_permutation_distinct(l,n){
if((n < clojure.math.combinatorics.factorial(cljs.core.count(l)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.factorial(cljs.core.count(l)),"permutations."], 0)),"\n","(< n (factorial (count l)))"].join('')));
}

var length = cljs.core.count(l);
var fact_nums = clojure.math.combinatorics.factorial_numbers(n);
var indices = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((length - cljs.core.count(fact_nums)),(0)),fact_nums);
var l__$1 = l;
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(indices)){
return perm;
} else {
var i = cljs.core.first(indices);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(l__$1,i);
var G__40543 = cljs.core.rest(indices);
var G__40544 = clojure.math.combinatorics.remove_nth(l__$1,i);
var G__40545 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
indices = G__40543;
l__$1 = G__40544;
perm = G__40545;
continue;
}
break;
}
});
clojure.math.combinatorics.count_permutations_from_frequencies = (function clojure$math$combinatorics$count_permutations_from_frequencies(freqs){
var counts = cljs.core.vals(freqs);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,clojure.math.combinatorics.factorial(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,counts)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.factorial,counts));
});
/**
 * Counts the number of distinct permutations of l
 */
clojure.math.combinatorics.count_permutations = (function clojure$math$combinatorics$count_permutations(l){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(l))){
return clojure.math.combinatorics.factorial(cljs.core.count(l));
} else {
return clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.frequencies(l));
}
});
/**
 * Takes a sorted frequency map and returns how far into the sequence of
 * lexicographic permutations you get by varying the first item
 */
clojure.math.combinatorics.initial_perm_numbers = (function clojure$math$combinatorics$initial_perm_numbers(freqs){
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(0),(function (){var iter__4523__auto__ = (function clojure$math$combinatorics$initial_perm_numbers_$_iter__40318(s__40319){
return (new cljs.core.LazySeq(null,(function (){
var s__40319__$1 = s__40319;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40319__$1);
if(temp__5735__auto__){
var s__40319__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40319__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40319__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40321 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40320 = (0);
while(true){
if((i__40320 < size__4522__auto__)){
var vec__40322 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40320);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40322,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40322,(1),null);
cljs.core.chunk_append(b__40321,clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))));

var G__40546 = (i__40320 + (1));
i__40320 = G__40546;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40321),clojure$math$combinatorics$initial_perm_numbers_$_iter__40318(cljs.core.chunk_rest(s__40319__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40321),null);
}
} else {
var vec__40325 = cljs.core.first(s__40319__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40325,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40325,(1),null);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))),clojure$math$combinatorics$initial_perm_numbers_$_iter__40318(cljs.core.rest(s__40319__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(freqs);
})());
});
/**
 * Finds the index and remainder from the initial-perm-numbers.
 */
clojure.math.combinatorics.index_remainder = (function clojure$math$combinatorics$index_remainder(perm_numbers,n){
var perm_numbers__$1 = perm_numbers;
var index = (0);
while(true){
if((((cljs.core.first(perm_numbers__$1) <= n)) && ((n < cljs.core.second(perm_numbers__$1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(n - cljs.core.first(perm_numbers__$1))], null);
} else {
var G__40547 = cljs.core.rest(perm_numbers__$1);
var G__40548 = (index + (1));
perm_numbers__$1 = G__40547;
index = G__40548;
continue;
}
break;
}
});
clojure.math.combinatorics.dec_key = (function clojure$math$combinatorics$dec_key(m,k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.dec);
}
});
/**
 * Input is a non-negative base 10 integer n, and a sorted frequency map freqs.
 * Output is a list of 'digits' in this wacky duplicate factorial number system
 */
clojure.math.combinatorics.factorial_numbers_with_duplicates = (function clojure$math$combinatorics$factorial_numbers_with_duplicates(n,freqs){
var n__$1 = n;
var digits = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
while(true){
if((n__$1 === (0))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(digits,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(freqs__$1)),(0)));
} else {
var vec__40331 = clojure.math.combinatorics.index_remainder(clojure.math.combinatorics.initial_perm_numbers(freqs__$1),n__$1);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40331,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40331,(1),null);
var G__40549 = remainder;
var G__40550 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(digits,index);
var G__40551 = (function (){var nth_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(freqs__$1),index);
return clojure.math.combinatorics.dec_key(freqs__$1,nth_key);
})();
n__$1 = G__40549;
digits = G__40550;
freqs__$1 = G__40551;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
clojure.math.combinatorics.nth_permutation_duplicates = (function clojure$math$combinatorics$nth_permutation_duplicates(l,n){
if((n < clojure.math.combinatorics.count_permutations(l))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.count_permutations(l),"permutations."], 0)),"\n","(< n (count-permutations l))"].join('')));
}

var freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(l));
var indices = clojure.math.combinatorics.factorial_numbers_with_duplicates(n,freqs);
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(indices)){
return perm;
} else {
var i = cljs.core.first(indices);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(freqs),i);
var G__40552 = clojure.math.combinatorics.dec_key(freqs,item);
var G__40553 = cljs.core.rest(indices);
var G__40554 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
freqs = G__40552;
indices = G__40553;
perm = G__40554;
continue;
}
break;
}
});
/**
 * (nth (permutations items)) but calculated more directly.
 */
clojure.math.combinatorics.nth_permutation = (function clojure$math$combinatorics$nth_permutation(items,n){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_(items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.nth_permutation_distinct(items,n);
} else {
return clojure.math.combinatorics.nth_permutation_duplicates(items,n);
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
var v = cljs.core.vec(items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(items)),n);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,perm_indices));
} else {
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__4523__auto__ = ((function (v,f){
return (function clojure$math$combinatorics$nth_permutation_$_iter__40334(s__40335){
return (new cljs.core.LazySeq(null,((function (v,f){
return (function (){
var s__40335__$1 = s__40335;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40335__$1);
if(temp__5735__auto__){
var s__40335__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40335__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40335__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40337 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40336 = (0);
while(true){
if((i__40336 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40336);
cljs.core.chunk_append(b__40337,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__40338 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40338) : f.call(null,G__40338));
})(),i));

var G__40555 = (i__40336 + (1));
i__40336 = G__40555;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40337),clojure$math$combinatorics$nth_permutation_$_iter__40334(cljs.core.chunk_rest(s__40335__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40337),null);
}
} else {
var i = cljs.core.first(s__40335__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__40339 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40339) : f.call(null,G__40339));
})(),i),clojure$math$combinatorics$nth_permutation_$_iter__40334(cljs.core.rest(s__40335__$2)));
}
} else {
return null;
}
break;
}
});})(v,f))
,null,null));
});})(v,f))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,clojure.math.combinatorics.nth_permutation_duplicates(indices,n)));
}
}
});
/**
 * (drop n (permutations items)) but calculated more directly.
 */
clojure.math.combinatorics.drop_permutations = (function clojure$math$combinatorics$drop_permutations(items,n){
if((n === (0))){
return clojure.math.combinatorics.permutations(items);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,clojure.math.combinatorics.count_permutations(items))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_(items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.vec_lex_permutations(clojure.math.combinatorics.nth_permutation_distinct(items,n));
} else {
return clojure.math.combinatorics.vec_lex_permutations(clojure.math.combinatorics.nth_permutation_duplicates(items,n));
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
var v = cljs.core.vec(items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(items)),n);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations(perm_indices));
} else {
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__4523__auto__ = ((function (v,f){
return (function clojure$math$combinatorics$drop_permutations_$_iter__40340(s__40341){
return (new cljs.core.LazySeq(null,((function (v,f){
return (function (){
var s__40341__$1 = s__40341;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40341__$1);
if(temp__5735__auto__){
var s__40341__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40341__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40341__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40343 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40342 = (0);
while(true){
if((i__40342 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40342);
cljs.core.chunk_append(b__40343,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__40344 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40344) : f.call(null,G__40344));
})(),i));

var G__40556 = (i__40342 + (1));
i__40342 = G__40556;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40343),clojure$math$combinatorics$drop_permutations_$_iter__40340(cljs.core.chunk_rest(s__40341__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40343),null);
}
} else {
var i = cljs.core.first(s__40341__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__40345 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40345) : f.call(null,G__40345));
})(),i),clojure$math$combinatorics$drop_permutations_$_iter__40340(cljs.core.rest(s__40341__$2)));
}
} else {
return null;
}
break;
}
});})(v,f))
,null,null));
});})(v,f))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations(clojure.math.combinatorics.nth_permutation_duplicates(indices,n)));
}
}

}
}
});
clojure.math.combinatorics.n_take_k = (function clojure$math$combinatorics$n_take_k(n,k){
while(true){
if((k < (0))){
return (0);
} else {
if((k > n)){
return (0);
} else {
if((k === (0))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(1))){
return n;
} else {
if((k > cljs.core.quot(n,(2)))){
var G__40557 = n;
var G__40558 = (n - k);
n = G__40557;
k = G__40558;
continue;
} else {
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._STAR__SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$2(((n - k) + (1)),(n + (1)))) / cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._STAR__SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(k + (1)))));

}
}
}
}
}
break;
}
});
clojure.math.combinatorics.count_combinations_from_frequencies = (function clojure$math$combinatorics$count_combinations_from_frequencies(freqs,t){
var counts = cljs.core.vals(freqs);
var sum = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,counts);
if((t === (0))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,(1))){
return cljs.core.count(freqs);
} else {
if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),counts)){
return clojure.math.combinatorics.n_take_k(cljs.core.count(freqs),t);
} else {
if((t > sum)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,sum)){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(freqs),(1))){
return (1);
} else {
var new_freqs = clojure.math.combinatorics.dec_key(freqs,cljs.core.first(cljs.core.keys(freqs)));
var G__40346 = (function (){var G__40348 = new_freqs;
var G__40349 = (t - (1));
return (clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2(G__40348,G__40349) : clojure.math.combinatorics.count_combinations_from_frequencies.call(null,G__40348,G__40349));
})();
var G__40347 = (function (){var G__40350 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs,cljs.core.first(cljs.core.keys(freqs)));
var G__40351 = t;
return (clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2(G__40350,G__40351) : clojure.math.combinatorics.count_combinations_from_frequencies.call(null,G__40350,G__40351));
})();
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__40346,G__40347) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__40346,G__40347));

}
}
}
}
}
}
});
/**
 * We need an internal version that doesn't memoize each call to count-combinations-from-frequencies
 * so that we can memoize over a series of calls.
 */
clojure.math.combinatorics.count_combinations_unmemoized = (function clojure$math$combinatorics$count_combinations_unmemoized(items,t){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.n_take_k(cljs.core.count(items),t);
} else {
return (clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2(cljs.core.frequencies(items),t) : clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.frequencies(items),t));
}
});
/**
 * (count (combinations items t)) but computed more directly
 */
clojure.math.combinatorics.count_combinations = (function clojure$math$combinatorics$count_combinations(items,t){
var count_combinations_from_frequencies_orig_val__40352 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__40353 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__40353;

try{return clojure.math.combinatorics.count_combinations_unmemoized(items,t);
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__40352;
}});
clojure.math.combinatorics.expt_int = (function clojure$math$combinatorics$expt_int(base,pow){
var n = pow;
var y = (1);
var z = base;
while(true){
var t = cljs.core.even_QMARK_(n);
var n__$1 = cljs.core.quot(n,(2));
if(t){
var G__40559 = n__$1;
var G__40560 = y;
var G__40561 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__40559;
y = G__40560;
z = G__40561;
continue;
} else {
if((n__$1 === (0))){
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
} else {
var G__40562 = n__$1;
var G__40563 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
var G__40564 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__40562;
y = G__40563;
z = G__40564;
continue;

}
}
break;
}
});
clojure.math.combinatorics.count_subsets_unmemoized = (function clojure$math$combinatorics$count_subsets_unmemoized(items){
if(cljs.core.empty_QMARK_(items)){
return (1);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.expt_int((2),cljs.core.count(items));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(function (){var iter__4523__auto__ = (function clojure$math$combinatorics$count_subsets_unmemoized_$_iter__40354(s__40355){
return (new cljs.core.LazySeq(null,(function (){
var s__40355__$1 = s__40355;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40355__$1);
if(temp__5735__auto__){
var s__40355__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40355__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40355__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40357 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40356 = (0);
while(true){
if((i__40356 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40356);
cljs.core.chunk_append(b__40357,clojure.math.combinatorics.count_combinations_unmemoized(items,i));

var G__40565 = (i__40356 + (1));
i__40356 = G__40565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40357),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__40354(cljs.core.chunk_rest(s__40355__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40357),null);
}
} else {
var i = cljs.core.first(s__40355__$2);
return cljs.core.cons(clojure.math.combinatorics.count_combinations_unmemoized(items,i),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__40354(cljs.core.rest(s__40355__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(cljs.core.count(items) + (1))));
})());

}
}
});
/**
 * (count (subsets items)) but computed more directly
 */
clojure.math.combinatorics.count_subsets = (function clojure$math$combinatorics$count_subsets(items){
var count_combinations_from_frequencies_orig_val__40358 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__40359 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__40359;

try{return clojure.math.combinatorics.count_subsets_unmemoized(items);
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__40358;
}});
/**
 * The nth element of the sequence of t-combinations of items,
 * where items is a collection of distinct elements
 */
clojure.math.combinatorics.nth_combination_distinct = (function clojure$math$combinatorics$nth_combination_distinct(items,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var items__$1 = items;
var t__$1 = t;
var n__$1 = n;
while(true){
if((((n__$1 === (0))) || (cljs.core.empty_QMARK_(items__$1)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.take.cljs$core$IFn$_invoke$arity$2(t__$1,items__$1));
} else {
var dc_dt = clojure.math.combinatorics.n_take_k((cljs.core.count(items__$1) - (1)),(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__40566 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.first(items__$1));
var G__40567 = cljs.core.rest(items__$1);
var G__40568 = (t__$1 - (1));
var G__40569 = n__$1;
comb = G__40566;
items__$1 = G__40567;
t__$1 = G__40568;
n__$1 = G__40569;
continue;
} else {
var G__40570 = comb;
var G__40571 = cljs.core.rest(items__$1);
var G__40572 = t__$1;
var G__40573 = (n__$1 - dc_dt);
comb = G__40570;
items__$1 = G__40571;
t__$1 = G__40572;
n__$1 = G__40573;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of the multiset
 * represented by freqs
 */
clojure.math.combinatorics.nth_combination_freqs = (function clojure$math$combinatorics$nth_combination_freqs(freqs,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
var t__$1 = t;
var n__$1 = n;
while(true){
if((((n__$1 === (0))) || (cljs.core.empty_QMARK_(freqs__$1)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.take.cljs$core$IFn$_invoke$arity$2(t__$1,clojure.math.combinatorics.join((function (){var iter__4523__auto__ = ((function (comb,freqs__$1,t__$1,n__$1){
return (function clojure$math$combinatorics$nth_combination_freqs_$_iter__40370(s__40371){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__40371__$1 = s__40371;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40371__$1);
if(temp__5735__auto__){
var s__40371__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40371__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40371__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40373 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40372 = (0);
while(true){
if((i__40372 < size__4522__auto__)){
var vec__40374 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40372);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40374,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40374,(1),null);
cljs.core.chunk_append(b__40373,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k));

var G__40574 = (i__40372 + (1));
i__40372 = G__40574;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40373),clojure$math$combinatorics$nth_combination_freqs_$_iter__40370(cljs.core.chunk_rest(s__40371__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40373),null);
}
} else {
var vec__40377 = cljs.core.first(s__40371__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40377,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40377,(1),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k),clojure$math$combinatorics$nth_combination_freqs_$_iter__40370(cljs.core.rest(s__40371__$2)));
}
} else {
return null;
}
break;
}
});})(comb,freqs__$1,t__$1,n__$1))
,null,null));
});})(comb,freqs__$1,t__$1,n__$1))
;
return iter__4523__auto__(freqs__$1);
})())));
} else {
var first_key = cljs.core.first(cljs.core.keys(freqs__$1));
var remove_one_key = clojure.math.combinatorics.dec_key(freqs__$1,first_key);
var dc_dt = (clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2(remove_one_key,(t__$1 - (1))) : clojure.math.combinatorics.count_combinations_from_frequencies.call(null,remove_one_key,(t__$1 - (1))));
if((n__$1 < dc_dt)){
var G__40575 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,first_key);
var G__40576 = remove_one_key;
var G__40577 = (t__$1 - (1));
var G__40578 = n__$1;
comb = G__40575;
freqs__$1 = G__40576;
t__$1 = G__40577;
n__$1 = G__40578;
continue;
} else {
var G__40579 = comb;
var G__40580 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs__$1,first_key);
var G__40581 = t__$1;
var G__40582 = (n__$1 - dc_dt);
comb = G__40579;
freqs__$1 = G__40580;
t__$1 = G__40581;
n__$1 = G__40582;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of items
 */
clojure.math.combinatorics.nth_combination = (function clojure$math$combinatorics$nth_combination(items,t,n){
if((n < clojure.math.combinatorics.count_combinations(items,t))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.count_combinations_unmemoized(items,t),"combinations."], 0)),"\n","(< n (count-combinations items t))"].join('')));
}

if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.nth_combination_distinct(items,t,n);
} else {
var count_combinations_from_frequencies_orig_val__40380 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__40381 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__40381;

try{var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__4523__auto__ = ((function (v,f,count_combinations_from_frequencies_orig_val__40380,count_combinations_from_frequencies_temp_val__40381){
return (function clojure$math$combinatorics$nth_combination_$_iter__40382(s__40383){
return (new cljs.core.LazySeq(null,((function (v,f,count_combinations_from_frequencies_orig_val__40380,count_combinations_from_frequencies_temp_val__40381){
return (function (){
var s__40383__$1 = s__40383;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40383__$1);
if(temp__5735__auto__){
var s__40383__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40383__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40383__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40385 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40384 = (0);
while(true){
if((i__40384 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40384);
cljs.core.chunk_append(b__40385,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__40386 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40386) : f.call(null,G__40386));
})(),i));

var G__40583 = (i__40384 + (1));
i__40384 = G__40583;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40385),clojure$math$combinatorics$nth_combination_$_iter__40382(cljs.core.chunk_rest(s__40383__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40385),null);
}
} else {
var i = cljs.core.first(s__40383__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__40387 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40387) : f.call(null,G__40387));
})(),i),clojure$math$combinatorics$nth_combination_$_iter__40382(cljs.core.rest(s__40383__$2)));
}
} else {
return null;
}
break;
}
});})(v,f,count_combinations_from_frequencies_orig_val__40380,count_combinations_from_frequencies_temp_val__40381))
,null,null));
});})(v,f,count_combinations_from_frequencies_orig_val__40380,count_combinations_from_frequencies_temp_val__40381))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
var indices_freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(indices));
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,clojure.math.combinatorics.nth_combination_freqs(indices_freqs,t,n)));
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__40380;
}}
});
clojure.math.combinatorics.nth_subset = (function clojure$math$combinatorics$nth_subset(items,n){
if((n < clojure.math.combinatorics.count_subsets(items))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.count_subsets(items),"subsets."], 0)),"\n","(< n (count-subsets items))"].join('')));
}

var size = (0);
var n__$1 = n;
while(true){
var num_combinations = clojure.math.combinatorics.count_combinations(items,size);
if((n__$1 < num_combinations)){
return clojure.math.combinatorics.nth_combination(items,size,n__$1);
} else {
var G__40584 = (size + (1));
var G__40585 = (n__$1 - num_combinations);
size = G__40584;
n__$1 = G__40585;
continue;
}
break;
}
});
/**
 * The opposite of nth, i.e., from an item in a list, find the n
 */
clojure.math.combinatorics.list_index = (function clojure$math$combinatorics$list_index(l,item){
var l__$1 = l;
var n = (0);
while(true){
if(cljs.core.seq(l__$1)){
} else {
throw (new Error("Assert failed: (seq l)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,cljs.core.first(l__$1))){
return n;
} else {
var G__40586 = cljs.core.rest(l__$1);
var G__40587 = (n + (1));
l__$1 = G__40586;
n = G__40587;
continue;
}
break;
}
});
clojure.math.combinatorics.permutation_index_distinct = (function clojure$math$combinatorics$permutation_index_distinct(l){
var l__$1 = l;
var index = (0);
var n = (cljs.core.count(l__$1) - (1));
while(true){
if(cljs.core.empty_QMARK_(l__$1)){
return index;
} else {
var G__40588 = cljs.core.rest(l__$1);
var G__40589 = (function (){var G__40392 = index;
var G__40393 = (function (){var G__40394 = clojure.math.combinatorics.factorial(n);
var G__40395 = clojure.math.combinatorics.list_index(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(l__$1),cljs.core.first(l__$1));
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__40394,G__40395) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,G__40394,G__40395));
})();
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__40392,G__40393) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__40392,G__40393));
})();
var G__40590 = (n - (1));
l__$1 = G__40588;
index = G__40589;
n = G__40590;
continue;
}
break;
}
});
clojure.math.combinatorics.permutation_index_duplicates = (function clojure$math$combinatorics$permutation_index_duplicates(l){
var l__$1 = l;
var index = (0);
var freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(l__$1));
while(true){
if(cljs.core.empty_QMARK_(l__$1)){
return index;
} else {
var G__40591 = cljs.core.rest(l__$1);
var G__40592 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,index,(function (){var iter__4523__auto__ = ((function (l__$1,index,freqs){
return (function clojure$math$combinatorics$permutation_index_duplicates_$_iter__40401(s__40402){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
var s__40402__$1 = s__40402;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40402__$1);
if(temp__5735__auto__){
var s__40402__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40402__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40402__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40404 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40403 = (0);
while(true){
if((i__40403 < size__4522__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40403);
cljs.core.chunk_append(b__40404,clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)));

var G__40594 = (i__40403 + (1));
i__40403 = G__40594;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40404),clojure$math$combinatorics$permutation_index_duplicates_$_iter__40401(cljs.core.chunk_rest(s__40402__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40404),null);
}
} else {
var k = cljs.core.first(s__40402__$2);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)),clojure$math$combinatorics$permutation_index_duplicates_$_iter__40401(cljs.core.rest(s__40402__$2)));
}
} else {
return null;
}
break;
}
});})(l__$1,index,freqs))
,null,null));
});})(l__$1,index,freqs))
;
return iter__4523__auto__(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (l__$1,index,freqs,iter__4523__auto__){
return (function (p1__40396_SHARP_){
return (cljs.core.compare(p1__40396_SHARP_,cljs.core.first(l__$1)) < (0));
});})(l__$1,index,freqs,iter__4523__auto__))
,cljs.core.keys(freqs)));
})());
var G__40593 = clojure.math.combinatorics.dec_key(freqs,cljs.core.first(l__$1));
l__$1 = G__40591;
index = G__40592;
freqs = G__40593;
continue;
}
break;
}
});
/**
 * Input must be a sortable collection of items.  Returns the n such that
 *  (nth-permutation (sort items) n) is items.
 */
clojure.math.combinatorics.permutation_index = (function clojure$math$combinatorics$permutation_index(items){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.permutation_index_distinct(items);
} else {
return clojure.math.combinatorics.permutation_index_duplicates(items);
}
});
clojure.math.combinatorics.update = (function clojure$math$combinatorics$update(vec,index,f){
var item = (vec.cljs$core$IFn$_invoke$arity$1 ? vec.cljs$core$IFn$_invoke$arity$1(index) : vec.call(null,index));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vec,index,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(item) : f.call(null,item)));
});
clojure.math.combinatorics.reify_bool = (function clojure$math$combinatorics$reify_bool(statement){
if(cljs.core.truth_(statement)){
return (1);
} else {
return (0);
}
});
clojure.math.combinatorics.init = (function clojure$math$combinatorics$init(n,s){
if(cljs.core.truth_(s)){
return cljs.core.vec((function (){var iter__4523__auto__ = (function clojure$math$combinatorics$init_$_iter__40405(s__40406){
return (new cljs.core.LazySeq(null,(function (){
var s__40406__$1 = s__40406;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40406__$1);
if(temp__5735__auto__){
var s__40406__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40406__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40406__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40408 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40407 = (0);
while(true){
if((i__40407 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40407);
cljs.core.chunk_append(b__40408,(function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (i - ((n - s) - (-1)));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})());

var G__40595 = (i__40407 + (1));
i__40407 = G__40595;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40408),clojure$math$combinatorics$init_$_iter__40405(cljs.core.chunk_rest(s__40406__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40408),null);
}
} else {
var i = cljs.core.first(s__40406__$2);
return cljs.core.cons((function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (i - ((n - s) - (-1)));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})(),clojure$math$combinatorics$init_$_iter__40405(cljs.core.rest(s__40406__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
})());
} else {
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0)));
}
});
clojure.math.combinatorics.growth_strings_H = (function clojure$math$combinatorics$growth_strings_H(var_args){
var G__40410 = arguments.length;
switch (G__40410) {
case 3:
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3 = (function (n,r,s){
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,clojure.math.combinatorics.init(n,s),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(1))),r,s);
});

clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5 = (function (n,a,b,r,s){
return cljs.core.cons(a,(new cljs.core.LazySeq(null,(function (){
if((function (){var and__4120__auto__ = (cljs.core.peek(b) > cljs.core.peek(a));
if(and__4120__auto__){
if(cljs.core.truth_(r)){
return (cljs.core.peek(a) < (r - (1)));
} else {
return true;
}
} else {
return and__4120__auto__;
}
})()){
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,clojure.math.combinatorics.update(a,(n - (1)),cljs.core.inc),b,r,s);
} else {
var j = (function (){var j = (n - (2));
while(true){
if((function (){var and__4120__auto__ = ((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(j) : a.call(null,j)) < (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j)));
if(and__4120__auto__){
var and__4120__auto____$1 = (cljs.core.truth_(r)?((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(j) : a.call(null,j)) < (r - (1))):true);
if(and__4120__auto____$1){
if(cljs.core.truth_(s)){
return (((s - (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j))) - clojure.math.combinatorics.reify_bool((((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(j) : a.call(null,j)) + (1)) === (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j))))) <= (n - j));
} else {
return true;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})()){
return j;
} else {
var G__40597 = (j - (1));
j = G__40597;
continue;
}
break;
}
})();
if((j === (0))){
return cljs.core.List.EMPTY;
} else {
var a__$1 = clojure.math.combinatorics.update(a,j,cljs.core.inc);
var x = (cljs.core.truth_(s)?(s - ((b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j)) + clojure.math.combinatorics.reify_bool(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((a__$1.cljs$core$IFn$_invoke$arity$1 ? a__$1.cljs$core$IFn$_invoke$arity$1(j) : a__$1.call(null,j)),(b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j)))))):null);
var vec__40411 = (function (){var a__$2 = a__$1;
var b__$1 = b;
var i = (j + (1));
var current_max = ((b__$1.cljs$core$IFn$_invoke$arity$1 ? b__$1.cljs$core$IFn$_invoke$arity$1(j) : b__$1.call(null,j)) + clojure.math.combinatorics.reify_bool(((b__$1.cljs$core$IFn$_invoke$arity$1 ? b__$1.cljs$core$IFn$_invoke$arity$1(j) : b__$1.call(null,j)) === (a__$2.cljs$core$IFn$_invoke$arity$1 ? a__$2.cljs$core$IFn$_invoke$arity$1(j) : a__$2.call(null,j)))));
while(true){
if((i === n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = s;
if(cljs.core.truth_(and__4120__auto__)){
return (i > ((n - x) - (1)));
} else {
return and__4120__auto__;
}
})())){
var new_a_i = ((i - n) + s);
var G__40598 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,new_a_i);
var G__40599 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__40600 = (i + (1));
var G__40601 = (function (){var x__4219__auto__ = current_max;
var y__4220__auto__ = (new_a_i + (1));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
a__$2 = G__40598;
b__$1 = G__40599;
i = G__40600;
current_max = G__40601;
continue;
} else {
var G__40602 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,(0));
var G__40603 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__40604 = (i + (1));
var G__40605 = current_max;
a__$2 = G__40602;
b__$1 = G__40603;
i = G__40604;
current_max = G__40605;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40411,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40411,(1),null);
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,a__$2,b__$1,r,s);
}
}
}),null,null)));
});

clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5;

clojure.math.combinatorics.lex_partitions_H = (function clojure$math$combinatorics$lex_partitions_H(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40606 = arguments.length;
var i__4731__auto___40607 = (0);
while(true){
if((i__4731__auto___40607 < len__4730__auto___40606)){
args__4736__auto__.push((arguments[i__4731__auto___40607]));

var G__40608 = (i__4731__auto___40607 + (1));
i__4731__auto___40607 = G__40608;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__40416){
var map__40417 = p__40416;
var map__40417__$1 = (((((!((map__40417 == null))))?(((((map__40417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40417):map__40417);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40417__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40417__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(0))){
if(((((function (){var or__4131__auto__ = from;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__4131__auto__ = to;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})())))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var from__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = from;
if(cljs.core.truth_(and__4120__auto__)){
return (from <= (1));
} else {
return and__4120__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = to;
if(cljs.core.truth_(and__4120__auto__)){
return (to >= N);
} else {
return and__4120__auto__;
}
})())?null:to);
if((!(((((1) <= (function (){var or__4131__auto__ = from__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})())) && (((((function (){var or__4131__auto__ = from__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() <= (function (){var or__4131__auto__ = to__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return N;
}
})())) && (((function (){var or__4131__auto__ = to__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return N;
}
})() <= N)))))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(0))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(1))){
return cljs.core.list(cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to__$1,(1))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N),null,(1),null))))),null,(1),null)))));
} else {
var growth_strings = clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3(N,to__$1,from__$1);
var iter__4523__auto__ = ((function (growth_strings,from__$1,to__$1,map__40417,map__40417__$1,from,to){
return (function clojure$math$combinatorics$iter__40419(s__40420){
return (new cljs.core.LazySeq(null,((function (growth_strings,from__$1,to__$1,map__40417,map__40417__$1,from,to){
return (function (){
var s__40420__$1 = s__40420;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40420__$1);
if(temp__5735__auto__){
var s__40420__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40420__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40420__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40422 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40421 = (0);
while(true){
if((i__40421 < size__4522__auto__)){
var growth_string = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40421);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
cljs.core.chunk_append(b__40422,cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))));

var G__40609 = (i__40421 + (1));
i__40421 = G__40609;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40422),clojure$math$combinatorics$iter__40419(cljs.core.chunk_rest(s__40420__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40422),null);
}
} else {
var growth_string = cljs.core.first(s__40420__$2);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))),clojure$math$combinatorics$iter__40419(cljs.core.rest(s__40420__$2)));
}
} else {
return null;
}
break;
}
});})(growth_strings,from__$1,to__$1,map__40417,map__40417__$1,from,to))
,null,null));
});})(growth_strings,from__$1,to__$1,map__40417,map__40417__$1,from,to))
;
return iter__4523__auto__(growth_strings);

}
}
}
}
}
});

clojure.math.combinatorics.lex_partitions_H.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq40414){
var G__40415 = cljs.core.first(seq40414);
var seq40414__$1 = cljs.core.next(seq40414);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40415,seq40414__$1);
});

clojure.math.combinatorics.partitions_H = (function clojure$math$combinatorics$partitions_H(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40610 = arguments.length;
var i__4731__auto___40611 = (0);
while(true){
if((i__4731__auto___40611 < len__4730__auto___40610)){
args__4736__auto__.push((arguments[i__4731__auto___40611]));

var G__40612 = (i__4731__auto___40611 + (1));
i__4731__auto___40611 = G__40612;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
var items__$1 = cljs.core.vec(items);
var N = cljs.core.count(items__$1);
var lex = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.lex_partitions_H,N,args);
var iter__4523__auto__ = ((function (items__$1,N,lex){
return (function clojure$math$combinatorics$iter__40425(s__40426){
return (new cljs.core.LazySeq(null,((function (items__$1,N,lex){
return (function (){
var s__40426__$1 = s__40426;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40426__$1);
if(temp__5735__auto__){
var s__40426__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40426__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40426__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40428 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40427 = (0);
while(true){
if((i__40427 < size__4522__auto__)){
var parts = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40427);
cljs.core.chunk_append(b__40428,(function (){var iter__4523__auto__ = ((function (i__40427,parts,c__4521__auto__,size__4522__auto__,b__40428,s__40426__$2,temp__5735__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__40425_$_iter__40429(s__40430){
return (new cljs.core.LazySeq(null,((function (i__40427,parts,c__4521__auto__,size__4522__auto__,b__40428,s__40426__$2,temp__5735__auto__,items__$1,N,lex){
return (function (){
var s__40430__$1 = s__40430;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__40430__$1);
if(temp__5735__auto____$1){
var s__40430__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40430__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__40430__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__40432 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__40431 = (0);
while(true){
if((i__40431 < size__4522__auto____$1)){
var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__40431);
cljs.core.chunk_append(b__40432,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__40431,i__40427,part,c__4521__auto____$1,size__4522__auto____$1,b__40432,s__40430__$2,temp__5735__auto____$1,parts,c__4521__auto__,size__4522__auto__,b__40428,s__40426__$2,temp__5735__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__40431,i__40427,part,c__4521__auto____$1,size__4522__auto____$1,b__40432,s__40430__$2,temp__5735__auto____$1,parts,c__4521__auto__,size__4522__auto__,b__40428,s__40426__$2,temp__5735__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__40613 = (i__40431 + (1));
i__40431 = G__40613;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40432),clojure$math$combinatorics$iter__40425_$_iter__40429(cljs.core.chunk_rest(s__40430__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40432),null);
}
} else {
var part = cljs.core.first(s__40430__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__40427,part,s__40430__$2,temp__5735__auto____$1,parts,c__4521__auto__,size__4522__auto__,b__40428,s__40426__$2,temp__5735__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__40427,part,s__40430__$2,temp__5735__auto____$1,parts,c__4521__auto__,size__4522__auto__,b__40428,s__40426__$2,temp__5735__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__40425_$_iter__40429(cljs.core.rest(s__40430__$2)));
}
} else {
return null;
}
break;
}
});})(i__40427,parts,c__4521__auto__,size__4522__auto__,b__40428,s__40426__$2,temp__5735__auto__,items__$1,N,lex))
,null,null));
});})(i__40427,parts,c__4521__auto__,size__4522__auto__,b__40428,s__40426__$2,temp__5735__auto__,items__$1,N,lex))
;
return iter__4523__auto__(parts);
})());

var G__40614 = (i__40427 + (1));
i__40427 = G__40614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40428),clojure$math$combinatorics$iter__40425(cljs.core.chunk_rest(s__40426__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40428),null);
}
} else {
var parts = cljs.core.first(s__40426__$2);
return cljs.core.cons((function (){var iter__4523__auto__ = ((function (parts,s__40426__$2,temp__5735__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__40425_$_iter__40433(s__40434){
return (new cljs.core.LazySeq(null,((function (parts,s__40426__$2,temp__5735__auto__,items__$1,N,lex){
return (function (){
var s__40434__$1 = s__40434;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__40434__$1);
if(temp__5735__auto____$1){
var s__40434__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40434__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40434__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40436 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40435 = (0);
while(true){
if((i__40435 < size__4522__auto__)){
var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40435);
cljs.core.chunk_append(b__40436,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__40435,part,c__4521__auto__,size__4522__auto__,b__40436,s__40434__$2,temp__5735__auto____$1,parts,s__40426__$2,temp__5735__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__40435,part,c__4521__auto__,size__4522__auto__,b__40436,s__40434__$2,temp__5735__auto____$1,parts,s__40426__$2,temp__5735__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__40615 = (i__40435 + (1));
i__40435 = G__40615;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40436),clojure$math$combinatorics$iter__40425_$_iter__40433(cljs.core.chunk_rest(s__40434__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40436),null);
}
} else {
var part = cljs.core.first(s__40434__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (part,s__40434__$2,temp__5735__auto____$1,parts,s__40426__$2,temp__5735__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(part,s__40434__$2,temp__5735__auto____$1,parts,s__40426__$2,temp__5735__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__40425_$_iter__40433(cljs.core.rest(s__40434__$2)));
}
} else {
return null;
}
break;
}
});})(parts,s__40426__$2,temp__5735__auto__,items__$1,N,lex))
,null,null));
});})(parts,s__40426__$2,temp__5735__auto__,items__$1,N,lex))
;
return iter__4523__auto__(parts);
})(),clojure$math$combinatorics$iter__40425(cljs.core.rest(s__40426__$2)));
}
} else {
return null;
}
break;
}
});})(items__$1,N,lex))
,null,null));
});})(items__$1,N,lex))
;
return iter__4523__auto__(lex);
});

clojure.math.combinatorics.partitions_H.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq40423){
var G__40424 = cljs.core.first(seq40423);
var seq40423__$1 = cljs.core.next(seq40423);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40424,seq40423__$1);
});


clojure.math.combinatorics.multiset_partitions_M = (function clojure$math$combinatorics$multiset_partitions_M(var_args){
var G__40438 = arguments.length;
switch (G__40438) {
case 3:
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 11:
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3 = (function (multiset,r,s){
var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(multiset));
var m = cljs.core.count(multiset);
var f = cljs.core.PersistentVector.EMPTY;
var c = cljs.core.PersistentVector.EMPTY;
var u = cljs.core.PersistentVector.EMPTY;
var v = cljs.core.PersistentVector.EMPTY;
var vec__40439 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__40617 = (j + (1));
var G__40618 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,(j + (1)));
var G__40619 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,j,(function (){var G__40444 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__40444) : multiset.call(null,G__40444));
})());
var G__40620 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,j,(function (){var G__40445 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__40445) : multiset.call(null,G__40445));
})());
j = G__40617;
c__$1 = G__40618;
u__$1 = G__40619;
v__$1 = G__40620;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40439,(0),null);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40439,(1),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40439,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,(0),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),m], 0));
var stack = cljs.core.List.EMPTY;
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});

clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__40446 = (function (){var j = a;
var k = b;
var x = false;
var u__$1 = u;
var v__$1 = v;
var c__$1 = c;
while(true){
if((j >= b)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else {
var u__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,k,((u__$1.cljs$core$IFn$_invoke$arity$1 ? u__$1.cljs$core$IFn$_invoke$arity$1(j) : u__$1.call(null,j)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(j) : v__$1.call(null,j))));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)),(0))){
var G__40621 = (j + (1));
var G__40622 = k;
var G__40623 = true;
var G__40624 = u__$2;
var G__40625 = v__$1;
var G__40626 = c__$1;
j = G__40621;
k = G__40622;
x = G__40623;
u__$1 = G__40624;
v__$1 = G__40625;
c__$1 = G__40626;
continue;
} else {
if((!(x))){
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)));
var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(function (){var x__4222__auto__ = (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(j) : v__$1.call(null,j));
var y__4223__auto__ = (u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})());
var x__$1 = ((u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)) < (v__$2.cljs$core$IFn$_invoke$arity$1 ? v__$2.cljs$core$IFn$_invoke$arity$1(j) : v__$2.call(null,j)));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__40627 = j__$1;
var G__40628 = k__$1;
var G__40629 = x__$1;
var G__40630 = u__$2;
var G__40631 = v__$2;
var G__40632 = c__$2;
j = G__40627;
k = G__40628;
x = G__40629;
u__$1 = G__40630;
v__$1 = G__40631;
c__$1 = G__40632;
continue;
} else {
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)));
var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__40633 = j__$1;
var G__40634 = k__$1;
var G__40635 = x;
var G__40636 = u__$2;
var G__40637 = v__$2;
var G__40638 = c__$2;
j = G__40633;
k = G__40634;
x = G__40635;
u__$1 = G__40636;
v__$1 = G__40637;
c__$1 = G__40638;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40446,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40446,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40446,(2),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40446,(3),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40446,(4),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = r;
if(cljs.core.truth_(and__4120__auto__)){
return (((k > b)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(r - (1)))));
} else {
return and__4120__auto__;
}
})())){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = s;
if(cljs.core.truth_(and__4120__auto__)){
return (((k <= b)) && (((l + (1)) < s)));
} else {
return and__4120__auto__;
}
})())){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
} else {
if((k > b)){
var a__$1 = b;
var b__$1 = k;
var l__$1 = (l + (1));
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,(l__$1 + (1)),b__$1);
var G__40639 = n;
var G__40640 = m;
var G__40641 = f__$1;
var G__40642 = c__$1;
var G__40643 = u__$1;
var G__40644 = v__$1;
var G__40645 = a__$1;
var G__40646 = b__$1;
var G__40647 = l__$1;
var G__40648 = r;
var G__40649 = s;
n = G__40639;
m = G__40640;
f = G__40641;
c = G__40642;
u = G__40643;
v = G__40644;
a = G__40645;
b = G__40646;
l = G__40647;
r = G__40648;
s = G__40649;
continue;
} else {
var part = (function (){var iter__4523__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__40446,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__40449(s__40450){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__40446,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__40450__$1 = s__40450;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40450__$1);
if(temp__5735__auto__){
var s__40450__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40450__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40450__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40452 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40451 = (0);
while(true){
if((i__40451 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40451);
cljs.core.chunk_append(b__40452,(function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__40453 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40453) : f.call(null,G__40453));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = ((function (i__40451,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4521__auto__,size__4522__auto__,b__40452,s__40450__$2,temp__5735__auto__,vec__40446,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__40449_$_iter__40454(s__40455){
return (new cljs.core.LazySeq(null,((function (i__40451,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4521__auto__,size__4522__auto__,b__40452,s__40450__$2,temp__5735__auto__,vec__40446,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__40455__$1 = s__40455;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__40455__$1);
if(temp__5735__auto____$1){
var s__40455__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40455__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__40455__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__40457 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__40456 = (0);
while(true){
if((i__40456 < size__4522__auto____$1)){
var z = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__40456);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__40457,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__40650 = (i__40456 + (1));
i__40456 = G__40650;
continue;
} else {
var G__40651 = (i__40456 + (1));
i__40456 = G__40651;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40457),clojure$math$combinatorics$iter__40449_$_iter__40454(cljs.core.chunk_rest(s__40455__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40457),null);
}
} else {
var z = cljs.core.first(s__40455__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__40449_$_iter__40454(cljs.core.rest(s__40455__$2)));
} else {
var G__40652 = cljs.core.rest(s__40455__$2);
s__40455__$1 = G__40652;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__40451,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4521__auto__,size__4522__auto__,b__40452,s__40450__$2,temp__5735__auto__,vec__40446,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__40451,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4521__auto__,size__4522__auto__,b__40452,s__40450__$2,temp__5735__auto__,vec__40446,u__$1,v__$1,c__$1,j,k))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})());

var G__40653 = (i__40451 + (1));
i__40451 = G__40653;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40452),clojure$math$combinatorics$iter__40449(cljs.core.chunk_rest(s__40450__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40452),null);
}
} else {
var y = cljs.core.first(s__40450__$2);
return cljs.core.cons((function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__40458 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40458) : f.call(null,G__40458));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__40450__$2,temp__5735__auto__,vec__40446,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__40449_$_iter__40459(s__40460){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__40450__$2,temp__5735__auto__,vec__40446,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__40460__$1 = s__40460;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__40460__$1);
if(temp__5735__auto____$1){
var s__40460__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40460__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40460__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40462 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40461 = (0);
while(true){
if((i__40461 < size__4522__auto__)){
var z = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40461);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__40462,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__40654 = (i__40461 + (1));
i__40461 = G__40654;
continue;
} else {
var G__40655 = (i__40461 + (1));
i__40461 = G__40655;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40462),clojure$math$combinatorics$iter__40449_$_iter__40459(cljs.core.chunk_rest(s__40460__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40462),null);
}
} else {
var z = cljs.core.first(s__40460__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__40449_$_iter__40459(cljs.core.rest(s__40460__$2)));
} else {
var G__40656 = cljs.core.rest(s__40460__$2);
s__40460__$1 = G__40656;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__40450__$2,temp__5735__auto__,vec__40446,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__40450__$2,temp__5735__auto__,vec__40446,u__$1,v__$1,c__$1,j,k))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})(),clojure$math$combinatorics$iter__40449(cljs.core.rest(s__40450__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__40446,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__40446,u__$1,v__$1,c__$1,j,k))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((l + (1))));
})();
return cljs.core.cons(part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__40446,u__$1,v__$1,c__$1,j,k){
return (function (){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__40446,u__$1,v__$1,c__$1,j,k))
,null,null)));

}
}
}
break;
}
});

clojure.math.combinatorics.multiset_partitions_M.cljs$lang$maxFixedArity = 11;

clojure.math.combinatorics.m5 = (function clojure$math$combinatorics$m5(n,m,f,c,u,v,a,b,l,r,s){
var j = (function (){var j = (b - (1));
while(true){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)),(0))){
return j;
} else {
var G__40657 = (j - (1));
j = G__40657;
continue;
}
break;
}
})();
if(cljs.core.truth_((function (){var and__4120__auto__ = r;
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,a)) && (((((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)) - (1)) * (r - l)) < (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(j) : u.call(null,j)))));
} else {
return and__4120__auto__;
}
})())){
return (clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v,a,b,l,r,s) : clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)),(1))))){
return (clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v,a,b,l,r,s) : clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s));
} else {
var v__$1 = clojure.math.combinatorics.update(v,j,cljs.core.dec);
var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__4523__auto__ = ((function (v__$1,j){
return (function clojure$math$combinatorics$m5_$_iter__40463(s__40464){
return (new cljs.core.LazySeq(null,((function (v__$1,j){
return (function (){
var s__40464__$1 = s__40464;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40464__$1);
if(temp__5735__auto__){
var s__40464__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40464__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40464__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40466 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40465 = (0);
while(true){
if((i__40465 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40465);
cljs.core.chunk_append(b__40466,((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))));

var G__40658 = (i__40465 + (1));
i__40465 = G__40658;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40466),clojure$math$combinatorics$m5_$_iter__40463(cljs.core.chunk_rest(s__40464__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40466),null);
}
} else {
var i = cljs.core.first(s__40464__$2);
return cljs.core.cons(((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))),clojure$math$combinatorics$m5_$_iter__40463(cljs.core.rest(s__40464__$2)));
}
} else {
return null;
}
break;
}
});})(v__$1,j))
,null,null));
});})(v__$1,j))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(a,(j + (1))));
})()):null);
var v__$2 = (function (){var ks = cljs.core.range.cljs$core$IFn$_invoke$arity$2((j + (1)),b);
var v__$2 = v__$1;
while(true){
if(cljs.core.empty_QMARK_(ks)){
return v__$2;
} else {
var k = cljs.core.first(ks);
var G__40659 = cljs.core.rest(ks);
var G__40660 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$2,k,(u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(k) : u.call(null,k)));
ks = G__40659;
v__$2 = G__40660;
continue;
}
break;
}
})();
var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + (1))):(0));
var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (min_partitions_after_this - diff_uv);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})():(0));
var v__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(amount_to_dec,(0)))?v__$2:(function (){var k_1 = (b - (1));
var v__$3 = v__$2;
var amount = amount_to_dec;
while(true){
var vk = (v__$3.cljs$core$IFn$_invoke$arity$1 ? v__$3.cljs$core$IFn$_invoke$arity$1(k_1) : v__$3.call(null,k_1));
if((amount > vk)){
var G__40661 = (k_1 - (1));
var G__40662 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(0));
var G__40663 = (amount - vk);
k_1 = G__40661;
v__$3 = G__40662;
amount = G__40663;
continue;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(vk - amount));
}
break;
}
})());
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v__$3,a,b,l,r,s);

}
}
});
clojure.math.combinatorics.m6 = (function clojure$math$combinatorics$m6(n,m,f,c,u,v,a,b,l,r,s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(0))){
return cljs.core.List.EMPTY;
} else {
var l__$1 = (l - (1));
var b__$1 = a;
var a__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(l__$1) : f.call(null,l__$1));
return clojure.math.combinatorics.m5(n,m,f,c,u,v,a__$1,b__$1,l__$1,r,s);
}
});
clojure.math.combinatorics.partitions_M = (function clojure$math$combinatorics$partitions_M(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40664 = arguments.length;
var i__4731__auto___40665 = (0);
while(true){
if((i__4731__auto___40665 < len__4730__auto___40664)){
args__4736__auto__.push((arguments[i__4731__auto___40665]));

var G__40666 = (i__4731__auto___40665 + (1));
i__4731__auto___40665 = G__40666;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__40469){
var map__40470 = p__40469;
var map__40470__$1 = (((((!((map__40470 == null))))?(((((map__40470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40470):map__40470);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40470__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40470__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items),(0))){
if(((((function (){var or__4131__auto__ = from;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__4131__auto__ = to;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})())))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var items__$1 = cljs.core.vec(items);
var ditems = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items__$1));
var freqs = cljs.core.frequencies(items__$1);
var N = cljs.core.count(items__$1);
var M = cljs.core.count(ditems);
var from__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = from;
if(cljs.core.truth_(and__4120__auto__)){
return (from <= (1));
} else {
return and__4120__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = to;
if(cljs.core.truth_(and__4120__auto__)){
return (to >= N);
} else {
return and__4120__auto__;
}
})())?null:to);
if((!(((((1) <= (function (){var or__4131__auto__ = from__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})())) && (((((function (){var or__4131__auto__ = from__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() <= (function (){var or__4131__auto__ = to__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return N;
}
})())) && (((function (){var or__4131__auto__ = to__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return N;
}
})() <= N)))))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(1))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.first(items__$1),null,(1),null)))))),null,(1),null))))),null,(1),null)))));
} else {
var start_multiset = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = ((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__40470,map__40470__$1,from,to){
return (function clojure$math$combinatorics$iter__40472(s__40473){
return (new cljs.core.LazySeq(null,((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__40470,map__40470__$1,from,to){
return (function (){
var s__40473__$1 = s__40473;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40473__$1);
if(temp__5735__auto__){
var s__40473__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40473__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40473__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40475 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40474 = (0);
while(true){
if((i__40474 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40474);
var j = (i + (1));
cljs.core.chunk_append(b__40475,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__40476 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__40476) : freqs.call(null,G__40476));
})()], null));

var G__40667 = (i__40474 + (1));
i__40474 = G__40667;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40475),clojure$math$combinatorics$iter__40472(cljs.core.chunk_rest(s__40473__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40475),null);
}
} else {
var i = cljs.core.first(s__40473__$2);
var j = (i + (1));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__40477 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__40477) : freqs.call(null,G__40477));
})()], null),clojure$math$combinatorics$iter__40472(cljs.core.rest(s__40473__$2)));
}
} else {
return null;
}
break;
}
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__40470,map__40470__$1,from,to))
,null,null));
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__40470,map__40470__$1,from,to))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(M));
})());
var parts = clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3(start_multiset,to__$1,from__$1);
var iter__4523__auto__ = ((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__40470,map__40470__$1,from,to){
return (function clojure$math$combinatorics$iter__40478(s__40479){
return (new cljs.core.LazySeq(null,((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__40470,map__40470__$1,from,to){
return (function (){
var s__40479__$1 = s__40479;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40479__$1);
if(temp__5735__auto__){
var s__40479__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40479__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40479__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40481 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40480 = (0);
while(true){
if((i__40480 < size__4522__auto__)){
var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40480);
cljs.core.chunk_append(b__40481,(function (){var iter__4523__auto__ = ((function (i__40480,part,c__4521__auto__,size__4522__auto__,b__40481,s__40479__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__40470,map__40470__$1,from,to){
return (function clojure$math$combinatorics$iter__40478_$_iter__40482(s__40483){
return (new cljs.core.LazySeq(null,((function (i__40480,part,c__4521__auto__,size__4522__auto__,b__40481,s__40479__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__40470,map__40470__$1,from,to){
return (function (){
var s__40483__$1 = s__40483;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__40483__$1);
if(temp__5735__auto____$1){
var s__40483__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40483__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__40483__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__40485 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__40484 = (0);
while(true){
if((i__40484 < size__4522__auto____$1)){
var multiset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__40484);
cljs.core.chunk_append(b__40485,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__40484,i__40480,multiset,c__4521__auto____$1,size__4522__auto____$1,b__40485,s__40483__$2,temp__5735__auto____$1,part,c__4521__auto__,size__4522__auto__,b__40481,s__40479__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__40470,map__40470__$1,from,to){
return (function (p__40486){
var vec__40487 = p__40486;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40487,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40487,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__40490 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__40490) : ditems.call(null,G__40490));
})());
});})(i__40484,i__40480,multiset,c__4521__auto____$1,size__4522__auto____$1,b__40485,s__40483__$2,temp__5735__auto____$1,part,c__4521__auto__,size__4522__auto__,b__40481,s__40479__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__40470,map__40470__$1,from,to))
,multiset)));

var G__40668 = (i__40484 + (1));
i__40484 = G__40668;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40485),clojure$math$combinatorics$iter__40478_$_iter__40482(cljs.core.chunk_rest(s__40483__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40485),null);
}
} else {
var multiset = cljs.core.first(s__40483__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__40480,multiset,s__40483__$2,temp__5735__auto____$1,part,c__4521__auto__,size__4522__auto__,b__40481,s__40479__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__40470,map__40470__$1,from,to){
return (function (p__40491){
var vec__40492 = p__40491;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40492,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40492,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__40495 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__40495) : ditems.call(null,G__40495));
})());
});})(i__40480,multiset,s__40483__$2,temp__5735__auto____$1,part,c__4521__auto__,size__4522__auto__,b__40481,s__40479__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__40470,map__40470__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__40478_$_iter__40482(cljs.core.rest(s__40483__$2)));
}
} else {
return null;
}
break;
}
});})(i__40480,part,c__4521__auto__,size__4522__auto__,b__40481,s__40479__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__40470,map__40470__$1,from,to))
,null,null));
});})(i__40480,part,c__4521__auto__,size__4522__auto__,b__40481,s__40479__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__40470,map__40470__$1,from,to))
;
return iter__4523__auto__(part);
})());

var G__40669 = (i__40480 + (1));
i__40480 = G__40669;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40481),clojure$math$combinatorics$iter__40478(cljs.core.chunk_rest(s__40479__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40481),null);
}
} else {
var part = cljs.core.first(s__40479__$2);
return cljs.core.cons((function (){var iter__4523__auto__ = ((function (part,s__40479__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__40470,map__40470__$1,from,to){
return (function clojure$math$combinatorics$iter__40478_$_iter__40496(s__40497){
return (new cljs.core.LazySeq(null,((function (part,s__40479__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__40470,map__40470__$1,from,to){
return (function (){
var s__40497__$1 = s__40497;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__40497__$1);
if(temp__5735__auto____$1){
var s__40497__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40497__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40497__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40499 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40498 = (0);
while(true){
if((i__40498 < size__4522__auto__)){
var multiset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40498);
cljs.core.chunk_append(b__40499,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__40498,multiset,c__4521__auto__,size__4522__auto__,b__40499,s__40497__$2,temp__5735__auto____$1,part,s__40479__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__40470,map__40470__$1,from,to){
return (function (p__40500){
var vec__40501 = p__40500;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40501,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40501,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__40504 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__40504) : ditems.call(null,G__40504));
})());
});})(i__40498,multiset,c__4521__auto__,size__4522__auto__,b__40499,s__40497__$2,temp__5735__auto____$1,part,s__40479__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__40470,map__40470__$1,from,to))
,multiset)));

var G__40670 = (i__40498 + (1));
i__40498 = G__40670;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40499),clojure$math$combinatorics$iter__40478_$_iter__40496(cljs.core.chunk_rest(s__40497__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40499),null);
}
} else {
var multiset = cljs.core.first(s__40497__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (multiset,s__40497__$2,temp__5735__auto____$1,part,s__40479__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__40470,map__40470__$1,from,to){
return (function (p__40505){
var vec__40506 = p__40505;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40506,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40506,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__40509 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__40509) : ditems.call(null,G__40509));
})());
});})(multiset,s__40497__$2,temp__5735__auto____$1,part,s__40479__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__40470,map__40470__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__40478_$_iter__40496(cljs.core.rest(s__40497__$2)));
}
} else {
return null;
}
break;
}
});})(part,s__40479__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__40470,map__40470__$1,from,to))
,null,null));
});})(part,s__40479__$2,temp__5735__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__40470,map__40470__$1,from,to))
;
return iter__4523__auto__(part);
})(),clojure$math$combinatorics$iter__40478(cljs.core.rest(s__40479__$2)));
}
} else {
return null;
}
break;
}
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__40470,map__40470__$1,from,to))
,null,null));
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__40470,map__40470__$1,from,to))
;
return iter__4523__auto__(parts);

}
}
}
});

clojure.math.combinatorics.partitions_M.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq40467){
var G__40468 = cljs.core.first(seq40467);
var seq40467__$1 = cljs.core.next(seq40467);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40468,seq40467__$1);
});

/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
clojure.math.combinatorics.partitions = (function clojure$math$combinatorics$partitions(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40671 = arguments.length;
var i__4731__auto___40672 = (0);
while(true){
if((i__4731__auto___40672 < len__4730__auto___40671)){
args__4736__auto__.push((arguments[i__4731__auto___40672]));

var G__40673 = (i__4731__auto___40672 + (1));
i__4731__auto___40672 = G__40673;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items),(0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.partitions_H,items,args);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.partitions_H,items,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.partitions_M,items,args);

}
}
});

clojure.math.combinatorics.partitions.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clojure.math.combinatorics.partitions.cljs$lang$applyTo = (function (seq40510){
var G__40511 = cljs.core.first(seq40510);
var seq40510__$1 = cljs.core.next(seq40510);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40511,seq40510__$1);
});


//# sourceMappingURL=clojure.math.combinatorics.js.map
