"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;

_mongoose2.default.connect(`mongodb://${_config.mongoHost}/${_config.mongoDB}`, { useMongoClient: true });

_mongoose2.default.connection.on("connected", function () {
  console.log("🌈   Mongoose connection open ");
});

_mongoose2.default.connection.on("error", function (err) {
  console.log("😱  Mongoose connection error: " + err);
});

// 断开连接
_mongoose2.default.connection.on("disconnected", function () {
  console.log("💀  Mongoose connection disconnected");
});

exports.default = _mongoose2.default;
//# sourceMappingURL=db.js.map