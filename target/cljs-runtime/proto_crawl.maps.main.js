goog.provide('proto_crawl.maps.main');
goog.require('cljs.core');
proto_crawl.maps.main.glyph_table = new cljs.core.PersistentArrayMap(null, 4, [".",new cljs.core.Keyword(null,"floor","floor",1882041021),"#",new cljs.core.Keyword(null,"wall","wall",-787661558),"*",new cljs.core.Keyword(null,"void","void",-2084626863),"w",new cljs.core.Keyword(null,"water","water",-824098213)], null);
proto_crawl.maps.main.basic_maps = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["00123DD67890","0......####0","1####..####1","2..##...###2","3........##3","D..www.....D","D..wwww....D","6.....w....6","7wwwwwwww..7","8...##.....9","9..........9","00123DD67890"], null),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["001234567890","0..........0","1..........1","2..........2","3..........3","4..........4","5..........5","6..........6","7..........7","8..........9","9..........9","001234567890"], null)], null);
/**
 * Take a coll of colls and turn it into a map of
 *   [col-idx row-idx] => contents-of-intersection
 */
proto_crawl.maps.main.trimmed_levelstr__GT_levelmap = (function proto_crawl$maps$main$trimmed_levelstr__GT_levelmap(trimmed){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__45062){
var vec__45063 = p__45062;
var row_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45063,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45063,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__45063,row_idx,row){
return (function (row_map,p__45066){
var vec__45067 = p__45066;
var col_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45067,(0),null);
var glyph = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45067,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_idx,row_idx], null),glyph])], 0));
});})(vec__45063,row_idx,row))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,row))], 0));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,trimmed));
});
/**
 * Trim first and last items from a coll.
 */
proto_crawl.maps.main.trim_sides = (function proto_crawl$maps$main$trim_sides(coll){
return cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),coll));
});
proto_crawl.maps.main.str_table__GT_data_table = (function proto_crawl$maps$main$str_table__GT_data_table(data_table){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45070){
var vec__45071 = p__45070;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45071,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45071,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(proto_crawl.maps.main.glyph_table,v)]);
}),data_table));
});
proto_crawl.maps.main.add_doors = (function proto_crawl$maps$main$add_doors(glyph_map){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(glyph_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(4)], null),new cljs.core.Keyword(null,"door","door",-956406127),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(5)], null),new cljs.core.Keyword(null,"door","door",-956406127),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(4)], null),new cljs.core.Keyword(null,"door","door",-956406127),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(5)], null),new cljs.core.Keyword(null,"door","door",-956406127),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(-1)], null),new cljs.core.Keyword(null,"door","door",-956406127),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(-1)], null),new cljs.core.Keyword(null,"door","door",-956406127),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(10)], null),new cljs.core.Keyword(null,"door","door",-956406127),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(10)], null),new cljs.core.Keyword(null,"door","door",-956406127)], 0));
});
/**
 * Take a level defined by its visual representation and
 *   convert to data.
 */
proto_crawl.maps.main.str__GT_level = (function proto_crawl$maps$main$str__GT_level(levelstr){
return proto_crawl.maps.main.add_doors(proto_crawl.maps.main.str_table__GT_data_table(proto_crawl.maps.main.trimmed_levelstr__GT_levelmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(proto_crawl.maps.main.trim_sides,proto_crawl.maps.main.trim_sides(levelstr)))));
});
proto_crawl.maps.main.loader = (function proto_crawl$maps$main$loader(map_key){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(proto_crawl.maps.main.basic_maps,map_key) == null)))){
} else {
throw (new Error("Assert failed: (not (nil? (get basic-maps map-key)))"));
}

return proto_crawl.maps.main.str__GT_level(cljs.core.get.cljs$core$IFn$_invoke$arity$2(proto_crawl.maps.main.basic_maps,map_key));
});
proto_crawl.maps.main.loader(new cljs.core.Keyword(null,"feature","feature",27242652));

//# sourceMappingURL=proto_crawl.maps.main.js.map
