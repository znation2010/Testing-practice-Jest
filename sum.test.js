const stringLength = require('./sum.js');

test('stringLength test', () => {
  const inputString = "Hello, world!";
  const result = stringLength(inputString);
  expect(result).toBe(inputString.length);
});