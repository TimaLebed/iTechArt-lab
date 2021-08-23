import map from './index';

test('map(array, callback): map return new array by callback', () => {
  const result = map([1, 2, 3, 4], (el) => { el * 2; });
  const expectedResult = [2, 4, 6, 8];

  expect(result).toStrictEqual(expectedResult);
});
