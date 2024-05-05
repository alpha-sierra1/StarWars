// import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default function Species() {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    async function fetchSpecies() {
      try {
        const response = await axios.get("https://swapi.dev/api/species/");
        setSpecies(response.data.results);
      } catch (error) {
        console.error("Bleh:", error);
      }
    }
    fetchSpecies();
  }, []);

  return (
    <>
      <Navbar />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-2">
        {species.map((specie, index) => (
          <div key={index} className="border p-5 bg-neutral-700">
            <h2 className="text-xl font-semibold text-gray-400 mb-1">
              {specie.name}
            </h2>
            <p className="text-yellow-600 mb-1">
              Classification: {specie.classification}
            </p>
            <p className="text-yellow-600 mb-1">
              Designation: {specie.designation}
            </p>
            <p className="text-yellow-600 mb-1">
              Average Height: {specie.average_height}
            </p>
            <p className="text-yellow-600">
              Average Lifespan: {specie.average_lifespan}
            </p>
          </div>
        ))}
      </div>{" "}
    </>
  );
}
