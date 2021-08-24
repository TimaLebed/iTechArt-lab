import filter from '.';

test('filter(array, callback): filter return new array by callback', () => {
  const result = filter([1, 2, 3, 4], (el) => el % 2 === 0);
  const expectedResult = [2, 4];

  expect(result).toStrictEqual(expectedResult);
});
