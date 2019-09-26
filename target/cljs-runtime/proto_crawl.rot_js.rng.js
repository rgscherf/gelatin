goog.provide('proto_crawl.rot_js.rng');
goog.require('cljs.core');
goog.require('clojure.string');
var module$node_modules$rot_js$dist$rot=shadow.js.require("module$node_modules$rot_js$dist$rot", {});
proto_crawl.rot_js.rng.rng = module$node_modules$rot_js$dist$rot.RNG;
/**
 * random number [0..1] with uniform distribution (similar to Math.random())
 */
proto_crawl.rot_js.rng.uniform = (function proto_crawl$rot_js$rng$uniform(){
return proto_crawl.rot_js.rng.rng.getUniform();
});
/**
 * random number with normal distribution,
 *   parametrized by a mean value and standard deviation
 */
proto_crawl.rot_js.rng.normal = (function proto_crawl$rot_js$rng$normal(mean,st_dev){
return proto_crawl.rot_js.rng.rng.getNormal(mean,st_dev);
});
/**
 * random integer 1..100
 */
proto_crawl.rot_js.rng.percentage = (function proto_crawl$rot_js$rng$percentage(){
return proto_crawl.rot_js.rng.rng.getPercentage();
});
/**
 * Pick a random item from a collection.
 */
proto_crawl.rot_js.rng.random_item = (function proto_crawl$rot_js$rng$random_item(coll){
return proto_crawl.rot_js.rng.rng.getItem(cljs.core.to_array(coll));
});
/**
 * Choosing from a list of values with uneven weights
 *   is a common operation in Roguelike development.
 *   The getWeightedValue method is useful for this task;
 *   just give it a JS object with numeric weight values
 *   (arbitrary numbers) and a corresponding key will be picked randomly.
 */
proto_crawl.rot_js.rng.weighted_value = (function proto_crawl$rot_js$rng$weighted_value(valmap){
var selection = proto_crawl.rot_js.rng.rng.getWeightedValue(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.js_obj,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,valmap)));
if(((typeof selection === 'string') && (clojure.string.starts_with_QMARK_(selection,":")))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(selection,/:/,""));
} else {
return selection;
}
});

//# sourceMappingURL=proto_crawl.rot_js.rng.js.map
