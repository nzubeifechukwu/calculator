let displayVal = "";
let values = [];
let operator;
let operatorSymbol;

// These Boolean variables are to track which type of button I last clicked
// Only one will be on (true) at any point in time, although initially they are all false
let clickedEqualsBtn = false; // switch on once equals button is clicked
let clickedOperator = false; // switch on once an operator button is clicked
let clickedDigit = false; // switch on once you have created an operand

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
      displayVal = ""; // reset displayVal once equals button has been clicked
      clickedEqualsBtn = false;
    }
    displayVal += event.target.textContent;
    displayDiv.textContent = displayVal;

    // switch on clickedDigit only when all digits of the operand have been appended to displayVal
    if (clickedOperator) {
      clickedDigit = true;
      clickedOperator = false;
    }
  })
);

operationBtns.map((btn) =>
  btn.addEventListener("click", (event) => {
    operator = event.target.textContent;
    console.log(operator);

    // Don't update values if operator buttons are clicked consecutively
    // This ensures that values can't contain more than two operands
    if (!clickedOperator) {
      if (!displayVal) {
        values.push(parseInt(0));
      } else {
        values.push(parseInt(displayVal));
      }
    }

    // Only perform an operation if `values` contains two operands
    // and a digit button is the last button clicked
    if (values.length === 2 && clickedDigit) {
      displayVal = operate(values[0], operatorSymbol, values[1]);
      console.log(displayVal);
      displayDiv.textContent = displayVal;
      console.log(values);
      values = [displayVal];
    }

    // Get last operator clicked before clicking another operator
    // This is useful for chained operation (over 2 operands)
    operatorSymbol = operator;
    displayVal = "";
    console.log(values);
    clickedEqualsBtn = false;
    clickedOperator = true;
    clickedDigit = false;
  })
);

equalsBtn.addEventListener("click", () => {
  // implements equals operation only when you have two operands,
  // and ignores double or more click of equals button
  if (clickedDigit && !clickedEqualsBtn) {
    values.push(parseInt(displayVal));
    displayVal = operate(values[0], operator, values[1]);
    console.log(displayVal);
    displayDiv.textContent = displayVal;
    console.log(values);
    values = [];
    clickedEqualsBtn = true;
    clickedOperator = false;
    clickedDigit = false;
    operator = "";
    operatorSymbol = "";
  }
});

acBtn.addEventListener("click", () => {
  values = [];
  clickedEqualsBtn = false;
  clickedOperator = false;
  clickedDigit = false;
  displayVal = "";
  displayDiv.textContent = 0;
  operator = "";
  operatorSymbol = "";
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
