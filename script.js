let string = "";
let buttons = document.querySelectorAll("button");
const inputField = document.querySelector("input");

const validKeys = "0123456789+-*/.()";

// Function to update the input field
function updateInputField() {
  inputField.value = string;
}
function handlePercentage() {
  let lastNumberMatch = string.match(/(\d+)(?!.*\d)/); // Match the last number in the string
  if (lastNumberMatch) {
    let lastNumber = lastNumberMatch[0];
    let percentage = (parseFloat(lastNumber) / 100).toString();
    string = string.slice(0, -lastNumber.length) + percentage;
  }
}

// Add event listener for keydown event
document.addEventListener("keydown", function (e) {
  if (
    validKeys.includes(e.key) ||
    e.key === "Enter" ||
    e.key === "Backspace" ||
    e.key === "Escape"
  ) {
    e.preventDefault();
  }
  if (e.key === "Enter") {
    try {
      string = eval(string).toString();
    } catch (error) {
      string = "Error";
    }
    updateInputField();
  } else if (e.key === "Backspace") {
    string = string.slice(0, -1);
    updateInputField();
  } else if (e.key === "Escape") {
    string = "";
    updateInputField();
  } else if (e.key === "%") {
    handlePercentage();
    updateInputField();
  } else if (validKeys.includes(e.key)) {
    string += e.key;
    updateInputField();
  }
});

Array.from(buttons).forEach(function (button) {
  button.addEventListener("click", function (e) {
    try {
      if (e.target.innerHTML == "AC") {
        string = "";
      } else if (e.target.innerHTML == "=") {
        string = eval(string).toString();
      } else if (e.target.innerHTML == "DE") {
        string = string.slice(0, -1);
      } else if (e.target.innerHTML == "%") {
        handlePercentage();
      } else {
        string += e.target.innerHTML;
      }
      updateInputField();
    } catch (e) {
      string = "Error";
      updateInputField();
    }
  });
});
