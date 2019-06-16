/**
 * @file types のテスト
 */

import { expectType } from 'tsd'
import razer, { CONSOLE_LOG, IConsoleLog, INoop, IOptions } from './index'

expectType<void>(razer('foo', 'bar'))

expectType<INoop>(razer({
  isSSR: true
} as IOptions))

process.server = true
expectType<IConsoleLog>(razer({
  isSSR: true
} as IOptions, CONSOLE_LOG))
