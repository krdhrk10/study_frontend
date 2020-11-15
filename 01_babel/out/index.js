"use strict";

var _variables = require("./variables");

var _allow_func = require("./allow_func");

var _promise = require("./promise");

console.log("========================================");
console.log(" Test for variables");
console.log("========================================");
(0, _variables.scopeFunc)();
console.log("========================================");
console.log(" Test for allow_func");
console.log("========================================");
(0, _allow_func.legacyFunc)();
(0, _allow_func.allowFunc)();
console.log("========================================");
console.log(" Test for promise(polyfill)");
console.log("========================================");
(0, _promise.callAsync)();