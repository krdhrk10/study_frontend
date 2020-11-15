"use strict";

require("core-js/stable");

require("regenerator-runtime/runtime");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function asyncFunc() {
  return new Promise(function (okFunc, ngFunc) {
    setTimeout(function () {
      okFunc('ok');
    }, 1000);
  });
}

function callAsync() {
  return _callAsync.apply(this, arguments);
}

function _callAsync() {
  _callAsync = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return asyncFunc();

          case 2:
            result = _context.sent;
            console.log("result = ".concat(result));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _callAsync.apply(this, arguments);
}

module.exports.callAsync = callAsync;