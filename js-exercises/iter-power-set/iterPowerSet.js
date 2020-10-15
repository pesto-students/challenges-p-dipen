// You can change the `args`
function* generateSet(set) {
  const arr = set;
  const len = arr.length;
  yield [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 2 ** len; i++) {
    const subset = [];
    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < len; j++) {
      // eslint-disable-next-line no-bitwise
      if ((i & (1 << j)) > 0) {
        // is the left shift operator
        subset.push(arr[j]);
        yield subset;
      }
    }
  }
}

function iterPowerSet(set) {
  if (!(set instanceof Set)) {
    throw new TypeError(
      `Expected a Set, instead got ${set} of type ${typeof set}`,
    );
  }
  return new Set([...generateSet(Array.from(set))]);
}

export { iterPowerSet };
