import * as library from '../../index';
import value from './index';

test('value(): value array and return library', () => {
  const result = value.apply(library);
  const expectedResult = library.result;

  expect(result).toStrictEqual(expectedResult);
});

test('value(): library.chain([1, 2, 3]).take(2).skip(1).value() return new array', () => {
  const result = library.chain([1, 2, 3]).take(2).skip(1).value();
  const expectedResult = [2];

  expect(result).toStrictEqual(expectedResult);
});

test('value(): library.chain([1, 2, 3, 4, 5, 6]).filter((el) => el % 2 === 0).take(2).value() return new array', () => {
  const result = library.chain([1, 2, 3, 4, 5, 6]).filter((el) => el % 2 === 0).take(2).value();
  const expectedResult = [2, 4];

  expect(result).toStrictEqual(expectedResult);
});

test('value(): library.chain([2, 4, 6, 8]).map((el) => el * 2).skip(2).value() return new array', () => {
  const result = library.chain([2, 4, 6, 8]).map((el) => el * 2).skip(2).value();
  const expectedResult = [12, 16];

  expect(result).toStrictEqual(expectedResult);
});

test('value(): library.chain([5, 10, 15, 20, 100]).take(4).reduce((el, initialValue) => el + initialValue, 10).value() return new array', () => {
  const result = library.chain([5, 10, 15, 20, 100])
    .take(4)
    .reduce((el, initialValue) => el + initialValue, 10)
    .value();
  const expectedResult = 50;

  expect(result).toStrictEqual(expectedResult);
});
