function* count(startValue = 0, steps = 1) {
  if (!Number.isSafeInteger(startValue)) {
    throw TypeError(
      `Expected an integer, instead got ${startValue} of type ${typeof startValue}`,
    );
  }
  if (!Number.isSafeInteger(steps)) {
    throw TypeError(
      `Expected a non-negative integer, instead got ${steps} of type ${typeof steps}`,
    );
  }
  let currentValue = startValue;

  while (true) {
    yield currentValue;
    currentValue += steps;
  }
}

function* cycle(iterator, repeatCycle) {
  if (!(typeof iterator[Symbol.iterator] === 'function')) {
    throw new TypeError(
      `Expected an iterator, instead got ${iterator} of type ${typeof iterator}`,
    );
  }

  if (repeatCycle && !Number.isSafeInteger(repeatCycle)) {
    throw new TypeError(
      `Expected a non-negative integer, instead got ${repeatCycle} of type ${typeof repeatCycle}`,
    );
  }

  let repeatNumberOfTimes = repeatCycle || Number.MAX_SAFE_INTEGER;
  while (repeatNumberOfTimes) {
    for (const chr of iterator) {
      yield chr;
    }
    repeatNumberOfTimes -= 1;
  }
}

function* repeat(value, repeatValue) {
  if (value === null || value === undefined) {
    throw new TypeError(`Expected a value, instead got ${value}`);
  }
  if (!(typeof value === 'function')) {
    throw new TypeError(
      `Expected a value, instead got ${value} of type ${typeof value}`,
    );
  }
  if (repeatValue && !Number.isSafeInteger(repeatValue)) {
    throw new TypeError(
      `Expected a non-negative integer, instead got ${repeatValue} of type ${typeof repeatValue}`,
    );
  }
  let repeatNumberOfTimes = repeatValue || true;
  while (repeatNumberOfTimes) {
    yield value;
    if (typeof repeatNumberOfTimes === 'number') {
      repeatNumberOfTimes -= 1;
    }
  }
}

export { count, cycle, repeat };
