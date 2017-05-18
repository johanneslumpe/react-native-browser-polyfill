/**
 * Currently JavaScriptCore does not provide a `self` reference
 * to the global object, which is utilized by browser libraries (i.e bluebird)
 * to have a reliably reference to the global object which works in browsers
 * and web-workers alike.
 */

if (typeof global.self === "undefined") global.self = global;
