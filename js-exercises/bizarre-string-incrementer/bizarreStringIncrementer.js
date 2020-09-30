function isNumber(n) {
  // eslint-disable-next-line no-restricted-globals
  return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}

function rtnSuffixNumbers(str) {
  let i = str.length - 1;
  let stillNum = false;
  let rtnStr = '';
  do {
    if (isNumber(str[i])) {
      rtnStr = str[i] + rtnStr;
      stillNum = true;
      i -= 1;
    } else {
      stillNum = false;
    }
  } while (stillNum && i > -1);
  return rtnStr;
}

function bizarreStringIncrementer(str) {
  const num = rtnSuffixNumbers(str);
  if (num !== '') {
    let addingNum = parseInt(num, 10) + 1;
    if (addingNum.toString().length < num.length) {
      while (addingNum.toString().length < num.length) {
        addingNum = `0${addingNum}`;
      }
    }
    return `${str.slice(0, str.length - num.length)}${addingNum}`;
  }
  return `${str}1`;
}

export { bizarreStringIncrementer };
