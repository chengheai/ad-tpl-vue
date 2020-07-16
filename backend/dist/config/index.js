'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const env = process.env;
const mongoHost = exports.mongoHost = env.MONGO_HOST || '127.0.0.1';
const mongoDB = exports.mongoDB = env.MONGO_NAME || 'demo';
//# sourceMappingURL=index.js.map