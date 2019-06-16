/**
 * @file types のテスト
 */

import { expectType } from 'tsd'
import razer, { CONSOLE_LOG, IConsoleLog, INoop, IOptions } from './types'

expectType<void>(razer('foo', 'bar'))
expectType<void>(razer('foo', 1))
expectType<void>(razer('foo', {}))
expectType<void>(razer('foo', []))
expectType<void>(razer(1, 'foo'))
expectType<void>(razer({}, 'foo'))
expectType<void>(razer([], 'foo'))
expectType<void>(razer(1, 2))
expectType<void>(razer(1, 2, 3))

expectType<INoop>(razer({ isSSR: true } as IOptions))
expectType<INoop>(razer({} as IOptions))

process.server = true
expectType<IConsoleLog>(razer({ isSSR: true } as IOptions, CONSOLE_LOG))
const opts: IOptions = {
  isSSR: true
}
expectType<IConsoleLog>(razer(opts))
