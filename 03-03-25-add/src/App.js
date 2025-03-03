import React, { useState } from "react";

function App() {
  const [animalName, setAnimalName] = useState("");
  const [animalAge, setAnimalAge] = useState("");
  const [animalWeight, setAnimalWeight] = useState("");
  const [animals, setAnimals] = useState([
    { name: "Tygrys", age: 2, weight: 100 },
    { name: "Slon", age: 22, weight: 200 },
  ]);

  const handleAddAnimal = () => {
    if (animalName && animalAge && animalWeight) {
      setAnimals([
        ...animals,
        {
          name: animalName,
          age: parseInt(animalAge),
          weight: parseInt(animalWeight),
        },
      ]);
      setAnimalName("");
      setAnimalAge("");
      setAnimalWeight("");
    }
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
        Zwierzęta w zoo
      </div>

      <div
        style={{ display: "flex", marginBottom: "10px", alignItems: "center" }}
      >
        <div style={{ marginRight: "10px" }}>
          <label htmlFor="animalName">Dodaj zwierzę</label>
          <br />
          <input
            type="text"
            id="animalName"
            value={animalName}
            onChange={(e) => setAnimalName(e.target.value)}
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div style={{ marginRight: "10px" }}>
          <label htmlFor="animalAge">Wiek</label>
          <br />
          <input
            type="number"
            id="animalAge"
            value={animalAge}
            onChange={(e) => setAnimalAge(e.target.value)}
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div>
          <label htmlFor="animalWeight">Waga (kg)</label>
          <br />
          <input
            type="number"
            id="animalWeight"
            value={animalWeight}
            onChange={(e) => setAnimalWeight(e.target.value)}
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <button
          onClick={handleAddAnimal}
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
          Dodaj
        </button>
      </div>

      <div>
        {animals.map((animal, index) => (
          <div key={index}>
            {animal.name} - Wiek: {animal.age} lat, Waga: {animal.weight} kg
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
