export default function take(array, n) {
  const result = [];

  if (typeof array === 'number') {
    const number = array;

    this.result = take(this.result, number);
  }

  for (let i = 0; i < n; i += 1) {
    result.push(array[i]);
  }

  return Array.isArray(array) ? result : this;
}
