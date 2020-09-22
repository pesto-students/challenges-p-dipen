function rot13(str) {
  let rtnStr = '';
  for (const char of Object.values(str)) {
    const charCode = char.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      const rtnCharCode = charCode + 13 > 90 ? charCode + 13 - 26 : charCode + 13;
      rtnStr += String.fromCharCode(rtnCharCode);
    } else {
      rtnStr += char;
    }
  }
  return rtnStr;
}

export { rot13 };
