function minDeleteToMakeSideBySideCharacterUnique(str) {
  let minDeleteChar = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      minDeleteChar += 1;
    }
  }
  return minDeleteChar;
}

function alternatingCharacters(arr) {
  const rtnArr = [];
  arr.forEach((str) => {
    rtnArr.push(minDeleteToMakeSideBySideCharacterUnique(str));
  });
  return rtnArr;
}

export { alternatingCharacters };
