/**
 * @file types のテスト
 */

import { expectType } from 'tsd'
import razer, { CONSOLE_LOG, IConsoleLog, INoop } from './types'

expectType<void>(razer('foo', 'bar'))
expectType<void>(razer('foo', 1))
expectType<void>(razer('foo', {}))
expectType<void>(razer('foo', []))
expectType<void>(razer(1, 'foo'))
expectType<void>(razer({}, 'foo'))
expectType<void>(razer([], 'foo'))
expectType<void>(razer(1, 2))
expectType<void>(razer(1, 2, 3))
expectType<void>(razer(true))
expectType<void>(razer(true, false))
expectType<void>(razer({
  hoge: 'foo'
}))

expectType<IConsoleLog>(razer(() => {
  return true
}))
expectType<INoop>(razer(() => {
  return false
}))

expectType<IConsoleLog>(razer(() => {
  return true
}, CONSOLE_LOG))
expectType<INoop>(razer(() => {
  return false
}, CONSOLE_LOG))
