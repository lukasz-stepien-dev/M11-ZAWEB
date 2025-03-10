import React, { useState, useCallback } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [level, setLevel] = useState("");
  const [participants, setParticipants] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const handleAddParticipant = useCallback(() => {
    if (name && age && level) {
      setParticipants([
        ...participants,
        { name, age: parseInt(age, 10), level },
      ]);
      setName("");
      setAge("");
      setLevel("");
    }
  }, [age, level, name, participants]);

  const calculateAverageAge = useCallback(() => {
    if (participants.length === 0) {
      return 0;
    }
    const totalAge = participants.reduce(
      (sum, participant) => sum + participant.age,
      0,
    );
    return (totalAge / participants.length).toFixed(2);
  }, [participants]);

  const averageAge = calculateAverageAge();

  return (
    <div>
      <div>
        <h2>Imię:</h2>
        <input
          type="text"
          placeholder="Podaj imię"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <h2>Wiek:</h2>
        <input
          type="number"
          placeholder="Podaj wiek"
          value={age}
          onChange={handleAgeChange}
        />
      </div>
      <div>
        <h2>Poziom zaawansowania:</h2>
        <select value={level} onChange={handleLevelChange}>
          <option value="">Dodaj uczestnika</option>
          <option value="Początkujący">Początkujący</option>
          <option value="Średniozaawansowany">Średniozaawansowany</option>
          <option value="Zaawansowany">Zaawansowany</option>
        </select>
      </div>
      <button onClick={handleAddParticipant}>Dodaj uczestnika</button>

      <div>
        <h2>Średni wiek uczestników: {averageAge}</h2>
      </div>

      <div>
        {participants.map((participant, index) => (
          <div key={index}>
            <p>
              • Imię: {participant.name}, Wiek: {participant.age}, Poziom:{" "}
              {participant.level}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
