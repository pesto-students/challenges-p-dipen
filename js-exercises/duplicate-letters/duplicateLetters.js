function duplicateLetters(...args) {
  const wordCount = {};
  let max = 0;
  Object.values(args[0]).forEach((w) => {
    wordCount[w] = w in wordCount ? wordCount[w] + 1 : 1;
    if (max <= wordCount[w]) max = wordCount[w];
  });
  return max > 1 ? max : false;
}

export { duplicateLetters };
