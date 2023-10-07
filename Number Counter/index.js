
const currentNum = document.getElementById("Number");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");

let newNum;

increaseBtn.addEventListener("click", function () {
  newNum = Number(currentNum.innerHTML) + 1;
  currentNum.innerHTML = newNum;
  if (newNum > 0) {
    currentNum.style.color = "green";
  }
});

resetBtn.addEventListener("click", function () {
  currentNum.innerHTML = 0;
  currentNum.style.color = "white";
});

decreaseBtn.addEventListener("click", function () {
  newNum = Number(currentNum.innerHTML) - 1;
  currentNum.innerHTML = newNum;
  if (newNum < 0) {
    currentNum.style.color = "red";
  }
});
