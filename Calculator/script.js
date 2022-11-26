const memoise = function (fn) {
  let cahce = {};

  return function (...args) {
    const argsString = JSON.stringify(args);

    if (cahce[argsString]) {
      console.log("Fetching");
    } else {
      console.log("Calculating");
      cahce[argsString] = fn.apply(null, args);
    }

    return cahce[argsString];
  };
};

const add = function (a, b, c) {
  return a + b + c;
};

// const sum = memoise(add);
// console.log(sum(10, 10, 10));
// console.log(sum(10, 10, 10));
// console.log(sum(10, 10, 10));

const Factorial = memoise(function (x) {
  if (x == 1) return 1;
  return x * Factorial(x - 1);
});

// console.log(Factorial(5));
// console.log(Factorial(4));

const sum = function (a) {
  return function (b) {
    if (b) return sum(a + b);
    return a;
  };
};

console.log(sum(1)(2)(3)(4)());

(function par() {
  console.log("Paras");
})();

const arr = [1, 2, [3, 4, [5, 6]], [7, 8]];

const flat = function (arr, level = 1) {
  const newArr = arr.reduce(function (acc, ele) {
    if (Array.isArray(ele) && level > 0) {
      acc = acc.concat(flat(ele, level - 1));
    } else acc.push(ele);

    return acc;
  }, []);

  return newArr;
};

console.log(flat(arr, 2));
