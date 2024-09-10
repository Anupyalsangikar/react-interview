import React from "react";
import useFetchData from "../useFetchData";

function VehiclesPage() {
    const { data, loading, error } = useFetchData(
        "https://swapi.dev/api/vehicles/"
      );
      const vehicles = data?.results;

  return (
    <div>
      <h1>Vehicles Page</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {console.log("vehicles ::", data)}
      <ul className="card-container">
        {vehicles?.map((vehicle, i) => (
          <li key={i} className="character-card">
            <h2>{vehicle.name}</h2>
            <p><strong>model:</strong> {vehicle.model} cm</p>
            <p>manufacturer: {vehicle.manufacturer} kg</p>
            <p>cost_in_credits: {vehicle.cost_in_credits}</p>
            <p>length: {vehicle.length}</p>
            <p>max_atmosphering_speed: {vehicle.max_atmosphering_speed}</p>
            <p>passengers: {vehicle.passengers}</p>
            <p>cargo_capacity: {vehicle.cargo_capacity}</p>
            <p>consumables: {vehicle.consumables}</p>
            <p>vehicle_class: {vehicle.vehicle_class}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VehiclesPage;
