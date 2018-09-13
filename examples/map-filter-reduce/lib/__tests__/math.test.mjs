import { isOdd, double, add } from '../math'

describe ('lib/math', () => {
  describe ('isOdd', () => {
    test ('3 is odd', () => {
      const expected = true
      const actual = isOdd (3)
      expect (actual).toBe (expected)
    })

    test ('4 is not odd', () => {
      const expected = false
      const actual = isOdd (4)
      expect (actual).toBe (expected)
    })
  })

  describe ('double', () => {
    test ('number is doubled', () => {
      const expected = 32
      const actual = double (16)
      expect (actual).toBe (expected)
    })
  })

  describe ('add', () => {
    test ('numbers are added', () => {
      const expected = 7
      const actual = add (3) (4)
      expect (actual).toBe (expected)
    })
  })
})
