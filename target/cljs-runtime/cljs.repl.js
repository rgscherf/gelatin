goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39483){
var map__39484 = p__39483;
var map__39484__$1 = (((((!((map__39484 == null))))?(((((map__39484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39484):map__39484);
var m = map__39484__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39484__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39484__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39486_39628 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39487_39629 = null;
var count__39488_39630 = (0);
var i__39489_39631 = (0);
while(true){
if((i__39489_39631 < count__39488_39630)){
var f_39632 = chunk__39487_39629.cljs$core$IIndexed$_nth$arity$2(null,i__39489_39631);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39632], 0));


var G__39633 = seq__39486_39628;
var G__39634 = chunk__39487_39629;
var G__39635 = count__39488_39630;
var G__39636 = (i__39489_39631 + (1));
seq__39486_39628 = G__39633;
chunk__39487_39629 = G__39634;
count__39488_39630 = G__39635;
i__39489_39631 = G__39636;
continue;
} else {
var temp__5735__auto___39637 = cljs.core.seq(seq__39486_39628);
if(temp__5735__auto___39637){
var seq__39486_39638__$1 = temp__5735__auto___39637;
if(cljs.core.chunked_seq_QMARK_(seq__39486_39638__$1)){
var c__4550__auto___39639 = cljs.core.chunk_first(seq__39486_39638__$1);
var G__39640 = cljs.core.chunk_rest(seq__39486_39638__$1);
var G__39641 = c__4550__auto___39639;
var G__39642 = cljs.core.count(c__4550__auto___39639);
var G__39643 = (0);
seq__39486_39628 = G__39640;
chunk__39487_39629 = G__39641;
count__39488_39630 = G__39642;
i__39489_39631 = G__39643;
continue;
} else {
var f_39646 = cljs.core.first(seq__39486_39638__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39646], 0));


var G__39647 = cljs.core.next(seq__39486_39638__$1);
var G__39648 = null;
var G__39649 = (0);
var G__39650 = (0);
seq__39486_39628 = G__39647;
chunk__39487_39629 = G__39648;
count__39488_39630 = G__39649;
i__39489_39631 = G__39650;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39651 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_39651], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_39651)))?cljs.core.second(arglists_39651):arglists_39651)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39493_39659 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39494_39660 = null;
var count__39495_39661 = (0);
var i__39496_39662 = (0);
while(true){
if((i__39496_39662 < count__39495_39661)){
var vec__39509_39663 = chunk__39494_39660.cljs$core$IIndexed$_nth$arity$2(null,i__39496_39662);
var name_39664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39509_39663,(0),null);
var map__39512_39665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39509_39663,(1),null);
var map__39512_39666__$1 = (((((!((map__39512_39665 == null))))?(((((map__39512_39665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39512_39665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39512_39665):map__39512_39665);
var doc_39667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39512_39666__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39512_39666__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39664], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39668], 0));

if(cljs.core.truth_(doc_39667)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39667], 0));
} else {
}


var G__39671 = seq__39493_39659;
var G__39672 = chunk__39494_39660;
var G__39673 = count__39495_39661;
var G__39674 = (i__39496_39662 + (1));
seq__39493_39659 = G__39671;
chunk__39494_39660 = G__39672;
count__39495_39661 = G__39673;
i__39496_39662 = G__39674;
continue;
} else {
var temp__5735__auto___39675 = cljs.core.seq(seq__39493_39659);
if(temp__5735__auto___39675){
var seq__39493_39676__$1 = temp__5735__auto___39675;
if(cljs.core.chunked_seq_QMARK_(seq__39493_39676__$1)){
var c__4550__auto___39677 = cljs.core.chunk_first(seq__39493_39676__$1);
var G__39678 = cljs.core.chunk_rest(seq__39493_39676__$1);
var G__39679 = c__4550__auto___39677;
var G__39680 = cljs.core.count(c__4550__auto___39677);
var G__39681 = (0);
seq__39493_39659 = G__39678;
chunk__39494_39660 = G__39679;
count__39495_39661 = G__39680;
i__39496_39662 = G__39681;
continue;
} else {
var vec__39516_39682 = cljs.core.first(seq__39493_39676__$1);
var name_39683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39516_39682,(0),null);
var map__39519_39684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39516_39682,(1),null);
var map__39519_39685__$1 = (((((!((map__39519_39684 == null))))?(((((map__39519_39684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39519_39684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39519_39684):map__39519_39684);
var doc_39686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39519_39685__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39519_39685__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39683], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39687], 0));

if(cljs.core.truth_(doc_39686)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39686], 0));
} else {
}


var G__39688 = cljs.core.next(seq__39493_39676__$1);
var G__39689 = null;
var G__39690 = (0);
var G__39691 = (0);
seq__39493_39659 = G__39688;
chunk__39494_39660 = G__39689;
count__39495_39661 = G__39690;
i__39496_39662 = G__39691;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__39521 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39522 = null;
var count__39523 = (0);
var i__39524 = (0);
while(true){
if((i__39524 < count__39523)){
var role = chunk__39522.cljs$core$IIndexed$_nth$arity$2(null,i__39524);
var temp__5735__auto___39692__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___39692__$1)){
var spec_39693 = temp__5735__auto___39692__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39693)], 0));
} else {
}


var G__39694 = seq__39521;
var G__39695 = chunk__39522;
var G__39696 = count__39523;
var G__39697 = (i__39524 + (1));
seq__39521 = G__39694;
chunk__39522 = G__39695;
count__39523 = G__39696;
i__39524 = G__39697;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__39521);
if(temp__5735__auto____$1){
var seq__39521__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__39521__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__39521__$1);
var G__39698 = cljs.core.chunk_rest(seq__39521__$1);
var G__39699 = c__4550__auto__;
var G__39700 = cljs.core.count(c__4550__auto__);
var G__39701 = (0);
seq__39521 = G__39698;
chunk__39522 = G__39699;
count__39523 = G__39700;
i__39524 = G__39701;
continue;
} else {
var role = cljs.core.first(seq__39521__$1);
var temp__5735__auto___39702__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___39702__$2)){
var spec_39703 = temp__5735__auto___39702__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39703)], 0));
} else {
}


var G__39704 = cljs.core.next(seq__39521__$1);
var G__39705 = null;
var G__39706 = (0);
var G__39707 = (0);
seq__39521 = G__39704;
chunk__39522 = G__39705;
count__39523 = G__39706;
i__39524 = G__39707;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__39708 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__39709 = cljs.core.ex_cause(t);
via = G__39708;
t = G__39709;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__39536 = datafied_throwable;
var map__39536__$1 = (((((!((map__39536 == null))))?(((((map__39536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39536):map__39536);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39536__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39536__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39536__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__39537 = cljs.core.last(via);
var map__39537__$1 = (((((!((map__39537 == null))))?(((((map__39537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39537):map__39537);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39537__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39537__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39537__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__39538 = data;
var map__39538__$1 = (((((!((map__39538 == null))))?(((((map__39538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39538):map__39538);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39538__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39538__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39538__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__39539 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__39539__$1 = (((((!((map__39539 == null))))?(((((map__39539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39539):map__39539);
var top_data = map__39539__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39539__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__39546 = phase;
var G__39546__$1 = (((G__39546 instanceof cljs.core.Keyword))?G__39546.fqn:null);
switch (G__39546__$1) {
case "read-source":
var map__39547 = data;
var map__39547__$1 = (((((!((map__39547 == null))))?(((((map__39547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39547):map__39547);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39547__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39547__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__39549 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__39549__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39549,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39549);
var G__39549__$2 = (cljs.core.truth_((function (){var fexpr__39550 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39550.cljs$core$IFn$_invoke$arity$1 ? fexpr__39550.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39550.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39549__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39549__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39549__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39549__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__39551 = top_data;
var G__39551__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39551,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39551);
var G__39551__$2 = (cljs.core.truth_((function (){var fexpr__39552 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39552.cljs$core$IFn$_invoke$arity$1 ? fexpr__39552.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39552.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39551__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39551__$1);
var G__39551__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39551__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39551__$2);
var G__39551__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39551__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39551__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39551__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39551__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__39553 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39553,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39553,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39553,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39553,(3),null);
var G__39563 = top_data;
var G__39563__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39563,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__39563);
var G__39563__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39563__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__39563__$1);
var G__39563__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39563__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__39563__$2);
var G__39563__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39563__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39563__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39563__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39563__$4;
}

break;
case "execution":
var vec__39567 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39567,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39567,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39567,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39567,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__39567,source__$1,method,file,line,G__39546,G__39546__$1,map__39536,map__39536__$1,via,trace,phase,map__39537,map__39537__$1,type,message,data,map__39538,map__39538__$1,problems,fn,caller,map__39539,map__39539__$1,top_data,source){
return (function (p1__39535_SHARP_){
var or__4131__auto__ = (p1__39535_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__39573 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39573.cljs$core$IFn$_invoke$arity$1 ? fexpr__39573.cljs$core$IFn$_invoke$arity$1(p1__39535_SHARP_) : fexpr__39573.call(null,p1__39535_SHARP_));
}
});})(vec__39567,source__$1,method,file,line,G__39546,G__39546__$1,map__39536,map__39536__$1,via,trace,phase,map__39537,map__39537__$1,type,message,data,map__39538,map__39538__$1,problems,fn,caller,map__39539,map__39539__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__39577 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__39577__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39577,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__39577);
var G__39577__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39577__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39577__$1);
var G__39577__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39577__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__39577__$2);
var G__39577__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39577__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__39577__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39577__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39577__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39546__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__39582){
var map__39583 = p__39582;
var map__39583__$1 = (((((!((map__39583 == null))))?(((((map__39583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39583):map__39583);
var triage_data = map__39583__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39583__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39583__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39583__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39583__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39583__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39583__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39583__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39583__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__39586 = phase;
var G__39586__$1 = (((G__39586 instanceof cljs.core.Keyword))?G__39586.fqn:null);
switch (G__39586__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__39587 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__39588 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39589 = loc;
var G__39590 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39591_39749 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39592_39750 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39593_39751 = true;
var _STAR_print_fn_STAR__temp_val__39594_39752 = ((function (_STAR_print_newline_STAR__orig_val__39591_39749,_STAR_print_fn_STAR__orig_val__39592_39750,_STAR_print_newline_STAR__temp_val__39593_39751,sb__4661__auto__,G__39587,G__39588,G__39589,G__39586,G__39586__$1,loc,class_name,simple_class,cause_type,format,map__39583,map__39583__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__39591_39749,_STAR_print_fn_STAR__orig_val__39592_39750,_STAR_print_newline_STAR__temp_val__39593_39751,sb__4661__auto__,G__39587,G__39588,G__39589,G__39586,G__39586__$1,loc,class_name,simple_class,cause_type,format,map__39583,map__39583__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39593_39751;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39594_39752;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__39591_39749,_STAR_print_fn_STAR__orig_val__39592_39750,_STAR_print_newline_STAR__temp_val__39593_39751,_STAR_print_fn_STAR__temp_val__39594_39752,sb__4661__auto__,G__39587,G__39588,G__39589,G__39586,G__39586__$1,loc,class_name,simple_class,cause_type,format,map__39583,map__39583__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__39591_39749,_STAR_print_fn_STAR__orig_val__39592_39750,_STAR_print_newline_STAR__temp_val__39593_39751,_STAR_print_fn_STAR__temp_val__39594_39752,sb__4661__auto__,G__39587,G__39588,G__39589,G__39586,G__39586__$1,loc,class_name,simple_class,cause_type,format,map__39583,map__39583__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__39579_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39579_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__39591_39749,_STAR_print_fn_STAR__orig_val__39592_39750,_STAR_print_newline_STAR__temp_val__39593_39751,_STAR_print_fn_STAR__temp_val__39594_39752,sb__4661__auto__,G__39587,G__39588,G__39589,G__39586,G__39586__$1,loc,class_name,simple_class,cause_type,format,map__39583,map__39583__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__39591_39749,_STAR_print_fn_STAR__orig_val__39592_39750,_STAR_print_newline_STAR__temp_val__39593_39751,_STAR_print_fn_STAR__temp_val__39594_39752,sb__4661__auto__,G__39587,G__39588,G__39589,G__39586,G__39586__$1,loc,class_name,simple_class,cause_type,format,map__39583,map__39583__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39592_39750;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39591_39749;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39587,G__39588,G__39589,G__39590) : format.call(null,G__39587,G__39588,G__39589,G__39590));

break;
case "macroexpansion":
var G__39595 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__39596 = cause_type;
var G__39597 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39598 = loc;
var G__39599 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39595,G__39596,G__39597,G__39598,G__39599) : format.call(null,G__39595,G__39596,G__39597,G__39598,G__39599));

break;
case "compile-syntax-check":
var G__39600 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__39601 = cause_type;
var G__39602 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39603 = loc;
var G__39604 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39600,G__39601,G__39602,G__39603,G__39604) : format.call(null,G__39600,G__39601,G__39602,G__39603,G__39604));

break;
case "compilation":
var G__39605 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__39606 = cause_type;
var G__39607 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39608 = loc;
var G__39609 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39605,G__39606,G__39607,G__39608,G__39609) : format.call(null,G__39605,G__39606,G__39607,G__39608,G__39609));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__39610 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__39611 = symbol;
var G__39612 = loc;
var G__39613 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39614_39753 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39615_39754 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39616_39755 = true;
var _STAR_print_fn_STAR__temp_val__39617_39756 = ((function (_STAR_print_newline_STAR__orig_val__39614_39753,_STAR_print_fn_STAR__orig_val__39615_39754,_STAR_print_newline_STAR__temp_val__39616_39755,sb__4661__auto__,G__39610,G__39611,G__39612,G__39586,G__39586__$1,loc,class_name,simple_class,cause_type,format,map__39583,map__39583__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__39614_39753,_STAR_print_fn_STAR__orig_val__39615_39754,_STAR_print_newline_STAR__temp_val__39616_39755,sb__4661__auto__,G__39610,G__39611,G__39612,G__39586,G__39586__$1,loc,class_name,simple_class,cause_type,format,map__39583,map__39583__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39616_39755;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39617_39756;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__39614_39753,_STAR_print_fn_STAR__orig_val__39615_39754,_STAR_print_newline_STAR__temp_val__39616_39755,_STAR_print_fn_STAR__temp_val__39617_39756,sb__4661__auto__,G__39610,G__39611,G__39612,G__39586,G__39586__$1,loc,class_name,simple_class,cause_type,format,map__39583,map__39583__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__39614_39753,_STAR_print_fn_STAR__orig_val__39615_39754,_STAR_print_newline_STAR__temp_val__39616_39755,_STAR_print_fn_STAR__temp_val__39617_39756,sb__4661__auto__,G__39610,G__39611,G__39612,G__39586,G__39586__$1,loc,class_name,simple_class,cause_type,format,map__39583,map__39583__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__39581_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39581_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__39614_39753,_STAR_print_fn_STAR__orig_val__39615_39754,_STAR_print_newline_STAR__temp_val__39616_39755,_STAR_print_fn_STAR__temp_val__39617_39756,sb__4661__auto__,G__39610,G__39611,G__39612,G__39586,G__39586__$1,loc,class_name,simple_class,cause_type,format,map__39583,map__39583__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__39614_39753,_STAR_print_fn_STAR__orig_val__39615_39754,_STAR_print_newline_STAR__temp_val__39616_39755,_STAR_print_fn_STAR__temp_val__39617_39756,sb__4661__auto__,G__39610,G__39611,G__39612,G__39586,G__39586__$1,loc,class_name,simple_class,cause_type,format,map__39583,map__39583__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39615_39754;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39614_39753;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39610,G__39611,G__39612,G__39613) : format.call(null,G__39610,G__39611,G__39612,G__39613));
} else {
var G__39623 = "Execution error%s at %s(%s).\n%s\n";
var G__39624 = cause_type;
var G__39625 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39626 = loc;
var G__39627 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39623,G__39624,G__39625,G__39626,G__39627) : format.call(null,G__39623,G__39624,G__39625,G__39626,G__39627));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39586__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
