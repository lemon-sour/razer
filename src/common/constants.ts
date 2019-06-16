/**
 * @file 定数ファイル
 */

/**
 * プロジェクト名
 * @type {string}
 */
const pjName: string = require('../../package.json').name

/**
 * 定数
 */
const Constants = {
  pjName,

  isSSR: false,
  isCSR: false,
  isProd: false,

  PROD: 'prod',
  PRODUCTION: 'production'
}

export default Constants
