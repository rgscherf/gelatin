goog.provide('proto_crawl.style.main');
goog.require('cljs.core');
proto_crawl.style.main.grid_container = (function proto_crawl$style$main$grid_container(size){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid white",new cljs.core.Keyword(null,"grid-row","grid-row",-1737175087),"1 / span 6",new cljs.core.Keyword(null,"grid-column","grid-column",-1086912770),"3 / span 6",new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),["repeat(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) / size)),"%)"].join(''),new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),["repeat(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.66 * ((100) / size))),"%)"].join('')], null);
});

//# sourceMappingURL=proto_crawl.style.main.js.map
