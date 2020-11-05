const { expect } = require("@jest/globals")
const caesar = require('./caesar')

test('the same case is kept', () => {
  expect(caesar('CaESar', 1)).toBe('DbFTbs')
})

test('punctuation stays the same', () => {
  expect(caesar('!,;:. ', 1)).toBe('!,;:. ')
})

test('letters are wrapped', () => {
  expect(caesar('caesar', 50)).toBe('aycqyp')
})