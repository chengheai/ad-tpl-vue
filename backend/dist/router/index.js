"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = require("koa-router");

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _zoo = require("../controller/zoo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _koaRouter2.default();

router.prefix("/api/zoo");

router.get("/:name", _zoo.fetch);

exports.default = router;
//# sourceMappingURL=index.js.map