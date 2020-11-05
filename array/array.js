function analyze(array) {
  let obj = {
    average: array.reduce((sum, current) => sum + current) / array.length,
    min: array.sort((a, b) => a - b)[0],
    max: array.sort((a, b) => b - a)[0],
    length: array.length
  }
  return obj
}

module.exports = analyze;