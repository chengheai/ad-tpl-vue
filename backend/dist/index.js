"use strict";

var _koa = require("koa");

var _koa2 = _interopRequireDefault(_koa);

var _koaLogger = require("koa-logger");

var _koaLogger2 = _interopRequireDefault(_koaLogger);

require("colors");

var _router = require("./router");

var _router2 = _interopRequireDefault(_router);

var _koa2Cors = require("koa2-cors");

var _koa2Cors2 = _interopRequireDefault(_koa2Cors);

require("./middlewars/db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa2.default();

app.use((0, _koaLogger2.default)());
// app.use(
//   cors({
//     origin: "http://localhost"
//   })
// )

app.use(_router2.default.routes(), _router2.default.allowedMethods());
// app.use(async ctx => {
//   ctx.body = "hello  Koa"
// })

app.listen(50000, err => {
  if (err) console.log(`it has an error \n ${err}`.red);
  console.log(`🌎 ==>> koa listen port on 50000`.green);
});
//# sourceMappingURL=index.js.map