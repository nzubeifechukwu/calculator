let displayVal = "";
let values = [];
let operator;
let operatorSymbol;

// These Boolean variables are to track which type of button I last clicked
// Only one will be on (true) at any point in time, although initially they are all false
let clickedEqualsBtn = false; // switch on once equals button is clicked
let clickedOperator = false; // switch on once an operator button is clicked
let clickedDigit = false; // switch on once you have created an operand

// Will use this to make sure operator buttons behave appropriately
// when there is an attempt to divide by 0
let calledResetValues = false;

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
const operations = ["add", "sub", "mul", "divide"];

const displayDiv = document.querySelector(".display");
const digitBtns = digits.map((digit) => document.querySelector(`.${digit}`));
const operationBtns = operations.map((operation) =>
  document.querySelector(`.${operation}`)
);
const equalsBtn = document.querySelector(".equals");
const acBtn = document.querySelector(".ac");
const decimalPointBtn = document.querySelector(".dot");
const switchBtn = document.querySelector(".swch");
const backspace = document.querySelector(".backspace");

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

    // Don't update values if operator buttons are clicked consecutively
    // This ensures that values can't contain more than two operands
    if (!clickedOperator) {
      if (!displayVal) {
        values.push(0);
      } else {
        values.push(Number(displayVal));
      }
    }

    // Only perform an operation if `values` contains two operands
    // and a digit button is the last button clicked
    if (values.length === 2 && clickedDigit) {
      displayVal = operate(values[0], operatorSymbol, values[1]);
      if (operatorSymbol === "/" && values[1] === 0) {
        alert("DIVISION BY 0 NOT ALLOWED!");
        resetValues();
        calledResetValues = true;
      } else {
        displayDiv.textContent = displayVal;
        values = [displayVal];
      }
    }

    // Get last operator clicked before clicking another operator
    // This is useful for chained operation (over 2 operands)
    // But this will only run if there was no attempt to divide by 0
    if (!calledResetValues) {
      operatorSymbol = operator;
      displayVal = "";
      clickedEqualsBtn = false;
      clickedOperator = true;
      clickedDigit = false;
    }
    calledResetValues = false; // reset to false for next time operator button is clicked
  })
);

equalsBtn.addEventListener("click", () => {
  // implements equals operation only when you have two operands,
  // and ignores double or more click of equals button
  if (clickedDigit && !clickedEqualsBtn) {
    values.push(Number(displayVal));
    displayVal = operate(values[0], operator, values[1]);
    if (operator === "/" && values[1] === 0) {
      alert("DIVISION BY 0 NOT ALLOWED!");
      resetValues();
    } else {
      displayDiv.textContent = displayVal;
      values = [];
      clickedEqualsBtn = true;
      clickedOperator = false;
      clickedDigit = false;
      operator = "";
      operatorSymbol = "";
    }
  }
});

acBtn.addEventListener("click", () => {
  resetValues();
});

decimalPointBtn.addEventListener("click", (event) => {
  const decimalPoint = event.target.textContent;
  if (!displayVal.includes(".")) {
    if (displayVal) {
      displayVal += decimalPoint;
    } else {
      displayVal = "0";
      displayVal += decimalPoint;
    }
  }
  displayDiv.textContent = displayVal;
});

switchBtn.addEventListener("click", () => {
  if (displayVal) {
    displayVal = -1 * Number(displayVal);
    displayDiv.textContent = displayVal;
  }
});

backspace.addEventListener("click", () => {
  // backspace works as AC (clear all) if kicked just after an operator
  if (clickedOperator) {
    resetValues();
  } else {
    if (displayVal) {
      displayVal = String(displayVal).replace(
        String(displayVal)[String(displayVal).length - 1],
        ""
      );
      displayDiv.textContent = displayVal;
    }
    if (!displayVal) {
      displayDiv.textContent = 0;
    }
  }
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
  if (String(num1 + num2).includes(".")) {
    return (num1 + num2).toFixed(2);
  }
  return num1 + num2;
}

function subtract(num1, num2) {
  if (String(num1 - num2).includes(".")) {
    return (num1 - num2).toFixed(2);
  }
  return num1 - num2;
}

function multiply(num1, num2) {
  if (String(num1 * num2).includes(".")) {
    return (num1 * num2).toFixed(2);
  }
  return num1 * num2;
}

function divide(num1, num2) {
  if (String(num1 / num2).includes(".")) {
    return (num1 / num2).toFixed(2);
  }
  return num1 / num2;
}

function resetValues() {
  values = [];
  clickedEqualsBtn = false;
  clickedOperator = false;
  clickedDigit = false;
  calledResetValues = false;
  displayVal = "";
  displayDiv.textContent = 0;
  operator = "";
  operatorSymbol = "";
}
