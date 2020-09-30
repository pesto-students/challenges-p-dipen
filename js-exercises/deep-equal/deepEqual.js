const isObject = (obj) => {
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    return true;
  }
  return false;
};

function deepEqual(obj1, obj2, conditions) {
  if (
    !isObject(obj1)
    || !isObject(obj2)
    || (conditions && !isObject(conditions))
  ) {
    throw new TypeError('Argument(s) must be an object');
  }
  const matchDescriptors = conditions && conditions.matchDescriptors;
  const keysOfObj1 = Object.getOwnPropertyNames(obj1);
  const keysOfObj2 = Object.getOwnPropertyNames(obj2);
  if (keysOfObj1.length !== keysOfObj2.length) {
    return false;
  }
  for (const key of keysOfObj1) {
    const ValueOfObj1 = obj1[key];
    const ValueOfObj2 = obj2[key];
    if (ValueOfObj1 !== ValueOfObj2) {
      return false;
    }
    if (matchDescriptors) {
      if (
        !deepEqual(
          Object.getOwnPropertyDescriptor(obj1, key),
          Object.getOwnPropertyDescriptor(obj2, key),
        )
      ) {
        return false;
      }
    }
    if (isObject(ValueOfObj1) && isObject(ValueOfObj2)) {
      if (!deepEqual(ValueOfObj1, ValueOfObj2, conditions)) {
        return false;
      }
    }
  }
  return true;
}

export { deepEqual };
