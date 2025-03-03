let displayVal = "";
let values = [];
let operator;
let clickedEqualsBtn = false; // will use variable to control whether to keep appending digits to displayVal
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

// operationBtns.map((btn) =>
//   btn.addEventListener("click", (event) => {
//     operator = event.target.textContent;
//     if (!displayVal) {
//       values.push(parseInt(0));
//     } else {
//       values.push(parseInt(displayVal));
//     }
//     displayVal = "";
//     clickedEqualsBtn = false;
//   })
// );

operationBtns.map((btn) =>
  btn.addEventListener("click", (event) => {
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
    console.log(values);
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
