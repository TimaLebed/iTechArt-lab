export default function skip(array, n) {
  const result = [];

  if (typeof array === 'number') {
    const number = array;

    this.result = skip(this.result, number);
  }

  for (let i = n; i < array.length; i += 1) {
    result.push(array[i]);
  }
}
