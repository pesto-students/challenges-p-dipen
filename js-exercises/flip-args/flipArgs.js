function flipArgs(...args) {
  const arr = [];
  for (const arg of Object.values(args)) {
    arr.unshift(arg);
  }
  return arr;
}

export { flipArgs };
