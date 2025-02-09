import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const handleCalculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (!isNaN(number1) && !isNaN(number2)) {
      switch (operator) {
        case "+":
          setResult(number1 + number2);
          break;
        case "-":
          setResult(number1 - number2);
          break;
        case "*":
          setResult(number1 * number2);
          break;
        case "/":
          if (number2 === 0) {
            setResult("Cannot divide by zero");
          } else {
            setResult(number1 / number2);
          }
          break;
        default:
          setResult("Invalid operator");
      }
    } else {
      setResult("Invalid input");
    }
  };

  return (
    <div>
      <div>
        <input
          type="number"
          value={num1}
          onChange={handleNum1Change}
          aria-label="First number"
        />
        <select
          value={operator}
          onChange={handleOperatorChange}
          aria-label="Select operator"
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="number"
          value={num2}
          onChange={handleNum2Change}
          aria-label="Second number"
        />
        <button onClick={handleCalculate} aria-label="Calculate">
          Oblicz
        </button>
      </div>

      {result !== null && (
        <div>
          Wynik: {num1} {operator} {num2} = {result}
        </div>
      )}
    </div>
  );
}

export default App;
