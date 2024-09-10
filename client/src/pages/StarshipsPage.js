import React from "react";
import useFetchData from "../useFetchData";

function StarshipsPage() {
  const { data, loading, error } = useFetchData(
    "https://swapi.dev/api/starships/"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const starships = data?.results;
  return (
    <div className="character-list">
      <h1>Starships Page</h1>
      {console.log("starships ::", starships)}
      <ul className="card-container">
        {starships.map((starships, i) => (
          <li key={i} className="character-card">
            <h2>{starships.name}</h2>
            <p>Model: {starships.model} cm</p>
            <p>manufacturer: {starships.manufacturer} kg</p>
            <p>cost_in_credits: {starships.cost_in_credits}</p>
            <p>length: {starships.length}</p>
            <p>max_atmosphering_speed: {starships.max_atmosphering_speed}</p>
            <p>crew: {starships.crew}</p>
            <p>passengers: {starships.passengers}</p>
            <p>cargo_capacity: {starships.cargo_capacity}</p>
            <p>consumables: {starships.consumables}</p>
            <p>hyperdrive_rating: {starships.hyperdrive_rating}</p>
            <p>Starship class: {starships.starship_class}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StarshipsPage;
