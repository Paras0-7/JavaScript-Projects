let name = {
  firstName: "Paras",
  lastName: "Rawat",
};

const printName = function () {
  console.log(this.firstName + " " + this.lastName);
};

Function.prototype.myBind = function () {
  let fn = this;
  return function () {
    printName();
  };
};
