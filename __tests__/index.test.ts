import razer, { CONSOLE_LOG } from '../src/index'

describe('index razer test', () => {
  test('引数なしパターン', () => {
    expect.assertions(2)

    // https://medium.com/@akameco/jest%E3%81%A7console-log%E3%82%92%E3%83%A2%E3%83%83%E3%82%AF%E3%81%99%E3%82%8B-fd6cd61bf926
    const spyLog = jest.spyOn(console, 'log')
    spyLog.mockImplementation(x => x)
    razer('text')

    expect(console.log).toBeCalled()
    expect(spyLog.mock.calls[0][0]).toBe('text')

    spyLog.mockReset()
    spyLog.mockRestore()
  })

  test('第一引数に空のオブジェクト、第二引数にモック用の fn', () => {
    expect.assertions(1)

    const mockFn = jest.fn(CONSOLE_LOG)
    const logger = razer({}, mockFn)
    logger('test')

    expect(mockFn).toHaveBeenCalled()
  })

  test('isSSR が true で process.server が true', () => {
    expect.assertions(1)

    const mockFn = jest.fn(CONSOLE_LOG)
    process.server = true
    const logger = razer(
      {
        isSSR: true
      },
      mockFn
    )
    logger('test')

    expect(mockFn).toHaveBeenCalled()
  })

  test('isSSR が true で process.server が false', () => {
    expect.assertions(1)

    const mockFn = jest.fn(CONSOLE_LOG)
    process.server = false
    const logger = razer(
      {
        isSSR: true
      },
      mockFn
    )
    logger('test')

    expect(mockFn).not.toHaveBeenCalled()
  })

  test('isCSR が true で process.client が true', () => {
    expect.assertions(1)

    const mockFn = jest.fn(CONSOLE_LOG)
    process.client = true
    const logger = razer(
      {
        isCSR: true
      },
      mockFn
    )
    logger('test')

    expect(mockFn).toHaveBeenCalled()
  })

  test('isCSR が true で process.client が false', () => {
    expect.assertions(1)

    const mockFn = jest.fn(CONSOLE_LOG)
    process.client = false
    const logger = razer(
      {
        isCSR: true
      },
      mockFn
    )
    logger('test')

    expect(mockFn).not.toHaveBeenCalled()
  })

  test('isProd が true で process.env.NODE_ENV が prod', () => {
    expect.assertions(1)

    const mockFn = jest.fn(CONSOLE_LOG)
    process.env.NODE_ENV = 'prod'
    const logger = razer(
      {
        isProd: true
      },
      mockFn
    )
    logger('test')

    expect(mockFn).toHaveBeenCalled()
  })

  test('isProd が true で process.env.NODE_ENV が production', () => {
    expect.assertions(1)

    const mockFn = jest.fn(CONSOLE_LOG)
    process.env.NODE_ENV = 'production'
    const logger = razer(
      {
        isProd: true
      },
      mockFn
    )
    logger('test')

    expect(mockFn).toHaveBeenCalled()
  })
})
