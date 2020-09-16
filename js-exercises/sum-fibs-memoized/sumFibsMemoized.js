function sumFibs(num) {
  if (num <= 0) return 0;
  if (num === 1) return 1;
  const arr = [1, 1];
  let nextNum = arr[arr.length - 1] + arr[arr.length - 2];
  while (nextNum <= num) {
    arr.push(nextNum);
    nextNum = arr[arr.length - 1] + arr[arr.length - 2];
  }
  return arr.filter((x) => x % 2 !== 0).reduce((a, b) => a + b);
}

function cacheFunction(sumFb) {
  const cache = {};
  return (num) => {
    if (num in cache) {
      return cache[num];
    }
    const result = sumFb(num);
    cache[num] = result;
    return result;
  };
}

export { sumFibs, cacheFunction };
