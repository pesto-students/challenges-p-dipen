import { map, filter } from './objectUtils';

describe('object utilities', () => {
  const prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };
  it('checking the map function', () => {
    const rtnMap = {
      BANANA: 10,
      MEAT: 40,
      ORANGE: 20,
    };
    expect(map(prices, ([key, val]) => [key.toUpperCase(), val * 10])).toEqual(
      rtnMap,
    );
  });
  it('checking the filter function', () => {
    const rtnFilter = {
      banana: 1,
    };
    // eslint-disable-next-line no-unused-vars
    expect(filter(prices, ([key, val]) => key === 'banana')).toEqual(rtnFilter);
  });
});
