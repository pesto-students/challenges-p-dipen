import { count, cycle, repeat } from './iterInfinite';

describe('count', () => {
  it('throw error on passing wrong arguments', () => {
    try {
      count();
    } catch (err) {
      expect(err).toThrow();
    }
    try {
      count(1, NaN);
    } catch (err) {
      expect(err).toThrow();
    }
    try {
      count(null);
    } catch (err) {
      expect(err).toThrow();
    }
  });

  it('only passing start value in count', () => {
    const arr = [1, 2, 3, 4, 5];
    const generateCount = count(1);
    arr.forEach((value) => expect(generateCount.next().value).toBe(value));
  });

  it('passing start value in count with steps', () => {
    const arr = [1, 3, 5, 7, 9];
    const generateCount = count(1, 2);
    arr.forEach((value) => expect(generateCount.next().value).toBe(value));
  });
});

describe('cycle', () => {
  it('throw error on passing wrong arguments', () => {
    try {
      cycle();
    } catch (err) {
      expect(err).toThrow();
    }
    try {
      cycle(1, NaN);
    } catch (err) {
      expect(err).toThrow();
    }
    try {
      cycle(null);
    } catch (err) {
      expect(err).toThrow();
    }
  });

  it('should match with the result', () => {
    const arr = ['a', 'b', 'c', 'd'];
    const generateCycle = cycle('abcd');
    arr.forEach((value) => expect(generateCycle.next().value).toBe(value));
  });
  it('should match with the result with first time forEach loop not after it', () => {
    const arr = ['a', 'b', 'c', 'd'];
    const generateCycle = cycle('abcd', 1);
    arr.forEach((value) => expect(generateCycle.next().value).toBe(value));
    arr.forEach(() => expect(generateCycle.next().value).toBe(undefined));
  });
});

describe('repeat', () => {
  it('throw error on passing wrong arguments', () => {
    try {
      repeat();
    } catch (err) {
      expect(err).toThrow();
    }
    try {
      repeat(1, NaN);
    } catch (err) {
      expect(err).toThrow();
    }
    try {
      repeat(null);
    } catch (err) {
      expect(err).toThrow();
    }
  });

  it('should match with the result', () => {
    const arr = ['a', 'a', 'a', 'a'];
    const generateRepeat = repeat('a', 4);
    arr.forEach((value) => expect(generateRepeat.next().value).toBe(value));
  });
  it('should match with the result with first time forEach loop not after it', () => {
    const arr = ['a', 'a', 'a', 'a'];
    const generateRepeat = repeat('a', 4);
    arr.forEach((value) => expect(generateRepeat.next().value).toBe(value));
    arr.forEach(() => expect(generateRepeat.next().value).toBe(undefined));
  });
});
