const limitFunctionCallCount = (fn, invoke) => {
  let countToInvoke = invoke;
  return (...agrs) => {
    if (countToInvoke) {
      countToInvoke -= 1;
      return fn(...agrs);
    }
    return null;
  };
};

export { limitFunctionCallCount };
