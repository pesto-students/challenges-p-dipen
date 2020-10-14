/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

class Cycled {
  constructor(arr) {
    this._index = 0;
    this._arr = arr;
  }

  reversed() {
    this.previous();
    return this[Symbol.iterator]();
  }

  get index() {
    return this._index;
  }

  current() {
    return this._arr[this._index];
  }

  step(value) {
    if (value >= 0) {
      // eslint-disable-next-line no-plusplus
      for (let i = value; i > 0; i--) {
        this.next();
      }
    } else {
      // eslint-disable-next-line no-plusplus
      for (let i = value; i < 0; i++) {
        this.previous();
      }
    }

    return this.current();
  }

  /**
   * @param {number} value
   */
  set index(value) {
    if (value >= 0 && value < this._arr.length) {
      this._index = value;
    }
  }

  next() {
    if (this._index + 1 >= this._arr.length) {
      this._index = 0;
    } else {
      this._index += 1;
    }
    return this.current();
  }

  previous() {
    if (this._index - 1 < 0) {
      this._index = this._arr.length - 1;
    } else {
      this._index -= 1;
    }
    return this.current();
  }

  indexOf(searchValue) {
    return this._arr.indexOf(searchValue);
  }

  // eslint-disable-next-line class-methods-use-this
  [Symbol.iterator]() {
    const context = this;
    let currentIndex = 0;
    let presentValue;
    return {
      next() {
        presentValue = context.current();
        // eslint-disable-next-line no-underscore-dangle
        if (currentIndex < context._arr.length) {
          context.next();
          currentIndex += 1;
          return { value: presentValue, done: false };
        }
        return { done: true };
      },
    };
  }
}
export { Cycled };
