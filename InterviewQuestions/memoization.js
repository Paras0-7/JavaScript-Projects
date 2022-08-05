const addNums = function (a, b) {
  return a + b;
};

const memoize = function (fn) {
  const cache = {};
  return function (...args) {
    const argsStrg = JSON.stringify(args);
    if (argsStrg in cache) {
      console.log(`fetching from cache for key ${argsStrg}`);
      return cache[argsStrg];
    }

    console.log(`computing value for args ${argsStrg}`);
    cache[argsStrg] = fn.apply(this, args);
    return cache[argsStrg];
  };
};

const add = memoize(addNums);
// console.log(add(1, 2));
// console.log(add(1, 2));

const factorial = memoize(function (x) {
  if (x === 0) return 1;
  else return x * factorial(x - 1);
});

console.log(factorial(5));
console.log(factorial(6));
