const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("First resolved"), 5000);
});
const pr2 = new Promise((resolve, reject) => {
  reject("Second Rejected");
});

const promises = [pr1, pr2];

Promise.myAll = function (promises) {
  return new Promise(function (resolve, reject) {
    let completed = 0;
    let results = [];
    promises.forEach(function (promise, index) {
      Promise.resolve(promise)
        .then((result) => {
          completed++;
          results[index] = result;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

Promise.myAll(promises)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
