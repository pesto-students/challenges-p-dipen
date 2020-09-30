// your implementation

const isObject = (obj) => {
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    throw new Error('Argument(s) must be an object');
  }
};

const isFunction = (fn) => {
  if (typeof fn !== 'function') {
    throw new Error('Second Argument must be a function');
  }
};

const map = (obj, fn) => {
  isObject(obj);
  isFunction(fn);
  return Object.keys(obj).reduce((acc, key) => {
    if (typeof obj[key] !== 'function') {
      const [newKey, newValue] = fn([key, obj[key]]);
      acc[newKey] = newValue;
    } else {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};
const filter = (obj, fn) => {
  isObject(obj);
  isFunction(fn);
  return Object.keys(obj).reduce((acc, key) => {
    if (typeof obj[key] !== 'function') {
      if (fn([key, obj[key]])) {
        acc[key] = obj[key];
      }
    } else {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};

const invert = (obj) => {
  isObject(obj);
  return Object.keys(obj).reduce((acc, key) => {
    if (typeof obj[key] !== 'function') {
      const val = obj[key];
      acc[val] = key;
    } else {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};

const merge = (...args) => {
  let i = 0;
  while (i < args.length) {
    isObject(args[i]);
    i += 1;
  }
  return Object.assign({}, ...args);
};

const all = (obj, fn) => {
  isObject(obj);
  isFunction(fn);
  return (
    Object.keys(Object.fromEntries(Object.entries(obj).filter(fn))).length
    === Object.keys(obj).length
  );
};

const some = (obj, fn) => {
  isObject(obj);
  isFunction(fn);
  return (
    Object.keys(Object.fromEntries(Object.entries(obj).filter(fn))).length > 0
  );
};

export {
  map, filter, invert, merge, all, some,
};
