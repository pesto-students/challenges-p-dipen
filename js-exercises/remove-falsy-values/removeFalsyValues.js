function removeFalsyValues(array) {
  const falsyValues = [null, undefined, NaN, '', false, 0];
  return array.filter((value) => !falsyValues.includes(value));
}

export { removeFalsyValues };
