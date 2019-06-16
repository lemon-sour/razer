import C from '../src/common/constants'

const pjName: string = require('../package.json').name

describe('constants', () => {
  test('should return pjName from constants', () => {
    expect.assertions(1)
    expect(C.pjName).toEqual(pjName)
  })

  test('should return isSSR from constants', () => {
    expect.assertions(1)
    expect(C.isSSR).toEqual(false)
  })

  test('should return isCSR from constants', () => {
    expect.assertions(1)
    expect(C.isCSR).toEqual(false)
  })

  test('should return isProd from constants', () => {
    expect.assertions(1)
    expect(C.isProd).toEqual(false)
  })

  test('should return PROD from constants', () => {
    expect.assertions(1)
    expect(C.PROD).toEqual('prod')
  })

  test('should return PRODUCTION from constants', () => {
    expect.assertions(1)
    expect(C.PRODUCTION).toEqual('production')
  })
})
