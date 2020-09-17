function balancedBraces(...args) {
  const str = args[0];
  const stack = [];
  for (const word of Object.values(str)) {
    if (word === '{' || word === '[' || word === '(') {
      stack.push(word);
    } else if (word === '}') {
      if (stack.pop() !== '{') {
        return false;
      }
    } else if (word === ']') {
      if (stack.pop() !== '[') {
        return false;
      }
    } else if (word === ')') {
      if (stack.pop() !== '(') {
        return false;
      }
    }
  }
  return !(stack.length > 0);
}

export { balancedBraces };
