goog.provide('proto_crawl.entities.utils');
goog.require('cljs.core');
/**
 * Is there an entity at pos in the collection of entities?
 */
proto_crawl.entities.utils.entity_at_QMARK_ = (function proto_crawl$entities$utils$entity_at_QMARK_(entities,pos){
return cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44121_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p1__44121_SHARP_));
}),entities));
});
/**
 * Get the first entity at position pos.
 */
proto_crawl.entities.utils.entity_at = (function proto_crawl$entities$utils$entity_at(entities,pos){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44124_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p1__44124_SHARP_));
}),entities));
});
proto_crawl.entities.utils.greek_alphabet = cljs.core.PersistentVector.fromArray(["\u03B1","\u03B2","\u03B3","\u03B4","\u03F5","\u03B6","\u03B7","\u03B8","\u03B9","\u03BA","\u03BB","\u03BC","\u03BD","\u03BE","o","\u03C0","\u03C1","\u03C3","\u03C4","\u03C5","\u03D5","\u03C7","\u03C8","\u03C9","A","B","\u0393","\u0394","E","Z","H","\u0398","I","K","\u039B","M","N","\u039E","O","\u03A0","P","\u03A3","T","\u03D2","\u03A6","X","\u03A8","\u03A9"], true);

//# sourceMappingURL=proto_crawl.entities.utils.js.map
