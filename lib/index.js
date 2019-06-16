"use strict";
/**
 * @file razer
 */
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./common/constants");
/** CONSOLE_LOG 関数 */
exports.CONSOLE_LOG = console.log.bind(console);
/** noop 関数 */
const NOOP = () => undefined;
// razer のオプションのデフォルト値
const defaultOptions = {
    isSSR: constants_1.default.isSSR,
    isCSR: constants_1.default.isCSR,
    isProd: constants_1.default.isProd
};
/** オーバーロードの実装 */
function razer(textORopts, specifiedLogger) {
    // 第一引数が string の場合は、即座に cconsole.log して処理を抜ける
    if (typeof textORopts === 'string') {
        console.log(textORopts);
        return;
    }
    // 第二引数のロガーが存在する場合はそれを使用、なければ用意した console.log を使う
    const logger = specifiedLogger || exports.CONSOLE_LOG;
    // options がなければ足剤にロガーを返す
    if (!textORopts) {
        return logger;
    }
    // options をマージする
    const options = Object.assign({}, defaultOptions, textORopts);
    // prod 版のビルドのときは console.log を無効化する
    if (options.isProd &&
        !(process.env.NODE_ENV === constants_1.default.PROD || process.env.NODE_ENV === constants_1.default.PRODUCTION)) {
        return NOOP;
    }
    // isSSR が true だが実際にサーバーサイドではない場合
    if (options.isSSR && !process.server) {
        return NOOP;
    }
    // isCSR が true だが実際にクライアントサイドではない場合
    if (options.isCSR && !process.client) {
        return NOOP;
    }
    // 特に縛りがないなら、そのまま logger を返す
    return logger;
}
exports.default = razer;
