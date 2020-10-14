function rangeIter(lb, ub) {
  if (lb === undefined || typeof lb !== 'number') {
    throw new TypeError(`${lb} is not a number`);
  }
  if (ub === undefined || typeof ub !== 'number') {
    throw new TypeError(`${ub} is not a number`);
  }
  let startValue = lb;
  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (startValue <= ub) {
            // eslint-disable-next-line no-plusplus
            return { value: startValue++, done: false };
          }
          return { done: true };
        },
        [Symbol.iterator]() {
          let currentIndex = lb;
          return {
            next() {
              if (currentIndex <= ub) {
                // eslint-disable-next-line no-plusplus
                return { value: currentIndex++, done: false };
              }
              return { done: true };
            },
          };
        },
      };
    },
  };
}

export { rangeIter };
