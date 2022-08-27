// polyfill of Promise.any
const log = console.log;

// const pr1 = new Promise(function (resolve, reject) {
//   setTimeout(() => reject("Resolved Promise 1"), 3000);
// });
// const pr2 = new Promise(function (resolve, reject) {
//   setTimeout(() => reject("Resolved Promise 2"), 2999);
// });

const promises = [];

Promise.myAny = function (promises) {
  let rejectedPromiseCount = 0;
  return new Promise(function (resolve, reject) {
    if (promises.length === 0) reject("Empty Promises");
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((value) => {
          resolve(value);
        })
        .catch((err) => {
          rejectedPromiseCount++;
          if (rejectedPromiseCount === promises.length) {
            reject(
              "All promises were rejected. Promises Rejected : " +
                rejectedPromiseCount
            );
          }
        });
    });
  });
};

Promise.myAny(promises)
  .then((res) => log(res + " Inside then"))
  .catch((err) => log(err));
