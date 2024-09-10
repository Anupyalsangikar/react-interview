import React, { useState } from "react";
import useFetchData from "../useFetchData";
import "./card.css";

function PeoplePage() {
  const [searchId, setSearchId] = useState("");
  const [responseData, setResponseData] = useState("");
  const { data, loading, error } = useFetchData(
    "https://swapi.dev/api/people/"
  );

  const fetchDataById = async (id) => {
    console.log(searchId)

    try {
      const response = await fetch(`https://swapi.dev/api/people/?search=${id}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = await response?.json();
      console.log(result)

      setResponseData(result);
    } catch (error) {
      console.log("ERROR!!!", error);
    }
  };

  const people = searchId ? responseData?.results :data?.results;

  const handleSearch = () => {
    if (searchId) {
      console.log(searchId)
      fetchDataById(searchId);
    }
  };
  return (
    <div className="character-list">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <h1>People Page</h1>
      <input
        type="text"
        placeholder="Enter character ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
      {console.log("Data ::", data)}
      <ul className="card-container">
        {people?.map((people, i) => (
          <li key={i} className="character-card">
            <h2>{people.name}</h2>
            <p>
              <strong>Height:</strong> {people.height} cm
            </p>
            <p>Mass: {people.mass} kg</p>
            <p>Hair Color: {people.hair_color}</p>
            <p>Skin Color: {people.skin_color}</p>
            <p>Eye Color: {people.eye_color}</p>
            <p>Birth Year: {people.birth_year}</p>
            <p>Gender: {people.gender}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeoplePage;
