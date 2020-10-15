import { iterPowerSet } from './iterPowerSet';

describe('iterPowerSet', () => {
  test('should throw error', () => {
    expect(() => iterPowerSet()).toThrowError(TypeError);
  });
  test('should match with expected value', () => {
    expect(iterPowerSet(new Set([1, 2, 3]))).toEqual(
      new Set([[], [1], [2], [3], [1, 2], [2, 3], [1, 3], [1, 2, 3]]),
    );
  });
});
