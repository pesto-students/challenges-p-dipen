import {
  map, filter, invert, merge, all, some,
} from './objectUtils';

describe('object utilities', () => {
  const prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };
  it('testing the map function', () => {
    const rtnMap = {
      BANANA: 10,
      MEAT: 40,
      ORANGE: 20,
    };
    expect(map(prices, ([key, val]) => [key.toUpperCase(), val * 10])).toEqual(
      rtnMap,
    );
  });
  it('testing the filter function', () => {
    const rtnFilter = {
      banana: 1,
    };
    // eslint-disable-next-line no-unused-vars
    expect(filter(prices, ([key, val]) => key === 'banana')).toEqual(rtnFilter);
  });
  it('testing the invert function', () => {
    expect(invert({ a: 1, b: 2, c: 3 })).toEqual({ 1: 'a', 2: 'b', 3: 'c' });
  });
  it('testing the merge function', () => {
    expect(merge(prices, { a: 1, b: 2, c: 3 })).toEqual({
      a: 1,
      b: 2,
      c: 3,
      banana: 1,
      orange: 2,
      meat: 4,
    });
  });
  it('testing the all and some functions', () => {
    // eslint-disable-next-line no-unused-vars
    expect(all({ a: 1, b: 2, c: 3 }, ([_, value]) => value > 0)).toEqual(true);
    // eslint-disable-next-line no-unused-vars
    expect(some({ a: 1, b: 2, c: 3 }, ([_, value]) => value > 0)).toEqual(true);
  });
});
