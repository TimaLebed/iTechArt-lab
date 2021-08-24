import take from './index';

test('take(array, n): take array and return new array by N', () => {
  const result = take([1, 2, 3, 4], 2);
  const expectedResult = [1, 2];

  expect(result).toStrictEqual(expectedResult);
});
