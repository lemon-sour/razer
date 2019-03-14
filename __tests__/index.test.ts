import razer from '../src/index'
import C from '../src/common/constants'

describe('index test', () => {
  test('test single arg', () => {
    expect.assertions(1)
    const b = razer('test single arg')
    expect(b).toEqual(true)
  })

  test('test multi args', () => {
    expect.assertions(1)
    const b = razer('test', 'multi', 'args', 1, true)
    expect(b).toEqual(true)
  })

  test('should not show message when test is ' + C.PROD, () => {
    expect.assertions(1)
    process.env.NODE_ENV = C.PROD
    const b = razer(C.PROD)
    expect(b).toEqual(false)
  })

  test('should not show message when test is ' + C.PRODUCTION, () => {
    expect.assertions(1)
    process.env.NODE_ENV = C.PRODUCTION
    const b = razer(C.PRODUCTION)
    expect(b).toEqual(false)
  })

  test('should show message when test is stg', () => {
    expect.assertions(1)
    process.env.NODE_ENV = 'stg'
    const b = razer('stg')
    expect(b).toEqual(true)
  })

  test('should show message when test is dev', () => {
    expect.assertions(1)
    process.env.NODE_ENV = 'dev'
    const b = razer('dev')
    expect(b).toEqual(true)
  })
})
