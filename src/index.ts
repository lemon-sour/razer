/**
 * @file razer
 */

import C from './common/constants'
import { IConsoleLog, IOptions, INoop } from '../types/index'

/** CONSOLE_LOG 関数 */
export const CONSOLE_LOG: IConsoleLog = console.log.bind(console)
/** noop 関数 */
const NOOP: INoop = (): void => undefined

// razer のオプションのデフォルト値
const defaultOptions: IOptions = {
  isSSR: C.isSSR,
  isCSR: C.isCSR,
  isProd: C.isProd
}

/**
 * razer - console.log を状況に合わせて実行できるものを返すためのラッパー
 * @param textORopts
 * @param specifiedLogger
 */
/** オーバーロード */
// string が来たらすぐに console.log する
function razer(...args: string[]): void
// opts が来たら状況に合わせて関数を返す
function razer(opts?: IOptions, specifiedLogger?: any): IConsoleLog | INoop
/** オーバーロードの実装 */
function razer(textORopts?: any, specifiedLogger?: any): any {
  // 第一引数が string の場合は、即座に console.log して処理を抜ける
  if (typeof textORopts === 'string') {
    console.log(...arguments)
    return
  }

  // 第二引数のロガーが存在する場合はそれを使用、なければ用意した console.log を使う
  const logger = specifiedLogger || CONSOLE_LOG

  // options がなければ足剤にロガーを返す
  if (!textORopts) {
    return logger
  }

  // options をマージする
  const options = Object.assign({}, defaultOptions, textORopts)

  // prod 版のビルドのときは console.log を無効化する
  if (
    options.isProd &&
    !(process.env.NODE_ENV === C.PROD || process.env.NODE_ENV === C.PRODUCTION)
  ) {
    return NOOP
  }

  // isSSR が true だが実際にサーバーサイドではない場合
  if (options.isSSR && !process.server) {
    return NOOP
  }

  // isCSR が true だが実際にクライアントサイドではない場合
  if (options.isCSR && !process.client) {
    return NOOP
  }

  // 特に縛りがないなら、そのまま logger を返す
  return logger
}

export default razer
