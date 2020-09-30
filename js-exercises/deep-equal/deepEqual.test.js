import { deepEqual } from './deepEqual';

describe('deepEqual Test', () => {
  test('if both the arguments are same', () => {
    const obj = { a: 1, b: 2 };
    expect(deepEqual(obj, obj)).toBe(true);
  });
  test('compare two objects deeply with descriptors', () => {
    const obj = { a: 1, b: 2 };
    const obj2 = { a: 1 };
    const obj3 = { a: 1 };
    Object.defineProperty(obj2, 'b', { value: 2 });
    expect(deepEqual(obj, obj2)).toBe(true);
    expect(deepEqual(obj, obj2, { matchDescriptors: true })).toBe(false);
    Object.defineProperty(obj3, 'b', {
      value: 2,
      enumerable: true,
      configurable: true,
      writable: true,
    });
    expect(deepEqual(obj, obj3, { matchDescriptors: true })).toBe(true);
  });
  test('check with arguments error', () => {
    try {
      deepEqual([]);
    } catch (error) {
      expect(error).toBeInstanceOf(TypeError);
    }
  });
  test('check nested objects', () => {
    const obj = { a: 1, b: 2, c: { d: 3 } };
    const obj2 = { a: 1, b: 2, c: { d: 3 } };
    expect(deepEqual(obj, obj2)).toBe(true);
  });
});
