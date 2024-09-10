import React from "react";
import useFetchData from "../useFetchData";

function PlanetsPage() {
  const { data, loading, error } = useFetchData(
    "https://swapi.dev/api/planets/"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const planets = data?.results;

  return (
    <div className="character-list">
      <h1>Planets Page</h1>
      {console.log("planets ::", planets)}
      <ul className="card-container">
        {planets.map((planets, i) => (
          <li key={i} className="character-card">
            <h2>{planets.name}</h2>
            <p>Rotation Period: {planets.rotation_period}</p>
            <p>Orbital Period: {planets.orbital_period}</p>
            <p>Diameter: {planets.diameter}</p>
            <p>Population: {planets.population}</p>
            <p>Created: {planets.created}</p>
            <p>URL: {planets.url}</p>
            <p>Climate: {planets.climate}</p>
            <p>Gravity: {planets.gravity}</p>
            <p>Surface water: {planets.surface_water}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlanetsPage;
