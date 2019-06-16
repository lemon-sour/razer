"use strict";
/**
 * @file 定数ファイル
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * プロジェクト名
 * @type {string}
 */
const pjName = require('../../package.json').name;
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
};
exports.default = Constants;
