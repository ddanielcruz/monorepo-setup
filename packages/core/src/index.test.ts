import { isEven, isOdd } from './index'

describe('core', () => {
  it('detects odd numbers', () => {
    expect(isOdd(1)).toBe(true)
    expect(isEven(1)).toBe(false)
  })

  it('detects even numbers', () => {
    expect(isOdd(2)).toBe(false)
    expect(isEven(2)).toBe(true)
  })
})
