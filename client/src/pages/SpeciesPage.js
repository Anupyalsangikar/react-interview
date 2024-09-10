
/**
 * Anup Yalsangikar
 *  
 */ 
import React from "react";
import useFetchData from "../useFetchData";

function SpeciesPage() {
    const { data, loading, error } = useFetchData(
        "https://swapi.dev/api/species/"
      );
      const species = data?.results;
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h1>Species Page</h1>

      {console.log("species ::", data)}
      <ul className="card-container">
        {species.map((species, i) => (
          <li key={i} className="character-card">
            <h2>{species.name}</h2>
            <p><strong>Classification:</strong> {species.classification} cm</p>
            <p>Designation: {species.designation} kg</p>
            <p>Average height: {species.average_height}</p>
            <p>Skin Color: {species.skin_color}</p>
            <p>Hair Colors: {species.hair_colors}</p>
            <p>Eye Color: {species.eye_color}</p>
            <p>Average lifespan: {species.average_lifespan}</p>
            <p>Language: {species.language}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpeciesPage;
