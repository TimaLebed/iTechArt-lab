import foreach from '../foreach';

export default function map(array, callback) {
  const result = [];

  if (typeof array === 'function') {
    const func = array;

    foreach(this.result, (item, index, self) => {
      result.push(func(item, index, self));
    });

    this.result = result;
  } else {
    foreach(array, (item, index, self) => {
      result.push(callback(item, index, self));
    });
  }

  return Array.isArray(array) ? result : this;
}
