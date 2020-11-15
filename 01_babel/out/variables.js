"use strict";

function scopeFunc() {
  var a = 123;
  var b = "Hello";
  var c = ["legacy"];
  console.log("==INIT==");
  console.log("let a = ".concat(a));
  console.log("const b = ".concat(b));
  console.log("var c = ".concat(c));

  if (true) {
    var _a = 345;
    var _b = "Bye";
    var c = ["legacy?"];
    console.log("==SCOPED BLOCK==");
    console.log("let a = ".concat(_a));
    console.log("const b = ".concat(_b));
    console.log("var c = ".concat(c));
  }

  console.log("==INITIAL SCOPE==");
  console.log("let a = ".concat(a));
  console.log("const b = ".concat(b));
  console.log("var c = ".concat(c));
}

module.exports.scopeFunc = scopeFunc;