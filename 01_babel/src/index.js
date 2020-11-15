import { scopeFunc } from './variables';
import { legacyFunc, allowFunc } from './allow_func';
import { callAsync } from './promise';

console.log("========================================");
console.log(" Test for variables");
console.log("========================================");
scopeFunc();

console.log("========================================");
console.log(" Test for allow_func");
console.log("========================================");
legacyFunc();
allowFunc();

console.log("========================================");
console.log(" Test for promise(polyfill)");
console.log("========================================");
callAsync();
