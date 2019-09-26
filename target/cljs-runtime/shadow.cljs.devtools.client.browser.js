goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46975 = arguments.length;
var i__4731__auto___46976 = (0);
while(true){
if((i__4731__auto___46976 < len__4730__auto___46975)){
args__4736__auto__.push((arguments[i__4731__auto___46976]));

var G__46977 = (i__4731__auto___46976 + (1));
i__4731__auto___46976 = G__46977;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq46808){
var G__46809 = cljs.core.first(seq46808);
var seq46808__$1 = cljs.core.next(seq46808);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46809,seq46808__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__46823){
var map__46824 = p__46823;
var map__46824__$1 = (((((!((map__46824 == null))))?(((((map__46824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46824):map__46824);
var src = map__46824__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46824__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46824__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__46829 = cljs.core.seq(sources);
var chunk__46830 = null;
var count__46831 = (0);
var i__46832 = (0);
while(true){
if((i__46832 < count__46831)){
var map__46838 = chunk__46830.cljs$core$IIndexed$_nth$arity$2(null,i__46832);
var map__46838__$1 = (((((!((map__46838 == null))))?(((((map__46838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46838):map__46838);
var src = map__46838__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46838__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46838__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46838__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46838__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__46978 = seq__46829;
var G__46979 = chunk__46830;
var G__46980 = count__46831;
var G__46981 = (i__46832 + (1));
seq__46829 = G__46978;
chunk__46830 = G__46979;
count__46831 = G__46980;
i__46832 = G__46981;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46829);
if(temp__5735__auto__){
var seq__46829__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46829__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__46829__$1);
var G__46982 = cljs.core.chunk_rest(seq__46829__$1);
var G__46983 = c__4550__auto__;
var G__46984 = cljs.core.count(c__4550__auto__);
var G__46985 = (0);
seq__46829 = G__46982;
chunk__46830 = G__46983;
count__46831 = G__46984;
i__46832 = G__46985;
continue;
} else {
var map__46840 = cljs.core.first(seq__46829__$1);
var map__46840__$1 = (((((!((map__46840 == null))))?(((((map__46840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46840):map__46840);
var src = map__46840__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46840__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46840__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46840__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46840__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__46986 = cljs.core.next(seq__46829__$1);
var G__46987 = null;
var G__46988 = (0);
var G__46989 = (0);
seq__46829 = G__46986;
chunk__46830 = G__46987;
count__46831 = G__46988;
i__46832 = G__46989;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__46844 = cljs.core.seq(js_requires);
var chunk__46845 = null;
var count__46846 = (0);
var i__46847 = (0);
while(true){
if((i__46847 < count__46846)){
var js_ns = chunk__46845.cljs$core$IIndexed$_nth$arity$2(null,i__46847);
var require_str_46990 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_46990);


var G__46991 = seq__46844;
var G__46992 = chunk__46845;
var G__46993 = count__46846;
var G__46994 = (i__46847 + (1));
seq__46844 = G__46991;
chunk__46845 = G__46992;
count__46846 = G__46993;
i__46847 = G__46994;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46844);
if(temp__5735__auto__){
var seq__46844__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46844__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__46844__$1);
var G__46995 = cljs.core.chunk_rest(seq__46844__$1);
var G__46996 = c__4550__auto__;
var G__46997 = cljs.core.count(c__4550__auto__);
var G__46998 = (0);
seq__46844 = G__46995;
chunk__46845 = G__46996;
count__46846 = G__46997;
i__46847 = G__46998;
continue;
} else {
var js_ns = cljs.core.first(seq__46844__$1);
var require_str_46999 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_46999);


var G__47000 = cljs.core.next(seq__46844__$1);
var G__47001 = null;
var G__47002 = (0);
var G__47003 = (0);
seq__46844 = G__47000;
chunk__46845 = G__47001;
count__46846 = G__47002;
i__46847 = G__47003;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__46850 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__46850) : callback.call(null,G__46850));
} else {
var G__46851 = shadow.cljs.devtools.client.env.files_url();
var G__46852 = ((function (G__46851){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__46851))
;
var G__46853 = "POST";
var G__46854 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__46855 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__46851,G__46852,G__46853,G__46854,G__46855);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__46857){
var map__46858 = p__46857;
var map__46858__$1 = (((((!((map__46858 == null))))?(((((map__46858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46858):map__46858);
var msg = map__46858__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46858__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46858__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__46860 = info;
var map__46860__$1 = (((((!((map__46860 == null))))?(((((map__46860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46860):map__46860);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46860__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46860__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__46860,map__46860__$1,sources,compiled,map__46858,map__46858__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46862(s__46863){
return (new cljs.core.LazySeq(null,((function (map__46860,map__46860__$1,sources,compiled,map__46858,map__46858__$1,msg,info,reload_info){
return (function (){
var s__46863__$1 = s__46863;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46863__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__46868 = cljs.core.first(xs__6292__auto__);
var map__46868__$1 = (((((!((map__46868 == null))))?(((((map__46868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46868):map__46868);
var src = map__46868__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46868__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46868__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__46863__$1,map__46868,map__46868__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46860,map__46860__$1,sources,compiled,map__46858,map__46858__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46862_$_iter__46864(s__46865){
return (new cljs.core.LazySeq(null,((function (s__46863__$1,map__46868,map__46868__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46860,map__46860__$1,sources,compiled,map__46858,map__46858__$1,msg,info,reload_info){
return (function (){
var s__46865__$1 = s__46865;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__46865__$1);
if(temp__5735__auto____$1){
var s__46865__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46865__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__46865__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__46867 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__46866 = (0);
while(true){
if((i__46866 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__46866);
cljs.core.chunk_append(b__46867,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__47004 = (i__46866 + (1));
i__46866 = G__47004;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46867),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46862_$_iter__46864(cljs.core.chunk_rest(s__46865__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46867),null);
}
} else {
var warning = cljs.core.first(s__46865__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46862_$_iter__46864(cljs.core.rest(s__46865__$2)));
}
} else {
return null;
}
break;
}
});})(s__46863__$1,map__46868,map__46868__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46860,map__46860__$1,sources,compiled,map__46858,map__46858__$1,msg,info,reload_info))
,null,null));
});})(s__46863__$1,map__46868,map__46868__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46860,map__46860__$1,sources,compiled,map__46858,map__46858__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46862(cljs.core.rest(s__46863__$1)));
} else {
var G__47005 = cljs.core.rest(s__46863__$1);
s__46863__$1 = G__47005;
continue;
}
} else {
var G__47006 = cljs.core.rest(s__46863__$1);
s__46863__$1 = G__47006;
continue;
}
} else {
return null;
}
break;
}
});})(map__46860,map__46860__$1,sources,compiled,map__46858,map__46858__$1,msg,info,reload_info))
,null,null));
});})(map__46860,map__46860__$1,sources,compiled,map__46858,map__46858__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__46870_47007 = cljs.core.seq(warnings);
var chunk__46871_47008 = null;
var count__46872_47009 = (0);
var i__46873_47010 = (0);
while(true){
if((i__46873_47010 < count__46872_47009)){
var map__46878_47011 = chunk__46871_47008.cljs$core$IIndexed$_nth$arity$2(null,i__46873_47010);
var map__46878_47012__$1 = (((((!((map__46878_47011 == null))))?(((((map__46878_47011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46878_47011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46878_47011):map__46878_47011);
var w_47013 = map__46878_47012__$1;
var msg_47014__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46878_47012__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_47015 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46878_47012__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_47016 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46878_47012__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_47017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46878_47012__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_47017)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_47015),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_47016),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_47014__$1)].join(''));


var G__47018 = seq__46870_47007;
var G__47019 = chunk__46871_47008;
var G__47020 = count__46872_47009;
var G__47021 = (i__46873_47010 + (1));
seq__46870_47007 = G__47018;
chunk__46871_47008 = G__47019;
count__46872_47009 = G__47020;
i__46873_47010 = G__47021;
continue;
} else {
var temp__5735__auto___47022 = cljs.core.seq(seq__46870_47007);
if(temp__5735__auto___47022){
var seq__46870_47023__$1 = temp__5735__auto___47022;
if(cljs.core.chunked_seq_QMARK_(seq__46870_47023__$1)){
var c__4550__auto___47024 = cljs.core.chunk_first(seq__46870_47023__$1);
var G__47025 = cljs.core.chunk_rest(seq__46870_47023__$1);
var G__47026 = c__4550__auto___47024;
var G__47027 = cljs.core.count(c__4550__auto___47024);
var G__47028 = (0);
seq__46870_47007 = G__47025;
chunk__46871_47008 = G__47026;
count__46872_47009 = G__47027;
i__46873_47010 = G__47028;
continue;
} else {
var map__46880_47029 = cljs.core.first(seq__46870_47023__$1);
var map__46880_47030__$1 = (((((!((map__46880_47029 == null))))?(((((map__46880_47029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46880_47029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46880_47029):map__46880_47029);
var w_47031 = map__46880_47030__$1;
var msg_47032__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46880_47030__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_47033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46880_47030__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_47034 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46880_47030__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_47035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46880_47030__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_47035)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_47033),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_47034),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_47032__$1)].join(''));


var G__47036 = cljs.core.next(seq__46870_47023__$1);
var G__47037 = null;
var G__47038 = (0);
var G__47039 = (0);
seq__46870_47007 = G__47036;
chunk__46871_47008 = G__47037;
count__46872_47009 = G__47038;
i__46873_47010 = G__47039;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__46860,map__46860__$1,sources,compiled,warnings,map__46858,map__46858__$1,msg,info,reload_info){
return (function (p__46883){
var map__46884 = p__46883;
var map__46884__$1 = (((((!((map__46884 == null))))?(((((map__46884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46884):map__46884);
var src = map__46884__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46884__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46884__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__46860,map__46860__$1,sources,compiled,warnings,map__46858,map__46858__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__46860,map__46860__$1,sources,compiled,warnings,map__46858,map__46858__$1,msg,info,reload_info){
return (function (p__46887){
var map__46888 = p__46887;
var map__46888__$1 = (((((!((map__46888 == null))))?(((((map__46888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46888):map__46888);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46888__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__46860,map__46860__$1,sources,compiled,warnings,map__46858,map__46858__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__46860,map__46860__$1,sources,compiled,warnings,map__46858,map__46858__$1,msg,info,reload_info){
return (function (p__46890){
var map__46891 = p__46890;
var map__46891__$1 = (((((!((map__46891 == null))))?(((((map__46891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46891):map__46891);
var rc = map__46891__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46891__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__46860,map__46860__$1,sources,compiled,warnings,map__46858,map__46858__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__46860,map__46860__$1,sources,compiled,warnings,map__46858,map__46858__$1,msg,info,reload_info){
return (function (p1__46856_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__46856_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__46860,map__46860__$1,sources,compiled,warnings,map__46858,map__46858__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__46893){
var map__46894 = p__46893;
var map__46894__$1 = (((((!((map__46894 == null))))?(((((map__46894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46894):map__46894);
var msg = map__46894__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46894__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__46896 = cljs.core.seq(updates);
var chunk__46898 = null;
var count__46899 = (0);
var i__46900 = (0);
while(true){
if((i__46900 < count__46899)){
var path = chunk__46898.cljs$core$IIndexed$_nth$arity$2(null,i__46900);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__46926_47040 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__46929_47041 = null;
var count__46930_47042 = (0);
var i__46931_47043 = (0);
while(true){
if((i__46931_47043 < count__46930_47042)){
var node_47044 = chunk__46929_47041.cljs$core$IIndexed$_nth$arity$2(null,i__46931_47043);
var path_match_47045 = shadow.cljs.devtools.client.browser.match_paths(node_47044.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47045)){
var new_link_47046 = (function (){var G__46936 = node_47044.cloneNode(true);
G__46936.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47045),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46936;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47045], 0));

goog.dom.insertSiblingAfter(new_link_47046,node_47044);

goog.dom.removeNode(node_47044);


var G__47047 = seq__46926_47040;
var G__47048 = chunk__46929_47041;
var G__47049 = count__46930_47042;
var G__47050 = (i__46931_47043 + (1));
seq__46926_47040 = G__47047;
chunk__46929_47041 = G__47048;
count__46930_47042 = G__47049;
i__46931_47043 = G__47050;
continue;
} else {
var G__47051 = seq__46926_47040;
var G__47052 = chunk__46929_47041;
var G__47053 = count__46930_47042;
var G__47054 = (i__46931_47043 + (1));
seq__46926_47040 = G__47051;
chunk__46929_47041 = G__47052;
count__46930_47042 = G__47053;
i__46931_47043 = G__47054;
continue;
}
} else {
var temp__5735__auto___47055 = cljs.core.seq(seq__46926_47040);
if(temp__5735__auto___47055){
var seq__46926_47056__$1 = temp__5735__auto___47055;
if(cljs.core.chunked_seq_QMARK_(seq__46926_47056__$1)){
var c__4550__auto___47057 = cljs.core.chunk_first(seq__46926_47056__$1);
var G__47058 = cljs.core.chunk_rest(seq__46926_47056__$1);
var G__47059 = c__4550__auto___47057;
var G__47060 = cljs.core.count(c__4550__auto___47057);
var G__47061 = (0);
seq__46926_47040 = G__47058;
chunk__46929_47041 = G__47059;
count__46930_47042 = G__47060;
i__46931_47043 = G__47061;
continue;
} else {
var node_47062 = cljs.core.first(seq__46926_47056__$1);
var path_match_47063 = shadow.cljs.devtools.client.browser.match_paths(node_47062.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47063)){
var new_link_47064 = (function (){var G__46937 = node_47062.cloneNode(true);
G__46937.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47063),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46937;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47063], 0));

goog.dom.insertSiblingAfter(new_link_47064,node_47062);

goog.dom.removeNode(node_47062);


var G__47065 = cljs.core.next(seq__46926_47056__$1);
var G__47066 = null;
var G__47067 = (0);
var G__47068 = (0);
seq__46926_47040 = G__47065;
chunk__46929_47041 = G__47066;
count__46930_47042 = G__47067;
i__46931_47043 = G__47068;
continue;
} else {
var G__47069 = cljs.core.next(seq__46926_47056__$1);
var G__47070 = null;
var G__47071 = (0);
var G__47072 = (0);
seq__46926_47040 = G__47069;
chunk__46929_47041 = G__47070;
count__46930_47042 = G__47071;
i__46931_47043 = G__47072;
continue;
}
}
} else {
}
}
break;
}


var G__47073 = seq__46896;
var G__47074 = chunk__46898;
var G__47075 = count__46899;
var G__47076 = (i__46900 + (1));
seq__46896 = G__47073;
chunk__46898 = G__47074;
count__46899 = G__47075;
i__46900 = G__47076;
continue;
} else {
var G__47077 = seq__46896;
var G__47078 = chunk__46898;
var G__47079 = count__46899;
var G__47080 = (i__46900 + (1));
seq__46896 = G__47077;
chunk__46898 = G__47078;
count__46899 = G__47079;
i__46900 = G__47080;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46896);
if(temp__5735__auto__){
var seq__46896__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46896__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__46896__$1);
var G__47081 = cljs.core.chunk_rest(seq__46896__$1);
var G__47082 = c__4550__auto__;
var G__47083 = cljs.core.count(c__4550__auto__);
var G__47084 = (0);
seq__46896 = G__47081;
chunk__46898 = G__47082;
count__46899 = G__47083;
i__46900 = G__47084;
continue;
} else {
var path = cljs.core.first(seq__46896__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__46938_47085 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__46941_47086 = null;
var count__46942_47087 = (0);
var i__46943_47088 = (0);
while(true){
if((i__46943_47088 < count__46942_47087)){
var node_47089 = chunk__46941_47086.cljs$core$IIndexed$_nth$arity$2(null,i__46943_47088);
var path_match_47090 = shadow.cljs.devtools.client.browser.match_paths(node_47089.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47090)){
var new_link_47091 = (function (){var G__46948 = node_47089.cloneNode(true);
G__46948.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47090),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46948;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47090], 0));

goog.dom.insertSiblingAfter(new_link_47091,node_47089);

goog.dom.removeNode(node_47089);


var G__47092 = seq__46938_47085;
var G__47093 = chunk__46941_47086;
var G__47094 = count__46942_47087;
var G__47095 = (i__46943_47088 + (1));
seq__46938_47085 = G__47092;
chunk__46941_47086 = G__47093;
count__46942_47087 = G__47094;
i__46943_47088 = G__47095;
continue;
} else {
var G__47096 = seq__46938_47085;
var G__47097 = chunk__46941_47086;
var G__47098 = count__46942_47087;
var G__47099 = (i__46943_47088 + (1));
seq__46938_47085 = G__47096;
chunk__46941_47086 = G__47097;
count__46942_47087 = G__47098;
i__46943_47088 = G__47099;
continue;
}
} else {
var temp__5735__auto___47100__$1 = cljs.core.seq(seq__46938_47085);
if(temp__5735__auto___47100__$1){
var seq__46938_47101__$1 = temp__5735__auto___47100__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46938_47101__$1)){
var c__4550__auto___47102 = cljs.core.chunk_first(seq__46938_47101__$1);
var G__47103 = cljs.core.chunk_rest(seq__46938_47101__$1);
var G__47104 = c__4550__auto___47102;
var G__47105 = cljs.core.count(c__4550__auto___47102);
var G__47106 = (0);
seq__46938_47085 = G__47103;
chunk__46941_47086 = G__47104;
count__46942_47087 = G__47105;
i__46943_47088 = G__47106;
continue;
} else {
var node_47107 = cljs.core.first(seq__46938_47101__$1);
var path_match_47108 = shadow.cljs.devtools.client.browser.match_paths(node_47107.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47108)){
var new_link_47109 = (function (){var G__46949 = node_47107.cloneNode(true);
G__46949.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47108),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46949;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47108], 0));

goog.dom.insertSiblingAfter(new_link_47109,node_47107);

goog.dom.removeNode(node_47107);


var G__47110 = cljs.core.next(seq__46938_47101__$1);
var G__47111 = null;
var G__47112 = (0);
var G__47113 = (0);
seq__46938_47085 = G__47110;
chunk__46941_47086 = G__47111;
count__46942_47087 = G__47112;
i__46943_47088 = G__47113;
continue;
} else {
var G__47114 = cljs.core.next(seq__46938_47101__$1);
var G__47115 = null;
var G__47116 = (0);
var G__47117 = (0);
seq__46938_47085 = G__47114;
chunk__46941_47086 = G__47115;
count__46942_47087 = G__47116;
i__46943_47088 = G__47117;
continue;
}
}
} else {
}
}
break;
}


var G__47118 = cljs.core.next(seq__46896__$1);
var G__47119 = null;
var G__47120 = (0);
var G__47121 = (0);
seq__46896 = G__47118;
chunk__46898 = G__47119;
count__46899 = G__47120;
i__46900 = G__47121;
continue;
} else {
var G__47122 = cljs.core.next(seq__46896__$1);
var G__47123 = null;
var G__47124 = (0);
var G__47125 = (0);
seq__46896 = G__47122;
chunk__46898 = G__47123;
count__46899 = G__47124;
i__46900 = G__47125;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__46950){
var map__46951 = p__46950;
var map__46951__$1 = (((((!((map__46951 == null))))?(((((map__46951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46951):map__46951);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46951__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46951__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__46951,map__46951__$1,id,js){
return (function (){
return eval(js);
});})(map__46951,map__46951__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__46953){
var map__46954 = p__46953;
var map__46954__$1 = (((((!((map__46954 == null))))?(((((map__46954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46954):map__46954);
var msg = map__46954__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46954__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46954__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46954__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46954__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__46954,map__46954__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__46956){
var map__46957 = p__46956;
var map__46957__$1 = (((((!((map__46957 == null))))?(((((map__46957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46957):map__46957);
var src = map__46957__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46957__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__46954,map__46954__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__46954,map__46954__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__46954,map__46954__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__46959){
var map__46960 = p__46959;
var map__46960__$1 = (((((!((map__46960 == null))))?(((((map__46960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46960):map__46960);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46960__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46960__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__46960,map__46960__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__46960,map__46960__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__46962){
var map__46963 = p__46962;
var map__46963__$1 = (((((!((map__46963 == null))))?(((((map__46963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46963):map__46963);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46963__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46963__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__46965){
var map__46966 = p__46965;
var map__46966__$1 = (((((!((map__46966 == null))))?(((((map__46966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46966):map__46966);
var msg = map__46966__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46966__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__46968 = type;
var G__46968__$1 = (((G__46968 instanceof cljs.core.Keyword))?G__46968.fqn:null);
switch (G__46968__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__46969 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__46970 = ((function (G__46969){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__46969))
;
var G__46971 = "POST";
var G__46972 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__46973 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__46969,G__46970,G__46971,G__46972,G__46973);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e46974){var e = e46974;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___47127 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___47127)){
var s_47128 = temp__5735__auto___47127;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_47128.onclose = ((function (s_47128,temp__5735__auto___47127){
return (function (e){
return null;
});})(s_47128,temp__5735__auto___47127))
;

s_47128.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
