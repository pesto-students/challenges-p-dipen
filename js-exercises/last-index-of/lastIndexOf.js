function lastIndexOf(...args) {
  let lastIndex = -1;
  const findLastIndex = args[0];
  const arr = args[1];
  arr.forEach((value, index) => {
    if (value === findLastIndex) {
      if (lastIndex < index) {
        lastIndex = index;
      }
    }
  });
  return lastIndex;
}

export { lastIndexOf };
