function cacheFunction(fn) {
  const cache = {};
  return (num) => {
    if (num in cache) {
      return cache[num];
    }
    const result = fn(num);
    cache[num] = result;
    return result;
  };
}

export { cacheFunction };
