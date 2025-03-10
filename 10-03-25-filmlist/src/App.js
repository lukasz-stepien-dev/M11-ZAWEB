import React, { useState } from "react";

function App() {
  const [filmTitle, setFilmTitle] = useState("");
  const [filmType, setFilmType] = useState("");
  const [filmList, setFilmList] = useState([]);

  const handleTitleChange = (event) => {
    setFilmTitle(event.target.value);
  };

  const handleTypeChange = (event) => {
    setFilmType(event.target.value);
  };

  const handleAddFilm = () => {
    if (filmTitle && filmType) {
      setFilmList([...filmList, { title: filmTitle, type: filmType }]);
      setFilmTitle(""); // Reset title input after adding
      setFilmType(""); // Reset type dropdown if needed, or keep the last selected
    }
  };

  return (
    <div>
      <div>
        <h2>Tytuł filmu</h2>
        <input
          type="text"
          placeholder="Podaj imie"
          value={filmTitle}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <h2>Rodzaj</h2>
        <select value={filmType} onChange={handleTypeChange}>
          <option value="">kliknij</option>
          <option value="Komedia">Komedia</option>
          <option value="Obyczajowy">Obyczajowy</option>
          <option value="Sensacyjny">Sensacyjny</option>
        </select>
        <button onClick={handleAddFilm}>kliknij</button>
      </div>

      <div>
        {filmList.map((film, index) => (
          <div key={index}>
            <p>• Tytuł: {film.title}</p>
            <p>Rodzaj: {film.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
