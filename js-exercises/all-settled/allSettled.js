async function* resultOfPromises(arrOfPromises) {
  try {
    for await (const res of arrOfPromises) {
      yield { status: 'fulfilled', value: res };
    }
  } catch (err) {
    yield { status: 'rejected', reason: err };
  }
}

async function allSettled(arrOfPromises) {
  if (!Array.isArray(arrOfPromises)) {
    throw new TypeError(
      `Expected an Array, instead got ${arrOfPromises} of type ${typeof arrOfPromises}`,
    );
  }
  const result = [];
  for await (const res of resultOfPromises(arrOfPromises)) {
    result.push(res);
  }
  return result;
}

export { allSettled };
