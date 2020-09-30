function quickSort(origArray) {
  if (origArray.length <= 1) {
    return origArray;
  }
  const leftHandSideValue = [];
  const rightHandSideValue = [];
  const newArray = [];
  const pivot = origArray.pop();
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < origArray.length; i++) {
    if (origArray[i] <= pivot) {
      leftHandSideValue.push(origArray[i]);
    } else {
      rightHandSideValue.push(origArray[i]);
    }
  }

  return newArray.concat(
    quickSort(leftHandSideValue),
    pivot,
    // eslint-disable-next-line no-unused-vars
    quickSort(rightHandSideValue),
  );
}
function minima(requireElements, arr) {
  return quickSort(arr).slice(0, requireElements);
}

export { minima };
