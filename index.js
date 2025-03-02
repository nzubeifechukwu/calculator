const displayDiv = document.querySelector(".display");
let displayVal = "";
let values = [];
let operator;

// will use variable to control whether to keep appending digits to displayVal
let clickedEqualsBtn = false;

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
    if (clickedEqualsBtn) {
      displayVal = "";
      clickedEqualsBtn = false;
    }
    displayVal += event.target.textContent;
    displayDiv.textContent = displayVal;
  })
);

const operations = ["add", "subtract", "multiply", "divide"];

const operationBtns = operations.map((operation) =>
  document.querySelector(`.${operation}`)
);

operationBtns.map((btn) =>
  btn.addEventListener("click", (event) => {
    operator = event.target.textContent;
    values.push(parseInt(displayVal));
    displayVal = "";
    clickedEqualsBtn = false;
  })
);

const equalsBtn = document.querySelector(".equals");

equalsBtn.addEventListener("click", () => {
  values.push(parseInt(displayVal));
  displayVal = operate(values[0], operator, values[1]);
  console.log(displayVal);
  displayDiv.textContent = displayVal;
  console.log(values);
  values = [];
  clickedEqualsBtn = true;
  // values.push(parseInt(displayVal));
  // displayVal = "";
});

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
