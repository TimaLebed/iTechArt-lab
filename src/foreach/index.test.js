import foreach from './index';

test('foreach(array, callback): foreach return result by callback', () => {
  const mockCallback = jest.fn((x) => { 42 + x; });

  foreach([0, 1], mockCallback);

  expect(mockCallback.mock.calls.length).toBe(2);
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  expect(mockCallback.mock.calls[1][0]).toBe(1);
  expect(mockCallback.mock.results[0].value).toBe(42);
  expect(mockCallback.mock.results[1].value).toBe(43);
});
