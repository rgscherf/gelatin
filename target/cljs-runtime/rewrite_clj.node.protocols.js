goog.provide('rewrite_clj.node.protocols');
goog.require('cljs.core');
goog.require('clojure.string');

/**
 * Protocol for EDN/Clojure nodes.
 * @interface
 */
rewrite_clj.node.protocols.Node = function(){};

/**
 * Keyword representing the type of the node.
 */
rewrite_clj.node.protocols.tag = (function rewrite_clj$node$protocols$tag(_){
if((((!((_ == null)))) && ((!((_.rewrite_clj$node$protocols$Node$tag$arity$1 == null)))))){
return _.rewrite_clj$node$protocols$Node$tag$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (rewrite_clj.node.protocols.tag[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (rewrite_clj.node.protocols.tag["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Node.tag",_);
}
}
}
});

/**
 * Return true if the node cannot be converted to an s-expression
 *   element.
 */
rewrite_clj.node.protocols.printable_only_QMARK_ = (function rewrite_clj$node$protocols$printable_only_QMARK_(_){
if((((!((_ == null)))) && ((!((_.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 == null)))))){
return _.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (rewrite_clj.node.protocols.printable_only_QMARK_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (rewrite_clj.node.protocols.printable_only_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Node.printable-only?",_);
}
}
}
});

/**
 * Convert node to s-expression.
 */
rewrite_clj.node.protocols.sexpr = (function rewrite_clj$node$protocols$sexpr(_){
if((((!((_ == null)))) && ((!((_.rewrite_clj$node$protocols$Node$sexpr$arity$1 == null)))))){
return _.rewrite_clj$node$protocols$Node$sexpr$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (rewrite_clj.node.protocols.sexpr[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (rewrite_clj.node.protocols.sexpr["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Node.sexpr",_);
}
}
}
});

/**
 * Get number of characters for the string version of this node.
 */
rewrite_clj.node.protocols.length = (function rewrite_clj$node$protocols$length(_){
if((((!((_ == null)))) && ((!((_.rewrite_clj$node$protocols$Node$length$arity$1 == null)))))){
return _.rewrite_clj$node$protocols$Node$length$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (rewrite_clj.node.protocols.length[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (rewrite_clj.node.protocols.length["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Node.length",_);
}
}
}
});

/**
 * Convert node to printable string.
 */
rewrite_clj.node.protocols.string = (function rewrite_clj$node$protocols$string(_){
if((((!((_ == null)))) && ((!((_.rewrite_clj$node$protocols$Node$string$arity$1 == null)))))){
return _.rewrite_clj$node$protocols$Node$string$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (rewrite_clj.node.protocols.string[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (rewrite_clj.node.protocols.string["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Node.string",_);
}
}
}
});

goog.object.set(rewrite_clj.node.protocols.Node,"object",true);

var G__45675_45732 = rewrite_clj.node.protocols.tag;
var G__45676_45733 = "object";
var G__45677_45734 = ((function (G__45675_45732,G__45676_45733){
return (function (_){
return new cljs.core.Keyword(null,"unknown","unknown",-935977881);
});})(G__45675_45732,G__45676_45733))
;
goog.object.set(G__45675_45732,G__45676_45733,G__45677_45734);

var G__45678_45736 = rewrite_clj.node.protocols.printable_only_QMARK_;
var G__45679_45737 = "object";
var G__45680_45738 = ((function (G__45678_45736,G__45679_45737){
return (function (_){
return false;
});})(G__45678_45736,G__45679_45737))
;
goog.object.set(G__45678_45736,G__45679_45737,G__45680_45738);

var G__45681_45742 = rewrite_clj.node.protocols.sexpr;
var G__45682_45743 = "object";
var G__45683_45744 = ((function (G__45681_45742,G__45682_45743){
return (function (this$){
return this$;
});})(G__45681_45742,G__45682_45743))
;
goog.object.set(G__45681_45742,G__45682_45743,G__45683_45744);

var G__45684_45745 = rewrite_clj.node.protocols.length;
var G__45685_45746 = "object";
var G__45686_45747 = ((function (G__45684_45745,G__45685_45746){
return (function (this$){
return cljs.core.count(rewrite_clj.node.protocols.string(this$));
});})(G__45684_45745,G__45685_45746))
;
goog.object.set(G__45684_45745,G__45685_45746,G__45686_45747);

var G__45687_45749 = rewrite_clj.node.protocols.string;
var G__45688_45750 = "object";
var G__45689_45751 = ((function (G__45687_45749,G__45688_45750){
return (function (this$){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
});})(G__45687_45749,G__45688_45750))
;
goog.object.set(G__45687_45749,G__45688_45750,G__45689_45751);
/**
 * Given a seq of nodes, convert those that represent s-expressions
 * to the respective forms.
 */
rewrite_clj.node.protocols.sexprs = (function rewrite_clj$node$protocols$sexprs(nodes){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.sexpr,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.printable_only_QMARK_,nodes));
});
/**
 * Sum up lengths of the given nodes.
 */
rewrite_clj.node.protocols.sum_lengths = (function rewrite_clj$node$protocols$sum_lengths(nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.length,nodes));
});
/**
 * Convert nodes to strings and concatenate them.
 */
rewrite_clj.node.protocols.concat_strings = (function rewrite_clj$node$protocols$concat_strings(nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.string,nodes));
});

/**
 * Protocol for non-leaf EDN/Clojure nodes.
 * @interface
 */
rewrite_clj.node.protocols.InnerNode = function(){};

/**
 * Check whether the node can contain children.
 */
rewrite_clj.node.protocols.inner_QMARK_ = (function rewrite_clj$node$protocols$inner_QMARK_(_){
if((((!((_ == null)))) && ((!((_.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 == null)))))){
return _.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (rewrite_clj.node.protocols.inner_QMARK_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (rewrite_clj.node.protocols.inner_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("InnerNode.inner?",_);
}
}
}
});

/**
 * Get child nodes.
 */
rewrite_clj.node.protocols.children = (function rewrite_clj$node$protocols$children(_){
if((((!((_ == null)))) && ((!((_.rewrite_clj$node$protocols$InnerNode$children$arity$1 == null)))))){
return _.rewrite_clj$node$protocols$InnerNode$children$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (rewrite_clj.node.protocols.children[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (rewrite_clj.node.protocols.children["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("InnerNode.children",_);
}
}
}
});

/**
 * Replace the node's children.
 */
rewrite_clj.node.protocols.replace_children = (function rewrite_clj$node$protocols$replace_children(_,children){
if((((!((_ == null)))) && ((!((_.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 == null)))))){
return _.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2(_,children);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (rewrite_clj.node.protocols.replace_children[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(_,children) : m__4434__auto__.call(null,_,children));
} else {
var m__4431__auto__ = (rewrite_clj.node.protocols.replace_children["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(_,children) : m__4431__auto__.call(null,_,children));
} else {
throw cljs.core.missing_protocol("InnerNode.replace-children",_);
}
}
}
});

goog.object.set(rewrite_clj.node.protocols.InnerNode,"object",true);

var G__45709_45771 = rewrite_clj.node.protocols.inner_QMARK_;
var G__45710_45772 = "object";
var G__45711_45773 = ((function (G__45709_45771,G__45710_45772){
return (function (_){
return false;
});})(G__45709_45771,G__45710_45772))
;
goog.object.set(G__45709_45771,G__45710_45772,G__45711_45773);

var G__45712_45774 = rewrite_clj.node.protocols.children;
var G__45713_45775 = "object";
var G__45714_45776 = ((function (G__45712_45774,G__45713_45775){
return (function (_){
throw (new Error("UnsupportedOperationException"));
});})(G__45712_45774,G__45713_45775))
;
goog.object.set(G__45712_45774,G__45713_45775,G__45714_45776);

var G__45715_45777 = rewrite_clj.node.protocols.replace_children;
var G__45716_45778 = "object";
var G__45717_45779 = ((function (G__45715_45777,G__45716_45778){
return (function (_,___$1){
throw (new Error("UnsupportedOperationException"));
});})(G__45715_45777,G__45716_45778))
;
goog.object.set(G__45715_45777,G__45716_45778,G__45717_45779);
/**
 * Get all child s-expressions for the given node.
 */
rewrite_clj.node.protocols.child_sexprs = (function rewrite_clj$node$protocols$child_sexprs(node){
if(cljs.core.truth_(rewrite_clj.node.protocols.inner_QMARK_(node))){
return rewrite_clj.node.protocols.sexprs(rewrite_clj.node.protocols.children(node));
} else {
return null;
}
});

/**
 * Protocol for values that can be coerced to nodes.
 * @interface
 */
rewrite_clj.node.protocols.NodeCoerceable = function(){};

rewrite_clj.node.protocols.coerce = (function rewrite_clj$node$protocols$coerce(_){
if((((!((_ == null)))) && ((!((_.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 == null)))))){
return _.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (rewrite_clj.node.protocols.coerce[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (rewrite_clj.node.protocols.coerce["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("NodeCoerceable.coerce",_);
}
}
}
});

rewrite_clj.node.protocols.assert_sexpr_count = (function rewrite_clj$node$protocols$assert_sexpr_count(nodes,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.printable_only_QMARK_,nodes)),c)){
return null;
} else {
throw (new Error(["Assert failed: ",["can only contain",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," non-whitespace form(s)."].join(''),"\n","(= (count (remove printable-only? nodes)) c)"].join('')));
}
});
rewrite_clj.node.protocols.assert_single_sexpr = (function rewrite_clj$node$protocols$assert_single_sexpr(nodes){
return rewrite_clj.node.protocols.assert_sexpr_count(nodes,(1));
});

//# sourceMappingURL=rewrite_clj.node.protocols.js.map
