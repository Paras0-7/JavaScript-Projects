const btns = document.querySelectorAll(".btn");
const output = document.querySelector(".output");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let op;
    if (e.target.value === "DEL") {
      op = output.value.trim().split(" ");
      op.pop();
      op = op.join(" ");
      output.value = "";
      console.log(op);

      showOp(op);
    } else if (e.target.value === "=") {
      op = output.value;
    } else if (e.target.value === "Ans") {
      console.log("PAras");
    } else if (e.target.value == "AC") {
      output.value = "";
    } else showOp(e.target.value);
  });
});

const showOp = function (value) {
  let op = output.value;
  op += `${value}`;

  output.value = op;
};
