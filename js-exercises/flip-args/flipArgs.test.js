import { flipArgs } from './flipArgs';

describe('flipArgs', () => {
  it('returns an array of the arguments in reverse order', () => {
    expect(flipArgs('a', 'b', 'c', 'd')).toStrictEqual(['d', 'c', 'b', 'a']);
  });
  it('returns null array while passing no arguments', () => {
    expect(flipArgs()).toStrictEqual([]);
  });
});
