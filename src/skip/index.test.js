import skip from './index';

test('skip(array, n): skip array and return new array by N', () => {
  const result = skip([1, 2, 3, 4], 2);
  const expectedResult = [3, 4];

  expect(result).toStrictEqual(expectedResult);
});
