"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetch = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _zoo = require("../schema/zoo.js");

var _zoo2 = _interopRequireDefault(_zoo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fetch = exports.fetch = async (ctx, next) => {
  const { name } = ctx.params;
  const res = await _zoo2.default.findOne({ name });
  if (res) {
    ctx.body = res;
  } else {
    ctx.body = { msg: "no data" };
  }
  await next();
};
//# sourceMappingURL=zoo.js.map