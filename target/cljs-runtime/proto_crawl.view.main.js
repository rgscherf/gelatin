goog.provide('proto_crawl.view.main');
goog.require('cljs.core');
goog.require('clojure.math.combinatorics');
goog.require('cljs.core.match');
goog.require('cljs.spec.alpha');
goog.require('re_frame.core');
goog.require('proto_crawl.style.main');
goog.require('proto_crawl.entities.utils');
proto_crawl.view.main.all_coords = (function proto_crawl$view$main$all_coords(map_size){
return clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,cljs.core.range.cljs$core$IFn$_invoke$arity$1(map_size)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,cljs.core.range.cljs$core$IFn$_invoke$arity$1(map_size))], 0));
});
proto_crawl.view.main.bottom_bar = (function proto_crawl$view$main$bottom_bar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"bottom-ui-panel",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"black",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"grid-column","grid-column",-1086912770),"1 / span 4",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"hello"], null)], null)], null);
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("proto-crawl.view.main","tile-contents","proto-crawl.view.main/tile-contents",-324454138),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__45025_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,p1__45025_SHARP_);
}));
proto_crawl.view.main.quick_tile_contents = (function proto_crawl$view$main$quick_tile_contents(current_map,entities,player_pos,tile_pos){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player_pos,tile_pos)){
return new cljs.core.Keyword(null,"player","player",-97687400);
} else {
if(cljs.core.truth_(proto_crawl.entities.utils.entity_at(entities,tile_pos))){
return new cljs.core.Keyword(null,"monster","monster",-29393397);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_map,tile_pos);

}
}
});
proto_crawl.view.main.tile_coords__GT_pixel_coords = (function proto_crawl$view$main$tile_coords__GT_pixel_coords(x,y){
return ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((x * (16))),"px -",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y * (24))),"px"].join('');
});
/**
 * Convert coordinates of sprite sheet tiles (e.g. 0th from left, 2nd from top)
 *   To percentage units, e.g. begin rendering from left 0% and top 20% of image.
 */
proto_crawl.view.main.tile_coords__GT_pct_coords = (function proto_crawl$view$main$tile_coords__GT_pct_coords(x,y){
var pct_unit = ((100) / (16));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((x * 6.67)),"% ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y * (10))),"%"].join('');
});
proto_crawl.view.main.mk_terrain = (function proto_crawl$view$main$mk_terrain(type){
var vec__45026 = (function (){try{if(cljs.core.keyword_identical_QMARK_(type,new cljs.core.Keyword(null,"water","water",-824098213))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45030){if((e45030 instanceof Error)){
var e__43219__auto__ = e45030;
if((e__43219__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(type,new cljs.core.Keyword(null,"door","door",-956406127))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(2)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45031){if((e45031 instanceof Error)){
var e__43219__auto____$1 = e45031;
if((e__43219__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(type,new cljs.core.Keyword(null,"floor","floor",1882041021))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45032){if((e45032 instanceof Error)){
var e__43219__auto____$2 = e45032;
if((e__43219__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(type,new cljs.core.Keyword(null,"wall","wall",-787661558))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45033){if((e45033 instanceof Error)){
var e__43219__auto____$3 = e45033;
if((e__43219__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(type,new cljs.core.Keyword(null,"void","void",-2084626863))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45034){if((e45034 instanceof Error)){
var e__43219__auto____$4 = e45034;
if((e__43219__auto____$4 === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null);
} else {
throw e__43219__auto____$4;
}
} else {
throw e45034;

}
}} else {
throw e__43219__auto____$3;
}
} else {
throw e45033;

}
}} else {
throw e__43219__auto____$2;
}
} else {
throw e45032;

}
}} else {
throw e__43219__auto____$1;
}
} else {
throw e45031;

}
}} else {
throw e__43219__auto__;
}
} else {
throw e45030;

}
}})();
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45026,(0),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45026,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"background-position","background-position",1112702746),proto_crawl.view.main.tile_coords__GT_pct_coords(tx,ty),new cljs.core.Keyword(null,"image-rendering","image-rendering",770251905),"pixelated",new cljs.core.Keyword(null,"background-size","background-size",-1248630243),"calc(100% * 16)",new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"background-image","background-image",-1142314704),"url(../resources/terrain.png)",new cljs.core.Keyword(null,"background-repeat","background-repeat",-387201191),"no-repeat"], null)], null)], null);
});
proto_crawl.view.main.single_tile = (function proto_crawl$view$main$single_tile(p__45035){
var vec__45036 = p__45035;
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45036,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45036,(1),null);
var current_map = cljs.core.deref((function (){var G__45039 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-map","current-map",379894636)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45039) : re_frame.core.subscribe.call(null,G__45039));
})());
var current_cube = cljs.core.deref((function (){var G__45040 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cube","cube",-1501611368)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45040) : re_frame.core.subscribe.call(null,G__45040));
})());
var entities = cljs.core.deref((function (){var G__45041 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entities","entities",1940967403)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45041) : re_frame.core.subscribe.call(null,G__45041));
})());
var tile_contents = proto_crawl.view.main.quick_tile_contents(current_map,entities,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__45042 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45042) : re_frame.core.subscribe.call(null,G__45042));
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),"100%",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2vmin",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"background","background",-863952629),(function (){try{if(cljs.core.keyword_identical_QMARK_(tile_contents,new cljs.core.Keyword(null,"player","player",-97687400))){
return "#111111";
} else {
throw cljs.core.match.backtrack;

}
}catch (e45044){if((e45044 instanceof Error)){
var e__43219__auto__ = e45044;
if((e__43219__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tile_contents,new cljs.core.Keyword(null,"nothing","nothing",-1022703296))){
return "blue";
} else {
throw cljs.core.match.backtrack;

}
}catch (e45045){if((e45045 instanceof Error)){
var e__43219__auto____$1 = e45045;
if((e__43219__auto____$1 === cljs.core.match.backtrack)){
return "black";
} else {
throw e__43219__auto____$1;
}
} else {
throw e45045;

}
}} else {
throw e__43219__auto__;
}
} else {
throw e45044;

}
}})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),(function (){try{if(cljs.core.keyword_identical_QMARK_(tile_contents,new cljs.core.Keyword(null,"player","player",-97687400))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_cube,new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__45049 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-orientation","player-orientation",1368989860)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45049) : re_frame.core.subscribe.call(null,G__45049));
})())));
} else {
throw cljs.core.match.backtrack;

}
}catch (e45047){if((e45047 instanceof Error)){
var e__43219__auto__ = e45047;
if((e__43219__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tile_contents,new cljs.core.Keyword(null,"monster","monster",-29393397))){
var ent = proto_crawl.entities.utils.entity_at(entities,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var g = new cljs.core.Keyword(null,"glyph","glyph",2119448117).cljs$core$IFn$_invoke$arity$1(ent);
var i = new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(ent);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),")"].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e45048){if((e45048 instanceof Error)){
var e__43219__auto____$1 = e45048;
if((e__43219__auto____$1 === cljs.core.match.backtrack)){
return proto_crawl.view.main.mk_terrain(tile_contents);
} else {
throw e__43219__auto____$1;
}
} else {
throw e45048;

}
}} else {
throw e__43219__auto__;
}
} else {
throw e45047;

}
}})()], null)], null);
});
proto_crawl.view.main.play_area = (function proto_crawl$view$main$play_area(){
var map_size = cljs.core.deref((function (){var G__45050 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewport","viewport",443342715)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45050) : re_frame.core.subscribe.call(null,G__45050));
})());
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"grid_container",new cljs.core.Keyword(null,"style","style",-496642736),proto_crawl.style.main.grid_container(map_size)], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(proto_crawl.view.main.single_tile,proto_crawl.view.main.all_coords(map_size))));
});
proto_crawl.view.main.roll_preview_cell = (function proto_crawl$view$main$roll_preview_cell(face_id,coll,row){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"grid-column","grid-column",-1086912770),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(coll),"/span 1"].join(''),new cljs.core.Keyword(null,"grid-row","grid-row",-1737175087),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),"/span 1"].join(''),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),(function (){var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__45051 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cube","cube",-1501611368)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45051) : re_frame.core.subscribe.call(null,G__45051));
})()),face_id);
if(cljs.core.truth_(temp__5733__auto__)){
var face = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5vmin",new cljs.core.Keyword(null,"width","width",-384071477),"90%",new cljs.core.Keyword(null,"height","height",1025178622),"90%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0.5vmin",new cljs.core.Keyword(null,"border","border",1444987323),"0.1vmin solid white"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(face)], null)], null);
} else {
var border_style = "0.1vmin solid grey";
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null),(function (){try{if(cljs.core.keyword_identical_QMARK_(face_id,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"50%",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border_style], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45053){if((e45053 instanceof Error)){
var e__43219__auto__ = e45053;
if((e__43219__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(face_id,new cljs.core.Keyword(null,"vertical","vertical",718696748))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),"50%",new cljs.core.Keyword(null,"border-left","border-left",-1150760178),border_style], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45054){if((e45054 instanceof Error)){
var e__43219__auto____$1 = e45054;
if((e__43219__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(face_id,new cljs.core.Keyword(null,"corner","corner",1296717125))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"50%",new cljs.core.Keyword(null,"left","left",-399115937),"50%",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border_style,new cljs.core.Keyword(null,"border-left","border-left",-1150760178),border_style], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45055){if((e45055 instanceof Error)){
var e__43219__auto____$2 = e45055;
if((e__43219__auto____$2 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(face_id)].join('')));
} else {
throw e__43219__auto____$2;
}
} else {
throw e45055;

}
}} else {
throw e__43219__auto____$1;
}
} else {
throw e45054;

}
}} else {
throw e__43219__auto__;
}
} else {
throw e45053;

}
}})()], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," "], null)], null);
}
})()], null);
});
proto_crawl.view.main.roll_preview = (function proto_crawl$view$main$roll_preview(){
var map__45056 = cljs.core.deref((function (){var G__45057 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-orientation","player-orientation",1368989860)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45057) : re_frame.core.subscribe.call(null,G__45057));
})());
var map__45056__$1 = (((((!((map__45056 == null))))?(((((map__45056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45056):map__45056);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45056__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45056__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45056__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45056__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45056__$1,new cljs.core.Keyword(null,"n","n",562130025));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45056__$1,new cljs.core.Keyword(null,"w","w",354169001));
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"sidebar__roll-preview",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"repeat(4, 1fr)",new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),"repeat(4, 1fr)",new cljs.core.Keyword(null,"height","height",1025178622),"30%"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [proto_crawl.view.main.roll_preview_cell,t,(3),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [proto_crawl.view.main.roll_preview_cell,n,(3),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [proto_crawl.view.main.roll_preview_cell,s,(3),(3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [proto_crawl.view.main.roll_preview_cell,e,(4),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [proto_crawl.view.main.roll_preview_cell,w,(2),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [proto_crawl.view.main.roll_preview_cell,b,(1),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [proto_crawl.view.main.roll_preview_cell,b,(3),(4)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [proto_crawl.view.main.roll_preview_cell,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),(2),(4)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [proto_crawl.view.main.roll_preview_cell,new cljs.core.Keyword(null,"vertical","vertical",718696748),(1),(3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [proto_crawl.view.main.roll_preview_cell,new cljs.core.Keyword(null,"corner","corner",1296717125),(1),(4)], null)], null);
});
proto_crawl.view.main.sidebar = (function proto_crawl$view$main$sidebar(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"game__sidebar",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"grid-column","grid-column",-1086912770),"1 / span 2",new cljs.core.Keyword(null,"grid-row","grid-row",-1737175087),"1 / span 6",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid white",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"background-color","background-color",570434026),"black"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [proto_crawl.view.main.roll_preview], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"hi"], null)], null);
});
proto_crawl.view.main.game_area = (function proto_crawl$view$main$game_area(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"game-area-container",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"game-area",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"height","height",1025178622),"96vmin",new cljs.core.Keyword(null,"width","width",-384071477),"128vmin",new cljs.core.Keyword(null,"color","color",1011675173),"green",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"repeat(8, 1fr)",new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),"repeat(6, 1fr)",new cljs.core.Keyword(null,"margin","margin",-995903681),"0px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [proto_crawl.view.main.play_area], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [proto_crawl.view.main.sidebar], null)], null)], null);
});
proto_crawl.view.main.game_root = (function proto_crawl$view$main$game_root(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [proto_crawl.view.main.game_area], null);
});

//# sourceMappingURL=proto_crawl.view.main.js.map
