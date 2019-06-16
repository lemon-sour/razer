/**
 * @file razer のオプションのインターフェイス
 */

// via https://qiita.com/uhyo/items/583ddf7af3b489d5e8e9
type RequireOne<T, K extends keyof T = keyof T> =
  K extends keyof T ? PartialRequire<T, K> : never;
type PartialRequire<O, K extends keyof O> = {
  [P in K]-?: O[P]
} & O

export type IOptions = RequireOne<{
  isSSR?: boolean
  isCSR?: boolean
  isProd?: boolean
}>
