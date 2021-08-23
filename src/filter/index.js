import foreach from '../foreach';

export default function filter(array, callback) {
  const result = [];

  if (typeof array === 'function') {
    const func = array;

    foreach(this.result, (item, index, self) => {
      if (func(item, index, self)) {
        result.push(item);
      }
    });

    this.result = result;
  } else {
    foreach(array, (item, index, self) => {
      if (callback(item, index, self)) {
        result.push(item);
      }
    });
  }

  return Array.isArray(array) ? result : this;
}
