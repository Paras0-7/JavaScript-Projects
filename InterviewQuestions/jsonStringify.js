const data = {
  username: "Paras",
  password: "12345678",
  age: 25,
  isPremium: true,
  notifications: ["subscription", " likes"],
};

const stringify = function (obj) {
  // handle strings, enclose in double quotes

  if (typeof obj === "string") {
    return `"${obj}"`;
  }

  // handle numbers and booleans, return the string representation

  if (typeof obj === "number" || typeof obj === "boolean") {
    return `${obj}`;
  }
  // handle arrays, loop over every single element

  if (Array.isArray(obj)) {
    let res = "[";

    obj.forEach(function (element) {
      res += `${stringify(element)},`;
    });

    // remove last comma
    res = `${res.substring(0, res.length - 1)}]`;
    return res;
  }

  // handle object, loop over keys and values

  let res = `{`;
  Object.keys(obj).forEach(function (key) {
    res += `"${key}" : ${stringify(obj[key])},`;
  });

  // remove last comma
  res = `${res.substring(0, res.length - 1)}}`;
  return res;
};

console.log(data);
console.log(stringify(data));
