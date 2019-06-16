/**
 * @file インターフェイスのエントリーポイント
 */

export * from './IConsoleLog'
export * from './IOptions'
export * from './INoop'

// augment typings of NodeJS.Process
import './process'

import { IOptions } from './IOptions'
import { INoop } from './INoop'

/**
 * console.log の実態
 */
import { IConsoleLog } from './IConsoleLog'
export const CONSOLE_LOG: IConsoleLog

/**
 * razer インターフェイス
 */
// via https://stackoverflow.com/questions/13551001/typescript-mutiple-call-signature-for-exported-function
export default function razer(opts: IOptions, specifiedLogger?: any): IConsoleLog | INoop
// via https://stackoverflow.com/questions/29382389/defining-array-with-multiple-types-in-typescript
export default function razer(...args: (string | number | boolean | object | [])[]): void
