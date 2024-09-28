# Simple Calculator

This is a basic calculator built using **HTML**, **CSS**, and **JavaScript**. It supports basic arithmetic operations, percentage calculations, and keyboard input.

## Features

- **Basic Arithmetic**: Addition (`+`), Subtraction (`-`), Multiplication (`*`), Division (`/`).
- **Percentage Calculations**: Input percentages using the `%` key or button.
- **Keyboard Support**: The calculator can be operated using a keyboard for faster input.
- **Clear (AC)**: Clears the entire input.
- **Delete (DE)**: Deletes the last input.
- **Real-time Updates**: The display is updated in real-time as buttons or keys are pressed.
- **Error Handling**: Prevents invalid inputs and displays "Error" when appropriate.

## Demo

You can try out the calculator by clicking [here](https://calculator-steel-nine-39.vercel.app/).

## Installation

To use this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/adityaamaiya/calculator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd simple-calculator
   ```

3. Open the index.html file in your browser:

   ```bash
   open index.html
   ```

## Usage

### Calculator Buttons:

- **Numbers (0-9)**: Input numbers.
- **Operators**: Use the +, -, \*, / buttons for operations.
- **% Button**: Converts the last number entered into a percentage.
- **AC Button**: Clears the entire input field.
- **DE Button**: Deletes the last character in the input.
- **= Button**: Calculates and displays the result.

### Keyboard Support:

- **Enter**: Calculates the result.
- **Backspace**: Deletes the last input.
- **Escape (Esc)**: Clears the entire input.
- **Numbers and Operators**: Can be entered directly using the keyboard.

## Code Structure

- **HTML**: Provides the structure of the calculator.
- **CSS**: Adds styling for a clean, responsive interface.
- **JavaScript**: Handles the logic, input, and calculation for the calculator

### Key JavaScript Functions:

- `updateInputField()`: Updates the input field with the current string.
- `handlePercentage()`: Handles the percentage calculations.
- **Event Listeners**:
  `keydown`: Listens for keyboard inputs.
  `click`: Handles button clicks and updates the input field accordingly.

## Screenshots

### 1. Calculator UI

![Calculator UI](https://i.imgur.com/96yDlTt.png)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
