import reduce from './index';

test('reduce(array, callback, initialValue): reduce return number by callback', () => {
  const result = reduce([1, 2, 3, 4], (acc, currentValue) => { acc + currentValue; });
  const expectedResult = 10;

  expect(result).toStrictEqual(expectedResult);
});

test('reduce(array, callback, initialValue): reduce return number by callback', () => {
  const result = reduce([1, 2, 3, 4], (acc, currentValue) => { acc + currentValue; }, -10);
  const expectedResult = 0;

  expect(result).toStrictEqual(expectedResult);
});
