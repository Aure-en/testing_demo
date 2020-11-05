const capitalize = require('./capitalize')

const { expect } = require("@jest/globals")

test('the first letter of a word is capitalized', () => {
  expect(capitalize('word')).toBe('Word')
})

test('the first letter of a sentence is capitalized', () => {
  expect(capitalize('capitalize this sentence')).toBe('Capitalize this sentence')
})

test('only the first letter of a string is capitalized', () => {
  expect(capitalize('caPiTALIze thIS senTEncE')).toBe('Capitalize this sentence')
})

test('numbers are no affected', () => {
  expect(capitalize('123')).toBe('123')
})