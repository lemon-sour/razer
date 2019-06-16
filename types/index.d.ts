/**
 * @file インターフェイスのエントリーポイント
 */

// augment typings of NodeJS.Process
import './process'

export * from './IConsoleLog'
export * from './IOptions'
export * from './INoop'

/**
 * console.log の実態
 */
import { IConsoleLog } from './IConsoleLog'
export const CONSOLE_LOG: IConsoleLog

/**
 * razer インターフェイス
 */
export default function razer(textORopts?: any, specifiedLogger?: any): any

