import React from "react";
import useFetchData from "../useFetchData";

function FilmsPage() {
  const { data, loading, error } = useFetchData("https://swapi.dev/api/films/");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const fimlsData = data?.results;

  return (
    <div>
      <h1>Films Page</h1>
      {console.log("Fimls ::", data)}
      <ul className="card-container">
        {fimlsData.map((fimlsData, i) => (
          <li key={i} className="character-card">
            <h2>{fimlsData.title}</h2>
            <p>
              <strong>Episode id:</strong> {fimlsData.episode_id}
            </p>
            <p>Opening Crawl: {fimlsData.opening_crawl}</p>
            <p>Director: {fimlsData.director}</p>
            <p>Producer: {fimlsData.producer}</p>
            <p>Release date: {fimlsData.release_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilmsPage;
