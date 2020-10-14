const fibonacciIter = {
  [Symbol.iterator]() {
    return {
      currentValue: 1,
      nextValue: 2,
      next() {
        const rtnValue = this.currentValue;
        this.currentValue = this.nextValue;
        this.nextValue = rtnValue + this.currentValue;
        return { value: rtnValue, done: false };
      },
    };
  },
};

export { fibonacciIter };
