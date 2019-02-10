"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./common/constants");
function razer(...args) {
    if (!args) {
        return false;
    }
    if (args.length <= 0) {
        return false;
    }
    // prod 版のビルドのときは console.log を無効化する
    if (process.env.NODE_ENV === constants_1.default.PROD || process.env.NODE_ENV === constants_1.default.PRODUCTION) {
        return false;
    }
    console.log(...args);
    return true;
}
exports.default = razer;
