const { expect } = require("@jest/globals")
const analyze = require('./array')

test('calculate the average', () => {
  expect(analyze([1,8,3,4,2,6]).average).toBe(4)
})

test('calculate the min', () => {
  expect(analyze([1,8,3,4,2,6]).min).toBe(1)
})

test('calculate the max', () => {
  expect(analyze([1,8,3,4,2,6]).max).toBe(8)
})

test('calculate the length', () => {
  expect(analyze([1,8,3,4,2,6]).length).toBe(6)
})