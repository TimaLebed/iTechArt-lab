import chain from '.';
import * as library from '../../index';

test('chain(array, n): chain array and return library', () => {
  const result = chain.apply(library, [1, 2, 3]);
  const expectedResult = library;

  expect(result).toStrictEqual(expectedResult);
});
