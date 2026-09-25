function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function calculate() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let operation = document.getElementById("operation").value;
  let result;

  switch (operation) {
    case "add":
      result = add(num1, num2);
      break;

    case "subtract":
      result = subtract(num1, num2);
      break;

    case "multiply":
      result = multiply(num1, num2);
      break;

    case "divide":
      if (num2 === 0) {
        result = "Cannot divide by zero";
      } else {
        result = divide(num1, num2);
      }
      break;
  }

  document.getElementById("result").textContent = "Result: " + result;
}
