goog.provide('proto_crawl.cube.main');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('cljs.spec.alpha');
proto_crawl.cube.main.less = (function proto_crawl$cube$main$less(n){
return ((7) - n);
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("proto-crawl.cube.main","face","proto-crawl.cube.main/face",-205127659),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__44122#","p1__44122#",562669696,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Symbol(null,"p1__44122#","p1__44122#",562669696,null))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__44123#","p1__44123#",-221521249,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),(0),new cljs.core.Symbol(null,"p1__44123#","p1__44123#",-221521249,null),(7)))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),(0),new cljs.core.Symbol(null,"%","%",-950237169,null),(7)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__44122_SHARP_){
return cljs.core.int_QMARK_(p1__44122_SHARP_);
}),(function (p1__44123_SHARP_){
return ((((0) < p1__44123_SHARP_)) && ((p1__44123_SHARP_ < (7))));
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("proto-crawl.cube.main","t","proto-crawl.cube.main/t",-502365725),new cljs.core.Keyword("proto-crawl.cube.main","face","proto-crawl.cube.main/face",-205127659),new cljs.core.Keyword("proto-crawl.cube.main","face","proto-crawl.cube.main/face",-205127659));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("proto-crawl.cube.main","s","proto-crawl.cube.main/s",516838696),new cljs.core.Keyword("proto-crawl.cube.main","face","proto-crawl.cube.main/face",-205127659),new cljs.core.Keyword("proto-crawl.cube.main","face","proto-crawl.cube.main/face",-205127659));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("proto-crawl.cube.main","e","proto-crawl.cube.main/e",-306889228),new cljs.core.Keyword("proto-crawl.cube.main","face","proto-crawl.cube.main/face",-205127659),new cljs.core.Keyword("proto-crawl.cube.main","face","proto-crawl.cube.main/face",-205127659));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("proto-crawl.cube.main","b","proto-crawl.cube.main/b",247017536),new cljs.core.Keyword("proto-crawl.cube.main","face","proto-crawl.cube.main/face",-205127659),new cljs.core.Keyword("proto-crawl.cube.main","face","proto-crawl.cube.main/face",-205127659));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("proto-crawl.cube.main","w","proto-crawl.cube.main/w",-612634417),new cljs.core.Keyword("proto-crawl.cube.main","face","proto-crawl.cube.main/face",-205127659),new cljs.core.Keyword("proto-crawl.cube.main","face","proto-crawl.cube.main/face",-205127659));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("proto-crawl.cube.main","n","proto-crawl.cube.main/n",-400576749),new cljs.core.Keyword("proto-crawl.cube.main","face","proto-crawl.cube.main/face",-205127659),new cljs.core.Keyword("proto-crawl.cube.main","face","proto-crawl.cube.main/face",-205127659));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("proto-crawl.cube.main","orientation","proto-crawl.cube.main/orientation",-380991763),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proto-crawl.cube.main","t","proto-crawl.cube.main/t",-502365725),new cljs.core.Keyword("proto-crawl.cube.main","s","proto-crawl.cube.main/s",516838696),new cljs.core.Keyword("proto-crawl.cube.main","e","proto-crawl.cube.main/e",-306889228)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proto-crawl.cube.main","b","proto-crawl.cube.main/b",247017536),new cljs.core.Keyword("proto-crawl.cube.main","e","proto-crawl.cube.main/e",-306889228),new cljs.core.Keyword("proto-crawl.cube.main","w","proto-crawl.cube.main/w",-612634417)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proto-crawl.cube.main","t","proto-crawl.cube.main/t",-502365725),new cljs.core.Keyword("proto-crawl.cube.main","s","proto-crawl.cube.main/s",516838696),new cljs.core.Keyword("proto-crawl.cube.main","e","proto-crawl.cube.main/e",-306889228)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proto-crawl.cube.main","b","proto-crawl.cube.main/b",247017536),new cljs.core.Keyword("proto-crawl.cube.main","e","proto-crawl.cube.main/e",-306889228),new cljs.core.Keyword("proto-crawl.cube.main","w","proto-crawl.cube.main/w",-612634417)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__44125){
return cljs.core.map_QMARK_(G__44125);
}),(function (G__44125){
return cljs.core.contains_QMARK_(G__44125,new cljs.core.Keyword(null,"t","t",-1397832519));
}),(function (G__44125){
return cljs.core.contains_QMARK_(G__44125,new cljs.core.Keyword(null,"s","s",1705939918));
}),(function (G__44125){
return cljs.core.contains_QMARK_(G__44125,new cljs.core.Keyword(null,"e","e",1381269198));
})], null),(function (G__44125){
return ((cljs.core.map_QMARK_(G__44125)) && (cljs.core.contains_QMARK_(G__44125,new cljs.core.Keyword(null,"t","t",-1397832519))) && (cljs.core.contains_QMARK_(G__44125,new cljs.core.Keyword(null,"s","s",1705939918))) && (cljs.core.contains_QMARK_(G__44125,new cljs.core.Keyword(null,"e","e",1381269198))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proto-crawl.cube.main","t","proto-crawl.cube.main/t",-502365725),new cljs.core.Keyword("proto-crawl.cube.main","s","proto-crawl.cube.main/s",516838696),new cljs.core.Keyword("proto-crawl.cube.main","e","proto-crawl.cube.main/e",-306889228)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"e","e",1381269198)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proto-crawl.cube.main","b","proto-crawl.cube.main/b",247017536),new cljs.core.Keyword("proto-crawl.cube.main","e","proto-crawl.cube.main/e",-306889228),new cljs.core.Keyword("proto-crawl.cube.main","w","proto-crawl.cube.main/w",-612634417)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"t","t",-1397832519))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"s","s",1705939918))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"e","e",1381269198)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("proto-crawl.cube.main","orientation-vec","proto-crawl.cube.main/orientation-vec",-1876852314),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("proto-crawl.cube.main","face","proto-crawl.cube.main/face",-205127659),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(3)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("proto-crawl.cube.main","face","proto-crawl.cube.main/face",-205127659),new cljs.core.Keyword("proto-crawl.cube.main","face","proto-crawl.cube.main/face",-205127659),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__44126){
return ((cljs.core.vector_QMARK_(G__44126)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.bounded_count((3),G__44126))));
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword(null,"count","count",2139924085),(3),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("proto-crawl.cube.main","face","proto-crawl.cube.main/face",-205127659),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(3))], null),null));
/**
 * Given a partial (tse) orientation, fill out the remaining faces.
 */
proto_crawl.cube.main.fill_orientation = (function proto_crawl$cube$main$fill_orientation(p__44127){
var map__44128 = p__44127;
var map__44128__$1 = (((((!((map__44128 == null))))?(((((map__44128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44128):map__44128);
var part = map__44128__$1;
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44128__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44128__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44128__$1,new cljs.core.Keyword(null,"e","e",1381269198));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([part,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"w","w",354169001),proto_crawl.cube.main.less(e),new cljs.core.Keyword(null,"n","n",562130025),proto_crawl.cube.main.less(s),new cljs.core.Keyword(null,"b","b",1482224470),proto_crawl.cube.main.less(t)], null)], 0));
});
/**
 * Take a 3-tuple of the cube's top, south, and east faces.
 *   Return a full orientation map conforming to ::orientation
 */
proto_crawl.cube.main.vec__GT_orient = (function proto_crawl$cube$main$vec__GT_orient(p__44130){
var vec__44131 = p__44130;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44131,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44131,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44131,(2),null);
var v = vec__44131;
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("proto-crawl.cube.main","orientation-vec","proto-crawl.cube.main/orientation-vec",-1876852314),v)){
} else {
throw (new Error("Assert failed: (s/valid? :proto-crawl.cube.main/orientation-vec v)"));
}

return proto_crawl.cube.main.fill_orientation(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),t,new cljs.core.Keyword(null,"s","s",1705939918),s,new cljs.core.Keyword(null,"e","e",1381269198),e], null));
});
proto_crawl.cube.main.__GT_orient = (function proto_crawl$cube$main$__GT_orient(t,s,e){
return proto_crawl.cube.main.vec__GT_orient(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,s,e], null));
});
/**
 * Given an orientation and a direction, return the new orientation.
 */
proto_crawl.cube.main.roll = (function proto_crawl$cube$main$roll(orient,direction){
var map__44134 = proto_crawl.cube.main.fill_orientation(orient);
var map__44134__$1 = (((((!((map__44134 == null))))?(((((map__44134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44134):map__44134);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44134__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44134__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44134__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44134__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44134__$1,new cljs.core.Keyword(null,"n","n",562130025));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44134__$1,new cljs.core.Keyword(null,"w","w",354169001));
return proto_crawl.cube.main.fill_orientation((function (){try{if(cljs.core.keyword_identical_QMARK_(direction,new cljs.core.Keyword(null,"north","north",651323902))){
return proto_crawl.cube.main.__GT_orient(s,b,e);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44137){if((e44137 instanceof Error)){
var e__43219__auto__ = e44137;
if((e__43219__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(direction,new cljs.core.Keyword(null,"south","south",1586796293))){
return proto_crawl.cube.main.__GT_orient(n,t,e);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44138){if((e44138 instanceof Error)){
var e__43219__auto____$1 = e44138;
if((e__43219__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(direction,new cljs.core.Keyword(null,"east","east",1189821678))){
return proto_crawl.cube.main.__GT_orient(w,s,t);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44139){if((e44139 instanceof Error)){
var e__43219__auto____$2 = e44139;
if((e__43219__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(direction,new cljs.core.Keyword(null,"west","west",708776677))){
return proto_crawl.cube.main.__GT_orient(e,s,b);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44140){if((e44140 instanceof Error)){
var e__43219__auto____$3 = e44140;
if((e__43219__auto____$3 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(direction)].join('')));
} else {
throw e__43219__auto____$3;
}
} else {
throw e44140;

}
}} else {
throw e__43219__auto____$2;
}
} else {
throw e44139;

}
}} else {
throw e__43219__auto____$1;
}
} else {
throw e44138;

}
}} else {
throw e__43219__auto__;
}
} else {
throw e44137;

}
}})());
});

//# sourceMappingURL=proto_crawl.cube.main.js.map
