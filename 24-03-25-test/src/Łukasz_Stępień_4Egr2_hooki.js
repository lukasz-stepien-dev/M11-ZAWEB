import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState('');

  const operations = ['+', '-', '*', '/'];

  const calculateResult = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Wprowadź poprawne liczby');
      return;
    }

    let calculationResult;
    switch (operation) {
      case '+':
        calculationResult = num1 + num2;
        break;
      case '-':
        calculationResult = num1 - num2;
        break;
      case '*':
        calculationResult = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          setResult('Nie można dzielić przez zero');
          return;
        }
        calculationResult = num1 / num2;
        break;
      default:
        setResult('Wybierz operację');
        return;
    }

    setResult(`${num1} ${operation} ${num2} = ${calculationResult}`);
  };

  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [convertedAmount, setConvertedAmount] = useState('');

  const exchangeRate = 3.87;

  const convertCurrency = () => {
    const amountValue = parseFloat(amount);

    if (isNaN(amountValue)) {
      setConvertedAmount('Wprowadź poprawną kwotę');
      return;
    }

    let result;
    if (currency === 'USD') {
      result = amountValue * exchangeRate;
      setConvertedAmount(` ${result.toFixed(2)}`);
    } else {
      result = amountValue / exchangeRate;
      setConvertedAmount(` ${result.toFixed(2)}`);
    }
  };

  // Kalkulator oszczędności
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [savings, setSavings] = useState('');

  const calculateSavings = () => {
    const incomeValue = parseFloat(income);
    const expensesValue = parseFloat(expenses);

    if (isNaN(incomeValue) || isNaN(expensesValue)) {
      setSavings('Wprowadź poprawne wartości');
      return;
    }

    const savingsValue = incomeValue - expensesValue;
    setSavings(`Oszczędności: ${savingsValue.toFixed(0)} zł`);
  };

  // Kalkulator planu oszczędności
  const [monthlySavingsAmount, setMonthlySavingsAmount] = useState('');
  const [savingsPlan, setSavingsPlan] = useState([]);

  const generateSavingsPlan = () => {
    const amount = parseFloat(monthlySavingsAmount);

    if (isNaN(amount)) {
      setSavingsPlan(['Wprowadź poprawną kwotę']);
      return;
    }

    const plan = [];
    let total = 0;

    for (let i = 1; i <= 12; i++) {
      total += amount;
      plan.push(`Miesiąc ${i}: ${total.toFixed(0)} zł`);
    }

    setSavingsPlan(plan);
  };

  // Kalkulator zwierząt w zoo
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [purchasedAnimals, setPurchasedAnimals] = useState([]);
  const [totalWeight, setTotalWeight] = useState(0);

  const animals = [
    { name: 'Lew', weight: 190 },
    { name: 'Słoń', weight: 5400 },
    { name: 'Tygrys', weight: 220 },
    { name: 'Zebra', weight: 350 }
  ];

  const buyAnimal = () => {
    if (!selectedAnimal) return;

    const animal = animals.find(a => a.name === selectedAnimal);
    if (animal) {
      const newPurchasedAnimals = [...purchasedAnimals, animal];
      setPurchasedAnimals(newPurchasedAnimals);

      const newTotalWeight = totalWeight + animal.weight;
      setTotalWeight(newTotalWeight);
    }
  };


  // Kasa w kinie
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedFilm, setSelectedFilm] = useState('');
  const [ticketCount, setTicketCount] = useState(1);
  const [totalSum, setTotalSum] = useState(0);
  const [purchasedTickets, setPurchasedTickets] = useState([]);

  const daysOfWeek = [
    'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'
  ];

  const filmsByDay = {
    'Poniedziałek': [
      { name: 'Matrix', price: 14 },
      { name: 'Incepcja', price: 15 },
      { name: 'Zielona Mila', price: 16 }
    ],
    'Wtorek': [
      { name: 'Avatar', price: 17 },
      { name: 'Gladiator', price: 18 },
      { name: 'Obcy', price: 19 }
    ],
    'Środa': [
      { name: 'Titanic', price: 11 },
      { name: 'Pulp Fiction', price: 12 },
      { name: 'Siedem', price: 13 }
    ],
    'Czwartek': [
      { name: 'Shrek', price: 13 },
      { name: 'Król Lew', price: 14 },
      { name: 'Toy Story', price: 15 }
    ],
    'Piątek': [
      { name: 'Joker', price: 21 },
      { name: 'Batman', price: 22 },
      { name: 'Avengers', price: 23 }
    ],
    'Sobota': [
      { name: 'Star Wars', price: 24 },
      { name: 'Harry Potter', price: 25 },
      { name: 'Władca Pierścieni', price: 26 }
    ],
    'Niedziela': [
      { name: 'Forrest Gump', price: 34 },
      { name: 'Parasite', price: 35 },
      { name: 'Interstellar', price: 36 }
    ]
  };

  const getTicketPrice = () => {
    if (selectedDay && selectedFilm) {
      const film = filmsByDay[selectedDay].find(f => f.name === selectedFilm);
      return film ? film.price : 0;
    }
    return 0;
  };
  const addToCart = () => {
    if (!selectedDay || !selectedFilm || ticketCount < 1) return;

    const ticketPrice = getTicketPrice();
    const totalPrice = ticketPrice * ticketCount;

    const purchase = {
      day: selectedDay,
      film: selectedFilm,
      count: ticketCount,
      price: ticketPrice,
      totalPrice: totalPrice
    };

    setPurchasedTickets([...purchasedTickets, purchase]);
    setTotalSum(totalSum + totalPrice);

    setSelectedFilm('');
    setTicketCount(1);
  };

  return (
      <div className="App">
        <h1>Kalkulator</h1>

        <div className="calculator">
          <input
              type="number"
              value={firstNumber}
              onChange={(e) => setFirstNumber(e.target.value)}
              placeholder="Pierwsza liczba"
          />

          <select
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
          >
            {operations.map(op => (
                <option key={op} value={op}>
                  {op}
                </option>
            ))}
          </select>

          <input
              type="number"
              value={secondNumber}
              onChange={(e) => setSecondNumber(e.target.value)}
              placeholder="Druga liczba"
          />

          <button onClick={calculateResult}>Oblicz</button>
        </div>

        <div className="result">
          <h2>Wynik: {result}</h2>
        </div>

        <br></br>

        <h1>Przelicznik Walut</h1>

        <div className="currency-converter">
          <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Wprowadź kwotę"
          />

          <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="PLN">PLN</option>
          </select>

          <button onClick={convertCurrency}>Przelicz</button>
        </div>

        <div className="result">
          <h2>Przeliczona kwota: {convertedAmount}</h2>
        </div>

        <br></br>

        <h1>Kalkulator Oszczędności</h1>

        <div className="savings-calculator">
          <input
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              placeholder="Dochody"
          />

          <input
              type="number"
              value={expenses}
              onChange={(e) => setExpenses(e.target.value)}
              placeholder="Wydatki"
          />

          <button onClick={calculateSavings}>Oblicz</button>
        </div>

        <div className="result">
          <h2>{savings}</h2>
        </div>

        <br></br>

        <h1>Plan Oszczędności Rocznych</h1>

        <div className="savings-plan-generator">
          <input
              type="number"
              value={monthlySavingsAmount}
              onChange={(e) => setMonthlySavingsAmount(e.target.value)}
              placeholder="Kwota do odkładania"
          />

          <button onClick={generateSavingsPlan}>Generuj plan</button>
        </div>

        <div className="result">
          {savingsPlan.map((entry, index) => (
              <p key={index}>{entry}</p>
          ))}
        </div>

        <br></br>

        <h1>Zwierzęta w Zoo</h1>

        <div className="zoo-animals">
          <select
              value={selectedAnimal}
              onChange={(e) => setSelectedAnimal(e.target.value)}
          >
            <option value="">Wybierz zwierzę do kupienia</option>
            {animals.map((animal) => (
                <option key={animal.name} value={animal.name}>
                  {animal.name} (Waga: {animal.weight} kg)
                </option>
            ))}
          </select>

          <button onClick={buyAnimal}>Kup zwierzę</button>
        </div>

        <div className="result">
          <h3>Łączna waga zwierząt: {totalWeight} kg</h3>
          <h3>Łączna ilość zwierząt: {purchasedAnimals.length}</h3>
          <div>
            {purchasedAnimals.map((animal, index) => (
                <p key={index}>{animal.name} - Waga: {animal.weight} kg</p>
            ))}
          </div>
        </div>

        <br></br>

        <h1>Kasa w Kinie</h1>

        <div className="cinema-cashier">
          <div>
            <h3>Wybierz dzień</h3>
            <select
                value={selectedDay}
                onChange={(e) => {
                  setSelectedDay(e.target.value);
                  setSelectedFilm('');
                }}
            >
              <option value="">Wybierz dzień</option>
              {daysOfWeek.map((day) => (
                  <option key={day} value={day}>{day}</option>
              ))}
            </select>
          </div>

          {selectedDay && (
              <>
                <div>
                  <h3>Wybierz film</h3>
                  <select
                      value={selectedFilm}
                      onChange={(e) => setSelectedFilm(e.target.value)}
                  >
                    <option value="">Wybierz film</option>
                    {filmsByDay[selectedDay].map((film) => (
                        <option key={film.name} value={film.name}>
                          {film.name} (Cena: {film.price} zł)
                        </option>
                    ))}
                  </select>
                </div>

                <div>
                  <h3>Ilość biletów</h3>
                  <input
                      type="number"
                      min="1"
                      value={ticketCount}
                      onChange={(e) => setTicketCount(Math.max(1, parseInt(e.target.value) || 1))}
                      disabled={!selectedFilm}
                  />
                </div>

                <div>
                  <h3>Cena biletu: {getTicketPrice()} zł</h3>
                  <button
                      onClick={addToCart}
                      disabled={!selectedFilm}
                  >
                    Dodaj do rachunku
                  </button>
                </div>
              </>
          )}

          <hr />
          <h3>Podsumowanie</h3>
          <div className="result">
            <h3>Łączna suma: {totalSum} zł</h3>
            <ul>
              {purchasedTickets.map((ticket, index) => (
                  <li key={index}>
                    Dzień: {ticket.day}, Film: {ticket.film}, Bilety: {ticket.count}, Cena: {ticket.price} zł, Razem: {ticket.totalPrice} zł
                  </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  );
}

export default App;


