import { isString } from 'util';

function abbreviateString(str) {
  if (!isString(str)) {
    throw new Error('Invalid Parameter');
  }
  const splitNames = str.trim().split(' ');
  if (splitNames.length > 1) {
    const rtnStr = `${splitNames[0]
      .charAt(0)
      .toUpperCase()}${splitNames[0].slice(1)} ${splitNames[
      splitNames.length - 1
    ]
      .charAt(0)
      .toUpperCase()}.`;
    return rtnStr;
  }
  return splitNames[0];
}

export { abbreviateString };
