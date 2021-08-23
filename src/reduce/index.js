import foreach from '../foreach';

export default function reduce(array, callback, initialValue) {
  let initVal = initialValue;

  if (typeof array === 'function') {
    const func = array;

    foreach(this.result, (item, index, self) => {
      initVal = initVal !== undefined
        ? func(initVal, item, index, self)
        : item;
    });

    this.result = initVal;
  } else {
    foreach(array, (item, index, self) => {
      initVal = initVal !== undefined
        ? callback(initVal, item, index, self)
        : item;
    });
  }

  return Array.isArray(array) ? initVal : this;
}
