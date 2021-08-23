import reduce from './index';

function callback(acc, currentValue) {
  return acc + currentValue;
}

test('reduce(array, callback, initialValue): reduce return number by callback', () => {
  const result = reduce([1, 2, 3, 4], callback);
  const expectedResult = 10;

  expect(result).toStrictEqual(expectedResult);
});

test('reduce(array, callback, initialValue): reduce return number by callback', () => {
  const result = reduce([1, 2, 3, 4], callback, -10);
  const expectedResult = 0;

  expect(result).toStrictEqual(expectedResult);
});
