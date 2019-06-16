/**
 * @file インターフェイスのエントリーポイント
 */

// augment typings of NodeJS.Process
import './process'

export * from './IConsoleLog'
export * from './IOptions'
export * from './INoop'

/**
 * @file razer インターフェイス
 */

export default function razer(textORopts?: any, specifiedLogger?: any): any

