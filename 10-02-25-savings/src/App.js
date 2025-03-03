import React, { useState } from "react";

function App() {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [savings, setSavings] = useState(0);
  const [savingAmount, setSavingAmount] = useState("");
  const [savingsPlan, setSavingsPlan] = useState([]);

  const calculateSavings = () => {
    const calculatedSavings = parseInt(income || 0) - parseInt(expenses || 0);
    setSavings(calculatedSavings >= 0 ? calculatedSavings : 0);
  };

  const generateSavingsPlan = () => {
    const amount = parseInt(savingAmount || 0);
    let plan = [];
    let currentSavings = amount;
    for (let i = 1; i <= 12; i++) {
      plan.push({ month: i, amount: currentSavings });
      currentSavings += amount;
    }
    setSavingsPlan(plan);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: "1.5em",
          fontWeight: "bold",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Wydatki i oszczędzanie
      </div>

      <div style={{ display: "flex", marginBottom: "10px" }}>
        <div style={{ marginRight: "10px" }}>
          <label htmlFor="income">Dochody</label>
          <br />
          <input
            type="number"
            id="income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div>
          <label htmlFor="expenses">Wydatki</label>
          <br />
          <input
            type="number"
            id="expenses"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <button
          onClick={calculateSavings}
          style={{
            marginLeft: "10px",
            padding: "8px 15px",
            backgroundColor: "#f0f0f0",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "25px",
          }}
        >
          Oblicz
        </button>
      </div>

      <div style={{ marginBottom: "20px" }}>Oszczędności: {savings} zł</div>

      <div
        style={{
          fontSize: "1.2em",
          fontWeight: "bold",
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        Generowanie wyników oszczędnościowych
      </div>

      <div
        style={{ display: "flex", marginBottom: "10px", alignItems: "center" }}
      >
        <div style={{ marginRight: "10px" }}>
          <label htmlFor="savingAmount">Kwota do odkładania</label>
          <br />
          <input
            type="number"
            id="savingAmount"
            value={savingAmount}
            onChange={(e) => setSavingAmount(e.target.value)}
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <button
          onClick={generateSavingsPlan}
          style={{
            padding: "8px 15px",
            backgroundColor: "#f0f0f0",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "25px",
          }}
        >
          Generuj plan
        </button>
      </div>

      {savingsPlan.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          {savingsPlan.map((item) => (
            <div key={item.month}>
              Miesiąc {item.month}: {item.amount} zł
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
