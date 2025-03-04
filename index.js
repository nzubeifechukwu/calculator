let displayVal = "";
let values = [];
let operator;
let clickedEqualsBtn = false; // will use variable to control whether to keep appending digits to displayVal
let clickedOperator = false; // will use to control double or more clicking of operator button
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
const operations = ["add", "subtract", "multiply", "divide"];

const displayDiv = document.querySelector(".display");
const digitBtns = digits.map((digit) => document.querySelector(`.${digit}`));
const operationBtns = operations.map((operation) =>
  document.querySelector(`.${operation}`)
);
const equalsBtn = document.querySelector(".equals");
const acBtn = document.querySelector(".ac");

digitBtns.map((btn) =>
  btn.addEventListener("click", (event) => {
    if (clickedEqualsBtn) {
      displayVal = "";
      clickedEqualsBtn = false;
    }
    displayVal += event.target.textContent;
    displayDiv.textContent = displayVal;
    clickedOperator = false;
  })
);

operationBtns.map((btn) =>
  btn.addEventListener("click", (event) => {
    if (!clickedOperator) {
      if (!displayVal) {
        values.push(parseInt(0));
      } else {
        values.push(parseInt(displayVal));
      }
      if (values.length === 2) {
        displayVal = operate(values[0], operator, values[1]);
        console.log(displayVal);
        displayDiv.textContent = displayVal;
        console.log(values);
        values = [displayVal];
      }
      operator = event.target.textContent;
      displayVal = "";
      clickedEqualsBtn = false;
      clickedOperator = true;
      console.log(values);
    }
  })
);

equalsBtn.addEventListener("click", () => {
  values.push(parseInt(displayVal));
  displayVal = operate(values[0], operator, values[1]);
  console.log(displayVal);
  displayDiv.textContent = displayVal;
  console.log(values);
  values = [];
  clickedEqualsBtn = true;
  clickedOperator = false;
});

acBtn.addEventListener("click", () => {
  values = [];
  clickedEqualsBtn = false;
  clickedOperator = false;
  displayVal = "";
  displayDiv.textContent = 0;
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
