goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42262 = arguments.length;
switch (G__42262) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42267 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42267 = (function (f,blockable,meta42268){
this.f = f;
this.blockable = blockable;
this.meta42268 = meta42268;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42269,meta42268__$1){
var self__ = this;
var _42269__$1 = this;
return (new cljs.core.async.t_cljs$core$async42267(self__.f,self__.blockable,meta42268__$1));
});

cljs.core.async.t_cljs$core$async42267.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42269){
var self__ = this;
var _42269__$1 = this;
return self__.meta42268;
});

cljs.core.async.t_cljs$core$async42267.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42267.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42267.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async42267.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async42267.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42268","meta42268",-1982277680,null)], null);
});

cljs.core.async.t_cljs$core$async42267.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42267.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42267";

cljs.core.async.t_cljs$core$async42267.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async42267");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42267.
 */
cljs.core.async.__GT_t_cljs$core$async42267 = (function cljs$core$async$__GT_t_cljs$core$async42267(f__$1,blockable__$1,meta42268){
return (new cljs.core.async.t_cljs$core$async42267(f__$1,blockable__$1,meta42268));
});

}

return (new cljs.core.async.t_cljs$core$async42267(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__42275 = arguments.length;
switch (G__42275) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__42280 = arguments.length;
switch (G__42280) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__42282 = arguments.length;
switch (G__42282) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_44471 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44471) : fn1.call(null,val_44471));
} else {
cljs.core.async.impl.dispatch.run(((function (val_44471,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44471) : fn1.call(null,val_44471));
});})(val_44471,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__42288 = arguments.length;
switch (G__42288) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___44521 = n;
var x_44522 = (0);
while(true){
if((x_44522 < n__4607__auto___44521)){
(a[x_44522] = (0));

var G__44523 = (x_44522 + (1));
x_44522 = G__44523;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__44524 = (i + (1));
i = G__44524;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42324 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42324 = (function (flag,meta42325){
this.flag = flag;
this.meta42325 = meta42325;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_42326,meta42325__$1){
var self__ = this;
var _42326__$1 = this;
return (new cljs.core.async.t_cljs$core$async42324(self__.flag,meta42325__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async42324.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_42326){
var self__ = this;
var _42326__$1 = this;
return self__.meta42325;
});})(flag))
;

cljs.core.async.t_cljs$core$async42324.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42324.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async42324.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42324.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42324.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42325","meta42325",-1276802413,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async42324.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42324.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42324";

cljs.core.async.t_cljs$core$async42324.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async42324");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42324.
 */
cljs.core.async.__GT_t_cljs$core$async42324 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42324(flag__$1,meta42325){
return (new cljs.core.async.t_cljs$core$async42324(flag__$1,meta42325));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async42324(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42336 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42336 = (function (flag,cb,meta42337){
this.flag = flag;
this.cb = cb;
this.meta42337 = meta42337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42338,meta42337__$1){
var self__ = this;
var _42338__$1 = this;
return (new cljs.core.async.t_cljs$core$async42336(self__.flag,self__.cb,meta42337__$1));
});

cljs.core.async.t_cljs$core$async42336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42338){
var self__ = this;
var _42338__$1 = this;
return self__.meta42337;
});

cljs.core.async.t_cljs$core$async42336.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42336.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async42336.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42336.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async42336.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42337","meta42337",-1798864483,null)], null);
});

cljs.core.async.t_cljs$core$async42336.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42336.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42336";

cljs.core.async.t_cljs$core$async42336.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async42336");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42336.
 */
cljs.core.async.__GT_t_cljs$core$async42336 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42336(flag__$1,cb__$1,meta42337){
return (new cljs.core.async.t_cljs$core$async42336(flag__$1,cb__$1,meta42337));
});

}

return (new cljs.core.async.t_cljs$core$async42336(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42339_SHARP_){
var G__42341 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42339_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42341) : fret.call(null,G__42341));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42340_SHARP_){
var G__42342 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42340_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42342) : fret.call(null,G__42342));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44575 = (i + (1));
i = G__44575;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___44576 = arguments.length;
var i__4731__auto___44577 = (0);
while(true){
if((i__4731__auto___44577 < len__4730__auto___44576)){
args__4736__auto__.push((arguments[i__4731__auto___44577]));

var G__44578 = (i__4731__auto___44577 + (1));
i__4731__auto___44577 = G__44578;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42348){
var map__42349 = p__42348;
var map__42349__$1 = (((((!((map__42349 == null))))?(((((map__42349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42349):map__42349);
var opts = map__42349__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42343){
var G__42344 = cljs.core.first(seq42343);
var seq42343__$1 = cljs.core.next(seq42343);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42344,seq42343__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__42352 = arguments.length;
switch (G__42352) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__42197__auto___44594 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42197__auto___44594){
return (function (){
var f__42198__auto__ = (function (){var switch__42084__auto__ = ((function (c__42197__auto___44594){
return (function (state_42376){
var state_val_42377 = (state_42376[(1)]);
if((state_val_42377 === (7))){
var inst_42372 = (state_42376[(2)]);
var state_42376__$1 = state_42376;
var statearr_42378_44596 = state_42376__$1;
(statearr_42378_44596[(2)] = inst_42372);

(statearr_42378_44596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42377 === (1))){
var state_42376__$1 = state_42376;
var statearr_42379_44598 = state_42376__$1;
(statearr_42379_44598[(2)] = null);

(statearr_42379_44598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42377 === (4))){
var inst_42355 = (state_42376[(7)]);
var inst_42355__$1 = (state_42376[(2)]);
var inst_42356 = (inst_42355__$1 == null);
var state_42376__$1 = (function (){var statearr_42380 = state_42376;
(statearr_42380[(7)] = inst_42355__$1);

return statearr_42380;
})();
if(cljs.core.truth_(inst_42356)){
var statearr_42381_44599 = state_42376__$1;
(statearr_42381_44599[(1)] = (5));

} else {
var statearr_42382_44600 = state_42376__$1;
(statearr_42382_44600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42377 === (13))){
var state_42376__$1 = state_42376;
var statearr_42386_44601 = state_42376__$1;
(statearr_42386_44601[(2)] = null);

(statearr_42386_44601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42377 === (6))){
var inst_42355 = (state_42376[(7)]);
var state_42376__$1 = state_42376;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42376__$1,(11),to,inst_42355);
} else {
if((state_val_42377 === (3))){
var inst_42374 = (state_42376[(2)]);
var state_42376__$1 = state_42376;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42376__$1,inst_42374);
} else {
if((state_val_42377 === (12))){
var state_42376__$1 = state_42376;
var statearr_42393_44603 = state_42376__$1;
(statearr_42393_44603[(2)] = null);

(statearr_42393_44603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42377 === (2))){
var state_42376__$1 = state_42376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42376__$1,(4),from);
} else {
if((state_val_42377 === (11))){
var inst_42365 = (state_42376[(2)]);
var state_42376__$1 = state_42376;
if(cljs.core.truth_(inst_42365)){
var statearr_42394_44604 = state_42376__$1;
(statearr_42394_44604[(1)] = (12));

} else {
var statearr_42395_44605 = state_42376__$1;
(statearr_42395_44605[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42377 === (9))){
var state_42376__$1 = state_42376;
var statearr_42396_44606 = state_42376__$1;
(statearr_42396_44606[(2)] = null);

(statearr_42396_44606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42377 === (5))){
var state_42376__$1 = state_42376;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42397_44607 = state_42376__$1;
(statearr_42397_44607[(1)] = (8));

} else {
var statearr_42398_44608 = state_42376__$1;
(statearr_42398_44608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42377 === (14))){
var inst_42370 = (state_42376[(2)]);
var state_42376__$1 = state_42376;
var statearr_42399_44609 = state_42376__$1;
(statearr_42399_44609[(2)] = inst_42370);

(statearr_42399_44609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42377 === (10))){
var inst_42362 = (state_42376[(2)]);
var state_42376__$1 = state_42376;
var statearr_42400_44610 = state_42376__$1;
(statearr_42400_44610[(2)] = inst_42362);

(statearr_42400_44610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42377 === (8))){
var inst_42359 = cljs.core.async.close_BANG_(to);
var state_42376__$1 = state_42376;
var statearr_42401_44611 = state_42376__$1;
(statearr_42401_44611[(2)] = inst_42359);

(statearr_42401_44611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42197__auto___44594))
;
return ((function (switch__42084__auto__,c__42197__auto___44594){
return (function() {
var cljs$core$async$state_machine__42085__auto__ = null;
var cljs$core$async$state_machine__42085__auto____0 = (function (){
var statearr_42402 = [null,null,null,null,null,null,null,null];
(statearr_42402[(0)] = cljs$core$async$state_machine__42085__auto__);

(statearr_42402[(1)] = (1));

return statearr_42402;
});
var cljs$core$async$state_machine__42085__auto____1 = (function (state_42376){
while(true){
var ret_value__42086__auto__ = (function (){try{while(true){
var result__42087__auto__ = switch__42084__auto__(state_42376);
if(cljs.core.keyword_identical_QMARK_(result__42087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42087__auto__;
}
break;
}
}catch (e42403){if((e42403 instanceof Object)){
var ex__42088__auto__ = e42403;
var statearr_42404_44617 = state_42376;
(statearr_42404_44617[(5)] = ex__42088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42403;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44618 = state_42376;
state_42376 = G__44618;
continue;
} else {
return ret_value__42086__auto__;
}
break;
}
});
cljs$core$async$state_machine__42085__auto__ = function(state_42376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42085__auto____1.call(this,state_42376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42085__auto____0;
cljs$core$async$state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42085__auto____1;
return cljs$core$async$state_machine__42085__auto__;
})()
;})(switch__42084__auto__,c__42197__auto___44594))
})();
var state__42199__auto__ = (function (){var statearr_42405 = (f__42198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42198__auto__.cljs$core$IFn$_invoke$arity$0() : f__42198__auto__.call(null));
(statearr_42405[(6)] = c__42197__auto___44594);

return statearr_42405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42199__auto__);
});})(c__42197__auto___44594))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__42406){
var vec__42407 = p__42406;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42407,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42407,(1),null);
var job = vec__42407;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__42197__auto___44629 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42197__auto___44629,res,vec__42407,v,p,job,jobs,results){
return (function (){
var f__42198__auto__ = (function (){var switch__42084__auto__ = ((function (c__42197__auto___44629,res,vec__42407,v,p,job,jobs,results){
return (function (state_42414){
var state_val_42415 = (state_42414[(1)]);
if((state_val_42415 === (1))){
var state_42414__$1 = state_42414;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42414__$1,(2),res,v);
} else {
if((state_val_42415 === (2))){
var inst_42411 = (state_42414[(2)]);
var inst_42412 = cljs.core.async.close_BANG_(res);
var state_42414__$1 = (function (){var statearr_42416 = state_42414;
(statearr_42416[(7)] = inst_42411);

return statearr_42416;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42414__$1,inst_42412);
} else {
return null;
}
}
});})(c__42197__auto___44629,res,vec__42407,v,p,job,jobs,results))
;
return ((function (switch__42084__auto__,c__42197__auto___44629,res,vec__42407,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____0 = (function (){
var statearr_42417 = [null,null,null,null,null,null,null,null];
(statearr_42417[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__);

(statearr_42417[(1)] = (1));

return statearr_42417;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____1 = (function (state_42414){
while(true){
var ret_value__42086__auto__ = (function (){try{while(true){
var result__42087__auto__ = switch__42084__auto__(state_42414);
if(cljs.core.keyword_identical_QMARK_(result__42087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42087__auto__;
}
break;
}
}catch (e42418){if((e42418 instanceof Object)){
var ex__42088__auto__ = e42418;
var statearr_42419_44636 = state_42414;
(statearr_42419_44636[(5)] = ex__42088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42418;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44637 = state_42414;
state_42414 = G__44637;
continue;
} else {
return ret_value__42086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__ = function(state_42414){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____1.call(this,state_42414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__;
})()
;})(switch__42084__auto__,c__42197__auto___44629,res,vec__42407,v,p,job,jobs,results))
})();
var state__42199__auto__ = (function (){var statearr_42420 = (f__42198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42198__auto__.cljs$core$IFn$_invoke$arity$0() : f__42198__auto__.call(null));
(statearr_42420[(6)] = c__42197__auto___44629);

return statearr_42420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42199__auto__);
});})(c__42197__auto___44629,res,vec__42407,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__42421){
var vec__42422 = p__42421;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42422,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42422,(1),null);
var job = vec__42422;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___44638 = n;
var __44639 = (0);
while(true){
if((__44639 < n__4607__auto___44638)){
var G__42425_44640 = type;
var G__42425_44641__$1 = (((G__42425_44640 instanceof cljs.core.Keyword))?G__42425_44640.fqn:null);
switch (G__42425_44641__$1) {
case "compute":
var c__42197__auto___44643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44639,c__42197__auto___44643,G__42425_44640,G__42425_44641__$1,n__4607__auto___44638,jobs,results,process,async){
return (function (){
var f__42198__auto__ = (function (){var switch__42084__auto__ = ((function (__44639,c__42197__auto___44643,G__42425_44640,G__42425_44641__$1,n__4607__auto___44638,jobs,results,process,async){
return (function (state_42441){
var state_val_42442 = (state_42441[(1)]);
if((state_val_42442 === (1))){
var state_42441__$1 = state_42441;
var statearr_42446_44659 = state_42441__$1;
(statearr_42446_44659[(2)] = null);

(statearr_42446_44659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42442 === (2))){
var state_42441__$1 = state_42441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42441__$1,(4),jobs);
} else {
if((state_val_42442 === (3))){
var inst_42439 = (state_42441[(2)]);
var state_42441__$1 = state_42441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42441__$1,inst_42439);
} else {
if((state_val_42442 === (4))){
var inst_42431 = (state_42441[(2)]);
var inst_42432 = process(inst_42431);
var state_42441__$1 = state_42441;
if(cljs.core.truth_(inst_42432)){
var statearr_42447_44660 = state_42441__$1;
(statearr_42447_44660[(1)] = (5));

} else {
var statearr_42448_44661 = state_42441__$1;
(statearr_42448_44661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42442 === (5))){
var state_42441__$1 = state_42441;
var statearr_42449_44662 = state_42441__$1;
(statearr_42449_44662[(2)] = null);

(statearr_42449_44662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42442 === (6))){
var state_42441__$1 = state_42441;
var statearr_42450_44663 = state_42441__$1;
(statearr_42450_44663[(2)] = null);

(statearr_42450_44663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42442 === (7))){
var inst_42437 = (state_42441[(2)]);
var state_42441__$1 = state_42441;
var statearr_42451_44664 = state_42441__$1;
(statearr_42451_44664[(2)] = inst_42437);

(statearr_42451_44664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__44639,c__42197__auto___44643,G__42425_44640,G__42425_44641__$1,n__4607__auto___44638,jobs,results,process,async))
;
return ((function (__44639,switch__42084__auto__,c__42197__auto___44643,G__42425_44640,G__42425_44641__$1,n__4607__auto___44638,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____0 = (function (){
var statearr_42452 = [null,null,null,null,null,null,null];
(statearr_42452[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__);

(statearr_42452[(1)] = (1));

return statearr_42452;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____1 = (function (state_42441){
while(true){
var ret_value__42086__auto__ = (function (){try{while(true){
var result__42087__auto__ = switch__42084__auto__(state_42441);
if(cljs.core.keyword_identical_QMARK_(result__42087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42087__auto__;
}
break;
}
}catch (e42453){if((e42453 instanceof Object)){
var ex__42088__auto__ = e42453;
var statearr_42454_44667 = state_42441;
(statearr_42454_44667[(5)] = ex__42088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42453;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44670 = state_42441;
state_42441 = G__44670;
continue;
} else {
return ret_value__42086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__ = function(state_42441){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____1.call(this,state_42441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__;
})()
;})(__44639,switch__42084__auto__,c__42197__auto___44643,G__42425_44640,G__42425_44641__$1,n__4607__auto___44638,jobs,results,process,async))
})();
var state__42199__auto__ = (function (){var statearr_42455 = (f__42198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42198__auto__.cljs$core$IFn$_invoke$arity$0() : f__42198__auto__.call(null));
(statearr_42455[(6)] = c__42197__auto___44643);

return statearr_42455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42199__auto__);
});})(__44639,c__42197__auto___44643,G__42425_44640,G__42425_44641__$1,n__4607__auto___44638,jobs,results,process,async))
);


break;
case "async":
var c__42197__auto___44684 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44639,c__42197__auto___44684,G__42425_44640,G__42425_44641__$1,n__4607__auto___44638,jobs,results,process,async){
return (function (){
var f__42198__auto__ = (function (){var switch__42084__auto__ = ((function (__44639,c__42197__auto___44684,G__42425_44640,G__42425_44641__$1,n__4607__auto___44638,jobs,results,process,async){
return (function (state_42468){
var state_val_42469 = (state_42468[(1)]);
if((state_val_42469 === (1))){
var state_42468__$1 = state_42468;
var statearr_42474_44685 = state_42468__$1;
(statearr_42474_44685[(2)] = null);

(statearr_42474_44685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42469 === (2))){
var state_42468__$1 = state_42468;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42468__$1,(4),jobs);
} else {
if((state_val_42469 === (3))){
var inst_42466 = (state_42468[(2)]);
var state_42468__$1 = state_42468;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42468__$1,inst_42466);
} else {
if((state_val_42469 === (4))){
var inst_42458 = (state_42468[(2)]);
var inst_42459 = async(inst_42458);
var state_42468__$1 = state_42468;
if(cljs.core.truth_(inst_42459)){
var statearr_42475_44686 = state_42468__$1;
(statearr_42475_44686[(1)] = (5));

} else {
var statearr_42476_44689 = state_42468__$1;
(statearr_42476_44689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42469 === (5))){
var state_42468__$1 = state_42468;
var statearr_42477_44693 = state_42468__$1;
(statearr_42477_44693[(2)] = null);

(statearr_42477_44693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42469 === (6))){
var state_42468__$1 = state_42468;
var statearr_42478_44694 = state_42468__$1;
(statearr_42478_44694[(2)] = null);

(statearr_42478_44694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42469 === (7))){
var inst_42464 = (state_42468[(2)]);
var state_42468__$1 = state_42468;
var statearr_42479_44695 = state_42468__$1;
(statearr_42479_44695[(2)] = inst_42464);

(statearr_42479_44695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__44639,c__42197__auto___44684,G__42425_44640,G__42425_44641__$1,n__4607__auto___44638,jobs,results,process,async))
;
return ((function (__44639,switch__42084__auto__,c__42197__auto___44684,G__42425_44640,G__42425_44641__$1,n__4607__auto___44638,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____0 = (function (){
var statearr_42480 = [null,null,null,null,null,null,null];
(statearr_42480[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__);

(statearr_42480[(1)] = (1));

return statearr_42480;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____1 = (function (state_42468){
while(true){
var ret_value__42086__auto__ = (function (){try{while(true){
var result__42087__auto__ = switch__42084__auto__(state_42468);
if(cljs.core.keyword_identical_QMARK_(result__42087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42087__auto__;
}
break;
}
}catch (e42482){if((e42482 instanceof Object)){
var ex__42088__auto__ = e42482;
var statearr_42486_44705 = state_42468;
(statearr_42486_44705[(5)] = ex__42088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42482;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44714 = state_42468;
state_42468 = G__44714;
continue;
} else {
return ret_value__42086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__ = function(state_42468){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____1.call(this,state_42468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__;
})()
;})(__44639,switch__42084__auto__,c__42197__auto___44684,G__42425_44640,G__42425_44641__$1,n__4607__auto___44638,jobs,results,process,async))
})();
var state__42199__auto__ = (function (){var statearr_42487 = (f__42198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42198__auto__.cljs$core$IFn$_invoke$arity$0() : f__42198__auto__.call(null));
(statearr_42487[(6)] = c__42197__auto___44684);

return statearr_42487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42199__auto__);
});})(__44639,c__42197__auto___44684,G__42425_44640,G__42425_44641__$1,n__4607__auto___44638,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42425_44641__$1)].join('')));

}

var G__44715 = (__44639 + (1));
__44639 = G__44715;
continue;
} else {
}
break;
}

var c__42197__auto___44716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42197__auto___44716,jobs,results,process,async){
return (function (){
var f__42198__auto__ = (function (){var switch__42084__auto__ = ((function (c__42197__auto___44716,jobs,results,process,async){
return (function (state_42509){
var state_val_42510 = (state_42509[(1)]);
if((state_val_42510 === (7))){
var inst_42505 = (state_42509[(2)]);
var state_42509__$1 = state_42509;
var statearr_42515_44717 = state_42509__$1;
(statearr_42515_44717[(2)] = inst_42505);

(statearr_42515_44717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42510 === (1))){
var state_42509__$1 = state_42509;
var statearr_42516_44718 = state_42509__$1;
(statearr_42516_44718[(2)] = null);

(statearr_42516_44718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42510 === (4))){
var inst_42490 = (state_42509[(7)]);
var inst_42490__$1 = (state_42509[(2)]);
var inst_42491 = (inst_42490__$1 == null);
var state_42509__$1 = (function (){var statearr_42517 = state_42509;
(statearr_42517[(7)] = inst_42490__$1);

return statearr_42517;
})();
if(cljs.core.truth_(inst_42491)){
var statearr_42518_44719 = state_42509__$1;
(statearr_42518_44719[(1)] = (5));

} else {
var statearr_42519_44720 = state_42509__$1;
(statearr_42519_44720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42510 === (6))){
var inst_42495 = (state_42509[(8)]);
var inst_42490 = (state_42509[(7)]);
var inst_42495__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_42496 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42497 = [inst_42490,inst_42495__$1];
var inst_42498 = (new cljs.core.PersistentVector(null,2,(5),inst_42496,inst_42497,null));
var state_42509__$1 = (function (){var statearr_42520 = state_42509;
(statearr_42520[(8)] = inst_42495__$1);

return statearr_42520;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42509__$1,(8),jobs,inst_42498);
} else {
if((state_val_42510 === (3))){
var inst_42507 = (state_42509[(2)]);
var state_42509__$1 = state_42509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42509__$1,inst_42507);
} else {
if((state_val_42510 === (2))){
var state_42509__$1 = state_42509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42509__$1,(4),from);
} else {
if((state_val_42510 === (9))){
var inst_42502 = (state_42509[(2)]);
var state_42509__$1 = (function (){var statearr_42521 = state_42509;
(statearr_42521[(9)] = inst_42502);

return statearr_42521;
})();
var statearr_42522_44721 = state_42509__$1;
(statearr_42522_44721[(2)] = null);

(statearr_42522_44721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42510 === (5))){
var inst_42493 = cljs.core.async.close_BANG_(jobs);
var state_42509__$1 = state_42509;
var statearr_42523_44722 = state_42509__$1;
(statearr_42523_44722[(2)] = inst_42493);

(statearr_42523_44722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42510 === (8))){
var inst_42495 = (state_42509[(8)]);
var inst_42500 = (state_42509[(2)]);
var state_42509__$1 = (function (){var statearr_42524 = state_42509;
(statearr_42524[(10)] = inst_42500);

return statearr_42524;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42509__$1,(9),results,inst_42495);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__42197__auto___44716,jobs,results,process,async))
;
return ((function (switch__42084__auto__,c__42197__auto___44716,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____0 = (function (){
var statearr_42525 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42525[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__);

(statearr_42525[(1)] = (1));

return statearr_42525;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____1 = (function (state_42509){
while(true){
var ret_value__42086__auto__ = (function (){try{while(true){
var result__42087__auto__ = switch__42084__auto__(state_42509);
if(cljs.core.keyword_identical_QMARK_(result__42087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42087__auto__;
}
break;
}
}catch (e42526){if((e42526 instanceof Object)){
var ex__42088__auto__ = e42526;
var statearr_42527_44724 = state_42509;
(statearr_42527_44724[(5)] = ex__42088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42526;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44730 = state_42509;
state_42509 = G__44730;
continue;
} else {
return ret_value__42086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__ = function(state_42509){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____1.call(this,state_42509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__;
})()
;})(switch__42084__auto__,c__42197__auto___44716,jobs,results,process,async))
})();
var state__42199__auto__ = (function (){var statearr_42532 = (f__42198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42198__auto__.cljs$core$IFn$_invoke$arity$0() : f__42198__auto__.call(null));
(statearr_42532[(6)] = c__42197__auto___44716);

return statearr_42532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42199__auto__);
});})(c__42197__auto___44716,jobs,results,process,async))
);


var c__42197__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42197__auto__,jobs,results,process,async){
return (function (){
var f__42198__auto__ = (function (){var switch__42084__auto__ = ((function (c__42197__auto__,jobs,results,process,async){
return (function (state_42575){
var state_val_42576 = (state_42575[(1)]);
if((state_val_42576 === (7))){
var inst_42571 = (state_42575[(2)]);
var state_42575__$1 = state_42575;
var statearr_42583_44731 = state_42575__$1;
(statearr_42583_44731[(2)] = inst_42571);

(statearr_42583_44731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (20))){
var state_42575__$1 = state_42575;
var statearr_42590_44732 = state_42575__$1;
(statearr_42590_44732[(2)] = null);

(statearr_42590_44732[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (1))){
var state_42575__$1 = state_42575;
var statearr_42591_44735 = state_42575__$1;
(statearr_42591_44735[(2)] = null);

(statearr_42591_44735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (4))){
var inst_42536 = (state_42575[(7)]);
var inst_42536__$1 = (state_42575[(2)]);
var inst_42537 = (inst_42536__$1 == null);
var state_42575__$1 = (function (){var statearr_42592 = state_42575;
(statearr_42592[(7)] = inst_42536__$1);

return statearr_42592;
})();
if(cljs.core.truth_(inst_42537)){
var statearr_42593_44742 = state_42575__$1;
(statearr_42593_44742[(1)] = (5));

} else {
var statearr_42606_44743 = state_42575__$1;
(statearr_42606_44743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (15))){
var inst_42553 = (state_42575[(8)]);
var state_42575__$1 = state_42575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42575__$1,(18),to,inst_42553);
} else {
if((state_val_42576 === (21))){
var inst_42566 = (state_42575[(2)]);
var state_42575__$1 = state_42575;
var statearr_42607_44744 = state_42575__$1;
(statearr_42607_44744[(2)] = inst_42566);

(statearr_42607_44744[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (13))){
var inst_42568 = (state_42575[(2)]);
var state_42575__$1 = (function (){var statearr_42608 = state_42575;
(statearr_42608[(9)] = inst_42568);

return statearr_42608;
})();
var statearr_42609_44745 = state_42575__$1;
(statearr_42609_44745[(2)] = null);

(statearr_42609_44745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (6))){
var inst_42536 = (state_42575[(7)]);
var state_42575__$1 = state_42575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42575__$1,(11),inst_42536);
} else {
if((state_val_42576 === (17))){
var inst_42561 = (state_42575[(2)]);
var state_42575__$1 = state_42575;
if(cljs.core.truth_(inst_42561)){
var statearr_42610_44746 = state_42575__$1;
(statearr_42610_44746[(1)] = (19));

} else {
var statearr_42611_44747 = state_42575__$1;
(statearr_42611_44747[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (3))){
var inst_42573 = (state_42575[(2)]);
var state_42575__$1 = state_42575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42575__$1,inst_42573);
} else {
if((state_val_42576 === (12))){
var inst_42550 = (state_42575[(10)]);
var state_42575__$1 = state_42575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42575__$1,(14),inst_42550);
} else {
if((state_val_42576 === (2))){
var state_42575__$1 = state_42575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42575__$1,(4),results);
} else {
if((state_val_42576 === (19))){
var state_42575__$1 = state_42575;
var statearr_42613_44748 = state_42575__$1;
(statearr_42613_44748[(2)] = null);

(statearr_42613_44748[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (11))){
var inst_42550 = (state_42575[(2)]);
var state_42575__$1 = (function (){var statearr_42614 = state_42575;
(statearr_42614[(10)] = inst_42550);

return statearr_42614;
})();
var statearr_42615_44749 = state_42575__$1;
(statearr_42615_44749[(2)] = null);

(statearr_42615_44749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (9))){
var state_42575__$1 = state_42575;
var statearr_42616_44750 = state_42575__$1;
(statearr_42616_44750[(2)] = null);

(statearr_42616_44750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (5))){
var state_42575__$1 = state_42575;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42617_44752 = state_42575__$1;
(statearr_42617_44752[(1)] = (8));

} else {
var statearr_42618_44753 = state_42575__$1;
(statearr_42618_44753[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (14))){
var inst_42553 = (state_42575[(8)]);
var inst_42555 = (state_42575[(11)]);
var inst_42553__$1 = (state_42575[(2)]);
var inst_42554 = (inst_42553__$1 == null);
var inst_42555__$1 = cljs.core.not(inst_42554);
var state_42575__$1 = (function (){var statearr_42619 = state_42575;
(statearr_42619[(8)] = inst_42553__$1);

(statearr_42619[(11)] = inst_42555__$1);

return statearr_42619;
})();
if(inst_42555__$1){
var statearr_42620_44754 = state_42575__$1;
(statearr_42620_44754[(1)] = (15));

} else {
var statearr_42621_44755 = state_42575__$1;
(statearr_42621_44755[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (16))){
var inst_42555 = (state_42575[(11)]);
var state_42575__$1 = state_42575;
var statearr_42622_44756 = state_42575__$1;
(statearr_42622_44756[(2)] = inst_42555);

(statearr_42622_44756[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (10))){
var inst_42547 = (state_42575[(2)]);
var state_42575__$1 = state_42575;
var statearr_42626_44757 = state_42575__$1;
(statearr_42626_44757[(2)] = inst_42547);

(statearr_42626_44757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (18))){
var inst_42558 = (state_42575[(2)]);
var state_42575__$1 = state_42575;
var statearr_42627_44758 = state_42575__$1;
(statearr_42627_44758[(2)] = inst_42558);

(statearr_42627_44758[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (8))){
var inst_42543 = cljs.core.async.close_BANG_(to);
var state_42575__$1 = state_42575;
var statearr_42628_44759 = state_42575__$1;
(statearr_42628_44759[(2)] = inst_42543);

(statearr_42628_44759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42197__auto__,jobs,results,process,async))
;
return ((function (switch__42084__auto__,c__42197__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____0 = (function (){
var statearr_42629 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42629[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__);

(statearr_42629[(1)] = (1));

return statearr_42629;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____1 = (function (state_42575){
while(true){
var ret_value__42086__auto__ = (function (){try{while(true){
var result__42087__auto__ = switch__42084__auto__(state_42575);
if(cljs.core.keyword_identical_QMARK_(result__42087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42087__auto__;
}
break;
}
}catch (e42630){if((e42630 instanceof Object)){
var ex__42088__auto__ = e42630;
var statearr_42631_44760 = state_42575;
(statearr_42631_44760[(5)] = ex__42088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42630;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44761 = state_42575;
state_42575 = G__44761;
continue;
} else {
return ret_value__42086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__ = function(state_42575){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____1.call(this,state_42575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42085__auto__;
})()
;})(switch__42084__auto__,c__42197__auto__,jobs,results,process,async))
})();
var state__42199__auto__ = (function (){var statearr_42632 = (f__42198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42198__auto__.cljs$core$IFn$_invoke$arity$0() : f__42198__auto__.call(null));
(statearr_42632[(6)] = c__42197__auto__);

return statearr_42632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42199__auto__);
});})(c__42197__auto__,jobs,results,process,async))
);

return c__42197__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__42634 = arguments.length;
switch (G__42634) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__42646 = arguments.length;
switch (G__42646) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__42654 = arguments.length;
switch (G__42654) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__42197__auto___44775 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42197__auto___44775,tc,fc){
return (function (){
var f__42198__auto__ = (function (){var switch__42084__auto__ = ((function (c__42197__auto___44775,tc,fc){
return (function (state_42680){
var state_val_42681 = (state_42680[(1)]);
if((state_val_42681 === (7))){
var inst_42676 = (state_42680[(2)]);
var state_42680__$1 = state_42680;
var statearr_42682_44778 = state_42680__$1;
(statearr_42682_44778[(2)] = inst_42676);

(statearr_42682_44778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42681 === (1))){
var state_42680__$1 = state_42680;
var statearr_42683_44779 = state_42680__$1;
(statearr_42683_44779[(2)] = null);

(statearr_42683_44779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42681 === (4))){
var inst_42657 = (state_42680[(7)]);
var inst_42657__$1 = (state_42680[(2)]);
var inst_42658 = (inst_42657__$1 == null);
var state_42680__$1 = (function (){var statearr_42685 = state_42680;
(statearr_42685[(7)] = inst_42657__$1);

return statearr_42685;
})();
if(cljs.core.truth_(inst_42658)){
var statearr_42686_44780 = state_42680__$1;
(statearr_42686_44780[(1)] = (5));

} else {
var statearr_42688_44781 = state_42680__$1;
(statearr_42688_44781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42681 === (13))){
var state_42680__$1 = state_42680;
var statearr_42689_44782 = state_42680__$1;
(statearr_42689_44782[(2)] = null);

(statearr_42689_44782[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42681 === (6))){
var inst_42657 = (state_42680[(7)]);
var inst_42663 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42657) : p.call(null,inst_42657));
var state_42680__$1 = state_42680;
if(cljs.core.truth_(inst_42663)){
var statearr_42690_44783 = state_42680__$1;
(statearr_42690_44783[(1)] = (9));

} else {
var statearr_42691_44789 = state_42680__$1;
(statearr_42691_44789[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42681 === (3))){
var inst_42678 = (state_42680[(2)]);
var state_42680__$1 = state_42680;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42680__$1,inst_42678);
} else {
if((state_val_42681 === (12))){
var state_42680__$1 = state_42680;
var statearr_42692_44790 = state_42680__$1;
(statearr_42692_44790[(2)] = null);

(statearr_42692_44790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42681 === (2))){
var state_42680__$1 = state_42680;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42680__$1,(4),ch);
} else {
if((state_val_42681 === (11))){
var inst_42657 = (state_42680[(7)]);
var inst_42667 = (state_42680[(2)]);
var state_42680__$1 = state_42680;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42680__$1,(8),inst_42667,inst_42657);
} else {
if((state_val_42681 === (9))){
var state_42680__$1 = state_42680;
var statearr_42695_44791 = state_42680__$1;
(statearr_42695_44791[(2)] = tc);

(statearr_42695_44791[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42681 === (5))){
var inst_42660 = cljs.core.async.close_BANG_(tc);
var inst_42661 = cljs.core.async.close_BANG_(fc);
var state_42680__$1 = (function (){var statearr_42696 = state_42680;
(statearr_42696[(8)] = inst_42660);

return statearr_42696;
})();
var statearr_42697_44792 = state_42680__$1;
(statearr_42697_44792[(2)] = inst_42661);

(statearr_42697_44792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42681 === (14))){
var inst_42674 = (state_42680[(2)]);
var state_42680__$1 = state_42680;
var statearr_42704_44793 = state_42680__$1;
(statearr_42704_44793[(2)] = inst_42674);

(statearr_42704_44793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42681 === (10))){
var state_42680__$1 = state_42680;
var statearr_42706_44798 = state_42680__$1;
(statearr_42706_44798[(2)] = fc);

(statearr_42706_44798[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42681 === (8))){
var inst_42669 = (state_42680[(2)]);
var state_42680__$1 = state_42680;
if(cljs.core.truth_(inst_42669)){
var statearr_42707_44799 = state_42680__$1;
(statearr_42707_44799[(1)] = (12));

} else {
var statearr_42708_44800 = state_42680__$1;
(statearr_42708_44800[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42197__auto___44775,tc,fc))
;
return ((function (switch__42084__auto__,c__42197__auto___44775,tc,fc){
return (function() {
var cljs$core$async$state_machine__42085__auto__ = null;
var cljs$core$async$state_machine__42085__auto____0 = (function (){
var statearr_42709 = [null,null,null,null,null,null,null,null,null];
(statearr_42709[(0)] = cljs$core$async$state_machine__42085__auto__);

(statearr_42709[(1)] = (1));

return statearr_42709;
});
var cljs$core$async$state_machine__42085__auto____1 = (function (state_42680){
while(true){
var ret_value__42086__auto__ = (function (){try{while(true){
var result__42087__auto__ = switch__42084__auto__(state_42680);
if(cljs.core.keyword_identical_QMARK_(result__42087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42087__auto__;
}
break;
}
}catch (e42710){if((e42710 instanceof Object)){
var ex__42088__auto__ = e42710;
var statearr_42711_44801 = state_42680;
(statearr_42711_44801[(5)] = ex__42088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42710;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44802 = state_42680;
state_42680 = G__44802;
continue;
} else {
return ret_value__42086__auto__;
}
break;
}
});
cljs$core$async$state_machine__42085__auto__ = function(state_42680){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42085__auto____1.call(this,state_42680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42085__auto____0;
cljs$core$async$state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42085__auto____1;
return cljs$core$async$state_machine__42085__auto__;
})()
;})(switch__42084__auto__,c__42197__auto___44775,tc,fc))
})();
var state__42199__auto__ = (function (){var statearr_42716 = (f__42198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42198__auto__.cljs$core$IFn$_invoke$arity$0() : f__42198__auto__.call(null));
(statearr_42716[(6)] = c__42197__auto___44775);

return statearr_42716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42199__auto__);
});})(c__42197__auto___44775,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__42197__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42197__auto__){
return (function (){
var f__42198__auto__ = (function (){var switch__42084__auto__ = ((function (c__42197__auto__){
return (function (state_42738){
var state_val_42739 = (state_42738[(1)]);
if((state_val_42739 === (7))){
var inst_42734 = (state_42738[(2)]);
var state_42738__$1 = state_42738;
var statearr_42742_44829 = state_42738__$1;
(statearr_42742_44829[(2)] = inst_42734);

(statearr_42742_44829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42739 === (1))){
var inst_42718 = init;
var state_42738__$1 = (function (){var statearr_42745 = state_42738;
(statearr_42745[(7)] = inst_42718);

return statearr_42745;
})();
var statearr_42746_44830 = state_42738__$1;
(statearr_42746_44830[(2)] = null);

(statearr_42746_44830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42739 === (4))){
var inst_42721 = (state_42738[(8)]);
var inst_42721__$1 = (state_42738[(2)]);
var inst_42722 = (inst_42721__$1 == null);
var state_42738__$1 = (function (){var statearr_42748 = state_42738;
(statearr_42748[(8)] = inst_42721__$1);

return statearr_42748;
})();
if(cljs.core.truth_(inst_42722)){
var statearr_42749_44831 = state_42738__$1;
(statearr_42749_44831[(1)] = (5));

} else {
var statearr_42750_44832 = state_42738__$1;
(statearr_42750_44832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42739 === (6))){
var inst_42725 = (state_42738[(9)]);
var inst_42718 = (state_42738[(7)]);
var inst_42721 = (state_42738[(8)]);
var inst_42725__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_42718,inst_42721) : f.call(null,inst_42718,inst_42721));
var inst_42726 = cljs.core.reduced_QMARK_(inst_42725__$1);
var state_42738__$1 = (function (){var statearr_42751 = state_42738;
(statearr_42751[(9)] = inst_42725__$1);

return statearr_42751;
})();
if(inst_42726){
var statearr_42752_44833 = state_42738__$1;
(statearr_42752_44833[(1)] = (8));

} else {
var statearr_42753_44834 = state_42738__$1;
(statearr_42753_44834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42739 === (3))){
var inst_42736 = (state_42738[(2)]);
var state_42738__$1 = state_42738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42738__$1,inst_42736);
} else {
if((state_val_42739 === (2))){
var state_42738__$1 = state_42738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42738__$1,(4),ch);
} else {
if((state_val_42739 === (9))){
var inst_42725 = (state_42738[(9)]);
var inst_42718 = inst_42725;
var state_42738__$1 = (function (){var statearr_42757 = state_42738;
(statearr_42757[(7)] = inst_42718);

return statearr_42757;
})();
var statearr_42758_44835 = state_42738__$1;
(statearr_42758_44835[(2)] = null);

(statearr_42758_44835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42739 === (5))){
var inst_42718 = (state_42738[(7)]);
var state_42738__$1 = state_42738;
var statearr_42759_44837 = state_42738__$1;
(statearr_42759_44837[(2)] = inst_42718);

(statearr_42759_44837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42739 === (10))){
var inst_42732 = (state_42738[(2)]);
var state_42738__$1 = state_42738;
var statearr_42760_44838 = state_42738__$1;
(statearr_42760_44838[(2)] = inst_42732);

(statearr_42760_44838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42739 === (8))){
var inst_42725 = (state_42738[(9)]);
var inst_42728 = cljs.core.deref(inst_42725);
var state_42738__$1 = state_42738;
var statearr_42762_44839 = state_42738__$1;
(statearr_42762_44839[(2)] = inst_42728);

(statearr_42762_44839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__42197__auto__))
;
return ((function (switch__42084__auto__,c__42197__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__42085__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42085__auto____0 = (function (){
var statearr_42763 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42763[(0)] = cljs$core$async$reduce_$_state_machine__42085__auto__);

(statearr_42763[(1)] = (1));

return statearr_42763;
});
var cljs$core$async$reduce_$_state_machine__42085__auto____1 = (function (state_42738){
while(true){
var ret_value__42086__auto__ = (function (){try{while(true){
var result__42087__auto__ = switch__42084__auto__(state_42738);
if(cljs.core.keyword_identical_QMARK_(result__42087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42087__auto__;
}
break;
}
}catch (e42768){if((e42768 instanceof Object)){
var ex__42088__auto__ = e42768;
var statearr_42770_44842 = state_42738;
(statearr_42770_44842[(5)] = ex__42088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42768;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44846 = state_42738;
state_42738 = G__44846;
continue;
} else {
return ret_value__42086__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42085__auto__ = function(state_42738){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42085__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42085__auto____1.call(this,state_42738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42085__auto____0;
cljs$core$async$reduce_$_state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42085__auto____1;
return cljs$core$async$reduce_$_state_machine__42085__auto__;
})()
;})(switch__42084__auto__,c__42197__auto__))
})();
var state__42199__auto__ = (function (){var statearr_42771 = (f__42198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42198__auto__.cljs$core$IFn$_invoke$arity$0() : f__42198__auto__.call(null));
(statearr_42771[(6)] = c__42197__auto__);

return statearr_42771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42199__auto__);
});})(c__42197__auto__))
);

return c__42197__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__42197__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42197__auto__,f__$1){
return (function (){
var f__42198__auto__ = (function (){var switch__42084__auto__ = ((function (c__42197__auto__,f__$1){
return (function (state_42781){
var state_val_42782 = (state_42781[(1)]);
if((state_val_42782 === (1))){
var inst_42776 = cljs.core.async.reduce(f__$1,init,ch);
var state_42781__$1 = state_42781;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42781__$1,(2),inst_42776);
} else {
if((state_val_42782 === (2))){
var inst_42778 = (state_42781[(2)]);
var inst_42779 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_42778) : f__$1.call(null,inst_42778));
var state_42781__$1 = state_42781;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42781__$1,inst_42779);
} else {
return null;
}
}
});})(c__42197__auto__,f__$1))
;
return ((function (switch__42084__auto__,c__42197__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__42085__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42085__auto____0 = (function (){
var statearr_42783 = [null,null,null,null,null,null,null];
(statearr_42783[(0)] = cljs$core$async$transduce_$_state_machine__42085__auto__);

(statearr_42783[(1)] = (1));

return statearr_42783;
});
var cljs$core$async$transduce_$_state_machine__42085__auto____1 = (function (state_42781){
while(true){
var ret_value__42086__auto__ = (function (){try{while(true){
var result__42087__auto__ = switch__42084__auto__(state_42781);
if(cljs.core.keyword_identical_QMARK_(result__42087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42087__auto__;
}
break;
}
}catch (e42784){if((e42784 instanceof Object)){
var ex__42088__auto__ = e42784;
var statearr_42785_44852 = state_42781;
(statearr_42785_44852[(5)] = ex__42088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42784;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44853 = state_42781;
state_42781 = G__44853;
continue;
} else {
return ret_value__42086__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42085__auto__ = function(state_42781){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42085__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42085__auto____1.call(this,state_42781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42085__auto____0;
cljs$core$async$transduce_$_state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42085__auto____1;
return cljs$core$async$transduce_$_state_machine__42085__auto__;
})()
;})(switch__42084__auto__,c__42197__auto__,f__$1))
})();
var state__42199__auto__ = (function (){var statearr_42786 = (f__42198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42198__auto__.cljs$core$IFn$_invoke$arity$0() : f__42198__auto__.call(null));
(statearr_42786[(6)] = c__42197__auto__);

return statearr_42786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42199__auto__);
});})(c__42197__auto__,f__$1))
);

return c__42197__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__42788 = arguments.length;
switch (G__42788) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__42197__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42197__auto__){
return (function (){
var f__42198__auto__ = (function (){var switch__42084__auto__ = ((function (c__42197__auto__){
return (function (state_42813){
var state_val_42814 = (state_42813[(1)]);
if((state_val_42814 === (7))){
var inst_42795 = (state_42813[(2)]);
var state_42813__$1 = state_42813;
var statearr_42815_44868 = state_42813__$1;
(statearr_42815_44868[(2)] = inst_42795);

(statearr_42815_44868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42814 === (1))){
var inst_42789 = cljs.core.seq(coll);
var inst_42790 = inst_42789;
var state_42813__$1 = (function (){var statearr_42816 = state_42813;
(statearr_42816[(7)] = inst_42790);

return statearr_42816;
})();
var statearr_42821_44869 = state_42813__$1;
(statearr_42821_44869[(2)] = null);

(statearr_42821_44869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42814 === (4))){
var inst_42790 = (state_42813[(7)]);
var inst_42793 = cljs.core.first(inst_42790);
var state_42813__$1 = state_42813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42813__$1,(7),ch,inst_42793);
} else {
if((state_val_42814 === (13))){
var inst_42807 = (state_42813[(2)]);
var state_42813__$1 = state_42813;
var statearr_42823_44874 = state_42813__$1;
(statearr_42823_44874[(2)] = inst_42807);

(statearr_42823_44874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42814 === (6))){
var inst_42798 = (state_42813[(2)]);
var state_42813__$1 = state_42813;
if(cljs.core.truth_(inst_42798)){
var statearr_42825_44878 = state_42813__$1;
(statearr_42825_44878[(1)] = (8));

} else {
var statearr_42826_44879 = state_42813__$1;
(statearr_42826_44879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42814 === (3))){
var inst_42811 = (state_42813[(2)]);
var state_42813__$1 = state_42813;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42813__$1,inst_42811);
} else {
if((state_val_42814 === (12))){
var state_42813__$1 = state_42813;
var statearr_42827_44880 = state_42813__$1;
(statearr_42827_44880[(2)] = null);

(statearr_42827_44880[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42814 === (2))){
var inst_42790 = (state_42813[(7)]);
var state_42813__$1 = state_42813;
if(cljs.core.truth_(inst_42790)){
var statearr_42828_44881 = state_42813__$1;
(statearr_42828_44881[(1)] = (4));

} else {
var statearr_42829_44882 = state_42813__$1;
(statearr_42829_44882[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42814 === (11))){
var inst_42804 = cljs.core.async.close_BANG_(ch);
var state_42813__$1 = state_42813;
var statearr_42830_44883 = state_42813__$1;
(statearr_42830_44883[(2)] = inst_42804);

(statearr_42830_44883[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42814 === (9))){
var state_42813__$1 = state_42813;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42831_44884 = state_42813__$1;
(statearr_42831_44884[(1)] = (11));

} else {
var statearr_42832_44885 = state_42813__$1;
(statearr_42832_44885[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42814 === (5))){
var inst_42790 = (state_42813[(7)]);
var state_42813__$1 = state_42813;
var statearr_42833_44886 = state_42813__$1;
(statearr_42833_44886[(2)] = inst_42790);

(statearr_42833_44886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42814 === (10))){
var inst_42809 = (state_42813[(2)]);
var state_42813__$1 = state_42813;
var statearr_42834_44887 = state_42813__$1;
(statearr_42834_44887[(2)] = inst_42809);

(statearr_42834_44887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42814 === (8))){
var inst_42790 = (state_42813[(7)]);
var inst_42800 = cljs.core.next(inst_42790);
var inst_42790__$1 = inst_42800;
var state_42813__$1 = (function (){var statearr_42835 = state_42813;
(statearr_42835[(7)] = inst_42790__$1);

return statearr_42835;
})();
var statearr_42836_44888 = state_42813__$1;
(statearr_42836_44888[(2)] = null);

(statearr_42836_44888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42197__auto__))
;
return ((function (switch__42084__auto__,c__42197__auto__){
return (function() {
var cljs$core$async$state_machine__42085__auto__ = null;
var cljs$core$async$state_machine__42085__auto____0 = (function (){
var statearr_42837 = [null,null,null,null,null,null,null,null];
(statearr_42837[(0)] = cljs$core$async$state_machine__42085__auto__);

(statearr_42837[(1)] = (1));

return statearr_42837;
});
var cljs$core$async$state_machine__42085__auto____1 = (function (state_42813){
while(true){
var ret_value__42086__auto__ = (function (){try{while(true){
var result__42087__auto__ = switch__42084__auto__(state_42813);
if(cljs.core.keyword_identical_QMARK_(result__42087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42087__auto__;
}
break;
}
}catch (e42838){if((e42838 instanceof Object)){
var ex__42088__auto__ = e42838;
var statearr_42839_44891 = state_42813;
(statearr_42839_44891[(5)] = ex__42088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44896 = state_42813;
state_42813 = G__44896;
continue;
} else {
return ret_value__42086__auto__;
}
break;
}
});
cljs$core$async$state_machine__42085__auto__ = function(state_42813){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42085__auto____1.call(this,state_42813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42085__auto____0;
cljs$core$async$state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42085__auto____1;
return cljs$core$async$state_machine__42085__auto__;
})()
;})(switch__42084__auto__,c__42197__auto__))
})();
var state__42199__auto__ = (function (){var statearr_42840 = (f__42198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42198__auto__.cljs$core$IFn$_invoke$arity$0() : f__42198__auto__.call(null));
(statearr_42840[(6)] = c__42197__auto__);

return statearr_42840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42199__auto__);
});})(c__42197__auto__))
);

return c__42197__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42858 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42858 = (function (ch,cs,meta42859){
this.ch = ch;
this.cs = cs;
this.meta42859 = meta42859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42860,meta42859__$1){
var self__ = this;
var _42860__$1 = this;
return (new cljs.core.async.t_cljs$core$async42858(self__.ch,self__.cs,meta42859__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async42858.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42860){
var self__ = this;
var _42860__$1 = this;
return self__.meta42859;
});})(cs))
;

cljs.core.async.t_cljs$core$async42858.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42858.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async42858.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42858.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42858.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42858.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42858.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42859","meta42859",-1087476100,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async42858.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42858.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42858";

cljs.core.async.t_cljs$core$async42858.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async42858");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42858.
 */
cljs.core.async.__GT_t_cljs$core$async42858 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async42858(ch__$1,cs__$1,meta42859){
return (new cljs.core.async.t_cljs$core$async42858(ch__$1,cs__$1,meta42859));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async42858(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__42197__auto___44925 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42197__auto___44925,cs,m,dchan,dctr,done){
return (function (){
var f__42198__auto__ = (function (){var switch__42084__auto__ = ((function (c__42197__auto___44925,cs,m,dchan,dctr,done){
return (function (state_43006){
var state_val_43007 = (state_43006[(1)]);
if((state_val_43007 === (7))){
var inst_43002 = (state_43006[(2)]);
var state_43006__$1 = state_43006;
var statearr_43008_44927 = state_43006__$1;
(statearr_43008_44927[(2)] = inst_43002);

(statearr_43008_44927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (20))){
var inst_42904 = (state_43006[(7)]);
var inst_42916 = cljs.core.first(inst_42904);
var inst_42917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42916,(0),null);
var inst_42918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42916,(1),null);
var state_43006__$1 = (function (){var statearr_43009 = state_43006;
(statearr_43009[(8)] = inst_42917);

return statearr_43009;
})();
if(cljs.core.truth_(inst_42918)){
var statearr_43019_44928 = state_43006__$1;
(statearr_43019_44928[(1)] = (22));

} else {
var statearr_43020_44929 = state_43006__$1;
(statearr_43020_44929[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (27))){
var inst_42949 = (state_43006[(9)]);
var inst_42947 = (state_43006[(10)]);
var inst_42954 = (state_43006[(11)]);
var inst_42872 = (state_43006[(12)]);
var inst_42954__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_42947,inst_42949);
var inst_42955 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_42954__$1,inst_42872,done);
var state_43006__$1 = (function (){var statearr_43025 = state_43006;
(statearr_43025[(11)] = inst_42954__$1);

return statearr_43025;
})();
if(cljs.core.truth_(inst_42955)){
var statearr_43026_44934 = state_43006__$1;
(statearr_43026_44934[(1)] = (30));

} else {
var statearr_43027_44935 = state_43006__$1;
(statearr_43027_44935[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (1))){
var state_43006__$1 = state_43006;
var statearr_43028_44936 = state_43006__$1;
(statearr_43028_44936[(2)] = null);

(statearr_43028_44936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (24))){
var inst_42904 = (state_43006[(7)]);
var inst_42924 = (state_43006[(2)]);
var inst_42925 = cljs.core.next(inst_42904);
var inst_42881 = inst_42925;
var inst_42882 = null;
var inst_42883 = (0);
var inst_42884 = (0);
var state_43006__$1 = (function (){var statearr_43030 = state_43006;
(statearr_43030[(13)] = inst_42884);

(statearr_43030[(14)] = inst_42883);

(statearr_43030[(15)] = inst_42882);

(statearr_43030[(16)] = inst_42881);

(statearr_43030[(17)] = inst_42924);

return statearr_43030;
})();
var statearr_43031_44941 = state_43006__$1;
(statearr_43031_44941[(2)] = null);

(statearr_43031_44941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (39))){
var state_43006__$1 = state_43006;
var statearr_43036_44942 = state_43006__$1;
(statearr_43036_44942[(2)] = null);

(statearr_43036_44942[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (4))){
var inst_42872 = (state_43006[(12)]);
var inst_42872__$1 = (state_43006[(2)]);
var inst_42873 = (inst_42872__$1 == null);
var state_43006__$1 = (function (){var statearr_43037 = state_43006;
(statearr_43037[(12)] = inst_42872__$1);

return statearr_43037;
})();
if(cljs.core.truth_(inst_42873)){
var statearr_43038_44943 = state_43006__$1;
(statearr_43038_44943[(1)] = (5));

} else {
var statearr_43039_44944 = state_43006__$1;
(statearr_43039_44944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (15))){
var inst_42884 = (state_43006[(13)]);
var inst_42883 = (state_43006[(14)]);
var inst_42882 = (state_43006[(15)]);
var inst_42881 = (state_43006[(16)]);
var inst_42899 = (state_43006[(2)]);
var inst_42901 = (inst_42884 + (1));
var tmp43032 = inst_42883;
var tmp43033 = inst_42882;
var tmp43034 = inst_42881;
var inst_42881__$1 = tmp43034;
var inst_42882__$1 = tmp43033;
var inst_42883__$1 = tmp43032;
var inst_42884__$1 = inst_42901;
var state_43006__$1 = (function (){var statearr_43043 = state_43006;
(statearr_43043[(13)] = inst_42884__$1);

(statearr_43043[(18)] = inst_42899);

(statearr_43043[(14)] = inst_42883__$1);

(statearr_43043[(15)] = inst_42882__$1);

(statearr_43043[(16)] = inst_42881__$1);

return statearr_43043;
})();
var statearr_43044_44950 = state_43006__$1;
(statearr_43044_44950[(2)] = null);

(statearr_43044_44950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (21))){
var inst_42928 = (state_43006[(2)]);
var state_43006__$1 = state_43006;
var statearr_43048_44951 = state_43006__$1;
(statearr_43048_44951[(2)] = inst_42928);

(statearr_43048_44951[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (31))){
var inst_42954 = (state_43006[(11)]);
var inst_42958 = done(null);
var inst_42959 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_42954);
var state_43006__$1 = (function (){var statearr_43049 = state_43006;
(statearr_43049[(19)] = inst_42958);

return statearr_43049;
})();
var statearr_43050_44952 = state_43006__$1;
(statearr_43050_44952[(2)] = inst_42959);

(statearr_43050_44952[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (32))){
var inst_42949 = (state_43006[(9)]);
var inst_42946 = (state_43006[(20)]);
var inst_42947 = (state_43006[(10)]);
var inst_42948 = (state_43006[(21)]);
var inst_42961 = (state_43006[(2)]);
var inst_42962 = (inst_42949 + (1));
var tmp43045 = inst_42946;
var tmp43046 = inst_42947;
var tmp43047 = inst_42948;
var inst_42946__$1 = tmp43045;
var inst_42947__$1 = tmp43046;
var inst_42948__$1 = tmp43047;
var inst_42949__$1 = inst_42962;
var state_43006__$1 = (function (){var statearr_43051 = state_43006;
(statearr_43051[(9)] = inst_42949__$1);

(statearr_43051[(22)] = inst_42961);

(statearr_43051[(20)] = inst_42946__$1);

(statearr_43051[(10)] = inst_42947__$1);

(statearr_43051[(21)] = inst_42948__$1);

return statearr_43051;
})();
var statearr_43052_44953 = state_43006__$1;
(statearr_43052_44953[(2)] = null);

(statearr_43052_44953[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (40))){
var inst_42974 = (state_43006[(23)]);
var inst_42978 = done(null);
var inst_42979 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_42974);
var state_43006__$1 = (function (){var statearr_43053 = state_43006;
(statearr_43053[(24)] = inst_42978);

return statearr_43053;
})();
var statearr_43054_44961 = state_43006__$1;
(statearr_43054_44961[(2)] = inst_42979);

(statearr_43054_44961[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (33))){
var inst_42965 = (state_43006[(25)]);
var inst_42967 = cljs.core.chunked_seq_QMARK_(inst_42965);
var state_43006__$1 = state_43006;
if(inst_42967){
var statearr_43055_44962 = state_43006__$1;
(statearr_43055_44962[(1)] = (36));

} else {
var statearr_43056_44963 = state_43006__$1;
(statearr_43056_44963[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (13))){
var inst_42893 = (state_43006[(26)]);
var inst_42896 = cljs.core.async.close_BANG_(inst_42893);
var state_43006__$1 = state_43006;
var statearr_43057_44964 = state_43006__$1;
(statearr_43057_44964[(2)] = inst_42896);

(statearr_43057_44964[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (22))){
var inst_42917 = (state_43006[(8)]);
var inst_42921 = cljs.core.async.close_BANG_(inst_42917);
var state_43006__$1 = state_43006;
var statearr_43058_44965 = state_43006__$1;
(statearr_43058_44965[(2)] = inst_42921);

(statearr_43058_44965[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (36))){
var inst_42965 = (state_43006[(25)]);
var inst_42969 = cljs.core.chunk_first(inst_42965);
var inst_42970 = cljs.core.chunk_rest(inst_42965);
var inst_42971 = cljs.core.count(inst_42969);
var inst_42946 = inst_42970;
var inst_42947 = inst_42969;
var inst_42948 = inst_42971;
var inst_42949 = (0);
var state_43006__$1 = (function (){var statearr_43059 = state_43006;
(statearr_43059[(9)] = inst_42949);

(statearr_43059[(20)] = inst_42946);

(statearr_43059[(10)] = inst_42947);

(statearr_43059[(21)] = inst_42948);

return statearr_43059;
})();
var statearr_43060_44966 = state_43006__$1;
(statearr_43060_44966[(2)] = null);

(statearr_43060_44966[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (41))){
var inst_42965 = (state_43006[(25)]);
var inst_42981 = (state_43006[(2)]);
var inst_42982 = cljs.core.next(inst_42965);
var inst_42946 = inst_42982;
var inst_42947 = null;
var inst_42948 = (0);
var inst_42949 = (0);
var state_43006__$1 = (function (){var statearr_43061 = state_43006;
(statearr_43061[(9)] = inst_42949);

(statearr_43061[(20)] = inst_42946);

(statearr_43061[(10)] = inst_42947);

(statearr_43061[(21)] = inst_42948);

(statearr_43061[(27)] = inst_42981);

return statearr_43061;
})();
var statearr_43062_44968 = state_43006__$1;
(statearr_43062_44968[(2)] = null);

(statearr_43062_44968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (43))){
var state_43006__$1 = state_43006;
var statearr_43063_44970 = state_43006__$1;
(statearr_43063_44970[(2)] = null);

(statearr_43063_44970[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (29))){
var inst_42990 = (state_43006[(2)]);
var state_43006__$1 = state_43006;
var statearr_43064_44971 = state_43006__$1;
(statearr_43064_44971[(2)] = inst_42990);

(statearr_43064_44971[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (44))){
var inst_42999 = (state_43006[(2)]);
var state_43006__$1 = (function (){var statearr_43065 = state_43006;
(statearr_43065[(28)] = inst_42999);

return statearr_43065;
})();
var statearr_43066_44973 = state_43006__$1;
(statearr_43066_44973[(2)] = null);

(statearr_43066_44973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (6))){
var inst_42938 = (state_43006[(29)]);
var inst_42937 = cljs.core.deref(cs);
var inst_42938__$1 = cljs.core.keys(inst_42937);
var inst_42939 = cljs.core.count(inst_42938__$1);
var inst_42940 = cljs.core.reset_BANG_(dctr,inst_42939);
var inst_42945 = cljs.core.seq(inst_42938__$1);
var inst_42946 = inst_42945;
var inst_42947 = null;
var inst_42948 = (0);
var inst_42949 = (0);
var state_43006__$1 = (function (){var statearr_43067 = state_43006;
(statearr_43067[(9)] = inst_42949);

(statearr_43067[(20)] = inst_42946);

(statearr_43067[(10)] = inst_42947);

(statearr_43067[(21)] = inst_42948);

(statearr_43067[(29)] = inst_42938__$1);

(statearr_43067[(30)] = inst_42940);

return statearr_43067;
})();
var statearr_43068_44979 = state_43006__$1;
(statearr_43068_44979[(2)] = null);

(statearr_43068_44979[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (28))){
var inst_42946 = (state_43006[(20)]);
var inst_42965 = (state_43006[(25)]);
var inst_42965__$1 = cljs.core.seq(inst_42946);
var state_43006__$1 = (function (){var statearr_43069 = state_43006;
(statearr_43069[(25)] = inst_42965__$1);

return statearr_43069;
})();
if(inst_42965__$1){
var statearr_43070_44981 = state_43006__$1;
(statearr_43070_44981[(1)] = (33));

} else {
var statearr_43071_44982 = state_43006__$1;
(statearr_43071_44982[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (25))){
var inst_42949 = (state_43006[(9)]);
var inst_42948 = (state_43006[(21)]);
var inst_42951 = (inst_42949 < inst_42948);
var inst_42952 = inst_42951;
var state_43006__$1 = state_43006;
if(cljs.core.truth_(inst_42952)){
var statearr_43072_44983 = state_43006__$1;
(statearr_43072_44983[(1)] = (27));

} else {
var statearr_43073_44984 = state_43006__$1;
(statearr_43073_44984[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (34))){
var state_43006__$1 = state_43006;
var statearr_43075_44985 = state_43006__$1;
(statearr_43075_44985[(2)] = null);

(statearr_43075_44985[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (17))){
var state_43006__$1 = state_43006;
var statearr_43076_44986 = state_43006__$1;
(statearr_43076_44986[(2)] = null);

(statearr_43076_44986[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (3))){
var inst_43004 = (state_43006[(2)]);
var state_43006__$1 = state_43006;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43006__$1,inst_43004);
} else {
if((state_val_43007 === (12))){
var inst_42933 = (state_43006[(2)]);
var state_43006__$1 = state_43006;
var statearr_43077_44988 = state_43006__$1;
(statearr_43077_44988[(2)] = inst_42933);

(statearr_43077_44988[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (2))){
var state_43006__$1 = state_43006;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43006__$1,(4),ch);
} else {
if((state_val_43007 === (23))){
var state_43006__$1 = state_43006;
var statearr_43078_44989 = state_43006__$1;
(statearr_43078_44989[(2)] = null);

(statearr_43078_44989[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (35))){
var inst_42988 = (state_43006[(2)]);
var state_43006__$1 = state_43006;
var statearr_43080_44990 = state_43006__$1;
(statearr_43080_44990[(2)] = inst_42988);

(statearr_43080_44990[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (19))){
var inst_42904 = (state_43006[(7)]);
var inst_42908 = cljs.core.chunk_first(inst_42904);
var inst_42909 = cljs.core.chunk_rest(inst_42904);
var inst_42910 = cljs.core.count(inst_42908);
var inst_42881 = inst_42909;
var inst_42882 = inst_42908;
var inst_42883 = inst_42910;
var inst_42884 = (0);
var state_43006__$1 = (function (){var statearr_43081 = state_43006;
(statearr_43081[(13)] = inst_42884);

(statearr_43081[(14)] = inst_42883);

(statearr_43081[(15)] = inst_42882);

(statearr_43081[(16)] = inst_42881);

return statearr_43081;
})();
var statearr_43082_44992 = state_43006__$1;
(statearr_43082_44992[(2)] = null);

(statearr_43082_44992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (11))){
var inst_42904 = (state_43006[(7)]);
var inst_42881 = (state_43006[(16)]);
var inst_42904__$1 = cljs.core.seq(inst_42881);
var state_43006__$1 = (function (){var statearr_43084 = state_43006;
(statearr_43084[(7)] = inst_42904__$1);

return statearr_43084;
})();
if(inst_42904__$1){
var statearr_43085_44996 = state_43006__$1;
(statearr_43085_44996[(1)] = (16));

} else {
var statearr_43086_44997 = state_43006__$1;
(statearr_43086_44997[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (9))){
var inst_42935 = (state_43006[(2)]);
var state_43006__$1 = state_43006;
var statearr_43087_44998 = state_43006__$1;
(statearr_43087_44998[(2)] = inst_42935);

(statearr_43087_44998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (5))){
var inst_42879 = cljs.core.deref(cs);
var inst_42880 = cljs.core.seq(inst_42879);
var inst_42881 = inst_42880;
var inst_42882 = null;
var inst_42883 = (0);
var inst_42884 = (0);
var state_43006__$1 = (function (){var statearr_43088 = state_43006;
(statearr_43088[(13)] = inst_42884);

(statearr_43088[(14)] = inst_42883);

(statearr_43088[(15)] = inst_42882);

(statearr_43088[(16)] = inst_42881);

return statearr_43088;
})();
var statearr_43089_45000 = state_43006__$1;
(statearr_43089_45000[(2)] = null);

(statearr_43089_45000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (14))){
var state_43006__$1 = state_43006;
var statearr_43091_45005 = state_43006__$1;
(statearr_43091_45005[(2)] = null);

(statearr_43091_45005[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (45))){
var inst_42996 = (state_43006[(2)]);
var state_43006__$1 = state_43006;
var statearr_43092_45006 = state_43006__$1;
(statearr_43092_45006[(2)] = inst_42996);

(statearr_43092_45006[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (26))){
var inst_42938 = (state_43006[(29)]);
var inst_42992 = (state_43006[(2)]);
var inst_42993 = cljs.core.seq(inst_42938);
var state_43006__$1 = (function (){var statearr_43093 = state_43006;
(statearr_43093[(31)] = inst_42992);

return statearr_43093;
})();
if(inst_42993){
var statearr_43094_45007 = state_43006__$1;
(statearr_43094_45007[(1)] = (42));

} else {
var statearr_43095_45008 = state_43006__$1;
(statearr_43095_45008[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (16))){
var inst_42904 = (state_43006[(7)]);
var inst_42906 = cljs.core.chunked_seq_QMARK_(inst_42904);
var state_43006__$1 = state_43006;
if(inst_42906){
var statearr_43096_45014 = state_43006__$1;
(statearr_43096_45014[(1)] = (19));

} else {
var statearr_43097_45017 = state_43006__$1;
(statearr_43097_45017[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (38))){
var inst_42985 = (state_43006[(2)]);
var state_43006__$1 = state_43006;
var statearr_43107_45023 = state_43006__$1;
(statearr_43107_45023[(2)] = inst_42985);

(statearr_43107_45023[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (30))){
var state_43006__$1 = state_43006;
var statearr_43112_45024 = state_43006__$1;
(statearr_43112_45024[(2)] = null);

(statearr_43112_45024[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (10))){
var inst_42884 = (state_43006[(13)]);
var inst_42882 = (state_43006[(15)]);
var inst_42892 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_42882,inst_42884);
var inst_42893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42892,(0),null);
var inst_42894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42892,(1),null);
var state_43006__$1 = (function (){var statearr_43113 = state_43006;
(statearr_43113[(26)] = inst_42893);

return statearr_43113;
})();
if(cljs.core.truth_(inst_42894)){
var statearr_43114_45025 = state_43006__$1;
(statearr_43114_45025[(1)] = (13));

} else {
var statearr_43115_45026 = state_43006__$1;
(statearr_43115_45026[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (18))){
var inst_42931 = (state_43006[(2)]);
var state_43006__$1 = state_43006;
var statearr_43116_45027 = state_43006__$1;
(statearr_43116_45027[(2)] = inst_42931);

(statearr_43116_45027[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (42))){
var state_43006__$1 = state_43006;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43006__$1,(45),dchan);
} else {
if((state_val_43007 === (37))){
var inst_42965 = (state_43006[(25)]);
var inst_42974 = (state_43006[(23)]);
var inst_42872 = (state_43006[(12)]);
var inst_42974__$1 = cljs.core.first(inst_42965);
var inst_42975 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_42974__$1,inst_42872,done);
var state_43006__$1 = (function (){var statearr_43118 = state_43006;
(statearr_43118[(23)] = inst_42974__$1);

return statearr_43118;
})();
if(cljs.core.truth_(inst_42975)){
var statearr_43119_45032 = state_43006__$1;
(statearr_43119_45032[(1)] = (39));

} else {
var statearr_43120_45033 = state_43006__$1;
(statearr_43120_45033[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43007 === (8))){
var inst_42884 = (state_43006[(13)]);
var inst_42883 = (state_43006[(14)]);
var inst_42886 = (inst_42884 < inst_42883);
var inst_42887 = inst_42886;
var state_43006__$1 = state_43006;
if(cljs.core.truth_(inst_42887)){
var statearr_43122_45034 = state_43006__$1;
(statearr_43122_45034[(1)] = (10));

} else {
var statearr_43123_45035 = state_43006__$1;
(statearr_43123_45035[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42197__auto___44925,cs,m,dchan,dctr,done))
;
return ((function (switch__42084__auto__,c__42197__auto___44925,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__42085__auto__ = null;
var cljs$core$async$mult_$_state_machine__42085__auto____0 = (function (){
var statearr_43124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43124[(0)] = cljs$core$async$mult_$_state_machine__42085__auto__);

(statearr_43124[(1)] = (1));

return statearr_43124;
});
var cljs$core$async$mult_$_state_machine__42085__auto____1 = (function (state_43006){
while(true){
var ret_value__42086__auto__ = (function (){try{while(true){
var result__42087__auto__ = switch__42084__auto__(state_43006);
if(cljs.core.keyword_identical_QMARK_(result__42087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42087__auto__;
}
break;
}
}catch (e43125){if((e43125 instanceof Object)){
var ex__42088__auto__ = e43125;
var statearr_43126_45036 = state_43006;
(statearr_43126_45036[(5)] = ex__42088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43125;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45037 = state_43006;
state_43006 = G__45037;
continue;
} else {
return ret_value__42086__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42085__auto__ = function(state_43006){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42085__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42085__auto____1.call(this,state_43006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42085__auto____0;
cljs$core$async$mult_$_state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42085__auto____1;
return cljs$core$async$mult_$_state_machine__42085__auto__;
})()
;})(switch__42084__auto__,c__42197__auto___44925,cs,m,dchan,dctr,done))
})();
var state__42199__auto__ = (function (){var statearr_43127 = (f__42198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42198__auto__.cljs$core$IFn$_invoke$arity$0() : f__42198__auto__.call(null));
(statearr_43127[(6)] = c__42197__auto___44925);

return statearr_43127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42199__auto__);
});})(c__42197__auto___44925,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__43129 = arguments.length;
switch (G__43129) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___45041 = arguments.length;
var i__4731__auto___45042 = (0);
while(true){
if((i__4731__auto___45042 < len__4730__auto___45041)){
args__4736__auto__.push((arguments[i__4731__auto___45042]));

var G__45043 = (i__4731__auto___45042 + (1));
i__4731__auto___45042 = G__45043;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43151){
var map__43152 = p__43151;
var map__43152__$1 = (((((!((map__43152 == null))))?(((((map__43152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43152):map__43152);
var opts = map__43152__$1;
var statearr_43154_45044 = state;
(statearr_43154_45044[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__43152,map__43152__$1,opts){
return (function (val){
var statearr_43156_45045 = state;
(statearr_43156_45045[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__43152,map__43152__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_43160_45046 = state;
(statearr_43160_45046[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43147){
var G__43148 = cljs.core.first(seq43147);
var seq43147__$1 = cljs.core.next(seq43147);
var G__43149 = cljs.core.first(seq43147__$1);
var seq43147__$2 = cljs.core.next(seq43147__$1);
var G__43150 = cljs.core.first(seq43147__$2);
var seq43147__$3 = cljs.core.next(seq43147__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43148,G__43149,G__43150,seq43147__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43170 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43170 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43171){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43171 = meta43171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43172,meta43171__$1){
var self__ = this;
var _43172__$1 = this;
return (new cljs.core.async.t_cljs$core$async43170(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43171__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43170.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43172){
var self__ = this;
var _43172__$1 = this;
return self__.meta43171;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43170.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43170.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43170.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43170.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43170.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43170.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43170.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43170.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43170.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43171","meta43171",1839882705,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43170.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43170";

cljs.core.async.t_cljs$core$async43170.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async43170");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43170.
 */
cljs.core.async.__GT_t_cljs$core$async43170 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async43170(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43171){
return (new cljs.core.async.t_cljs$core$async43170(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43171));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async43170(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42197__auto___45081 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42197__auto___45081,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__42198__auto__ = (function (){var switch__42084__auto__ = ((function (c__42197__auto___45081,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_43293){
var state_val_43294 = (state_43293[(1)]);
if((state_val_43294 === (7))){
var inst_43199 = (state_43293[(2)]);
var state_43293__$1 = state_43293;
var statearr_43295_45085 = state_43293__$1;
(statearr_43295_45085[(2)] = inst_43199);

(statearr_43295_45085[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (20))){
var inst_43211 = (state_43293[(7)]);
var state_43293__$1 = state_43293;
var statearr_43296_45086 = state_43293__$1;
(statearr_43296_45086[(2)] = inst_43211);

(statearr_43296_45086[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (27))){
var state_43293__$1 = state_43293;
var statearr_43297_45087 = state_43293__$1;
(statearr_43297_45087[(2)] = null);

(statearr_43297_45087[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (1))){
var inst_43186 = (state_43293[(8)]);
var inst_43186__$1 = calc_state();
var inst_43188 = (inst_43186__$1 == null);
var inst_43189 = cljs.core.not(inst_43188);
var state_43293__$1 = (function (){var statearr_43299 = state_43293;
(statearr_43299[(8)] = inst_43186__$1);

return statearr_43299;
})();
if(inst_43189){
var statearr_43300_45088 = state_43293__$1;
(statearr_43300_45088[(1)] = (2));

} else {
var statearr_43301_45089 = state_43293__$1;
(statearr_43301_45089[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (24))){
var inst_43249 = (state_43293[(9)]);
var inst_43239 = (state_43293[(10)]);
var inst_43263 = (state_43293[(11)]);
var inst_43263__$1 = (inst_43239.cljs$core$IFn$_invoke$arity$1 ? inst_43239.cljs$core$IFn$_invoke$arity$1(inst_43249) : inst_43239.call(null,inst_43249));
var state_43293__$1 = (function (){var statearr_43305 = state_43293;
(statearr_43305[(11)] = inst_43263__$1);

return statearr_43305;
})();
if(cljs.core.truth_(inst_43263__$1)){
var statearr_43306_45093 = state_43293__$1;
(statearr_43306_45093[(1)] = (29));

} else {
var statearr_43307_45094 = state_43293__$1;
(statearr_43307_45094[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (4))){
var inst_43202 = (state_43293[(2)]);
var state_43293__$1 = state_43293;
if(cljs.core.truth_(inst_43202)){
var statearr_43308_45095 = state_43293__$1;
(statearr_43308_45095[(1)] = (8));

} else {
var statearr_43309_45096 = state_43293__$1;
(statearr_43309_45096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (15))){
var inst_43233 = (state_43293[(2)]);
var state_43293__$1 = state_43293;
if(cljs.core.truth_(inst_43233)){
var statearr_43311_45100 = state_43293__$1;
(statearr_43311_45100[(1)] = (19));

} else {
var statearr_43312_45101 = state_43293__$1;
(statearr_43312_45101[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (21))){
var inst_43238 = (state_43293[(12)]);
var inst_43238__$1 = (state_43293[(2)]);
var inst_43239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43238__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43238__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43238__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43293__$1 = (function (){var statearr_43313 = state_43293;
(statearr_43313[(12)] = inst_43238__$1);

(statearr_43313[(10)] = inst_43239);

(statearr_43313[(13)] = inst_43241);

return statearr_43313;
})();
return cljs.core.async.ioc_alts_BANG_(state_43293__$1,(22),inst_43242);
} else {
if((state_val_43294 === (31))){
var inst_43271 = (state_43293[(2)]);
var state_43293__$1 = state_43293;
if(cljs.core.truth_(inst_43271)){
var statearr_43314_45105 = state_43293__$1;
(statearr_43314_45105[(1)] = (32));

} else {
var statearr_43315_45106 = state_43293__$1;
(statearr_43315_45106[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (32))){
var inst_43248 = (state_43293[(14)]);
var state_43293__$1 = state_43293;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43293__$1,(35),out,inst_43248);
} else {
if((state_val_43294 === (33))){
var inst_43238 = (state_43293[(12)]);
var inst_43211 = inst_43238;
var state_43293__$1 = (function (){var statearr_43316 = state_43293;
(statearr_43316[(7)] = inst_43211);

return statearr_43316;
})();
var statearr_43317_45107 = state_43293__$1;
(statearr_43317_45107[(2)] = null);

(statearr_43317_45107[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (13))){
var inst_43211 = (state_43293[(7)]);
var inst_43222 = inst_43211.cljs$lang$protocol_mask$partition0$;
var inst_43223 = (inst_43222 & (64));
var inst_43224 = inst_43211.cljs$core$ISeq$;
var inst_43225 = (cljs.core.PROTOCOL_SENTINEL === inst_43224);
var inst_43226 = ((inst_43223) || (inst_43225));
var state_43293__$1 = state_43293;
if(cljs.core.truth_(inst_43226)){
var statearr_43319_45108 = state_43293__$1;
(statearr_43319_45108[(1)] = (16));

} else {
var statearr_43320_45109 = state_43293__$1;
(statearr_43320_45109[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (22))){
var inst_43249 = (state_43293[(9)]);
var inst_43248 = (state_43293[(14)]);
var inst_43247 = (state_43293[(2)]);
var inst_43248__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43247,(0),null);
var inst_43249__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43247,(1),null);
var inst_43250 = (inst_43248__$1 == null);
var inst_43251 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43249__$1,change);
var inst_43252 = ((inst_43250) || (inst_43251));
var state_43293__$1 = (function (){var statearr_43321 = state_43293;
(statearr_43321[(9)] = inst_43249__$1);

(statearr_43321[(14)] = inst_43248__$1);

return statearr_43321;
})();
if(cljs.core.truth_(inst_43252)){
var statearr_43322_45110 = state_43293__$1;
(statearr_43322_45110[(1)] = (23));

} else {
var statearr_43323_45111 = state_43293__$1;
(statearr_43323_45111[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (36))){
var inst_43238 = (state_43293[(12)]);
var inst_43211 = inst_43238;
var state_43293__$1 = (function (){var statearr_43324 = state_43293;
(statearr_43324[(7)] = inst_43211);

return statearr_43324;
})();
var statearr_43325_45112 = state_43293__$1;
(statearr_43325_45112[(2)] = null);

(statearr_43325_45112[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (29))){
var inst_43263 = (state_43293[(11)]);
var state_43293__$1 = state_43293;
var statearr_43326_45113 = state_43293__$1;
(statearr_43326_45113[(2)] = inst_43263);

(statearr_43326_45113[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (6))){
var state_43293__$1 = state_43293;
var statearr_43327_45115 = state_43293__$1;
(statearr_43327_45115[(2)] = false);

(statearr_43327_45115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (28))){
var inst_43259 = (state_43293[(2)]);
var inst_43260 = calc_state();
var inst_43211 = inst_43260;
var state_43293__$1 = (function (){var statearr_43328 = state_43293;
(statearr_43328[(15)] = inst_43259);

(statearr_43328[(7)] = inst_43211);

return statearr_43328;
})();
var statearr_43329_45116 = state_43293__$1;
(statearr_43329_45116[(2)] = null);

(statearr_43329_45116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (25))){
var inst_43289 = (state_43293[(2)]);
var state_43293__$1 = state_43293;
var statearr_43330_45117 = state_43293__$1;
(statearr_43330_45117[(2)] = inst_43289);

(statearr_43330_45117[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (34))){
var inst_43287 = (state_43293[(2)]);
var state_43293__$1 = state_43293;
var statearr_43331_45118 = state_43293__$1;
(statearr_43331_45118[(2)] = inst_43287);

(statearr_43331_45118[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (17))){
var state_43293__$1 = state_43293;
var statearr_43332_45134 = state_43293__$1;
(statearr_43332_45134[(2)] = false);

(statearr_43332_45134[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (3))){
var state_43293__$1 = state_43293;
var statearr_43333_45135 = state_43293__$1;
(statearr_43333_45135[(2)] = false);

(statearr_43333_45135[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (12))){
var inst_43291 = (state_43293[(2)]);
var state_43293__$1 = state_43293;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43293__$1,inst_43291);
} else {
if((state_val_43294 === (2))){
var inst_43186 = (state_43293[(8)]);
var inst_43191 = inst_43186.cljs$lang$protocol_mask$partition0$;
var inst_43192 = (inst_43191 & (64));
var inst_43193 = inst_43186.cljs$core$ISeq$;
var inst_43194 = (cljs.core.PROTOCOL_SENTINEL === inst_43193);
var inst_43195 = ((inst_43192) || (inst_43194));
var state_43293__$1 = state_43293;
if(cljs.core.truth_(inst_43195)){
var statearr_43336_45136 = state_43293__$1;
(statearr_43336_45136[(1)] = (5));

} else {
var statearr_43337_45137 = state_43293__$1;
(statearr_43337_45137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (23))){
var inst_43248 = (state_43293[(14)]);
var inst_43254 = (inst_43248 == null);
var state_43293__$1 = state_43293;
if(cljs.core.truth_(inst_43254)){
var statearr_43338_45138 = state_43293__$1;
(statearr_43338_45138[(1)] = (26));

} else {
var statearr_43339_45139 = state_43293__$1;
(statearr_43339_45139[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (35))){
var inst_43278 = (state_43293[(2)]);
var state_43293__$1 = state_43293;
if(cljs.core.truth_(inst_43278)){
var statearr_43340_45140 = state_43293__$1;
(statearr_43340_45140[(1)] = (36));

} else {
var statearr_43341_45141 = state_43293__$1;
(statearr_43341_45141[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (19))){
var inst_43211 = (state_43293[(7)]);
var inst_43235 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43211);
var state_43293__$1 = state_43293;
var statearr_43342_45142 = state_43293__$1;
(statearr_43342_45142[(2)] = inst_43235);

(statearr_43342_45142[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (11))){
var inst_43211 = (state_43293[(7)]);
var inst_43215 = (inst_43211 == null);
var inst_43216 = cljs.core.not(inst_43215);
var state_43293__$1 = state_43293;
if(inst_43216){
var statearr_43346_45143 = state_43293__$1;
(statearr_43346_45143[(1)] = (13));

} else {
var statearr_43347_45144 = state_43293__$1;
(statearr_43347_45144[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (9))){
var inst_43186 = (state_43293[(8)]);
var state_43293__$1 = state_43293;
var statearr_43352_45145 = state_43293__$1;
(statearr_43352_45145[(2)] = inst_43186);

(statearr_43352_45145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (5))){
var state_43293__$1 = state_43293;
var statearr_43353_45146 = state_43293__$1;
(statearr_43353_45146[(2)] = true);

(statearr_43353_45146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (14))){
var state_43293__$1 = state_43293;
var statearr_43354_45147 = state_43293__$1;
(statearr_43354_45147[(2)] = false);

(statearr_43354_45147[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (26))){
var inst_43249 = (state_43293[(9)]);
var inst_43256 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_43249);
var state_43293__$1 = state_43293;
var statearr_43358_45148 = state_43293__$1;
(statearr_43358_45148[(2)] = inst_43256);

(statearr_43358_45148[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (16))){
var state_43293__$1 = state_43293;
var statearr_43359_45149 = state_43293__$1;
(statearr_43359_45149[(2)] = true);

(statearr_43359_45149[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (38))){
var inst_43283 = (state_43293[(2)]);
var state_43293__$1 = state_43293;
var statearr_43360_45150 = state_43293__$1;
(statearr_43360_45150[(2)] = inst_43283);

(statearr_43360_45150[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (30))){
var inst_43249 = (state_43293[(9)]);
var inst_43239 = (state_43293[(10)]);
var inst_43241 = (state_43293[(13)]);
var inst_43266 = cljs.core.empty_QMARK_(inst_43239);
var inst_43267 = (inst_43241.cljs$core$IFn$_invoke$arity$1 ? inst_43241.cljs$core$IFn$_invoke$arity$1(inst_43249) : inst_43241.call(null,inst_43249));
var inst_43268 = cljs.core.not(inst_43267);
var inst_43269 = ((inst_43266) && (inst_43268));
var state_43293__$1 = state_43293;
var statearr_43364_45151 = state_43293__$1;
(statearr_43364_45151[(2)] = inst_43269);

(statearr_43364_45151[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (10))){
var inst_43186 = (state_43293[(8)]);
var inst_43207 = (state_43293[(2)]);
var inst_43208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43207,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43207,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43207,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43211 = inst_43186;
var state_43293__$1 = (function (){var statearr_43369 = state_43293;
(statearr_43369[(16)] = inst_43209);

(statearr_43369[(7)] = inst_43211);

(statearr_43369[(17)] = inst_43208);

(statearr_43369[(18)] = inst_43210);

return statearr_43369;
})();
var statearr_43370_45158 = state_43293__$1;
(statearr_43370_45158[(2)] = null);

(statearr_43370_45158[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (18))){
var inst_43230 = (state_43293[(2)]);
var state_43293__$1 = state_43293;
var statearr_43371_45159 = state_43293__$1;
(statearr_43371_45159[(2)] = inst_43230);

(statearr_43371_45159[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (37))){
var state_43293__$1 = state_43293;
var statearr_43372_45160 = state_43293__$1;
(statearr_43372_45160[(2)] = null);

(statearr_43372_45160[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (8))){
var inst_43186 = (state_43293[(8)]);
var inst_43204 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43186);
var state_43293__$1 = state_43293;
var statearr_43373_45161 = state_43293__$1;
(statearr_43373_45161[(2)] = inst_43204);

(statearr_43373_45161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42197__auto___45081,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__42084__auto__,c__42197__auto___45081,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__42085__auto__ = null;
var cljs$core$async$mix_$_state_machine__42085__auto____0 = (function (){
var statearr_43377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43377[(0)] = cljs$core$async$mix_$_state_machine__42085__auto__);

(statearr_43377[(1)] = (1));

return statearr_43377;
});
var cljs$core$async$mix_$_state_machine__42085__auto____1 = (function (state_43293){
while(true){
var ret_value__42086__auto__ = (function (){try{while(true){
var result__42087__auto__ = switch__42084__auto__(state_43293);
if(cljs.core.keyword_identical_QMARK_(result__42087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42087__auto__;
}
break;
}
}catch (e43378){if((e43378 instanceof Object)){
var ex__42088__auto__ = e43378;
var statearr_43382_45162 = state_43293;
(statearr_43382_45162[(5)] = ex__42088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43378;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45163 = state_43293;
state_43293 = G__45163;
continue;
} else {
return ret_value__42086__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42085__auto__ = function(state_43293){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42085__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42085__auto____1.call(this,state_43293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42085__auto____0;
cljs$core$async$mix_$_state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42085__auto____1;
return cljs$core$async$mix_$_state_machine__42085__auto__;
})()
;})(switch__42084__auto__,c__42197__auto___45081,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__42199__auto__ = (function (){var statearr_43387 = (f__42198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42198__auto__.cljs$core$IFn$_invoke$arity$0() : f__42198__auto__.call(null));
(statearr_43387[(6)] = c__42197__auto___45081);

return statearr_43387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42199__auto__);
});})(c__42197__auto___45081,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__43402 = arguments.length;
switch (G__43402) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__43436 = arguments.length;
switch (G__43436) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__43428_SHARP_){
if(cljs.core.truth_((p1__43428_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43428_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__43428_SHARP_.call(null,topic)))){
return p1__43428_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43428_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43447 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43447 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43448){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43448 = meta43448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43449,meta43448__$1){
var self__ = this;
var _43449__$1 = this;
return (new cljs.core.async.t_cljs$core$async43447(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43448__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43447.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43449){
var self__ = this;
var _43449__$1 = this;
return self__.meta43448;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43447.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43447.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43447.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43447.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43447.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43447.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43447.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43447.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43448","meta43448",-733699202,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43447.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43447.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43447";

cljs.core.async.t_cljs$core$async43447.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async43447");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43447.
 */
cljs.core.async.__GT_t_cljs$core$async43447 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async43447(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43448){
return (new cljs.core.async.t_cljs$core$async43447(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43448));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async43447(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42197__auto___45187 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42197__auto___45187,mults,ensure_mult,p){
return (function (){
var f__42198__auto__ = (function (){var switch__42084__auto__ = ((function (c__42197__auto___45187,mults,ensure_mult,p){
return (function (state_43560){
var state_val_43562 = (state_43560[(1)]);
if((state_val_43562 === (7))){
var inst_43556 = (state_43560[(2)]);
var state_43560__$1 = state_43560;
var statearr_43563_45188 = state_43560__$1;
(statearr_43563_45188[(2)] = inst_43556);

(statearr_43563_45188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43562 === (20))){
var state_43560__$1 = state_43560;
var statearr_43564_45189 = state_43560__$1;
(statearr_43564_45189[(2)] = null);

(statearr_43564_45189[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43562 === (1))){
var state_43560__$1 = state_43560;
var statearr_43565_45190 = state_43560__$1;
(statearr_43565_45190[(2)] = null);

(statearr_43565_45190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43562 === (24))){
var inst_43536 = (state_43560[(7)]);
var inst_43548 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_43536);
var state_43560__$1 = state_43560;
var statearr_43566_45191 = state_43560__$1;
(statearr_43566_45191[(2)] = inst_43548);

(statearr_43566_45191[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43562 === (4))){
var inst_43483 = (state_43560[(8)]);
var inst_43483__$1 = (state_43560[(2)]);
var inst_43484 = (inst_43483__$1 == null);
var state_43560__$1 = (function (){var statearr_43567 = state_43560;
(statearr_43567[(8)] = inst_43483__$1);

return statearr_43567;
})();
if(cljs.core.truth_(inst_43484)){
var statearr_43568_45194 = state_43560__$1;
(statearr_43568_45194[(1)] = (5));

} else {
var statearr_43569_45195 = state_43560__$1;
(statearr_43569_45195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43562 === (15))){
var inst_43528 = (state_43560[(2)]);
var state_43560__$1 = state_43560;
var statearr_43570_45196 = state_43560__$1;
(statearr_43570_45196[(2)] = inst_43528);

(statearr_43570_45196[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43562 === (21))){
var inst_43553 = (state_43560[(2)]);
var state_43560__$1 = (function (){var statearr_43572 = state_43560;
(statearr_43572[(9)] = inst_43553);

return statearr_43572;
})();
var statearr_43574_45197 = state_43560__$1;
(statearr_43574_45197[(2)] = null);

(statearr_43574_45197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43562 === (13))){
var inst_43507 = (state_43560[(10)]);
var inst_43509 = cljs.core.chunked_seq_QMARK_(inst_43507);
var state_43560__$1 = state_43560;
if(inst_43509){
var statearr_43575_45198 = state_43560__$1;
(statearr_43575_45198[(1)] = (16));

} else {
var statearr_43576_45199 = state_43560__$1;
(statearr_43576_45199[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43562 === (22))){
var inst_43545 = (state_43560[(2)]);
var state_43560__$1 = state_43560;
if(cljs.core.truth_(inst_43545)){
var statearr_43589_45200 = state_43560__$1;
(statearr_43589_45200[(1)] = (23));

} else {
var statearr_43590_45201 = state_43560__$1;
(statearr_43590_45201[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43562 === (6))){
var inst_43536 = (state_43560[(7)]);
var inst_43540 = (state_43560[(11)]);
var inst_43483 = (state_43560[(8)]);
var inst_43536__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_43483) : topic_fn.call(null,inst_43483));
var inst_43537 = cljs.core.deref(mults);
var inst_43540__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43537,inst_43536__$1);
var state_43560__$1 = (function (){var statearr_43596 = state_43560;
(statearr_43596[(7)] = inst_43536__$1);

(statearr_43596[(11)] = inst_43540__$1);

return statearr_43596;
})();
if(cljs.core.truth_(inst_43540__$1)){
var statearr_43601_45202 = state_43560__$1;
(statearr_43601_45202[(1)] = (19));

} else {
var statearr_43602_45203 = state_43560__$1;
(statearr_43602_45203[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43562 === (25))){
var inst_43550 = (state_43560[(2)]);
var state_43560__$1 = state_43560;
var statearr_43603_45213 = state_43560__$1;
(statearr_43603_45213[(2)] = inst_43550);

(statearr_43603_45213[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43562 === (17))){
var inst_43507 = (state_43560[(10)]);
var inst_43517 = cljs.core.first(inst_43507);
var inst_43519 = cljs.core.async.muxch_STAR_(inst_43517);
var inst_43520 = cljs.core.async.close_BANG_(inst_43519);
var inst_43521 = cljs.core.next(inst_43507);
var inst_43493 = inst_43521;
var inst_43494 = null;
var inst_43495 = (0);
var inst_43496 = (0);
var state_43560__$1 = (function (){var statearr_43609 = state_43560;
(statearr_43609[(12)] = inst_43496);

(statearr_43609[(13)] = inst_43520);

(statearr_43609[(14)] = inst_43494);

(statearr_43609[(15)] = inst_43495);

(statearr_43609[(16)] = inst_43493);

return statearr_43609;
})();
var statearr_43610_45215 = state_43560__$1;
(statearr_43610_45215[(2)] = null);

(statearr_43610_45215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43562 === (3))){
var inst_43558 = (state_43560[(2)]);
var state_43560__$1 = state_43560;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43560__$1,inst_43558);
} else {
if((state_val_43562 === (12))){
var inst_43530 = (state_43560[(2)]);
var state_43560__$1 = state_43560;
var statearr_43611_45216 = state_43560__$1;
(statearr_43611_45216[(2)] = inst_43530);

(statearr_43611_45216[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43562 === (2))){
var state_43560__$1 = state_43560;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43560__$1,(4),ch);
} else {
if((state_val_43562 === (23))){
var state_43560__$1 = state_43560;
var statearr_43612_45219 = state_43560__$1;
(statearr_43612_45219[(2)] = null);

(statearr_43612_45219[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43562 === (19))){
var inst_43540 = (state_43560[(11)]);
var inst_43483 = (state_43560[(8)]);
var inst_43543 = cljs.core.async.muxch_STAR_(inst_43540);
var state_43560__$1 = state_43560;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43560__$1,(22),inst_43543,inst_43483);
} else {
if((state_val_43562 === (11))){
var inst_43507 = (state_43560[(10)]);
var inst_43493 = (state_43560[(16)]);
var inst_43507__$1 = cljs.core.seq(inst_43493);
var state_43560__$1 = (function (){var statearr_43613 = state_43560;
(statearr_43613[(10)] = inst_43507__$1);

return statearr_43613;
})();
if(inst_43507__$1){
var statearr_43614_45222 = state_43560__$1;
(statearr_43614_45222[(1)] = (13));

} else {
var statearr_43615_45223 = state_43560__$1;
(statearr_43615_45223[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43562 === (9))){
var inst_43532 = (state_43560[(2)]);
var state_43560__$1 = state_43560;
var statearr_43616_45224 = state_43560__$1;
(statearr_43616_45224[(2)] = inst_43532);

(statearr_43616_45224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43562 === (5))){
var inst_43490 = cljs.core.deref(mults);
var inst_43491 = cljs.core.vals(inst_43490);
var inst_43492 = cljs.core.seq(inst_43491);
var inst_43493 = inst_43492;
var inst_43494 = null;
var inst_43495 = (0);
var inst_43496 = (0);
var state_43560__$1 = (function (){var statearr_43617 = state_43560;
(statearr_43617[(12)] = inst_43496);

(statearr_43617[(14)] = inst_43494);

(statearr_43617[(15)] = inst_43495);

(statearr_43617[(16)] = inst_43493);

return statearr_43617;
})();
var statearr_43619_45227 = state_43560__$1;
(statearr_43619_45227[(2)] = null);

(statearr_43619_45227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43562 === (14))){
var state_43560__$1 = state_43560;
var statearr_43623_45228 = state_43560__$1;
(statearr_43623_45228[(2)] = null);

(statearr_43623_45228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43562 === (16))){
var inst_43507 = (state_43560[(10)]);
var inst_43512 = cljs.core.chunk_first(inst_43507);
var inst_43513 = cljs.core.chunk_rest(inst_43507);
var inst_43514 = cljs.core.count(inst_43512);
var inst_43493 = inst_43513;
var inst_43494 = inst_43512;
var inst_43495 = inst_43514;
var inst_43496 = (0);
var state_43560__$1 = (function (){var statearr_43624 = state_43560;
(statearr_43624[(12)] = inst_43496);

(statearr_43624[(14)] = inst_43494);

(statearr_43624[(15)] = inst_43495);

(statearr_43624[(16)] = inst_43493);

return statearr_43624;
})();
var statearr_43625_45229 = state_43560__$1;
(statearr_43625_45229[(2)] = null);

(statearr_43625_45229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43562 === (10))){
var inst_43496 = (state_43560[(12)]);
var inst_43494 = (state_43560[(14)]);
var inst_43495 = (state_43560[(15)]);
var inst_43493 = (state_43560[(16)]);
var inst_43501 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43494,inst_43496);
var inst_43502 = cljs.core.async.muxch_STAR_(inst_43501);
var inst_43503 = cljs.core.async.close_BANG_(inst_43502);
var inst_43504 = (inst_43496 + (1));
var tmp43620 = inst_43494;
var tmp43621 = inst_43495;
var tmp43622 = inst_43493;
var inst_43493__$1 = tmp43622;
var inst_43494__$1 = tmp43620;
var inst_43495__$1 = tmp43621;
var inst_43496__$1 = inst_43504;
var state_43560__$1 = (function (){var statearr_43626 = state_43560;
(statearr_43626[(12)] = inst_43496__$1);

(statearr_43626[(14)] = inst_43494__$1);

(statearr_43626[(15)] = inst_43495__$1);

(statearr_43626[(17)] = inst_43503);

(statearr_43626[(16)] = inst_43493__$1);

return statearr_43626;
})();
var statearr_43627_45230 = state_43560__$1;
(statearr_43627_45230[(2)] = null);

(statearr_43627_45230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43562 === (18))){
var inst_43524 = (state_43560[(2)]);
var state_43560__$1 = state_43560;
var statearr_43628_45231 = state_43560__$1;
(statearr_43628_45231[(2)] = inst_43524);

(statearr_43628_45231[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43562 === (8))){
var inst_43496 = (state_43560[(12)]);
var inst_43495 = (state_43560[(15)]);
var inst_43498 = (inst_43496 < inst_43495);
var inst_43499 = inst_43498;
var state_43560__$1 = state_43560;
if(cljs.core.truth_(inst_43499)){
var statearr_43629_45233 = state_43560__$1;
(statearr_43629_45233[(1)] = (10));

} else {
var statearr_43630_45234 = state_43560__$1;
(statearr_43630_45234[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42197__auto___45187,mults,ensure_mult,p))
;
return ((function (switch__42084__auto__,c__42197__auto___45187,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__42085__auto__ = null;
var cljs$core$async$state_machine__42085__auto____0 = (function (){
var statearr_43631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43631[(0)] = cljs$core$async$state_machine__42085__auto__);

(statearr_43631[(1)] = (1));

return statearr_43631;
});
var cljs$core$async$state_machine__42085__auto____1 = (function (state_43560){
while(true){
var ret_value__42086__auto__ = (function (){try{while(true){
var result__42087__auto__ = switch__42084__auto__(state_43560);
if(cljs.core.keyword_identical_QMARK_(result__42087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42087__auto__;
}
break;
}
}catch (e43632){if((e43632 instanceof Object)){
var ex__42088__auto__ = e43632;
var statearr_43633_45241 = state_43560;
(statearr_43633_45241[(5)] = ex__42088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43632;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45244 = state_43560;
state_43560 = G__45244;
continue;
} else {
return ret_value__42086__auto__;
}
break;
}
});
cljs$core$async$state_machine__42085__auto__ = function(state_43560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42085__auto____1.call(this,state_43560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42085__auto____0;
cljs$core$async$state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42085__auto____1;
return cljs$core$async$state_machine__42085__auto__;
})()
;})(switch__42084__auto__,c__42197__auto___45187,mults,ensure_mult,p))
})();
var state__42199__auto__ = (function (){var statearr_43634 = (f__42198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42198__auto__.cljs$core$IFn$_invoke$arity$0() : f__42198__auto__.call(null));
(statearr_43634[(6)] = c__42197__auto___45187);

return statearr_43634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42199__auto__);
});})(c__42197__auto___45187,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__43636 = arguments.length;
switch (G__43636) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__43638 = arguments.length;
switch (G__43638) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__43640 = arguments.length;
switch (G__43640) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__42197__auto___45269 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42197__auto___45269,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__42198__auto__ = (function (){var switch__42084__auto__ = ((function (c__42197__auto___45269,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_43679){
var state_val_43680 = (state_43679[(1)]);
if((state_val_43680 === (7))){
var state_43679__$1 = state_43679;
var statearr_43682_45271 = state_43679__$1;
(statearr_43682_45271[(2)] = null);

(statearr_43682_45271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43680 === (1))){
var state_43679__$1 = state_43679;
var statearr_43683_45272 = state_43679__$1;
(statearr_43683_45272[(2)] = null);

(statearr_43683_45272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43680 === (4))){
var inst_43643 = (state_43679[(7)]);
var inst_43645 = (inst_43643 < cnt);
var state_43679__$1 = state_43679;
if(cljs.core.truth_(inst_43645)){
var statearr_43684_45277 = state_43679__$1;
(statearr_43684_45277[(1)] = (6));

} else {
var statearr_43685_45278 = state_43679__$1;
(statearr_43685_45278[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43680 === (15))){
var inst_43675 = (state_43679[(2)]);
var state_43679__$1 = state_43679;
var statearr_43688_45281 = state_43679__$1;
(statearr_43688_45281[(2)] = inst_43675);

(statearr_43688_45281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43680 === (13))){
var inst_43668 = cljs.core.async.close_BANG_(out);
var state_43679__$1 = state_43679;
var statearr_43689_45283 = state_43679__$1;
(statearr_43689_45283[(2)] = inst_43668);

(statearr_43689_45283[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43680 === (6))){
var state_43679__$1 = state_43679;
var statearr_43690_45310 = state_43679__$1;
(statearr_43690_45310[(2)] = null);

(statearr_43690_45310[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43680 === (3))){
var inst_43677 = (state_43679[(2)]);
var state_43679__$1 = state_43679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43679__$1,inst_43677);
} else {
if((state_val_43680 === (12))){
var inst_43665 = (state_43679[(8)]);
var inst_43665__$1 = (state_43679[(2)]);
var inst_43666 = cljs.core.some(cljs.core.nil_QMARK_,inst_43665__$1);
var state_43679__$1 = (function (){var statearr_43696 = state_43679;
(statearr_43696[(8)] = inst_43665__$1);

return statearr_43696;
})();
if(cljs.core.truth_(inst_43666)){
var statearr_43697_45319 = state_43679__$1;
(statearr_43697_45319[(1)] = (13));

} else {
var statearr_43698_45324 = state_43679__$1;
(statearr_43698_45324[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43680 === (2))){
var inst_43642 = cljs.core.reset_BANG_(dctr,cnt);
var inst_43643 = (0);
var state_43679__$1 = (function (){var statearr_43699 = state_43679;
(statearr_43699[(9)] = inst_43642);

(statearr_43699[(7)] = inst_43643);

return statearr_43699;
})();
var statearr_43700_45325 = state_43679__$1;
(statearr_43700_45325[(2)] = null);

(statearr_43700_45325[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43680 === (11))){
var inst_43643 = (state_43679[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_43679,(10),Object,null,(9));
var inst_43652 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_43643) : chs__$1.call(null,inst_43643));
var inst_43653 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_43643) : done.call(null,inst_43643));
var inst_43654 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_43652,inst_43653);
var state_43679__$1 = state_43679;
var statearr_43701_45326 = state_43679__$1;
(statearr_43701_45326[(2)] = inst_43654);


cljs.core.async.impl.ioc_helpers.process_exception(state_43679__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43680 === (9))){
var inst_43643 = (state_43679[(7)]);
var inst_43656 = (state_43679[(2)]);
var inst_43657 = (inst_43643 + (1));
var inst_43643__$1 = inst_43657;
var state_43679__$1 = (function (){var statearr_43702 = state_43679;
(statearr_43702[(10)] = inst_43656);

(statearr_43702[(7)] = inst_43643__$1);

return statearr_43702;
})();
var statearr_43703_45327 = state_43679__$1;
(statearr_43703_45327[(2)] = null);

(statearr_43703_45327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43680 === (5))){
var inst_43663 = (state_43679[(2)]);
var state_43679__$1 = (function (){var statearr_43704 = state_43679;
(statearr_43704[(11)] = inst_43663);

return statearr_43704;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43679__$1,(12),dchan);
} else {
if((state_val_43680 === (14))){
var inst_43665 = (state_43679[(8)]);
var inst_43670 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_43665);
var state_43679__$1 = state_43679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43679__$1,(16),out,inst_43670);
} else {
if((state_val_43680 === (16))){
var inst_43672 = (state_43679[(2)]);
var state_43679__$1 = (function (){var statearr_43710 = state_43679;
(statearr_43710[(12)] = inst_43672);

return statearr_43710;
})();
var statearr_43712_45358 = state_43679__$1;
(statearr_43712_45358[(2)] = null);

(statearr_43712_45358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43680 === (10))){
var inst_43647 = (state_43679[(2)]);
var inst_43648 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_43679__$1 = (function (){var statearr_43713 = state_43679;
(statearr_43713[(13)] = inst_43647);

return statearr_43713;
})();
var statearr_43714_45359 = state_43679__$1;
(statearr_43714_45359[(2)] = inst_43648);


cljs.core.async.impl.ioc_helpers.process_exception(state_43679__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43680 === (8))){
var inst_43661 = (state_43679[(2)]);
var state_43679__$1 = state_43679;
var statearr_43715_45360 = state_43679__$1;
(statearr_43715_45360[(2)] = inst_43661);

(statearr_43715_45360[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42197__auto___45269,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__42084__auto__,c__42197__auto___45269,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__42085__auto__ = null;
var cljs$core$async$state_machine__42085__auto____0 = (function (){
var statearr_43716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43716[(0)] = cljs$core$async$state_machine__42085__auto__);

(statearr_43716[(1)] = (1));

return statearr_43716;
});
var cljs$core$async$state_machine__42085__auto____1 = (function (state_43679){
while(true){
var ret_value__42086__auto__ = (function (){try{while(true){
var result__42087__auto__ = switch__42084__auto__(state_43679);
if(cljs.core.keyword_identical_QMARK_(result__42087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42087__auto__;
}
break;
}
}catch (e43717){if((e43717 instanceof Object)){
var ex__42088__auto__ = e43717;
var statearr_43718_45361 = state_43679;
(statearr_43718_45361[(5)] = ex__42088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43717;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45362 = state_43679;
state_43679 = G__45362;
continue;
} else {
return ret_value__42086__auto__;
}
break;
}
});
cljs$core$async$state_machine__42085__auto__ = function(state_43679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42085__auto____1.call(this,state_43679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42085__auto____0;
cljs$core$async$state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42085__auto____1;
return cljs$core$async$state_machine__42085__auto__;
})()
;})(switch__42084__auto__,c__42197__auto___45269,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__42199__auto__ = (function (){var statearr_43719 = (f__42198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42198__auto__.cljs$core$IFn$_invoke$arity$0() : f__42198__auto__.call(null));
(statearr_43719[(6)] = c__42197__auto___45269);

return statearr_43719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42199__auto__);
});})(c__42197__auto___45269,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__43722 = arguments.length;
switch (G__43722) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42197__auto___45400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42197__auto___45400,out){
return (function (){
var f__42198__auto__ = (function (){var switch__42084__auto__ = ((function (c__42197__auto___45400,out){
return (function (state_43759){
var state_val_43760 = (state_43759[(1)]);
if((state_val_43760 === (7))){
var inst_43738 = (state_43759[(7)]);
var inst_43739 = (state_43759[(8)]);
var inst_43738__$1 = (state_43759[(2)]);
var inst_43739__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43738__$1,(0),null);
var inst_43740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43738__$1,(1),null);
var inst_43741 = (inst_43739__$1 == null);
var state_43759__$1 = (function (){var statearr_43762 = state_43759;
(statearr_43762[(9)] = inst_43740);

(statearr_43762[(7)] = inst_43738__$1);

(statearr_43762[(8)] = inst_43739__$1);

return statearr_43762;
})();
if(cljs.core.truth_(inst_43741)){
var statearr_43763_45404 = state_43759__$1;
(statearr_43763_45404[(1)] = (8));

} else {
var statearr_43764_45405 = state_43759__$1;
(statearr_43764_45405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43760 === (1))){
var inst_43723 = cljs.core.vec(chs);
var inst_43724 = inst_43723;
var state_43759__$1 = (function (){var statearr_43765 = state_43759;
(statearr_43765[(10)] = inst_43724);

return statearr_43765;
})();
var statearr_43766_45406 = state_43759__$1;
(statearr_43766_45406[(2)] = null);

(statearr_43766_45406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43760 === (4))){
var inst_43724 = (state_43759[(10)]);
var state_43759__$1 = state_43759;
return cljs.core.async.ioc_alts_BANG_(state_43759__$1,(7),inst_43724);
} else {
if((state_val_43760 === (6))){
var inst_43755 = (state_43759[(2)]);
var state_43759__$1 = state_43759;
var statearr_43767_45407 = state_43759__$1;
(statearr_43767_45407[(2)] = inst_43755);

(statearr_43767_45407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43760 === (3))){
var inst_43757 = (state_43759[(2)]);
var state_43759__$1 = state_43759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43759__$1,inst_43757);
} else {
if((state_val_43760 === (2))){
var inst_43724 = (state_43759[(10)]);
var inst_43730 = cljs.core.count(inst_43724);
var inst_43731 = (inst_43730 > (0));
var state_43759__$1 = state_43759;
if(cljs.core.truth_(inst_43731)){
var statearr_43770_45408 = state_43759__$1;
(statearr_43770_45408[(1)] = (4));

} else {
var statearr_43771_45409 = state_43759__$1;
(statearr_43771_45409[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43760 === (11))){
var inst_43724 = (state_43759[(10)]);
var inst_43748 = (state_43759[(2)]);
var tmp43769 = inst_43724;
var inst_43724__$1 = tmp43769;
var state_43759__$1 = (function (){var statearr_43772 = state_43759;
(statearr_43772[(10)] = inst_43724__$1);

(statearr_43772[(11)] = inst_43748);

return statearr_43772;
})();
var statearr_43773_45412 = state_43759__$1;
(statearr_43773_45412[(2)] = null);

(statearr_43773_45412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43760 === (9))){
var inst_43739 = (state_43759[(8)]);
var state_43759__$1 = state_43759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43759__$1,(11),out,inst_43739);
} else {
if((state_val_43760 === (5))){
var inst_43753 = cljs.core.async.close_BANG_(out);
var state_43759__$1 = state_43759;
var statearr_43774_45417 = state_43759__$1;
(statearr_43774_45417[(2)] = inst_43753);

(statearr_43774_45417[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43760 === (10))){
var inst_43751 = (state_43759[(2)]);
var state_43759__$1 = state_43759;
var statearr_43775_45422 = state_43759__$1;
(statearr_43775_45422[(2)] = inst_43751);

(statearr_43775_45422[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43760 === (8))){
var inst_43740 = (state_43759[(9)]);
var inst_43738 = (state_43759[(7)]);
var inst_43724 = (state_43759[(10)]);
var inst_43739 = (state_43759[(8)]);
var inst_43743 = (function (){var cs = inst_43724;
var vec__43733 = inst_43738;
var v = inst_43739;
var c = inst_43740;
return ((function (cs,vec__43733,v,c,inst_43740,inst_43738,inst_43724,inst_43739,state_val_43760,c__42197__auto___45400,out){
return (function (p1__43720_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__43720_SHARP_);
});
;})(cs,vec__43733,v,c,inst_43740,inst_43738,inst_43724,inst_43739,state_val_43760,c__42197__auto___45400,out))
})();
var inst_43744 = cljs.core.filterv(inst_43743,inst_43724);
var inst_43724__$1 = inst_43744;
var state_43759__$1 = (function (){var statearr_43777 = state_43759;
(statearr_43777[(10)] = inst_43724__$1);

return statearr_43777;
})();
var statearr_43781_45431 = state_43759__$1;
(statearr_43781_45431[(2)] = null);

(statearr_43781_45431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__42197__auto___45400,out))
;
return ((function (switch__42084__auto__,c__42197__auto___45400,out){
return (function() {
var cljs$core$async$state_machine__42085__auto__ = null;
var cljs$core$async$state_machine__42085__auto____0 = (function (){
var statearr_43782 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43782[(0)] = cljs$core$async$state_machine__42085__auto__);

(statearr_43782[(1)] = (1));

return statearr_43782;
});
var cljs$core$async$state_machine__42085__auto____1 = (function (state_43759){
while(true){
var ret_value__42086__auto__ = (function (){try{while(true){
var result__42087__auto__ = switch__42084__auto__(state_43759);
if(cljs.core.keyword_identical_QMARK_(result__42087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42087__auto__;
}
break;
}
}catch (e43784){if((e43784 instanceof Object)){
var ex__42088__auto__ = e43784;
var statearr_43785_45433 = state_43759;
(statearr_43785_45433[(5)] = ex__42088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43784;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45434 = state_43759;
state_43759 = G__45434;
continue;
} else {
return ret_value__42086__auto__;
}
break;
}
});
cljs$core$async$state_machine__42085__auto__ = function(state_43759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42085__auto____1.call(this,state_43759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42085__auto____0;
cljs$core$async$state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42085__auto____1;
return cljs$core$async$state_machine__42085__auto__;
})()
;})(switch__42084__auto__,c__42197__auto___45400,out))
})();
var state__42199__auto__ = (function (){var statearr_43786 = (f__42198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42198__auto__.cljs$core$IFn$_invoke$arity$0() : f__42198__auto__.call(null));
(statearr_43786[(6)] = c__42197__auto___45400);

return statearr_43786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42199__auto__);
});})(c__42197__auto___45400,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__43788 = arguments.length;
switch (G__43788) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42197__auto___45460 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42197__auto___45460,out){
return (function (){
var f__42198__auto__ = (function (){var switch__42084__auto__ = ((function (c__42197__auto___45460,out){
return (function (state_43831){
var state_val_43832 = (state_43831[(1)]);
if((state_val_43832 === (7))){
var inst_43812 = (state_43831[(7)]);
var inst_43812__$1 = (state_43831[(2)]);
var inst_43813 = (inst_43812__$1 == null);
var inst_43814 = cljs.core.not(inst_43813);
var state_43831__$1 = (function (){var statearr_43834 = state_43831;
(statearr_43834[(7)] = inst_43812__$1);

return statearr_43834;
})();
if(inst_43814){
var statearr_43835_45463 = state_43831__$1;
(statearr_43835_45463[(1)] = (8));

} else {
var statearr_43836_45464 = state_43831__$1;
(statearr_43836_45464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (1))){
var inst_43807 = (0);
var state_43831__$1 = (function (){var statearr_43838 = state_43831;
(statearr_43838[(8)] = inst_43807);

return statearr_43838;
})();
var statearr_43839_45466 = state_43831__$1;
(statearr_43839_45466[(2)] = null);

(statearr_43839_45466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (4))){
var state_43831__$1 = state_43831;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43831__$1,(7),ch);
} else {
if((state_val_43832 === (6))){
var inst_43826 = (state_43831[(2)]);
var state_43831__$1 = state_43831;
var statearr_43842_45474 = state_43831__$1;
(statearr_43842_45474[(2)] = inst_43826);

(statearr_43842_45474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (3))){
var inst_43828 = (state_43831[(2)]);
var inst_43829 = cljs.core.async.close_BANG_(out);
var state_43831__$1 = (function (){var statearr_43845 = state_43831;
(statearr_43845[(9)] = inst_43828);

return statearr_43845;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43831__$1,inst_43829);
} else {
if((state_val_43832 === (2))){
var inst_43807 = (state_43831[(8)]);
var inst_43809 = (inst_43807 < n);
var state_43831__$1 = state_43831;
if(cljs.core.truth_(inst_43809)){
var statearr_43846_45484 = state_43831__$1;
(statearr_43846_45484[(1)] = (4));

} else {
var statearr_43847_45489 = state_43831__$1;
(statearr_43847_45489[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (11))){
var inst_43807 = (state_43831[(8)]);
var inst_43817 = (state_43831[(2)]);
var inst_43819 = (inst_43807 + (1));
var inst_43807__$1 = inst_43819;
var state_43831__$1 = (function (){var statearr_43848 = state_43831;
(statearr_43848[(8)] = inst_43807__$1);

(statearr_43848[(10)] = inst_43817);

return statearr_43848;
})();
var statearr_43849_45497 = state_43831__$1;
(statearr_43849_45497[(2)] = null);

(statearr_43849_45497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (9))){
var state_43831__$1 = state_43831;
var statearr_43851_45499 = state_43831__$1;
(statearr_43851_45499[(2)] = null);

(statearr_43851_45499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (5))){
var state_43831__$1 = state_43831;
var statearr_43855_45508 = state_43831__$1;
(statearr_43855_45508[(2)] = null);

(statearr_43855_45508[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (10))){
var inst_43823 = (state_43831[(2)]);
var state_43831__$1 = state_43831;
var statearr_43856_45571 = state_43831__$1;
(statearr_43856_45571[(2)] = inst_43823);

(statearr_43856_45571[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (8))){
var inst_43812 = (state_43831[(7)]);
var state_43831__$1 = state_43831;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43831__$1,(11),out,inst_43812);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__42197__auto___45460,out))
;
return ((function (switch__42084__auto__,c__42197__auto___45460,out){
return (function() {
var cljs$core$async$state_machine__42085__auto__ = null;
var cljs$core$async$state_machine__42085__auto____0 = (function (){
var statearr_43859 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43859[(0)] = cljs$core$async$state_machine__42085__auto__);

(statearr_43859[(1)] = (1));

return statearr_43859;
});
var cljs$core$async$state_machine__42085__auto____1 = (function (state_43831){
while(true){
var ret_value__42086__auto__ = (function (){try{while(true){
var result__42087__auto__ = switch__42084__auto__(state_43831);
if(cljs.core.keyword_identical_QMARK_(result__42087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42087__auto__;
}
break;
}
}catch (e43860){if((e43860 instanceof Object)){
var ex__42088__auto__ = e43860;
var statearr_43861_45573 = state_43831;
(statearr_43861_45573[(5)] = ex__42088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43860;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45575 = state_43831;
state_43831 = G__45575;
continue;
} else {
return ret_value__42086__auto__;
}
break;
}
});
cljs$core$async$state_machine__42085__auto__ = function(state_43831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42085__auto____1.call(this,state_43831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42085__auto____0;
cljs$core$async$state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42085__auto____1;
return cljs$core$async$state_machine__42085__auto__;
})()
;})(switch__42084__auto__,c__42197__auto___45460,out))
})();
var state__42199__auto__ = (function (){var statearr_43863 = (f__42198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42198__auto__.cljs$core$IFn$_invoke$arity$0() : f__42198__auto__.call(null));
(statearr_43863[(6)] = c__42197__auto___45460);

return statearr_43863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42199__auto__);
});})(c__42197__auto___45460,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43868 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43868 = (function (f,ch,meta43869){
this.f = f;
this.ch = ch;
this.meta43869 = meta43869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43870,meta43869__$1){
var self__ = this;
var _43870__$1 = this;
return (new cljs.core.async.t_cljs$core$async43868(self__.f,self__.ch,meta43869__$1));
});

cljs.core.async.t_cljs$core$async43868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43870){
var self__ = this;
var _43870__$1 = this;
return self__.meta43869;
});

cljs.core.async.t_cljs$core$async43868.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43868.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async43868.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async43868.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43868.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43871 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43871 = (function (f,ch,meta43869,_,fn1,meta43872){
this.f = f;
this.ch = ch;
this.meta43869 = meta43869;
this._ = _;
this.fn1 = fn1;
this.meta43872 = meta43872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_43873,meta43872__$1){
var self__ = this;
var _43873__$1 = this;
return (new cljs.core.async.t_cljs$core$async43871(self__.f,self__.ch,self__.meta43869,self__._,self__.fn1,meta43872__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async43871.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_43873){
var self__ = this;
var _43873__$1 = this;
return self__.meta43872;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43871.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43871.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43871.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43871.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__43867_SHARP_){
var G__43875 = (((p1__43867_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__43867_SHARP_) : self__.f.call(null,p1__43867_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__43875) : f1.call(null,G__43875));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async43871.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43869","meta43869",-2096214915,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43868","cljs.core.async/t_cljs$core$async43868",-606651083,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43872","meta43872",-265212869,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43871.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43871";

cljs.core.async.t_cljs$core$async43871.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async43871");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43871.
 */
cljs.core.async.__GT_t_cljs$core$async43871 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43871(f__$1,ch__$1,meta43869__$1,___$2,fn1__$1,meta43872){
return (new cljs.core.async.t_cljs$core$async43871(f__$1,ch__$1,meta43869__$1,___$2,fn1__$1,meta43872));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async43871(self__.f,self__.ch,self__.meta43869,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__43876 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__43876) : self__.f.call(null,G__43876));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async43868.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43868.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async43868.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43869","meta43869",-2096214915,null)], null);
});

cljs.core.async.t_cljs$core$async43868.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43868";

cljs.core.async.t_cljs$core$async43868.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async43868");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43868.
 */
cljs.core.async.__GT_t_cljs$core$async43868 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43868(f__$1,ch__$1,meta43869){
return (new cljs.core.async.t_cljs$core$async43868(f__$1,ch__$1,meta43869));
});

}

return (new cljs.core.async.t_cljs$core$async43868(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43878 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43878 = (function (f,ch,meta43879){
this.f = f;
this.ch = ch;
this.meta43879 = meta43879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43880,meta43879__$1){
var self__ = this;
var _43880__$1 = this;
return (new cljs.core.async.t_cljs$core$async43878(self__.f,self__.ch,meta43879__$1));
});

cljs.core.async.t_cljs$core$async43878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43880){
var self__ = this;
var _43880__$1 = this;
return self__.meta43879;
});

cljs.core.async.t_cljs$core$async43878.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43878.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async43878.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43878.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43878.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43878.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async43878.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43879","meta43879",-1557325036,null)], null);
});

cljs.core.async.t_cljs$core$async43878.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43878.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43878";

cljs.core.async.t_cljs$core$async43878.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async43878");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43878.
 */
cljs.core.async.__GT_t_cljs$core$async43878 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43878(f__$1,ch__$1,meta43879){
return (new cljs.core.async.t_cljs$core$async43878(f__$1,ch__$1,meta43879));
});

}

return (new cljs.core.async.t_cljs$core$async43878(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43881 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43881 = (function (p,ch,meta43882){
this.p = p;
this.ch = ch;
this.meta43882 = meta43882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43883,meta43882__$1){
var self__ = this;
var _43883__$1 = this;
return (new cljs.core.async.t_cljs$core$async43881(self__.p,self__.ch,meta43882__$1));
});

cljs.core.async.t_cljs$core$async43881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43883){
var self__ = this;
var _43883__$1 = this;
return self__.meta43882;
});

cljs.core.async.t_cljs$core$async43881.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43881.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async43881.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async43881.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43881.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43881.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43881.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async43881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43882","meta43882",-551390597,null)], null);
});

cljs.core.async.t_cljs$core$async43881.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43881";

cljs.core.async.t_cljs$core$async43881.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async43881");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43881.
 */
cljs.core.async.__GT_t_cljs$core$async43881 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43881(p__$1,ch__$1,meta43882){
return (new cljs.core.async.t_cljs$core$async43881(p__$1,ch__$1,meta43882));
});

}

return (new cljs.core.async.t_cljs$core$async43881(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__43886 = arguments.length;
switch (G__43886) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42197__auto___45686 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42197__auto___45686,out){
return (function (){
var f__42198__auto__ = (function (){var switch__42084__auto__ = ((function (c__42197__auto___45686,out){
return (function (state_43907){
var state_val_43908 = (state_43907[(1)]);
if((state_val_43908 === (7))){
var inst_43903 = (state_43907[(2)]);
var state_43907__$1 = state_43907;
var statearr_43909_45687 = state_43907__$1;
(statearr_43909_45687[(2)] = inst_43903);

(statearr_43909_45687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43908 === (1))){
var state_43907__$1 = state_43907;
var statearr_43910_45688 = state_43907__$1;
(statearr_43910_45688[(2)] = null);

(statearr_43910_45688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43908 === (4))){
var inst_43889 = (state_43907[(7)]);
var inst_43889__$1 = (state_43907[(2)]);
var inst_43890 = (inst_43889__$1 == null);
var state_43907__$1 = (function (){var statearr_43911 = state_43907;
(statearr_43911[(7)] = inst_43889__$1);

return statearr_43911;
})();
if(cljs.core.truth_(inst_43890)){
var statearr_43912_45702 = state_43907__$1;
(statearr_43912_45702[(1)] = (5));

} else {
var statearr_43913_45703 = state_43907__$1;
(statearr_43913_45703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43908 === (6))){
var inst_43889 = (state_43907[(7)]);
var inst_43894 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43889) : p.call(null,inst_43889));
var state_43907__$1 = state_43907;
if(cljs.core.truth_(inst_43894)){
var statearr_43914_45704 = state_43907__$1;
(statearr_43914_45704[(1)] = (8));

} else {
var statearr_43915_45706 = state_43907__$1;
(statearr_43915_45706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43908 === (3))){
var inst_43905 = (state_43907[(2)]);
var state_43907__$1 = state_43907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43907__$1,inst_43905);
} else {
if((state_val_43908 === (2))){
var state_43907__$1 = state_43907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43907__$1,(4),ch);
} else {
if((state_val_43908 === (11))){
var inst_43897 = (state_43907[(2)]);
var state_43907__$1 = state_43907;
var statearr_43916_45707 = state_43907__$1;
(statearr_43916_45707[(2)] = inst_43897);

(statearr_43916_45707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43908 === (9))){
var state_43907__$1 = state_43907;
var statearr_43917_45708 = state_43907__$1;
(statearr_43917_45708[(2)] = null);

(statearr_43917_45708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43908 === (5))){
var inst_43892 = cljs.core.async.close_BANG_(out);
var state_43907__$1 = state_43907;
var statearr_43918_45709 = state_43907__$1;
(statearr_43918_45709[(2)] = inst_43892);

(statearr_43918_45709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43908 === (10))){
var inst_43900 = (state_43907[(2)]);
var state_43907__$1 = (function (){var statearr_43919 = state_43907;
(statearr_43919[(8)] = inst_43900);

return statearr_43919;
})();
var statearr_43920_45710 = state_43907__$1;
(statearr_43920_45710[(2)] = null);

(statearr_43920_45710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43908 === (8))){
var inst_43889 = (state_43907[(7)]);
var state_43907__$1 = state_43907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43907__$1,(11),out,inst_43889);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__42197__auto___45686,out))
;
return ((function (switch__42084__auto__,c__42197__auto___45686,out){
return (function() {
var cljs$core$async$state_machine__42085__auto__ = null;
var cljs$core$async$state_machine__42085__auto____0 = (function (){
var statearr_43921 = [null,null,null,null,null,null,null,null,null];
(statearr_43921[(0)] = cljs$core$async$state_machine__42085__auto__);

(statearr_43921[(1)] = (1));

return statearr_43921;
});
var cljs$core$async$state_machine__42085__auto____1 = (function (state_43907){
while(true){
var ret_value__42086__auto__ = (function (){try{while(true){
var result__42087__auto__ = switch__42084__auto__(state_43907);
if(cljs.core.keyword_identical_QMARK_(result__42087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42087__auto__;
}
break;
}
}catch (e43922){if((e43922 instanceof Object)){
var ex__42088__auto__ = e43922;
var statearr_43923_45735 = state_43907;
(statearr_43923_45735[(5)] = ex__42088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43922;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45740 = state_43907;
state_43907 = G__45740;
continue;
} else {
return ret_value__42086__auto__;
}
break;
}
});
cljs$core$async$state_machine__42085__auto__ = function(state_43907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42085__auto____1.call(this,state_43907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42085__auto____0;
cljs$core$async$state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42085__auto____1;
return cljs$core$async$state_machine__42085__auto__;
})()
;})(switch__42084__auto__,c__42197__auto___45686,out))
})();
var state__42199__auto__ = (function (){var statearr_43928 = (f__42198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42198__auto__.cljs$core$IFn$_invoke$arity$0() : f__42198__auto__.call(null));
(statearr_43928[(6)] = c__42197__auto___45686);

return statearr_43928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42199__auto__);
});})(c__42197__auto___45686,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43930 = arguments.length;
switch (G__43930) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__42197__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42197__auto__){
return (function (){
var f__42198__auto__ = (function (){var switch__42084__auto__ = ((function (c__42197__auto__){
return (function (state_44003){
var state_val_44004 = (state_44003[(1)]);
if((state_val_44004 === (7))){
var inst_43999 = (state_44003[(2)]);
var state_44003__$1 = state_44003;
var statearr_44005_45752 = state_44003__$1;
(statearr_44005_45752[(2)] = inst_43999);

(statearr_44005_45752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44004 === (20))){
var inst_43969 = (state_44003[(7)]);
var inst_43980 = (state_44003[(2)]);
var inst_43981 = cljs.core.next(inst_43969);
var inst_43952 = inst_43981;
var inst_43953 = null;
var inst_43954 = (0);
var inst_43955 = (0);
var state_44003__$1 = (function (){var statearr_44009 = state_44003;
(statearr_44009[(8)] = inst_43954);

(statearr_44009[(9)] = inst_43955);

(statearr_44009[(10)] = inst_43952);

(statearr_44009[(11)] = inst_43980);

(statearr_44009[(12)] = inst_43953);

return statearr_44009;
})();
var statearr_44011_45753 = state_44003__$1;
(statearr_44011_45753[(2)] = null);

(statearr_44011_45753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44004 === (1))){
var state_44003__$1 = state_44003;
var statearr_44012_45768 = state_44003__$1;
(statearr_44012_45768[(2)] = null);

(statearr_44012_45768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44004 === (4))){
var inst_43933 = (state_44003[(13)]);
var inst_43933__$1 = (state_44003[(2)]);
var inst_43942 = (inst_43933__$1 == null);
var state_44003__$1 = (function (){var statearr_44015 = state_44003;
(statearr_44015[(13)] = inst_43933__$1);

return statearr_44015;
})();
if(cljs.core.truth_(inst_43942)){
var statearr_44016_45773 = state_44003__$1;
(statearr_44016_45773[(1)] = (5));

} else {
var statearr_44017_45774 = state_44003__$1;
(statearr_44017_45774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44004 === (15))){
var state_44003__$1 = state_44003;
var statearr_44022_45777 = state_44003__$1;
(statearr_44022_45777[(2)] = null);

(statearr_44022_45777[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44004 === (21))){
var state_44003__$1 = state_44003;
var statearr_44023_45782 = state_44003__$1;
(statearr_44023_45782[(2)] = null);

(statearr_44023_45782[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44004 === (13))){
var inst_43954 = (state_44003[(8)]);
var inst_43955 = (state_44003[(9)]);
var inst_43952 = (state_44003[(10)]);
var inst_43953 = (state_44003[(12)]);
var inst_43963 = (state_44003[(2)]);
var inst_43964 = (inst_43955 + (1));
var tmp44018 = inst_43954;
var tmp44019 = inst_43952;
var tmp44020 = inst_43953;
var inst_43952__$1 = tmp44019;
var inst_43953__$1 = tmp44020;
var inst_43954__$1 = tmp44018;
var inst_43955__$1 = inst_43964;
var state_44003__$1 = (function (){var statearr_44024 = state_44003;
(statearr_44024[(8)] = inst_43954__$1);

(statearr_44024[(9)] = inst_43955__$1);

(statearr_44024[(10)] = inst_43952__$1);

(statearr_44024[(14)] = inst_43963);

(statearr_44024[(12)] = inst_43953__$1);

return statearr_44024;
})();
var statearr_44025_45785 = state_44003__$1;
(statearr_44025_45785[(2)] = null);

(statearr_44025_45785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44004 === (22))){
var state_44003__$1 = state_44003;
var statearr_44026_45786 = state_44003__$1;
(statearr_44026_45786[(2)] = null);

(statearr_44026_45786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44004 === (6))){
var inst_43933 = (state_44003[(13)]);
var inst_43950 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43933) : f.call(null,inst_43933));
var inst_43951 = cljs.core.seq(inst_43950);
var inst_43952 = inst_43951;
var inst_43953 = null;
var inst_43954 = (0);
var inst_43955 = (0);
var state_44003__$1 = (function (){var statearr_44035 = state_44003;
(statearr_44035[(8)] = inst_43954);

(statearr_44035[(9)] = inst_43955);

(statearr_44035[(10)] = inst_43952);

(statearr_44035[(12)] = inst_43953);

return statearr_44035;
})();
var statearr_44037_45792 = state_44003__$1;
(statearr_44037_45792[(2)] = null);

(statearr_44037_45792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44004 === (17))){
var inst_43969 = (state_44003[(7)]);
var inst_43973 = cljs.core.chunk_first(inst_43969);
var inst_43974 = cljs.core.chunk_rest(inst_43969);
var inst_43975 = cljs.core.count(inst_43973);
var inst_43952 = inst_43974;
var inst_43953 = inst_43973;
var inst_43954 = inst_43975;
var inst_43955 = (0);
var state_44003__$1 = (function (){var statearr_44039 = state_44003;
(statearr_44039[(8)] = inst_43954);

(statearr_44039[(9)] = inst_43955);

(statearr_44039[(10)] = inst_43952);

(statearr_44039[(12)] = inst_43953);

return statearr_44039;
})();
var statearr_44040_45802 = state_44003__$1;
(statearr_44040_45802[(2)] = null);

(statearr_44040_45802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44004 === (3))){
var inst_44001 = (state_44003[(2)]);
var state_44003__$1 = state_44003;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44003__$1,inst_44001);
} else {
if((state_val_44004 === (12))){
var inst_43989 = (state_44003[(2)]);
var state_44003__$1 = state_44003;
var statearr_44042_45803 = state_44003__$1;
(statearr_44042_45803[(2)] = inst_43989);

(statearr_44042_45803[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44004 === (2))){
var state_44003__$1 = state_44003;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44003__$1,(4),in$);
} else {
if((state_val_44004 === (23))){
var inst_43997 = (state_44003[(2)]);
var state_44003__$1 = state_44003;
var statearr_44043_45804 = state_44003__$1;
(statearr_44043_45804[(2)] = inst_43997);

(statearr_44043_45804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44004 === (19))){
var inst_43984 = (state_44003[(2)]);
var state_44003__$1 = state_44003;
var statearr_44048_45805 = state_44003__$1;
(statearr_44048_45805[(2)] = inst_43984);

(statearr_44048_45805[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44004 === (11))){
var inst_43969 = (state_44003[(7)]);
var inst_43952 = (state_44003[(10)]);
var inst_43969__$1 = cljs.core.seq(inst_43952);
var state_44003__$1 = (function (){var statearr_44072 = state_44003;
(statearr_44072[(7)] = inst_43969__$1);

return statearr_44072;
})();
if(inst_43969__$1){
var statearr_44074_45811 = state_44003__$1;
(statearr_44074_45811[(1)] = (14));

} else {
var statearr_44075_45814 = state_44003__$1;
(statearr_44075_45814[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44004 === (9))){
var inst_43991 = (state_44003[(2)]);
var inst_43992 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_44003__$1 = (function (){var statearr_44076 = state_44003;
(statearr_44076[(15)] = inst_43991);

return statearr_44076;
})();
if(cljs.core.truth_(inst_43992)){
var statearr_44077_45815 = state_44003__$1;
(statearr_44077_45815[(1)] = (21));

} else {
var statearr_44078_45816 = state_44003__$1;
(statearr_44078_45816[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44004 === (5))){
var inst_43944 = cljs.core.async.close_BANG_(out);
var state_44003__$1 = state_44003;
var statearr_44079_45832 = state_44003__$1;
(statearr_44079_45832[(2)] = inst_43944);

(statearr_44079_45832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44004 === (14))){
var inst_43969 = (state_44003[(7)]);
var inst_43971 = cljs.core.chunked_seq_QMARK_(inst_43969);
var state_44003__$1 = state_44003;
if(inst_43971){
var statearr_44080_45834 = state_44003__$1;
(statearr_44080_45834[(1)] = (17));

} else {
var statearr_44081_45835 = state_44003__$1;
(statearr_44081_45835[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44004 === (16))){
var inst_43987 = (state_44003[(2)]);
var state_44003__$1 = state_44003;
var statearr_44082_45836 = state_44003__$1;
(statearr_44082_45836[(2)] = inst_43987);

(statearr_44082_45836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44004 === (10))){
var inst_43955 = (state_44003[(9)]);
var inst_43953 = (state_44003[(12)]);
var inst_43961 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43953,inst_43955);
var state_44003__$1 = state_44003;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44003__$1,(13),out,inst_43961);
} else {
if((state_val_44004 === (18))){
var inst_43969 = (state_44003[(7)]);
var inst_43978 = cljs.core.first(inst_43969);
var state_44003__$1 = state_44003;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44003__$1,(20),out,inst_43978);
} else {
if((state_val_44004 === (8))){
var inst_43954 = (state_44003[(8)]);
var inst_43955 = (state_44003[(9)]);
var inst_43958 = (inst_43955 < inst_43954);
var inst_43959 = inst_43958;
var state_44003__$1 = state_44003;
if(cljs.core.truth_(inst_43959)){
var statearr_44083_45837 = state_44003__$1;
(statearr_44083_45837[(1)] = (10));

} else {
var statearr_44084_45838 = state_44003__$1;
(statearr_44084_45838[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42197__auto__))
;
return ((function (switch__42084__auto__,c__42197__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__42085__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42085__auto____0 = (function (){
var statearr_44086 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44086[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42085__auto__);

(statearr_44086[(1)] = (1));

return statearr_44086;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42085__auto____1 = (function (state_44003){
while(true){
var ret_value__42086__auto__ = (function (){try{while(true){
var result__42087__auto__ = switch__42084__auto__(state_44003);
if(cljs.core.keyword_identical_QMARK_(result__42087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42087__auto__;
}
break;
}
}catch (e44090){if((e44090 instanceof Object)){
var ex__42088__auto__ = e44090;
var statearr_44092_45839 = state_44003;
(statearr_44092_45839[(5)] = ex__42088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44090;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45840 = state_44003;
state_44003 = G__45840;
continue;
} else {
return ret_value__42086__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42085__auto__ = function(state_44003){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42085__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42085__auto____1.call(this,state_44003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42085__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42085__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42085__auto__;
})()
;})(switch__42084__auto__,c__42197__auto__))
})();
var state__42199__auto__ = (function (){var statearr_44096 = (f__42198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42198__auto__.cljs$core$IFn$_invoke$arity$0() : f__42198__auto__.call(null));
(statearr_44096[(6)] = c__42197__auto__);

return statearr_44096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42199__auto__);
});})(c__42197__auto__))
);

return c__42197__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__44104 = arguments.length;
switch (G__44104) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__44116 = arguments.length;
switch (G__44116) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__44118 = arguments.length;
switch (G__44118) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42197__auto___45844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42197__auto___45844,out){
return (function (){
var f__42198__auto__ = (function (){var switch__42084__auto__ = ((function (c__42197__auto___45844,out){
return (function (state_44151){
var state_val_44152 = (state_44151[(1)]);
if((state_val_44152 === (7))){
var inst_44142 = (state_44151[(2)]);
var state_44151__$1 = state_44151;
var statearr_44154_45847 = state_44151__$1;
(statearr_44154_45847[(2)] = inst_44142);

(statearr_44154_45847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44152 === (1))){
var inst_44124 = null;
var state_44151__$1 = (function (){var statearr_44160 = state_44151;
(statearr_44160[(7)] = inst_44124);

return statearr_44160;
})();
var statearr_44162_45848 = state_44151__$1;
(statearr_44162_45848[(2)] = null);

(statearr_44162_45848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44152 === (4))){
var inst_44127 = (state_44151[(8)]);
var inst_44127__$1 = (state_44151[(2)]);
var inst_44128 = (inst_44127__$1 == null);
var inst_44129 = cljs.core.not(inst_44128);
var state_44151__$1 = (function (){var statearr_44169 = state_44151;
(statearr_44169[(8)] = inst_44127__$1);

return statearr_44169;
})();
if(inst_44129){
var statearr_44170_45849 = state_44151__$1;
(statearr_44170_45849[(1)] = (5));

} else {
var statearr_44171_45850 = state_44151__$1;
(statearr_44171_45850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44152 === (6))){
var state_44151__$1 = state_44151;
var statearr_44176_45851 = state_44151__$1;
(statearr_44176_45851[(2)] = null);

(statearr_44176_45851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44152 === (3))){
var inst_44144 = (state_44151[(2)]);
var inst_44145 = cljs.core.async.close_BANG_(out);
var state_44151__$1 = (function (){var statearr_44177 = state_44151;
(statearr_44177[(9)] = inst_44144);

return statearr_44177;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44151__$1,inst_44145);
} else {
if((state_val_44152 === (2))){
var state_44151__$1 = state_44151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44151__$1,(4),ch);
} else {
if((state_val_44152 === (11))){
var inst_44127 = (state_44151[(8)]);
var inst_44136 = (state_44151[(2)]);
var inst_44124 = inst_44127;
var state_44151__$1 = (function (){var statearr_44178 = state_44151;
(statearr_44178[(10)] = inst_44136);

(statearr_44178[(7)] = inst_44124);

return statearr_44178;
})();
var statearr_44179_45852 = state_44151__$1;
(statearr_44179_45852[(2)] = null);

(statearr_44179_45852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44152 === (9))){
var inst_44127 = (state_44151[(8)]);
var state_44151__$1 = state_44151;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44151__$1,(11),out,inst_44127);
} else {
if((state_val_44152 === (5))){
var inst_44127 = (state_44151[(8)]);
var inst_44124 = (state_44151[(7)]);
var inst_44131 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44127,inst_44124);
var state_44151__$1 = state_44151;
if(inst_44131){
var statearr_44181_45853 = state_44151__$1;
(statearr_44181_45853[(1)] = (8));

} else {
var statearr_44182_45856 = state_44151__$1;
(statearr_44182_45856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44152 === (10))){
var inst_44139 = (state_44151[(2)]);
var state_44151__$1 = state_44151;
var statearr_44183_45857 = state_44151__$1;
(statearr_44183_45857[(2)] = inst_44139);

(statearr_44183_45857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44152 === (8))){
var inst_44124 = (state_44151[(7)]);
var tmp44180 = inst_44124;
var inst_44124__$1 = tmp44180;
var state_44151__$1 = (function (){var statearr_44185 = state_44151;
(statearr_44185[(7)] = inst_44124__$1);

return statearr_44185;
})();
var statearr_44186_45859 = state_44151__$1;
(statearr_44186_45859[(2)] = null);

(statearr_44186_45859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__42197__auto___45844,out))
;
return ((function (switch__42084__auto__,c__42197__auto___45844,out){
return (function() {
var cljs$core$async$state_machine__42085__auto__ = null;
var cljs$core$async$state_machine__42085__auto____0 = (function (){
var statearr_44187 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44187[(0)] = cljs$core$async$state_machine__42085__auto__);

(statearr_44187[(1)] = (1));

return statearr_44187;
});
var cljs$core$async$state_machine__42085__auto____1 = (function (state_44151){
while(true){
var ret_value__42086__auto__ = (function (){try{while(true){
var result__42087__auto__ = switch__42084__auto__(state_44151);
if(cljs.core.keyword_identical_QMARK_(result__42087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42087__auto__;
}
break;
}
}catch (e44188){if((e44188 instanceof Object)){
var ex__42088__auto__ = e44188;
var statearr_44189_45860 = state_44151;
(statearr_44189_45860[(5)] = ex__42088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44188;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45861 = state_44151;
state_44151 = G__45861;
continue;
} else {
return ret_value__42086__auto__;
}
break;
}
});
cljs$core$async$state_machine__42085__auto__ = function(state_44151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42085__auto____1.call(this,state_44151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42085__auto____0;
cljs$core$async$state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42085__auto____1;
return cljs$core$async$state_machine__42085__auto__;
})()
;})(switch__42084__auto__,c__42197__auto___45844,out))
})();
var state__42199__auto__ = (function (){var statearr_44190 = (f__42198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42198__auto__.cljs$core$IFn$_invoke$arity$0() : f__42198__auto__.call(null));
(statearr_44190[(6)] = c__42197__auto___45844);

return statearr_44190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42199__auto__);
});})(c__42197__auto___45844,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__44192 = arguments.length;
switch (G__44192) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42197__auto___45869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42197__auto___45869,out){
return (function (){
var f__42198__auto__ = (function (){var switch__42084__auto__ = ((function (c__42197__auto___45869,out){
return (function (state_44251){
var state_val_44252 = (state_44251[(1)]);
if((state_val_44252 === (7))){
var inst_44244 = (state_44251[(2)]);
var state_44251__$1 = state_44251;
var statearr_44253_45873 = state_44251__$1;
(statearr_44253_45873[(2)] = inst_44244);

(statearr_44253_45873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (1))){
var inst_44211 = (new Array(n));
var inst_44212 = inst_44211;
var inst_44213 = (0);
var state_44251__$1 = (function (){var statearr_44280 = state_44251;
(statearr_44280[(7)] = inst_44212);

(statearr_44280[(8)] = inst_44213);

return statearr_44280;
})();
var statearr_44283_45886 = state_44251__$1;
(statearr_44283_45886[(2)] = null);

(statearr_44283_45886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (4))){
var inst_44216 = (state_44251[(9)]);
var inst_44216__$1 = (state_44251[(2)]);
var inst_44217 = (inst_44216__$1 == null);
var inst_44218 = cljs.core.not(inst_44217);
var state_44251__$1 = (function (){var statearr_44286 = state_44251;
(statearr_44286[(9)] = inst_44216__$1);

return statearr_44286;
})();
if(inst_44218){
var statearr_44287_45889 = state_44251__$1;
(statearr_44287_45889[(1)] = (5));

} else {
var statearr_44288_45890 = state_44251__$1;
(statearr_44288_45890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (15))){
var inst_44238 = (state_44251[(2)]);
var state_44251__$1 = state_44251;
var statearr_44289_45891 = state_44251__$1;
(statearr_44289_45891[(2)] = inst_44238);

(statearr_44289_45891[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (13))){
var state_44251__$1 = state_44251;
var statearr_44290_45892 = state_44251__$1;
(statearr_44290_45892[(2)] = null);

(statearr_44290_45892[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (6))){
var inst_44213 = (state_44251[(8)]);
var inst_44234 = (inst_44213 > (0));
var state_44251__$1 = state_44251;
if(cljs.core.truth_(inst_44234)){
var statearr_44291_45897 = state_44251__$1;
(statearr_44291_45897[(1)] = (12));

} else {
var statearr_44292_45898 = state_44251__$1;
(statearr_44292_45898[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (3))){
var inst_44246 = (state_44251[(2)]);
var state_44251__$1 = state_44251;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44251__$1,inst_44246);
} else {
if((state_val_44252 === (12))){
var inst_44212 = (state_44251[(7)]);
var inst_44236 = cljs.core.vec(inst_44212);
var state_44251__$1 = state_44251;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44251__$1,(15),out,inst_44236);
} else {
if((state_val_44252 === (2))){
var state_44251__$1 = state_44251;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44251__$1,(4),ch);
} else {
if((state_val_44252 === (11))){
var inst_44228 = (state_44251[(2)]);
var inst_44229 = (new Array(n));
var inst_44212 = inst_44229;
var inst_44213 = (0);
var state_44251__$1 = (function (){var statearr_44293 = state_44251;
(statearr_44293[(7)] = inst_44212);

(statearr_44293[(8)] = inst_44213);

(statearr_44293[(10)] = inst_44228);

return statearr_44293;
})();
var statearr_44294_45928 = state_44251__$1;
(statearr_44294_45928[(2)] = null);

(statearr_44294_45928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (9))){
var inst_44212 = (state_44251[(7)]);
var inst_44226 = cljs.core.vec(inst_44212);
var state_44251__$1 = state_44251;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44251__$1,(11),out,inst_44226);
} else {
if((state_val_44252 === (5))){
var inst_44212 = (state_44251[(7)]);
var inst_44213 = (state_44251[(8)]);
var inst_44221 = (state_44251[(11)]);
var inst_44216 = (state_44251[(9)]);
var inst_44220 = (inst_44212[inst_44213] = inst_44216);
var inst_44221__$1 = (inst_44213 + (1));
var inst_44222 = (inst_44221__$1 < n);
var state_44251__$1 = (function (){var statearr_44295 = state_44251;
(statearr_44295[(12)] = inst_44220);

(statearr_44295[(11)] = inst_44221__$1);

return statearr_44295;
})();
if(cljs.core.truth_(inst_44222)){
var statearr_44296_45937 = state_44251__$1;
(statearr_44296_45937[(1)] = (8));

} else {
var statearr_44297_45938 = state_44251__$1;
(statearr_44297_45938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (14))){
var inst_44241 = (state_44251[(2)]);
var inst_44242 = cljs.core.async.close_BANG_(out);
var state_44251__$1 = (function (){var statearr_44299 = state_44251;
(statearr_44299[(13)] = inst_44241);

return statearr_44299;
})();
var statearr_44300_45939 = state_44251__$1;
(statearr_44300_45939[(2)] = inst_44242);

(statearr_44300_45939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (10))){
var inst_44232 = (state_44251[(2)]);
var state_44251__$1 = state_44251;
var statearr_44301_45940 = state_44251__$1;
(statearr_44301_45940[(2)] = inst_44232);

(statearr_44301_45940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44252 === (8))){
var inst_44212 = (state_44251[(7)]);
var inst_44221 = (state_44251[(11)]);
var tmp44298 = inst_44212;
var inst_44212__$1 = tmp44298;
var inst_44213 = inst_44221;
var state_44251__$1 = (function (){var statearr_44302 = state_44251;
(statearr_44302[(7)] = inst_44212__$1);

(statearr_44302[(8)] = inst_44213);

return statearr_44302;
})();
var statearr_44303_45944 = state_44251__$1;
(statearr_44303_45944[(2)] = null);

(statearr_44303_45944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42197__auto___45869,out))
;
return ((function (switch__42084__auto__,c__42197__auto___45869,out){
return (function() {
var cljs$core$async$state_machine__42085__auto__ = null;
var cljs$core$async$state_machine__42085__auto____0 = (function (){
var statearr_44304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44304[(0)] = cljs$core$async$state_machine__42085__auto__);

(statearr_44304[(1)] = (1));

return statearr_44304;
});
var cljs$core$async$state_machine__42085__auto____1 = (function (state_44251){
while(true){
var ret_value__42086__auto__ = (function (){try{while(true){
var result__42087__auto__ = switch__42084__auto__(state_44251);
if(cljs.core.keyword_identical_QMARK_(result__42087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42087__auto__;
}
break;
}
}catch (e44305){if((e44305 instanceof Object)){
var ex__42088__auto__ = e44305;
var statearr_44306_45992 = state_44251;
(statearr_44306_45992[(5)] = ex__42088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44305;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45993 = state_44251;
state_44251 = G__45993;
continue;
} else {
return ret_value__42086__auto__;
}
break;
}
});
cljs$core$async$state_machine__42085__auto__ = function(state_44251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42085__auto____1.call(this,state_44251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42085__auto____0;
cljs$core$async$state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42085__auto____1;
return cljs$core$async$state_machine__42085__auto__;
})()
;})(switch__42084__auto__,c__42197__auto___45869,out))
})();
var state__42199__auto__ = (function (){var statearr_44310 = (f__42198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42198__auto__.cljs$core$IFn$_invoke$arity$0() : f__42198__auto__.call(null));
(statearr_44310[(6)] = c__42197__auto___45869);

return statearr_44310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42199__auto__);
});})(c__42197__auto___45869,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__44312 = arguments.length;
switch (G__44312) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42197__auto___45995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42197__auto___45995,out){
return (function (){
var f__42198__auto__ = (function (){var switch__42084__auto__ = ((function (c__42197__auto___45995,out){
return (function (state_44354){
var state_val_44355 = (state_44354[(1)]);
if((state_val_44355 === (7))){
var inst_44350 = (state_44354[(2)]);
var state_44354__$1 = state_44354;
var statearr_44356_45996 = state_44354__$1;
(statearr_44356_45996[(2)] = inst_44350);

(statearr_44356_45996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44355 === (1))){
var inst_44313 = [];
var inst_44314 = inst_44313;
var inst_44315 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44354__$1 = (function (){var statearr_44357 = state_44354;
(statearr_44357[(7)] = inst_44315);

(statearr_44357[(8)] = inst_44314);

return statearr_44357;
})();
var statearr_44358_45998 = state_44354__$1;
(statearr_44358_45998[(2)] = null);

(statearr_44358_45998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44355 === (4))){
var inst_44318 = (state_44354[(9)]);
var inst_44318__$1 = (state_44354[(2)]);
var inst_44319 = (inst_44318__$1 == null);
var inst_44320 = cljs.core.not(inst_44319);
var state_44354__$1 = (function (){var statearr_44359 = state_44354;
(statearr_44359[(9)] = inst_44318__$1);

return statearr_44359;
})();
if(inst_44320){
var statearr_44360_45999 = state_44354__$1;
(statearr_44360_45999[(1)] = (5));

} else {
var statearr_44361_46000 = state_44354__$1;
(statearr_44361_46000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44355 === (15))){
var inst_44344 = (state_44354[(2)]);
var state_44354__$1 = state_44354;
var statearr_44368_46051 = state_44354__$1;
(statearr_44368_46051[(2)] = inst_44344);

(statearr_44368_46051[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44355 === (13))){
var state_44354__$1 = state_44354;
var statearr_44370_46052 = state_44354__$1;
(statearr_44370_46052[(2)] = null);

(statearr_44370_46052[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44355 === (6))){
var inst_44314 = (state_44354[(8)]);
var inst_44339 = inst_44314.length;
var inst_44340 = (inst_44339 > (0));
var state_44354__$1 = state_44354;
if(cljs.core.truth_(inst_44340)){
var statearr_44373_46053 = state_44354__$1;
(statearr_44373_46053[(1)] = (12));

} else {
var statearr_44374_46054 = state_44354__$1;
(statearr_44374_46054[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44355 === (3))){
var inst_44352 = (state_44354[(2)]);
var state_44354__$1 = state_44354;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44354__$1,inst_44352);
} else {
if((state_val_44355 === (12))){
var inst_44314 = (state_44354[(8)]);
var inst_44342 = cljs.core.vec(inst_44314);
var state_44354__$1 = state_44354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44354__$1,(15),out,inst_44342);
} else {
if((state_val_44355 === (2))){
var state_44354__$1 = state_44354;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44354__$1,(4),ch);
} else {
if((state_val_44355 === (11))){
var inst_44322 = (state_44354[(10)]);
var inst_44318 = (state_44354[(9)]);
var inst_44332 = (state_44354[(2)]);
var inst_44333 = [];
var inst_44334 = inst_44333.push(inst_44318);
var inst_44314 = inst_44333;
var inst_44315 = inst_44322;
var state_44354__$1 = (function (){var statearr_44375 = state_44354;
(statearr_44375[(11)] = inst_44332);

(statearr_44375[(12)] = inst_44334);

(statearr_44375[(7)] = inst_44315);

(statearr_44375[(8)] = inst_44314);

return statearr_44375;
})();
var statearr_44376_46055 = state_44354__$1;
(statearr_44376_46055[(2)] = null);

(statearr_44376_46055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44355 === (9))){
var inst_44314 = (state_44354[(8)]);
var inst_44330 = cljs.core.vec(inst_44314);
var state_44354__$1 = state_44354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44354__$1,(11),out,inst_44330);
} else {
if((state_val_44355 === (5))){
var inst_44315 = (state_44354[(7)]);
var inst_44322 = (state_44354[(10)]);
var inst_44318 = (state_44354[(9)]);
var inst_44322__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44318) : f.call(null,inst_44318));
var inst_44323 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44322__$1,inst_44315);
var inst_44324 = cljs.core.keyword_identical_QMARK_(inst_44315,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44325 = ((inst_44323) || (inst_44324));
var state_44354__$1 = (function (){var statearr_44379 = state_44354;
(statearr_44379[(10)] = inst_44322__$1);

return statearr_44379;
})();
if(cljs.core.truth_(inst_44325)){
var statearr_44381_46061 = state_44354__$1;
(statearr_44381_46061[(1)] = (8));

} else {
var statearr_44382_46062 = state_44354__$1;
(statearr_44382_46062[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44355 === (14))){
var inst_44347 = (state_44354[(2)]);
var inst_44348 = cljs.core.async.close_BANG_(out);
var state_44354__$1 = (function (){var statearr_44384 = state_44354;
(statearr_44384[(13)] = inst_44347);

return statearr_44384;
})();
var statearr_44385_46063 = state_44354__$1;
(statearr_44385_46063[(2)] = inst_44348);

(statearr_44385_46063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44355 === (10))){
var inst_44337 = (state_44354[(2)]);
var state_44354__$1 = state_44354;
var statearr_44386_46067 = state_44354__$1;
(statearr_44386_46067[(2)] = inst_44337);

(statearr_44386_46067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44355 === (8))){
var inst_44322 = (state_44354[(10)]);
var inst_44318 = (state_44354[(9)]);
var inst_44314 = (state_44354[(8)]);
var inst_44327 = inst_44314.push(inst_44318);
var tmp44383 = inst_44314;
var inst_44314__$1 = tmp44383;
var inst_44315 = inst_44322;
var state_44354__$1 = (function (){var statearr_44387 = state_44354;
(statearr_44387[(7)] = inst_44315);

(statearr_44387[(14)] = inst_44327);

(statearr_44387[(8)] = inst_44314__$1);

return statearr_44387;
})();
var statearr_44388_46068 = state_44354__$1;
(statearr_44388_46068[(2)] = null);

(statearr_44388_46068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__42197__auto___45995,out))
;
return ((function (switch__42084__auto__,c__42197__auto___45995,out){
return (function() {
var cljs$core$async$state_machine__42085__auto__ = null;
var cljs$core$async$state_machine__42085__auto____0 = (function (){
var statearr_44389 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44389[(0)] = cljs$core$async$state_machine__42085__auto__);

(statearr_44389[(1)] = (1));

return statearr_44389;
});
var cljs$core$async$state_machine__42085__auto____1 = (function (state_44354){
while(true){
var ret_value__42086__auto__ = (function (){try{while(true){
var result__42087__auto__ = switch__42084__auto__(state_44354);
if(cljs.core.keyword_identical_QMARK_(result__42087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42087__auto__;
}
break;
}
}catch (e44390){if((e44390 instanceof Object)){
var ex__42088__auto__ = e44390;
var statearr_44391_46069 = state_44354;
(statearr_44391_46069[(5)] = ex__42088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44390;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46070 = state_44354;
state_44354 = G__46070;
continue;
} else {
return ret_value__42086__auto__;
}
break;
}
});
cljs$core$async$state_machine__42085__auto__ = function(state_44354){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42085__auto____1.call(this,state_44354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42085__auto____0;
cljs$core$async$state_machine__42085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42085__auto____1;
return cljs$core$async$state_machine__42085__auto__;
})()
;})(switch__42084__auto__,c__42197__auto___45995,out))
})();
var state__42199__auto__ = (function (){var statearr_44393 = (f__42198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42198__auto__.cljs$core$IFn$_invoke$arity$0() : f__42198__auto__.call(null));
(statearr_44393[(6)] = c__42197__auto___45995);

return statearr_44393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42199__auto__);
});})(c__42197__auto___45995,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
