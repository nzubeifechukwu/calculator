# Calculator

A web app (on-screen calculator) that performs basic maths operations like add, subtract, multiply and divide.

See the [live demo](https://nzubeifechukwu-calculator.netlify.app/).

## Use cases

1. The calculator performs all basic maths like add, subtract, multiply and divide.
2. A calculator operation consists of a number, an operator and another number, e.g. 3 + 5.
3. The display is populated when the digit buttons are clicked.
4. Pressing the `=` button evaluates the operation, according to the operator between numbers, and updates the display with the result of the operation.
5. The calculator does not evaluate more than a single pair of numbers at a time. Example: you enter a number (`12`), followed by an operator (`+`), a second number (`7`), and a second operator (`-`). The calculator should first evaluate the initial pair of numbers (`12 + 7`), then display the result of the calculation (`19`), and subsequently use this result as the first number in a new calculation, along with the next operator (`-`).
6. It rounds answers with long decimals to 2 decimal places.
7. Pressing `=` before entering all the numbers and operator does nothing (it does not break the calculator): the calculator just waits for you to enter the right input.
8. Pressing `AC` ("All Clear") button wipes out any existing data from memory and resets the display to `0`.
9. Division by 0 does not crash the calculator: an error message pops up telling you that it is not allowed.
10. If you press two operators consecutively, the last operator is used in the calculation. Example: you enter a number (`4`), an operator (`+`), another operator (`-`), and another number (`2`). The calculator will evaluate this as `4 - 2`, giving `2` as the result.
11. When a final result is displayed (i.e. the `=` button has been clicked), pressing a new digit clears the result and starts a new calculation, but pressing an operator makes the final result the first number in the next operation.
12. The `+/-` button switches the sign of a number; clicking it for the number 0 does nothing.
13. The `.` is used to include a decimal part. Clicking it when the number already has a decimal point does nothing.
14. There's a "backspace" button to undo your last input if you clicked the wrong number. It works the same way as the `AC` button if you click it immediately after displaying the final result of an operation (i.e. immediately after pressing the `=` button).

## Possible use cases to still add

1. Keyboard support
2. `%` button and functionality
3. Another display to capture the full inputs (including the operators), not just the digits.

## Inspiration

This [project](https://www.theodinproject.com/lessons/foundations-calculator) is part of [The Odin Project](https://www.theodinproject.com/)'s Full-Stack Web Development Foundations path.

## Contact

You can reach me on [X (Twitter)](https://x.com/NzubeIfechukwu) or [LinkedIn](https://linkedin.com/in/nzubeifechukwu).
