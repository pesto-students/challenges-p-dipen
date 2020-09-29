// your implementation
const map = (obj, fn) => Object.fromEntries(Object.entries(obj).map(fn));
const filter = (obj, fn) => Object.fromEntries(Object.entries(obj).filter(fn));

const invert = (obj, fn) => Object.keys(obj).reduce((acc, key) => {
  const val = fn ? fn(obj[key]) : obj[key];
  acc[val] = key;
  return acc;
}, {});

const merge = (...args) => Object.assign({}, ...args);

const all = (obj, fn) => Object.keys(Object.fromEntries(Object.entries(obj).filter(fn))).length
  === obj.length;

// eslint-disable-next-line max-len
const some = (obj, fn) => Object.keys(Object.fromEntries(Object.entries(obj).filter(fn))).length > 0;

export {
  map, filter, invert, merge, all, some,
};
