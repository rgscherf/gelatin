goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$rule(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43961 = arguments.length;
var i__4731__auto___43962 = (0);
while(true){
if((i__4731__auto___43962 < len__4730__auto___43961)){
args__4736__auto__.push((arguments[i__4731__auto___43962]));

var G__43963 = (i__4731__auto___43962 + (1));
i__4731__auto___43962 = G__43963;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__43964__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__43964 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__43965__i = 0, G__43965__a = new Array(arguments.length -  0);
while (G__43965__i < G__43965__a.length) {G__43965__a[G__43965__i] = arguments[G__43965__i + 0]; ++G__43965__i;}
  children = new cljs.core.IndexedSeq(G__43965__a,0,null);
} 
return G__43964__delegate.call(this,children);};
G__43964.cljs$lang$maxFixedArity = 0;
G__43964.cljs$lang$applyTo = (function (arglist__43966){
var children = cljs.core.seq(arglist__43966);
return G__43964__delegate(children);
});
G__43964.cljs$core$IFn$_invoke$arity$variadic = G__43964__delegate;
return G__43964;
})()
;
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rule.cljs$lang$applyTo = (function (seq43939){
var G__43940 = cljs.core.first(seq43939);
var seq43939__$1 = cljs.core.next(seq43939);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43940,seq43939__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.cssfn = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__43973__delegate = function (args){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__43973 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43974__i = 0, G__43974__a = new Array(arguments.length -  0);
while (G__43974__i < G__43974__a.length) {G__43974__a[G__43974__i] = arguments[G__43974__i + 0]; ++G__43974__i;}
  args = new cljs.core.IndexedSeq(G__43974__a,0,null);
} 
return G__43973__delegate.call(this,args);};
G__43973.cljs$lang$maxFixedArity = 0;
G__43973.cljs$lang$applyTo = (function (arglist__43975){
var args = cljs.core.seq(arglist__43975);
return G__43973__delegate(args);
});
G__43973.cljs$core$IFn$_invoke$arity$variadic = G__43973__delegate;
return G__43973;
})()
;
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$at_rule(identifier,value){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_font_face = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$at_font_face(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43978 = arguments.length;
var i__4731__auto___43979 = (0);
while(true){
if((i__4731__auto___43979 < len__4730__auto___43978)){
args__4736__auto__.push((arguments[i__4731__auto___43979]));

var G__43980 = (i__4731__auto___43979 + (1));
i__4731__auto___43979 = G__43980;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq43942){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43942));
});

/**
 * Create a CSS @import rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$at_import(var_args){
var G__43946 = arguments.length;
switch (G__43946) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___43983 = arguments.length;
var i__4731__auto___43984 = (0);
while(true){
if((i__4731__auto___43984 < len__4730__auto___43983)){
args_arr__4751__auto__.push((arguments[i__4731__auto___43984]));

var G__43986 = (i__4731__auto___43984 + (1));
i__4731__auto___43984 = G__43986;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
});

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq43944){
var G__43945 = cljs.core.first(seq43944);
var seq43944__$1 = cljs.core.next(seq43944);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43945,seq43944__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_media = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$at_media(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43990 = arguments.length;
var i__4731__auto___43991 = (0);
while(true){
if((i__4731__auto___43991 < len__4730__auto___43990)){
args__4736__auto__.push((arguments[i__4731__auto___43991]));

var G__43993 = (i__4731__auto___43991 + (1));
i__4731__auto___43991 = G__43993;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq43957){
var G__43958 = cljs.core.first(seq43957);
var seq43957__$1 = cljs.core.next(seq43957);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43958,seq43957__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_keyframes = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$at_keyframes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___44008 = arguments.length;
var i__4731__auto___44009 = (0);
while(true){
if((i__4731__auto___44009 < len__4730__auto___44008)){
args__4736__auto__.push((arguments[i__4731__auto___44009]));

var G__44010 = (i__4731__auto___44009 + (1));
i__4731__auto___44009 = G__44010;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq43959){
var G__43960 = cljs.core.first(seq43959);
var seq43959__$1 = cljs.core.next(seq43959);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43960,seq43959__$1);
});

/**
 * Create a color from RGB values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$rgb(r,g,b){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.hsl = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$hsl(h,s,l){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.js.map
