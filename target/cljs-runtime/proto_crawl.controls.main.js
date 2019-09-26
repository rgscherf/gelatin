goog.provide('proto_crawl.controls.main');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('proto_crawl.cube.main');
goog.require('cljs.core.match');
goog.require('proto_crawl.entities.utils');
proto_crawl.controls.main.move_up_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowUp",null,"k",null], null), null);
proto_crawl.controls.main.move_down_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowDown",null,"j",null], null), null);
proto_crawl.controls.main.move_left_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowLeft",null,"h",null], null), null);
proto_crawl.controls.main.move_right_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowRight",null,"l",null], null), null);
proto_crawl.controls.main.movement_key_names = clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(proto_crawl.controls.main.move_up_names,proto_crawl.controls.main.move_down_names,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([proto_crawl.controls.main.move_left_names,proto_crawl.controls.main.move_right_names], 0));
proto_crawl.controls.main.player_can_pass_tile_QMARK_ = (function proto_crawl$controls$main$player_can_pass_tile_QMARK_(game_map,candidate_pos){
var ocr_44282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(game_map,candidate_pos);
try{if(cljs.core.keyword_identical_QMARK_(ocr_44282,new cljs.core.Keyword(null,"floor","floor",1882041021))){
return true;
} else {
throw cljs.core.match.backtrack;

}
}catch (e44284){if((e44284 instanceof Error)){
var e__43219__auto__ = e44284;
if((e__43219__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(ocr_44282,new cljs.core.Keyword(null,"wall","wall",-787661558))){
return false;
} else {
throw cljs.core.match.backtrack;

}
}catch (e44285){if((e44285 instanceof Error)){
var e__43219__auto____$1 = e44285;
if((e__43219__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(ocr_44282,new cljs.core.Keyword(null,"void","void",-2084626863))){
return false;
} else {
throw cljs.core.match.backtrack;

}
}catch (e44286){if((e44286 instanceof Error)){
var e__43219__auto____$2 = e44286;
if((e__43219__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(ocr_44282,new cljs.core.Keyword(null,"door","door",-956406127))){
return true;
} else {
throw cljs.core.match.backtrack;

}
}catch (e44287){if((e44287 instanceof Error)){
var e__43219__auto____$3 = e44287;
if((e__43219__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(ocr_44282,new cljs.core.Keyword(null,"water","water",-824098213))){
return false;
} else {
throw cljs.core.match.backtrack;

}
}catch (e44288){if((e44288 instanceof Error)){
var e__43219__auto____$4 = e44288;
if((e__43219__auto____$4 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_44282)].join('')));
} else {
throw e__43219__auto____$4;
}
} else {
throw e44288;

}
}} else {
throw e__43219__auto____$3;
}
} else {
throw e44287;

}
}} else {
throw e__43219__auto____$2;
}
} else {
throw e44286;

}
}} else {
throw e__43219__auto____$1;
}
} else {
throw e44285;

}
}} else {
throw e__43219__auto__;
}
} else {
throw e44284;

}
}});
/**
 * Can the player move into the candidate tile?
 *   Currently only checks that the candidate space is in the map.
 *   Will want to add collision detection for entities, obstacles, etc.
 */
proto_crawl.controls.main.tile_free_for_player_QMARK_ = (function proto_crawl$controls$main$tile_free_for_player_QMARK_(db,candidate_vec){
var game_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"current-map","current-map",379894636));
var entities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"entities","entities",1940967403));
var and__4120__auto__ = cljs.core.not(proto_crawl.entities.utils.entity_at_QMARK_(entities,candidate_vec));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(game_map,candidate_vec);
if(cljs.core.truth_(and__4120__auto____$1)){
return proto_crawl.controls.main.player_can_pass_tile_QMARK_(game_map,candidate_vec);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
/**
 * Take a keyname (e.g. 'ArrowUp') and translate it to a movement map.
 */
proto_crawl.controls.main.keyname__GT_move_map = (function proto_crawl$controls$main$keyname__GT_move_map(keyname){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(proto_crawl.controls.main.move_up_names,keyname))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null);
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(proto_crawl.controls.main.move_down_names,keyname))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(proto_crawl.controls.main.move_left_names,keyname))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(proto_crawl.controls.main.move_right_names,keyname))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
} else {
return null;
}
}
}
}
});
/**
 * Take a keyname (e.g. 'ArrowUp') and translate it to a movement kw.
 *   valid keywords are #{:north :south :east :west}
 */
proto_crawl.controls.main.keyname__GT_direction = (function proto_crawl$controls$main$keyname__GT_direction(keyname){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(proto_crawl.controls.main.move_up_names,keyname))){
return new cljs.core.Keyword(null,"north","north",651323902);
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(proto_crawl.controls.main.move_down_names,keyname))){
return new cljs.core.Keyword(null,"south","south",1586796293);
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(proto_crawl.controls.main.move_left_names,keyname))){
return new cljs.core.Keyword(null,"west","west",708776677);
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(proto_crawl.controls.main.move_right_names,keyname))){
return new cljs.core.Keyword(null,"east","east",1189821678);
} else {
return null;
}
}
}
}
});
/**
 * Take a movement key name (defined in movement-key-names) and:
 *   1. update the db if it's a legal move, or
 *   2. return the db if it's an illegal move. 
 */
proto_crawl.controls.main.take_move_input = (function proto_crawl$controls$main$take_move_input(db,key_pressed){
var vec__44289 = proto_crawl.controls.main.keyname__GT_move_map(key_pressed);
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44289,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44289,(1),null);
var direction = proto_crawl.controls.main.keyname__GT_direction(key_pressed);
var current_orientation = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"orientation","orientation",623557579)], null));
var vec__44292 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44292,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44292,(1),null);
var candidate_move = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dx + px),(dy + py)], null);
if(cljs.core.truth_(proto_crawl.controls.main.tile_free_for_player_QMARK_(db,candidate_move))){
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"position","position",-2011731912)], null),candidate_move),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"orientation","orientation",623557579)], null),proto_crawl.cube.main.roll(current_orientation,direction));
} else {
return db;
}
});

//# sourceMappingURL=proto_crawl.controls.main.js.map
