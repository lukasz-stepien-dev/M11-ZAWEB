import './App.css';
import { useState } from "react";

class Person {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

function App() {
  const [person, setPerson] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("Rodzina");

  const addPerson = (e) => {
    e.preventDefault();
    if (person.length >= 5) {
      alert("Osiągnięto limit imion!");
      return;
    }
    if (name.trim() === "") {
      alert("Imię nie może być puste!");
      return;
    }
    const newPerson = new Person(name, type);
    setPerson([...person, newPerson]);
    setName("");
  };

  const removePerson = (index) => {
    const newPersonList = person.filter((_, i) => i !== index);
    setPerson(newPersonList);
  };

  return (
      <div className="App">
        <form onSubmit={addPerson}>
          <input
              type="text"
              placeholder="Wpisz imię"
              value={name}
              onChange={(e) => setName(e.target.value)}
          />
          <br />
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option>Rodzina</option>
            <option>Znajomi</option>
            <option>Praca</option>
          </select>
          <br />
          <input type="submit" value="Dodaj imię" />
        </form>
        <p>Liczba dodanych imion: {person.length} / 5</p>
        <div>
          {person.map((p, index) => (
              <div key={index}>
                <p>{p.name} ({p.type})</p>
                <button onClick={() => removePerson(index)}>Usuń</button>
              </div>
          ))}
        </div>
      </div>
  );
}

export default App;
