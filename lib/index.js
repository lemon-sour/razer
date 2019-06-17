"use strict";
/**
 * @file razer
 */
Object.defineProperty(exports, "__esModule", { value: true });
/** CONSOLE_LOG 関数 */
exports.CONSOLE_LOG = console.log.bind(console);
/** noop 関数 */
const NOOP = () => undefined;
/** オーバーロードの実装 */
function razer(fnOrText, specifiedLogger) {
    // 第一引数が function 以外の場合は、即座に console.log して処理を抜ける
    if (typeof fnOrText !== 'function') {
        console.log(...arguments);
        return;
    }
    // 第一引数が function の場合
    // 第二引数のロガーが存在する場合はそれを使用、なければ用意した console.log を使う
    const logger = specifiedLogger || exports.CONSOLE_LOG;
    // ジャッジ用の function が false なら空の関数を返す
    if (!fnOrText()) {
        return NOOP;
    }
    // 特に縛りがないなら、そのまま logger を返す
    return logger;
}
exports.default = razer;
