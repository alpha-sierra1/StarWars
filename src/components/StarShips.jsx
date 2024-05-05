// import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default function StarShips() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function fetchStarships() {
      try {
        const response = await axios.get("https://swapi.dev/api/starships/");
        setStarships(response.data.results);
      } catch (error) {
        console.error("Bleh:", error);
      }
    }
    fetchStarships();
  }, []);

  return (
    <>
      <Navbar />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-2">
        {starships.map((starship, index) => (
          <div key={index} className="border p-5 bg-neutral-700">
            <h2 className="text-xl font-semibold text-gray-400 mb-1">
              {starship.name}
            </h2>
            <p className="text-yellow-600 mb-1">
              Cost in Credits: {starship.cost_in_credits}
            </p>
            <p className="text-yellow-600 mb-1">
              Starship Class: {starship.starship_class}
            </p>
            <p className="text-yellow-600 mb-1">
              Manufacturer: {starship.manufacturer}
            </p>
            <p className="text-yellow-600">
              Cargo Capacity: {starship.cargo_capacity}
            </p>
          </div>
        ))}
      </div>{" "}
    </>
  );
}
