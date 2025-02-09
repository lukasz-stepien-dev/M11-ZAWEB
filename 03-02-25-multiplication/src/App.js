import React, { useState } from "react";

function App() {
  const [base, setBase] = useState("");
  const [exponent, setExponent] = useState("");
  const [powerResult, setPowerResult] = useState(null);

  const [tableNumber, setTableNumber] = useState("");
  const [multiplicationTable, setMultiplicationTable] = useState([]);

  const handleCalculatePower = () => {
    const numBase = parseFloat(base);
    const numExponent = parseFloat(exponent);

    if (!isNaN(numBase) && !isNaN(numExponent)) {
      setPowerResult(Math.pow(numBase, numExponent));
    } else {
      setPowerResult(null);
    }
  };

  const handleGenerateMultiplicationTable = () => {
    const numTableNumber = parseFloat(tableNumber);
    if (!isNaN(numTableNumber)) {
      const table = [];
      for (let i = 1; i <= 10; i++) {
        table.push(`${numTableNumber} x ${i} = ${numTableNumber * i}`);
      }
      setMultiplicationTable(table);
    } else {
      setMultiplicationTable([]);
    }
  };

  return (
    <div>
      <div>
        <input
          type="number"
          value={base}
          onChange={(e) => setBase(e.target.value)}
          aria-label="Wpisz liczbę"
          placeholder="Wpisz liczbę"
        />
        <input
          type="number"
          value={exponent}
          onChange={(e) => setExponent(e.target.value)}
          aria-label="Wpisz wykładnik"
          placeholder="Wpisz wykładnik"
        />
        <button onClick={handleCalculatePower}>Oblicz potęgowanie</button>
      </div>

      {powerResult !== null && (
        <div>
          <p>
            Wynik {base}^{exponent} = {powerResult}
          </p>
        </div>
      )}

      <hr />

      <div>
        <input
          type="number"
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
          aria-label="Liczba do tabliczki"
          placeholder="Liczba do tabliczki"
        />
        <button onClick={handleGenerateMultiplicationTable}>
          Twórz tabliczkę mnożenia
        </button>
      </div>

      {multiplicationTable.length > 0 && (
        <div>
          <ul>
            {multiplicationTable.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
