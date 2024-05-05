// import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    async function fetchVehicles() {
      try {
        const response = await axios.get("https://swapi.dev/api/vehicles/");
        setVehicles(response.data.results);
      } catch (error) {
        console.error("Bleh:", error);
      }
    }
    fetchVehicles();
  }, []);

  return (
    <>
      <Navbar />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-2">
        {vehicles.map((vehicle, index) => (
          <div key={index} className="border p-5 bg-neutral-700">
            <h2 className="text-xl font-semibold text-gray-400 mb-1">
              {vehicle.name}
            </h2>
            <p className="text-yellow-600 mb-1">
              Vehicle Model: {vehicle.model}
            </p>
            <p className="text-yellow-600 mb-1">
              Vehicle Class: {vehicle.vehicle_class}
            </p>
            <p className="text-yellow-600 mb-1">Crew: {vehicle.crew}</p>
            <p className="text-yellow-600">
              Manufacturer: {vehicle.manufacturer}
            </p>
          </div>
        ))}
      </div>{" "}
    </>
  );
}
