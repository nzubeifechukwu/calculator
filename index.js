const displayDiv = document.querySelector(".display");
// displayDiv.textContent = "";
let displayVal = "";

const digits = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const digitBtns = digits.map((digit) => document.querySelector(`.${digit}`));

digitBtns.map((btn) =>
  btn.addEventListener("click", (event) => {
    // console.log(event);
    displayVal += event.target.textContent;
    displayDiv.textContent = displayVal;
  })
);

function operate(num1, operator, num2) {
  if (operator === "+") {
    return add(num1, num2);
  }
  if (operator === "-") {
    return subtract(num1, num2);
  }
  if (operator === "*") {
    return multiply(num1, num2);
  }
  if (operator === "/") {
    return divide(num1, num2);
  }
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// const num1 = 15;
// const num2 = 3;
// operator = "/";

// console.log(operate(num1, operator, num2));
