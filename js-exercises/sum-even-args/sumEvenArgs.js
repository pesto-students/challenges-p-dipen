// eslint-disable-next-line max-len
const sumEvenArgs = (...args) => args.filter((value) => value % 2 === 0).reduce((total, value) => total + value, 0);

export { sumEvenArgs };
