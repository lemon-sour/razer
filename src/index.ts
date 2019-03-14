import C from './common/constants'

export default function razer(...args: any[]): boolean {
  if (!args) {
    return false
  }

  if (args.length <= 0) {
    return false
  }

  // prod 版のビルドのときは console.log を無効化する
  if (
    process.env.NODE_ENV === C.PROD ||
    process.env.NODE_ENV === C.PRODUCTION
  ) {
    return false
  }

  console.log(...args)
  return true
}
