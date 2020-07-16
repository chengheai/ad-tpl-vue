"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ZooSchema = new _mongoose2.default.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  leg: {
    type: Number,
    required: true
  },
  comment: {
    type: String
  }
}, {
  versionKey: false,
  timestamps: true
});

exports.default = _mongoose2.default.model("Zoo", ZooSchema);
//# sourceMappingURL=zoo.js.map