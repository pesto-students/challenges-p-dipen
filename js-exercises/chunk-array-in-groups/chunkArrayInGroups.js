function chunkArrayInGroups(array, chunkSize) {
  const rtnArr = [];
  let arr = [];
  array.forEach((value) => {
    arr.push(value);
    if (arr.length === chunkSize) {
      rtnArr.push(arr);
      arr = [];
    }
  });
  if (arr.length > 0) {
    rtnArr.push(arr);
  }
  return rtnArr;
}

export { chunkArrayInGroups };
