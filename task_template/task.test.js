const {sum} = require('./task')

test('test template', () => {
  expect(sum(1, 2)).toBe(3)
})
