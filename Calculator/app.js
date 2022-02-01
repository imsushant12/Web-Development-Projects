window.onload = () => {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".numbers");
  let clear = document.querySelector(".btn-red");
  let equal = document.querySelector(".btn-green");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });
  // will evaluate the result on the screen and set the value on the screen after the evaluation.
  equal.addEventListener("click", function () {
    if (screen.value === "") screen.value = "Enter value";
    else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });
  // will clear the screen when the clear btn will be clicked.
  clear.addEventListener("click", function () {
    screen.value = "";
  });
};
