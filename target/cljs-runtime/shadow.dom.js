goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__44436 = coll;
var G__44437 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__44436,G__44437) : shadow.dom.lazy_native_coll_seq.call(null,G__44436,G__44437));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__44452 = arguments.length;
switch (G__44452) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__44454 = arguments.length;
switch (G__44454) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__44462 = arguments.length;
switch (G__44462) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__44464 = arguments.length;
switch (G__44464) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__44480 = arguments.length;
switch (G__44480) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__44486 = document;
var G__44487 = shadow.dom.dom_node(el);
return goog.dom.contains(G__44486,G__44487);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__44488 = shadow.dom.dom_node(parent);
var G__44489 = shadow.dom.dom_node(el);
return goog.dom.contains(G__44488,G__44489);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__44490 = shadow.dom.dom_node(el);
var G__44491 = cls;
return goog.dom.classlist.add(G__44490,G__44491);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__44492 = shadow.dom.dom_node(el);
var G__44493 = cls;
return goog.dom.classlist.remove(G__44492,G__44493);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__44496 = arguments.length;
switch (G__44496) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__44498 = shadow.dom.dom_node(el);
var G__44499 = cls;
return goog.dom.classlist.toggle(G__44498,G__44499);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e44500){if((e44500 instanceof Object)){
var e = e44500;
return console.log("didnt support attachEvent",el,e);
} else {
throw e44500;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__44502 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__44503 = null;
var count__44504 = (0);
var i__44505 = (0);
while(true){
if((i__44505 < count__44504)){
var el = chunk__44503.cljs$core$IIndexed$_nth$arity$2(null,i__44505);
var handler_45289__$1 = ((function (seq__44502,chunk__44503,count__44504,i__44505,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44502,chunk__44503,count__44504,i__44505,el))
;
var G__44513_45291 = el;
var G__44514_45292 = cljs.core.name(ev);
var G__44515_45293 = handler_45289__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__44513_45291,G__44514_45292,G__44515_45293) : shadow.dom.dom_listen.call(null,G__44513_45291,G__44514_45292,G__44515_45293));


var G__45294 = seq__44502;
var G__45295 = chunk__44503;
var G__45296 = count__44504;
var G__45297 = (i__44505 + (1));
seq__44502 = G__45294;
chunk__44503 = G__45295;
count__44504 = G__45296;
i__44505 = G__45297;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44502);
if(temp__5735__auto__){
var seq__44502__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44502__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__44502__$1);
var G__45299 = cljs.core.chunk_rest(seq__44502__$1);
var G__45300 = c__4550__auto__;
var G__45301 = cljs.core.count(c__4550__auto__);
var G__45302 = (0);
seq__44502 = G__45299;
chunk__44503 = G__45300;
count__44504 = G__45301;
i__44505 = G__45302;
continue;
} else {
var el = cljs.core.first(seq__44502__$1);
var handler_45304__$1 = ((function (seq__44502,chunk__44503,count__44504,i__44505,el,seq__44502__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44502,chunk__44503,count__44504,i__44505,el,seq__44502__$1,temp__5735__auto__))
;
var G__44516_45328 = el;
var G__44517_45329 = cljs.core.name(ev);
var G__44518_45330 = handler_45304__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__44516_45328,G__44517_45329,G__44518_45330) : shadow.dom.dom_listen.call(null,G__44516_45328,G__44517_45329,G__44518_45330));


var G__45331 = cljs.core.next(seq__44502__$1);
var G__45332 = null;
var G__45333 = (0);
var G__45334 = (0);
seq__44502 = G__45331;
chunk__44503 = G__45332;
count__44504 = G__45333;
i__44505 = G__45334;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__44520 = arguments.length;
switch (G__44520) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__44525 = shadow.dom.dom_node(el);
var G__44526 = cljs.core.name(ev);
var G__44527 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__44525,G__44526,G__44527) : shadow.dom.dom_listen.call(null,G__44525,G__44526,G__44527));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__44528 = shadow.dom.dom_node(el);
var G__44529 = cljs.core.name(ev);
var G__44530 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__44528,G__44529,G__44530) : shadow.dom.dom_listen_remove.call(null,G__44528,G__44529,G__44530));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__44531 = cljs.core.seq(events);
var chunk__44532 = null;
var count__44533 = (0);
var i__44534 = (0);
while(true){
if((i__44534 < count__44533)){
var vec__44541 = chunk__44532.cljs$core$IIndexed$_nth$arity$2(null,i__44534);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44541,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44541,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45344 = seq__44531;
var G__45345 = chunk__44532;
var G__45346 = count__44533;
var G__45347 = (i__44534 + (1));
seq__44531 = G__45344;
chunk__44532 = G__45345;
count__44533 = G__45346;
i__44534 = G__45347;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44531);
if(temp__5735__auto__){
var seq__44531__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44531__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__44531__$1);
var G__45348 = cljs.core.chunk_rest(seq__44531__$1);
var G__45349 = c__4550__auto__;
var G__45350 = cljs.core.count(c__4550__auto__);
var G__45351 = (0);
seq__44531 = G__45348;
chunk__44532 = G__45349;
count__44533 = G__45350;
i__44534 = G__45351;
continue;
} else {
var vec__44544 = cljs.core.first(seq__44531__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44544,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44544,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45363 = cljs.core.next(seq__44531__$1);
var G__45364 = null;
var G__45365 = (0);
var G__45366 = (0);
seq__44531 = G__45363;
chunk__44532 = G__45364;
count__44533 = G__45365;
i__44534 = G__45366;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__44556 = cljs.core.seq(styles);
var chunk__44557 = null;
var count__44558 = (0);
var i__44559 = (0);
while(true){
if((i__44559 < count__44558)){
var vec__44572 = chunk__44557.cljs$core$IIndexed$_nth$arity$2(null,i__44559);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44572,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44572,(1),null);
var G__44579_45378 = dom;
var G__44580_45379 = cljs.core.name(k);
var G__44581_45380 = (((v == null))?"":v);
goog.style.setStyle(G__44579_45378,G__44580_45379,G__44581_45380);


var G__45381 = seq__44556;
var G__45382 = chunk__44557;
var G__45383 = count__44558;
var G__45384 = (i__44559 + (1));
seq__44556 = G__45381;
chunk__44557 = G__45382;
count__44558 = G__45383;
i__44559 = G__45384;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44556);
if(temp__5735__auto__){
var seq__44556__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44556__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__44556__$1);
var G__45385 = cljs.core.chunk_rest(seq__44556__$1);
var G__45386 = c__4550__auto__;
var G__45387 = cljs.core.count(c__4550__auto__);
var G__45388 = (0);
seq__44556 = G__45385;
chunk__44557 = G__45386;
count__44558 = G__45387;
i__44559 = G__45388;
continue;
} else {
var vec__44587 = cljs.core.first(seq__44556__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44587,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44587,(1),null);
var G__44591_45389 = dom;
var G__44592_45390 = cljs.core.name(k);
var G__44593_45391 = (((v == null))?"":v);
goog.style.setStyle(G__44591_45389,G__44592_45390,G__44593_45391);


var G__45392 = cljs.core.next(seq__44556__$1);
var G__45393 = null;
var G__45394 = (0);
var G__45395 = (0);
seq__44556 = G__45392;
chunk__44557 = G__45393;
count__44558 = G__45394;
i__44559 = G__45395;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__44602_45396 = key;
var G__44602_45397__$1 = (((G__44602_45396 instanceof cljs.core.Keyword))?G__44602_45396.fqn:null);
switch (G__44602_45397__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_45413 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_45413,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_45413,"aria-");
}
})())){
el.setAttribute(ks_45413,value);
} else {
(el[ks_45413] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__44612 = shadow.dom.dom_node(el);
var G__44613 = cls;
return goog.dom.classlist.contains(G__44612,G__44613);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__44630){
var map__44631 = p__44630;
var map__44631__$1 = (((((!((map__44631 == null))))?(((((map__44631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44631):map__44631);
var props = map__44631__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44631__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__44633 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44633,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44633,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44633,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__44644 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__44644,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__44644;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__44646 = arguments.length;
switch (G__44646) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__44653){
var vec__44656 = p__44653;
var seq__44657 = cljs.core.seq(vec__44656);
var first__44658 = cljs.core.first(seq__44657);
var seq__44657__$1 = cljs.core.next(seq__44657);
var nn = first__44658;
var first__44658__$1 = cljs.core.first(seq__44657__$1);
var seq__44657__$2 = cljs.core.next(seq__44657__$1);
var np = first__44658__$1;
var nc = seq__44657__$2;
var node = vec__44656;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44665 = nn;
var G__44666 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__44665,G__44666) : create_fn.call(null,G__44665,G__44666));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44668 = nn;
var G__44669 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__44668,G__44669) : create_fn.call(null,G__44668,G__44669));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__44671 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44671,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44671,(1),null);
var seq__44674_45467 = cljs.core.seq(node_children);
var chunk__44675_45468 = null;
var count__44676_45469 = (0);
var i__44677_45470 = (0);
while(true){
if((i__44677_45470 < count__44676_45469)){
var child_struct_45472 = chunk__44675_45468.cljs$core$IIndexed$_nth$arity$2(null,i__44677_45470);
var children_45473 = shadow.dom.dom_node(child_struct_45472);
if(cljs.core.seq_QMARK_(children_45473)){
var seq__44723_45475 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45473));
var chunk__44726_45476 = null;
var count__44727_45477 = (0);
var i__44728_45478 = (0);
while(true){
if((i__44728_45478 < count__44727_45477)){
var child_45479 = chunk__44726_45476.cljs$core$IIndexed$_nth$arity$2(null,i__44728_45478);
if(cljs.core.truth_(child_45479)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45479);


var G__45480 = seq__44723_45475;
var G__45481 = chunk__44726_45476;
var G__45482 = count__44727_45477;
var G__45483 = (i__44728_45478 + (1));
seq__44723_45475 = G__45480;
chunk__44726_45476 = G__45481;
count__44727_45477 = G__45482;
i__44728_45478 = G__45483;
continue;
} else {
var G__45485 = seq__44723_45475;
var G__45486 = chunk__44726_45476;
var G__45487 = count__44727_45477;
var G__45488 = (i__44728_45478 + (1));
seq__44723_45475 = G__45485;
chunk__44726_45476 = G__45486;
count__44727_45477 = G__45487;
i__44728_45478 = G__45488;
continue;
}
} else {
var temp__5735__auto___45490 = cljs.core.seq(seq__44723_45475);
if(temp__5735__auto___45490){
var seq__44723_45491__$1 = temp__5735__auto___45490;
if(cljs.core.chunked_seq_QMARK_(seq__44723_45491__$1)){
var c__4550__auto___45492 = cljs.core.chunk_first(seq__44723_45491__$1);
var G__45493 = cljs.core.chunk_rest(seq__44723_45491__$1);
var G__45494 = c__4550__auto___45492;
var G__45495 = cljs.core.count(c__4550__auto___45492);
var G__45496 = (0);
seq__44723_45475 = G__45493;
chunk__44726_45476 = G__45494;
count__44727_45477 = G__45495;
i__44728_45478 = G__45496;
continue;
} else {
var child_45498 = cljs.core.first(seq__44723_45491__$1);
if(cljs.core.truth_(child_45498)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45498);


var G__45500 = cljs.core.next(seq__44723_45491__$1);
var G__45501 = null;
var G__45502 = (0);
var G__45503 = (0);
seq__44723_45475 = G__45500;
chunk__44726_45476 = G__45501;
count__44727_45477 = G__45502;
i__44728_45478 = G__45503;
continue;
} else {
var G__45504 = cljs.core.next(seq__44723_45491__$1);
var G__45505 = null;
var G__45506 = (0);
var G__45507 = (0);
seq__44723_45475 = G__45504;
chunk__44726_45476 = G__45505;
count__44727_45477 = G__45506;
i__44728_45478 = G__45507;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45473);
}


var G__45509 = seq__44674_45467;
var G__45510 = chunk__44675_45468;
var G__45511 = count__44676_45469;
var G__45512 = (i__44677_45470 + (1));
seq__44674_45467 = G__45509;
chunk__44675_45468 = G__45510;
count__44676_45469 = G__45511;
i__44677_45470 = G__45512;
continue;
} else {
var temp__5735__auto___45513 = cljs.core.seq(seq__44674_45467);
if(temp__5735__auto___45513){
var seq__44674_45514__$1 = temp__5735__auto___45513;
if(cljs.core.chunked_seq_QMARK_(seq__44674_45514__$1)){
var c__4550__auto___45515 = cljs.core.chunk_first(seq__44674_45514__$1);
var G__45521 = cljs.core.chunk_rest(seq__44674_45514__$1);
var G__45522 = c__4550__auto___45515;
var G__45523 = cljs.core.count(c__4550__auto___45515);
var G__45524 = (0);
seq__44674_45467 = G__45521;
chunk__44675_45468 = G__45522;
count__44676_45469 = G__45523;
i__44677_45470 = G__45524;
continue;
} else {
var child_struct_45526 = cljs.core.first(seq__44674_45514__$1);
var children_45527 = shadow.dom.dom_node(child_struct_45526);
if(cljs.core.seq_QMARK_(children_45527)){
var seq__44736_45528 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45527));
var chunk__44738_45529 = null;
var count__44739_45530 = (0);
var i__44740_45531 = (0);
while(true){
if((i__44740_45531 < count__44739_45530)){
var child_45535 = chunk__44738_45529.cljs$core$IIndexed$_nth$arity$2(null,i__44740_45531);
if(cljs.core.truth_(child_45535)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45535);


var G__45536 = seq__44736_45528;
var G__45537 = chunk__44738_45529;
var G__45538 = count__44739_45530;
var G__45539 = (i__44740_45531 + (1));
seq__44736_45528 = G__45536;
chunk__44738_45529 = G__45537;
count__44739_45530 = G__45538;
i__44740_45531 = G__45539;
continue;
} else {
var G__45540 = seq__44736_45528;
var G__45541 = chunk__44738_45529;
var G__45542 = count__44739_45530;
var G__45543 = (i__44740_45531 + (1));
seq__44736_45528 = G__45540;
chunk__44738_45529 = G__45541;
count__44739_45530 = G__45542;
i__44740_45531 = G__45543;
continue;
}
} else {
var temp__5735__auto___45544__$1 = cljs.core.seq(seq__44736_45528);
if(temp__5735__auto___45544__$1){
var seq__44736_45545__$1 = temp__5735__auto___45544__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44736_45545__$1)){
var c__4550__auto___45546 = cljs.core.chunk_first(seq__44736_45545__$1);
var G__45547 = cljs.core.chunk_rest(seq__44736_45545__$1);
var G__45548 = c__4550__auto___45546;
var G__45549 = cljs.core.count(c__4550__auto___45546);
var G__45550 = (0);
seq__44736_45528 = G__45547;
chunk__44738_45529 = G__45548;
count__44739_45530 = G__45549;
i__44740_45531 = G__45550;
continue;
} else {
var child_45551 = cljs.core.first(seq__44736_45545__$1);
if(cljs.core.truth_(child_45551)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45551);


var G__45552 = cljs.core.next(seq__44736_45545__$1);
var G__45553 = null;
var G__45554 = (0);
var G__45555 = (0);
seq__44736_45528 = G__45552;
chunk__44738_45529 = G__45553;
count__44739_45530 = G__45554;
i__44740_45531 = G__45555;
continue;
} else {
var G__45556 = cljs.core.next(seq__44736_45545__$1);
var G__45557 = null;
var G__45558 = (0);
var G__45559 = (0);
seq__44736_45528 = G__45556;
chunk__44738_45529 = G__45557;
count__44739_45530 = G__45558;
i__44740_45531 = G__45559;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45527);
}


var G__45563 = cljs.core.next(seq__44674_45514__$1);
var G__45564 = null;
var G__45565 = (0);
var G__45566 = (0);
seq__44674_45467 = G__45563;
chunk__44675_45468 = G__45564;
count__44676_45469 = G__45565;
i__44677_45470 = G__45566;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__44762 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__44762);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__44764 = cljs.core.seq(node);
var chunk__44765 = null;
var count__44766 = (0);
var i__44767 = (0);
while(true){
if((i__44767 < count__44766)){
var n = chunk__44765.cljs$core$IIndexed$_nth$arity$2(null,i__44767);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45592 = seq__44764;
var G__45593 = chunk__44765;
var G__45594 = count__44766;
var G__45595 = (i__44767 + (1));
seq__44764 = G__45592;
chunk__44765 = G__45593;
count__44766 = G__45594;
i__44767 = G__45595;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44764);
if(temp__5735__auto__){
var seq__44764__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44764__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__44764__$1);
var G__45596 = cljs.core.chunk_rest(seq__44764__$1);
var G__45597 = c__4550__auto__;
var G__45598 = cljs.core.count(c__4550__auto__);
var G__45599 = (0);
seq__44764 = G__45596;
chunk__44765 = G__45597;
count__44766 = G__45598;
i__44767 = G__45599;
continue;
} else {
var n = cljs.core.first(seq__44764__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45600 = cljs.core.next(seq__44764__$1);
var G__45601 = null;
var G__45602 = (0);
var G__45603 = (0);
seq__44764 = G__45600;
chunk__44765 = G__45601;
count__44766 = G__45602;
i__44767 = G__45603;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__44770 = shadow.dom.dom_node(new$);
var G__44771 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__44770,G__44771);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__44774 = arguments.length;
switch (G__44774) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__44777 = arguments.length;
switch (G__44777) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__44808 = arguments.length;
switch (G__44808) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___45622 = arguments.length;
var i__4731__auto___45623 = (0);
while(true){
if((i__4731__auto___45623 < len__4730__auto___45622)){
args__4736__auto__.push((arguments[i__4731__auto___45623]));

var G__45624 = (i__4731__auto___45623 + (1));
i__4731__auto___45623 = G__45624;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__44847_45625 = cljs.core.seq(nodes);
var chunk__44848_45626 = null;
var count__44849_45627 = (0);
var i__44850_45628 = (0);
while(true){
if((i__44850_45628 < count__44849_45627)){
var node_45629 = chunk__44848_45626.cljs$core$IIndexed$_nth$arity$2(null,i__44850_45628);
fragment.appendChild(shadow.dom._to_dom(node_45629));


var G__45630 = seq__44847_45625;
var G__45631 = chunk__44848_45626;
var G__45632 = count__44849_45627;
var G__45633 = (i__44850_45628 + (1));
seq__44847_45625 = G__45630;
chunk__44848_45626 = G__45631;
count__44849_45627 = G__45632;
i__44850_45628 = G__45633;
continue;
} else {
var temp__5735__auto___45634 = cljs.core.seq(seq__44847_45625);
if(temp__5735__auto___45634){
var seq__44847_45635__$1 = temp__5735__auto___45634;
if(cljs.core.chunked_seq_QMARK_(seq__44847_45635__$1)){
var c__4550__auto___45636 = cljs.core.chunk_first(seq__44847_45635__$1);
var G__45637 = cljs.core.chunk_rest(seq__44847_45635__$1);
var G__45638 = c__4550__auto___45636;
var G__45639 = cljs.core.count(c__4550__auto___45636);
var G__45640 = (0);
seq__44847_45625 = G__45637;
chunk__44848_45626 = G__45638;
count__44849_45627 = G__45639;
i__44850_45628 = G__45640;
continue;
} else {
var node_45641 = cljs.core.first(seq__44847_45635__$1);
fragment.appendChild(shadow.dom._to_dom(node_45641));


var G__45642 = cljs.core.next(seq__44847_45635__$1);
var G__45643 = null;
var G__45644 = (0);
var G__45645 = (0);
seq__44847_45625 = G__45642;
chunk__44848_45626 = G__45643;
count__44849_45627 = G__45644;
i__44850_45628 = G__45645;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq44836){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44836));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__44855_45646 = cljs.core.seq(scripts);
var chunk__44856_45647 = null;
var count__44857_45648 = (0);
var i__44858_45649 = (0);
while(true){
if((i__44858_45649 < count__44857_45648)){
var vec__44865_45652 = chunk__44856_45647.cljs$core$IIndexed$_nth$arity$2(null,i__44858_45649);
var script_tag_45653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44865_45652,(0),null);
var script_body_45654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44865_45652,(1),null);
eval(script_body_45654);


var G__45655 = seq__44855_45646;
var G__45656 = chunk__44856_45647;
var G__45657 = count__44857_45648;
var G__45658 = (i__44858_45649 + (1));
seq__44855_45646 = G__45655;
chunk__44856_45647 = G__45656;
count__44857_45648 = G__45657;
i__44858_45649 = G__45658;
continue;
} else {
var temp__5735__auto___45660 = cljs.core.seq(seq__44855_45646);
if(temp__5735__auto___45660){
var seq__44855_45663__$1 = temp__5735__auto___45660;
if(cljs.core.chunked_seq_QMARK_(seq__44855_45663__$1)){
var c__4550__auto___45664 = cljs.core.chunk_first(seq__44855_45663__$1);
var G__45665 = cljs.core.chunk_rest(seq__44855_45663__$1);
var G__45666 = c__4550__auto___45664;
var G__45667 = cljs.core.count(c__4550__auto___45664);
var G__45668 = (0);
seq__44855_45646 = G__45665;
chunk__44856_45647 = G__45666;
count__44857_45648 = G__45667;
i__44858_45649 = G__45668;
continue;
} else {
var vec__44870_45669 = cljs.core.first(seq__44855_45663__$1);
var script_tag_45670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44870_45669,(0),null);
var script_body_45671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44870_45669,(1),null);
eval(script_body_45671);


var G__45674 = cljs.core.next(seq__44855_45663__$1);
var G__45675 = null;
var G__45676 = (0);
var G__45677 = (0);
seq__44855_45646 = G__45674;
chunk__44856_45647 = G__45675;
count__44857_45648 = G__45676;
i__44858_45649 = G__45677;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__44873){
var vec__44875 = p__44873;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44875,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44875,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__44889 = shadow.dom.dom_node(el);
var G__44890 = cls;
return goog.dom.getAncestorByClass(G__44889,G__44890);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__44893 = arguments.length;
switch (G__44893) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__44894 = shadow.dom.dom_node(el);
var G__44895 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__44894,G__44895);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__44900 = shadow.dom.dom_node(el);
var G__44901 = cljs.core.name(tag);
var G__44902 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__44900,G__44901,G__44902);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__44905 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__44905);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__44906 = shadow.dom.dom_node(dom);
var G__44907 = value;
return goog.dom.forms.setValue(G__44906,G__44907);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__44913 = cljs.core.seq(style_keys);
var chunk__44914 = null;
var count__44915 = (0);
var i__44916 = (0);
while(true){
if((i__44916 < count__44915)){
var it = chunk__44914.cljs$core$IIndexed$_nth$arity$2(null,i__44916);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45712 = seq__44913;
var G__45713 = chunk__44914;
var G__45714 = count__44915;
var G__45715 = (i__44916 + (1));
seq__44913 = G__45712;
chunk__44914 = G__45713;
count__44915 = G__45714;
i__44916 = G__45715;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44913);
if(temp__5735__auto__){
var seq__44913__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44913__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__44913__$1);
var G__45720 = cljs.core.chunk_rest(seq__44913__$1);
var G__45721 = c__4550__auto__;
var G__45722 = cljs.core.count(c__4550__auto__);
var G__45723 = (0);
seq__44913 = G__45720;
chunk__44914 = G__45721;
count__44915 = G__45722;
i__44916 = G__45723;
continue;
} else {
var it = cljs.core.first(seq__44913__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45736 = cljs.core.next(seq__44913__$1);
var G__45737 = null;
var G__45738 = (0);
var G__45739 = (0);
seq__44913 = G__45736;
chunk__44914 = G__45737;
count__44915 = G__45738;
i__44916 = G__45739;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k44921,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__44926 = k44921;
var G__44926__$1 = (((G__44926 instanceof cljs.core.Keyword))?G__44926.fqn:null);
switch (G__44926__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44921,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__44930){
var vec__44931 = p__44930;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44931,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44931,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44920){
var self__ = this;
var G__44920__$1 = this;
return (new cljs.core.RecordIter((0),G__44920__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__44949 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__44949(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44922,other44923){
var self__ = this;
var this44922__$1 = this;
return (((!((other44923 == null)))) && ((this44922__$1.constructor === other44923.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44922__$1.x,other44923.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44922__$1.y,other44923.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44922__$1.__extmap,other44923.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__44920){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__44954 = cljs.core.keyword_identical_QMARK_;
var expr__44955 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__44957 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__44958 = expr__44955;
return (pred__44954.cljs$core$IFn$_invoke$arity$2 ? pred__44954.cljs$core$IFn$_invoke$arity$2(G__44957,G__44958) : pred__44954.call(null,G__44957,G__44958));
})())){
return (new shadow.dom.Coordinate(G__44920,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44959 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__44960 = expr__44955;
return (pred__44954.cljs$core$IFn$_invoke$arity$2 ? pred__44954.cljs$core$IFn$_invoke$arity$2(G__44959,G__44960) : pred__44954.call(null,G__44959,G__44960));
})())){
return (new shadow.dom.Coordinate(self__.x,G__44920,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__44920),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__44920){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__44920,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__44924){
var extmap__4424__auto__ = (function (){var G__44967 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44924,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__44924)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44967);
} else {
return G__44967;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__44924),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__44924),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__44969 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__44969);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__44972 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__44972);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__44974 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__44974);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k44976,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__44987 = k44976;
var G__44987__$1 = (((G__44987 instanceof cljs.core.Keyword))?G__44987.fqn:null);
switch (G__44987__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44976,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__44991){
var vec__44993 = p__44991;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44993,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44993,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44975){
var self__ = this;
var G__44975__$1 = this;
return (new cljs.core.RecordIter((0),G__44975__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__44999 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__44999(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44977,other44978){
var self__ = this;
var this44977__$1 = this;
return (((!((other44978 == null)))) && ((this44977__$1.constructor === other44978.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44977__$1.w,other44978.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44977__$1.h,other44978.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44977__$1.__extmap,other44978.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__44975){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__45009 = cljs.core.keyword_identical_QMARK_;
var expr__45010 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__45012 = new cljs.core.Keyword(null,"w","w",354169001);
var G__45013 = expr__45010;
return (pred__45009.cljs$core$IFn$_invoke$arity$2 ? pred__45009.cljs$core$IFn$_invoke$arity$2(G__45012,G__45013) : pred__45009.call(null,G__45012,G__45013));
})())){
return (new shadow.dom.Size(G__44975,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__45015 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__45016 = expr__45010;
return (pred__45009.cljs$core$IFn$_invoke$arity$2 ? pred__45009.cljs$core$IFn$_invoke$arity$2(G__45015,G__45016) : pred__45009.call(null,G__45015,G__45016));
})())){
return (new shadow.dom.Size(self__.w,G__44975,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__44975),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__44975){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__44975,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__44980){
var extmap__4424__auto__ = (function (){var G__45039 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44980,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__44980)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45039);
} else {
return G__45039;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__44980),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__44980),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__45040 = shadow.dom.dom_node(el);
return goog.style.getSize(G__45040);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__45854 = (i + (1));
var G__45855 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__45854;
ret = G__45855;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45051){
var vec__45052 = p__45051;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45052,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45052,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__45056 = arguments.length;
switch (G__45056) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__45057_45871 = new_node;
var G__45058_45872 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__45057_45871,G__45058_45872);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__45059_45874 = new_node;
var G__45060_45875 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__45059_45874,G__45060_45875);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__45878 = ps;
var G__45879 = (i + (1));
el__$1 = G__45878;
i = G__45879;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__45063 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__45063);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__45066 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__45066);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__45070 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__45070);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__45074 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45074,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45074,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45074,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__45077_45907 = cljs.core.seq(props);
var chunk__45078_45908 = null;
var count__45079_45909 = (0);
var i__45080_45910 = (0);
while(true){
if((i__45080_45910 < count__45079_45909)){
var vec__45097_45911 = chunk__45078_45908.cljs$core$IIndexed$_nth$arity$2(null,i__45080_45910);
var k_45912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45097_45911,(0),null);
var v_45913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45097_45911,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_45912);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_45912),v_45913);


var G__45914 = seq__45077_45907;
var G__45915 = chunk__45078_45908;
var G__45916 = count__45079_45909;
var G__45917 = (i__45080_45910 + (1));
seq__45077_45907 = G__45914;
chunk__45078_45908 = G__45915;
count__45079_45909 = G__45916;
i__45080_45910 = G__45917;
continue;
} else {
var temp__5735__auto___45918 = cljs.core.seq(seq__45077_45907);
if(temp__5735__auto___45918){
var seq__45077_45919__$1 = temp__5735__auto___45918;
if(cljs.core.chunked_seq_QMARK_(seq__45077_45919__$1)){
var c__4550__auto___45920 = cljs.core.chunk_first(seq__45077_45919__$1);
var G__45921 = cljs.core.chunk_rest(seq__45077_45919__$1);
var G__45922 = c__4550__auto___45920;
var G__45923 = cljs.core.count(c__4550__auto___45920);
var G__45924 = (0);
seq__45077_45907 = G__45921;
chunk__45078_45908 = G__45922;
count__45079_45909 = G__45923;
i__45080_45910 = G__45924;
continue;
} else {
var vec__45102_45925 = cljs.core.first(seq__45077_45919__$1);
var k_45926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45102_45925,(0),null);
var v_45927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45102_45925,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_45926);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_45926),v_45927);


var G__45929 = cljs.core.next(seq__45077_45919__$1);
var G__45930 = null;
var G__45931 = (0);
var G__45932 = (0);
seq__45077_45907 = G__45929;
chunk__45078_45908 = G__45930;
count__45079_45909 = G__45931;
i__45080_45910 = G__45932;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__45119 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45119,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45119,(1),null);
var seq__45122_45933 = cljs.core.seq(node_children);
var chunk__45124_45934 = null;
var count__45125_45935 = (0);
var i__45126_45936 = (0);
while(true){
if((i__45126_45936 < count__45125_45935)){
var child_struct_45941 = chunk__45124_45934.cljs$core$IIndexed$_nth$arity$2(null,i__45126_45936);
if((!((child_struct_45941 == null)))){
if(typeof child_struct_45941 === 'string'){
var text_45942 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_45942),child_struct_45941].join(''));
} else {
var children_45943 = shadow.dom.svg_node(child_struct_45941);
if(cljs.core.seq_QMARK_(children_45943)){
var seq__45164_45945 = cljs.core.seq(children_45943);
var chunk__45166_45946 = null;
var count__45167_45947 = (0);
var i__45168_45948 = (0);
while(true){
if((i__45168_45948 < count__45167_45947)){
var child_45949 = chunk__45166_45946.cljs$core$IIndexed$_nth$arity$2(null,i__45168_45948);
if(cljs.core.truth_(child_45949)){
node.appendChild(child_45949);


var G__45950 = seq__45164_45945;
var G__45951 = chunk__45166_45946;
var G__45952 = count__45167_45947;
var G__45953 = (i__45168_45948 + (1));
seq__45164_45945 = G__45950;
chunk__45166_45946 = G__45951;
count__45167_45947 = G__45952;
i__45168_45948 = G__45953;
continue;
} else {
var G__45954 = seq__45164_45945;
var G__45955 = chunk__45166_45946;
var G__45956 = count__45167_45947;
var G__45957 = (i__45168_45948 + (1));
seq__45164_45945 = G__45954;
chunk__45166_45946 = G__45955;
count__45167_45947 = G__45956;
i__45168_45948 = G__45957;
continue;
}
} else {
var temp__5735__auto___45958 = cljs.core.seq(seq__45164_45945);
if(temp__5735__auto___45958){
var seq__45164_45959__$1 = temp__5735__auto___45958;
if(cljs.core.chunked_seq_QMARK_(seq__45164_45959__$1)){
var c__4550__auto___45960 = cljs.core.chunk_first(seq__45164_45959__$1);
var G__45961 = cljs.core.chunk_rest(seq__45164_45959__$1);
var G__45962 = c__4550__auto___45960;
var G__45963 = cljs.core.count(c__4550__auto___45960);
var G__45964 = (0);
seq__45164_45945 = G__45961;
chunk__45166_45946 = G__45962;
count__45167_45947 = G__45963;
i__45168_45948 = G__45964;
continue;
} else {
var child_45965 = cljs.core.first(seq__45164_45959__$1);
if(cljs.core.truth_(child_45965)){
node.appendChild(child_45965);


var G__45966 = cljs.core.next(seq__45164_45959__$1);
var G__45967 = null;
var G__45968 = (0);
var G__45969 = (0);
seq__45164_45945 = G__45966;
chunk__45166_45946 = G__45967;
count__45167_45947 = G__45968;
i__45168_45948 = G__45969;
continue;
} else {
var G__45970 = cljs.core.next(seq__45164_45959__$1);
var G__45971 = null;
var G__45972 = (0);
var G__45973 = (0);
seq__45164_45945 = G__45970;
chunk__45166_45946 = G__45971;
count__45167_45947 = G__45972;
i__45168_45948 = G__45973;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_45943);
}
}


var G__45974 = seq__45122_45933;
var G__45975 = chunk__45124_45934;
var G__45976 = count__45125_45935;
var G__45977 = (i__45126_45936 + (1));
seq__45122_45933 = G__45974;
chunk__45124_45934 = G__45975;
count__45125_45935 = G__45976;
i__45126_45936 = G__45977;
continue;
} else {
var G__45978 = seq__45122_45933;
var G__45979 = chunk__45124_45934;
var G__45980 = count__45125_45935;
var G__45981 = (i__45126_45936 + (1));
seq__45122_45933 = G__45978;
chunk__45124_45934 = G__45979;
count__45125_45935 = G__45980;
i__45126_45936 = G__45981;
continue;
}
} else {
var temp__5735__auto___45982 = cljs.core.seq(seq__45122_45933);
if(temp__5735__auto___45982){
var seq__45122_45983__$1 = temp__5735__auto___45982;
if(cljs.core.chunked_seq_QMARK_(seq__45122_45983__$1)){
var c__4550__auto___45984 = cljs.core.chunk_first(seq__45122_45983__$1);
var G__45985 = cljs.core.chunk_rest(seq__45122_45983__$1);
var G__45986 = c__4550__auto___45984;
var G__45987 = cljs.core.count(c__4550__auto___45984);
var G__45988 = (0);
seq__45122_45933 = G__45985;
chunk__45124_45934 = G__45986;
count__45125_45935 = G__45987;
i__45126_45936 = G__45988;
continue;
} else {
var child_struct_45990 = cljs.core.first(seq__45122_45983__$1);
if((!((child_struct_45990 == null)))){
if(typeof child_struct_45990 === 'string'){
var text_46001 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46001),child_struct_45990].join(''));
} else {
var children_46002 = shadow.dom.svg_node(child_struct_45990);
if(cljs.core.seq_QMARK_(children_46002)){
var seq__45171_46003 = cljs.core.seq(children_46002);
var chunk__45173_46004 = null;
var count__45174_46005 = (0);
var i__45175_46006 = (0);
while(true){
if((i__45175_46006 < count__45174_46005)){
var child_46007 = chunk__45173_46004.cljs$core$IIndexed$_nth$arity$2(null,i__45175_46006);
if(cljs.core.truth_(child_46007)){
node.appendChild(child_46007);


var G__46008 = seq__45171_46003;
var G__46009 = chunk__45173_46004;
var G__46010 = count__45174_46005;
var G__46011 = (i__45175_46006 + (1));
seq__45171_46003 = G__46008;
chunk__45173_46004 = G__46009;
count__45174_46005 = G__46010;
i__45175_46006 = G__46011;
continue;
} else {
var G__46013 = seq__45171_46003;
var G__46014 = chunk__45173_46004;
var G__46015 = count__45174_46005;
var G__46016 = (i__45175_46006 + (1));
seq__45171_46003 = G__46013;
chunk__45173_46004 = G__46014;
count__45174_46005 = G__46015;
i__45175_46006 = G__46016;
continue;
}
} else {
var temp__5735__auto___46017__$1 = cljs.core.seq(seq__45171_46003);
if(temp__5735__auto___46017__$1){
var seq__45171_46018__$1 = temp__5735__auto___46017__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45171_46018__$1)){
var c__4550__auto___46019 = cljs.core.chunk_first(seq__45171_46018__$1);
var G__46020 = cljs.core.chunk_rest(seq__45171_46018__$1);
var G__46021 = c__4550__auto___46019;
var G__46022 = cljs.core.count(c__4550__auto___46019);
var G__46023 = (0);
seq__45171_46003 = G__46020;
chunk__45173_46004 = G__46021;
count__45174_46005 = G__46022;
i__45175_46006 = G__46023;
continue;
} else {
var child_46024 = cljs.core.first(seq__45171_46018__$1);
if(cljs.core.truth_(child_46024)){
node.appendChild(child_46024);


var G__46025 = cljs.core.next(seq__45171_46018__$1);
var G__46026 = null;
var G__46027 = (0);
var G__46028 = (0);
seq__45171_46003 = G__46025;
chunk__45173_46004 = G__46026;
count__45174_46005 = G__46027;
i__45175_46006 = G__46028;
continue;
} else {
var G__46029 = cljs.core.next(seq__45171_46018__$1);
var G__46030 = null;
var G__46031 = (0);
var G__46032 = (0);
seq__45171_46003 = G__46029;
chunk__45173_46004 = G__46030;
count__45174_46005 = G__46031;
i__45175_46006 = G__46032;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46002);
}
}


var G__46033 = cljs.core.next(seq__45122_45983__$1);
var G__46034 = null;
var G__46035 = (0);
var G__46036 = (0);
seq__45122_45933 = G__46033;
chunk__45124_45934 = G__46034;
count__45125_45935 = G__46035;
i__45126_45936 = G__46036;
continue;
} else {
var G__46037 = cljs.core.next(seq__45122_45983__$1);
var G__46038 = null;
var G__46039 = (0);
var G__46040 = (0);
seq__45122_45933 = G__46037;
chunk__45124_45934 = G__46038;
count__45125_45935 = G__46039;
i__45126_45936 = G__46040;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__45179_46041 = shadow.dom._to_svg;
var G__45180_46042 = "string";
var G__45181_46043 = ((function (G__45179_46041,G__45180_46042){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__45179_46041,G__45180_46042))
;
goog.object.set(G__45179_46041,G__45180_46042,G__45181_46043);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__45182_46044 = shadow.dom._to_svg;
var G__45183_46045 = "null";
var G__45184_46046 = ((function (G__45182_46044,G__45183_46045){
return (function (_){
return null;
});})(G__45182_46044,G__45183_46045))
;
goog.object.set(G__45182_46044,G__45183_46045,G__45184_46046);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46047 = arguments.length;
var i__4731__auto___46048 = (0);
while(true){
if((i__4731__auto___46048 < len__4730__auto___46047)){
args__4736__auto__.push((arguments[i__4731__auto___46048]));

var G__46049 = (i__4731__auto___46048 + (1));
i__4731__auto___46048 = G__46049;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq45185){
var G__45186 = cljs.core.first(seq45185);
var seq45185__$1 = cljs.core.next(seq45185);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45186,seq45185__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__45193 = arguments.length;
switch (G__45193) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__45204_46057 = shadow.dom.dom_node(el);
var G__45205_46058 = cljs.core.name(event);
var G__45206_46059 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__45204_46057,G__45205_46058,G__45206_46059) : shadow.dom.dom_listen.call(null,G__45204_46057,G__45205_46058,G__45206_46059));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__42197__auto___46060 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42197__auto___46060,buf,chan,event_fn){
return (function (){
var f__42198__auto__ = (function (){var switch__42084__auto__ = ((function (c__42197__auto___46060,buf,chan,event_fn){
return (function (state_45211){
var state_val_45212 = (state_45211[(1)]);
if((state_val_45212 === (1))){
var state_45211__$1 = state_45211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45211__$1,(2),once_or_cleanup);
} else {
if((state_val_45212 === (2))){
var inst_45208 = (state_45211[(2)]);
var inst_45209 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_45211__$1 = (function (){var statearr_45214 = state_45211;
(statearr_45214[(7)] = inst_45208);

return statearr_45214;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45211__$1,inst_45209);
} else {
return null;
}
}
});})(c__42197__auto___46060,buf,chan,event_fn))
;
return ((function (switch__42084__auto__,c__42197__auto___46060,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__42085__auto__ = null;
var shadow$dom$state_machine__42085__auto____0 = (function (){
var statearr_45217 = [null,null,null,null,null,null,null,null];
(statearr_45217[(0)] = shadow$dom$state_machine__42085__auto__);

(statearr_45217[(1)] = (1));

return statearr_45217;
});
var shadow$dom$state_machine__42085__auto____1 = (function (state_45211){
while(true){
var ret_value__42086__auto__ = (function (){try{while(true){
var result__42087__auto__ = switch__42084__auto__(state_45211);
if(cljs.core.keyword_identical_QMARK_(result__42087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42087__auto__;
}
break;
}
}catch (e45218){if((e45218 instanceof Object)){
var ex__42088__auto__ = e45218;
var statearr_45220_46076 = state_45211;
(statearr_45220_46076[(5)] = ex__42088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45218;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46077 = state_45211;
state_45211 = G__46077;
continue;
} else {
return ret_value__42086__auto__;
}
break;
}
});
shadow$dom$state_machine__42085__auto__ = function(state_45211){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__42085__auto____0.call(this);
case 1:
return shadow$dom$state_machine__42085__auto____1.call(this,state_45211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__42085__auto____0;
shadow$dom$state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__42085__auto____1;
return shadow$dom$state_machine__42085__auto__;
})()
;})(switch__42084__auto__,c__42197__auto___46060,buf,chan,event_fn))
})();
var state__42199__auto__ = (function (){var statearr_45221 = (f__42198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42198__auto__.cljs$core$IFn$_invoke$arity$0() : f__42198__auto__.call(null));
(statearr_45221[(6)] = c__42197__auto___46060);

return statearr_45221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42199__auto__);
});})(c__42197__auto___46060,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
