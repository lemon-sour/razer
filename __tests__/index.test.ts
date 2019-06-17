import razer, { CONSOLE_LOG } from '../src/index'

describe('index razer test', () => {
  test('見る用', () => {
    expect.assertions(1)

    console.log('text', 'text2', 'text3')
    razer('text', 'text2', 'text3')

    expect(true).toBe(true)
  })

  test('引数が string 1個', () => {
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

  test('引数が string 2個', () => {
    expect.assertions(3)

    const spyLog = jest.spyOn(console, 'log')
    spyLog.mockImplementation(x => x)
    razer('text', 'text2')

    expect(console.log).toBeCalled()
    expect(spyLog.mock.calls[0][0]).toBe('text')
    expect(spyLog.mock.calls[0][1]).toBe('text2')

    spyLog.mockReset()
    spyLog.mockRestore()
  })

  test('引数が string 3個', () => {
    expect.assertions(4)

    const spyLog = jest.spyOn(console, 'log')
    spyLog.mockImplementation(x => x)
    razer('text', 'text2', 'text3')

    expect(console.log).toBeCalled()
    expect(spyLog.mock.calls[0][0]).toBe('text')
    expect(spyLog.mock.calls[0][1]).toBe('text2')
    expect(spyLog.mock.calls[0][2]).toBe('text3')

    spyLog.mockReset()
    spyLog.mockRestore()
  })

  test('第一引数に true を返す fn 、第二引数にモック用のロガー', () => {
    expect.assertions(1)

    const mockFn = jest.fn(CONSOLE_LOG)
    const logger = razer((): boolean => {
      return true
    }, mockFn)
    logger('test')

    expect(mockFn).toHaveBeenCalled()
  })

  test('process.server が true', () => {
    expect.assertions(1)

    const mockFn = jest.fn(CONSOLE_LOG)
    process.server = true
    const logger = razer((): boolean => {
      return process.server
    }, mockFn)
    logger('test')

    expect(mockFn).toHaveBeenCalled()
  })

  test('process.server が false', () => {
    expect.assertions(1)

    const mockFn = jest.fn(CONSOLE_LOG)
    process.server = false
    const logger = razer((): boolean => {
      return process.server
    }, mockFn)
    logger('test')

    expect(mockFn).not.toHaveBeenCalled()
  })
})
