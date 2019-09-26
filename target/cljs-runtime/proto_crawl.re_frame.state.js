goog.provide('proto_crawl.re_frame.state');
goog.require('cljs.core');
goog.require('clojure.math.combinatorics');
goog.require('proto_crawl.entities.main');
goog.require('proto_crawl.cube.main');
goog.require('proto_crawl.maps.main');
proto_crawl.re_frame.state.init_game_state = (function proto_crawl$re_frame$state$init_game_state(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [proto_crawl.entities.main.cleaner_bot()], null),new cljs.core.Keyword(null,"current-map","current-map",379894636),proto_crawl.maps.main.loader(new cljs.core.Keyword(null,"feature","feature",27242652)),new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map-config","map-config",267109639),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"viewport-size","viewport-size",-1787032748),(12)], null),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"orientation","orientation",623557579),proto_crawl.cube.main.__GT_orient((1),(5),(4)),new cljs.core.Keyword(null,"cube","cube",-1501611368),new cljs.core.PersistentArrayMap(null, 6, [(1),"A",(2),"B",(3),"C",(4),"D",(5),"E",(6),"F"], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], null);
});

//# sourceMappingURL=proto_crawl.re_frame.state.js.map
