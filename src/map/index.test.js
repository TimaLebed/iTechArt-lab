import map from './index';

function callback(el) {
  return el * 2;
}

test('map(array, callback): map return new array by callback', () => {
  const result = map([1, 2, 3, 4], callback);
  const expectedResult = [2, 4, 6, 8];

  expect(result).toStrictEqual(expectedResult);
});
