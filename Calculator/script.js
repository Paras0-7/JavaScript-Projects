const btns = document.querySelectorAll(".btn");
const output = document.querySelector(".output");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (e.target.value === "DEL") {
    } else if (e.target.value === "=") {
    } else if (e.target.value === "ANS") {
    } else showOp(e.target.value);
  });
});

const showOp = function (opt) {
  let op = output.value;
  op += ` ${opt}`;
  output.value = op;
};
