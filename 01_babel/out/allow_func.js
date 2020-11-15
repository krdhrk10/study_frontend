"use strict";

var legacyFunc = function legacyFunc() {
  console.log("Hello LegacyFunc");
};

var allowFunc = function allowFunc() {
  console.log("Hello AllowFunc");
};

module.exports = {
  legacyFunc: legacyFunc,
  allowFunc: allowFunc
};