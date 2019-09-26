goog.provide('proto_crawl.rot_js.main');
goog.require('cljs.core');
var module$node_modules$rot_js$dist$rot=shadow.js.require("module$node_modules$rot_js$dist$rot", {});
proto_crawl.rot_js.main.rng = module$node_modules$rot_js$dist$rot.RNG;
/**
 * random number [0..1) with uniform distribution (similar to Math.random())
 */
proto_crawl.rot_js.main.uniform = (function proto_crawl$rot_js$main$uniform(){
return proto_crawl.rot_js.main.rng.getUniform();
});
/**
 * random number with normal distribution,
 *   parametrized by a mean value and standard deviation
 */
proto_crawl.rot_js.main.normal = (function proto_crawl$rot_js$main$normal(mean,st_dev){
return proto_crawl.rot_js.main.rng.getNormal(mean,st_dev);
});
/**
 * random integer 1..100
 */
proto_crawl.rot_js.main.percentage = (function proto_crawl$rot_js$main$percentage(){
return proto_crawl.rot_js.main.rng.getPercentage();
});

//# sourceMappingURL=proto_crawl.rot_js.main.js.map
