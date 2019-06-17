/**
 * @file razer
 */

import { IConsoleLog, INoop } from '../types/index'

/** CONSOLE_LOG 関数 */
export const CONSOLE_LOG: IConsoleLog = console.log.bind(console)
/** noop 関数 */
const NOOP: INoop = (): void => undefined

/**
 * razer - console.log を状況に合わせて実行できるものを返すためのラッパー
 * @param textORopts
 * @param specifiedLogger
 */
/** オーバーロード */
// function が来たら状況に合わせて関数を返す
function razer(
  fn: () => boolean,
  specifiedLogger?: () => void
): IConsoleLog | INoop
// string が来たらすぐに console.log する
function razer(...args: (string | number | boolean | object | [])[]): void
/** オーバーロードの実装 */
function razer(fnOrText?: any, specifiedLogger?: any): any {
  // 第一引数が function 以外の場合は、即座に console.log して処理を抜ける
  if (typeof fnOrText !== 'function') {
    console.log(...arguments)
    return
  }

  // 第一引数が function の場合
  // 第二引数のロガーが存在する場合はそれを使用、なければ用意した console.log を使う
  const logger = specifiedLogger || CONSOLE_LOG

  // ジャッジ用の function が false なら空の関数を返す
  if (!fnOrText()) {
    return NOOP
  }

  // 特に縛りがないなら、そのまま logger を返す
  return logger
}

export default razer
