const { expect } = require("@jest/globals")
const calculator = require('./calculator')

// Add
test('adds integer numbers', () => {
  expect(calculator.add(1, 2)).toBe(3)
})

test('adds floating numbers', () => {
  expect(calculator.add(1.2, 3.4)).toBeCloseTo(4.6)
})

test('adds negative numbers', () => {
  expect(calculator.add(1, -3)).toBe(-2)
})

// Substract
test('substract integer numbers', () => {
  expect(calculator.substract(1, 2)).toBe(-1)
})

test('substract floating numbers', () => {
  expect(calculator.substract(0.1, 0.2)).toBeCloseTo(-0.1)
})

test('substract negative numbers', () => {
  expect(calculator.substract(-1, -2)).toBe(1)
})

// Multiply
test('multiply integer numbers', () => {
  expect(calculator.multiply(1, 2)).toBe(2)
})

test('multiplying by 0 gives 0', () => {
  expect(calculator.multiply(0, 10)).toBe(0)
})

test('multiply negative numbers', () => {
  expect(calculator.multiply(1, -2)).toBe(-2)
})

test('multiply floating numbers', () => {
  expect(calculator.multiply(0.1, 0.2)).toBeCloseTo(0.02)
})

// Divide
test('divide integer numbers', () => {
  expect(calculator.divide(1, 2)).toBeCloseTo(0.5)
})

test('divide floating numbers', () => {
  expect(calculator.divide(1, 0.5)).toBe(2)
})

test('divide negative numbers', () => {
  expect(calculator.divide(1, -2)).toBeCloseTo(-0.5)
})

test('dividing by 0 gives infinity', () => {
  expect(calculator.divide(1, 0)).toBe(Infinity)
})