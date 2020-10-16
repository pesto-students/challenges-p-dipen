import { allSettled } from './allSettled';

describe('allSettled', () => {
  test('should match with result', () => {
    allSettled([
      Promise.resolve(33),
      new Promise((resolve) => setTimeout(() => resolve(66), 0)),
      99,
      Promise.reject(new Error('an error')),
    ]).then((values) => {
      expect(values).toEqual([
        { status: 'fulfilled', value: 33 },
        { status: 'fulfilled', value: 66 },
        { status: 'fulfilled', value: 99 },
        { status: 'rejected', reason: new Error('an error') },
      ]);
    });

    const promise1 = Promise.resolve(3);
    const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
    const promises = [promise1, promise2];

    allSettled(promises).then((results) => {
      expect(results.map((result) => result.status)).toEqual([
        'fulfilled',
        'rejected',
      ]);
    });
  });
  test('should throw error', () => {
    try {
      allSettled();
    } catch (err) {
      expect(err).toBeinstanceOf(TypeError);
    }
  });
});
