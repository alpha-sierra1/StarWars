// import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function fetchPlanets() {
      try {
        const response = await axios.get("https://swapi.dev/api/planets/");
        setPlanets(response.data.results);
      } catch (error) {
        console.error("Bleh:", error);
      }
    }
    fetchPlanets();
  }, []);

  return (
    <>
      <Navbar />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-2">
        {planets.map((planet, index) => (
          <div key={index} className="border p-5 bg-neutral-700">
            <h2 className="text-xl font-semibold text-gray-400 mb-1">
              {planet.name}
            </h2>
            <p className="text-yellow-600 mb-1">
              Orbital Period: {planet.orbital_period}
            </p>
            <p className="text-yellow-600 mb-1">
              Population: {planet.population}
            </p>
            <p className="text-yellow-600 mb-1">Climate: {planet.climate}</p>
            <p className="text-yellow-600">Gravity: {planet.gravity}</p>
          </div>
        ))}
      </div>{" "}
    </>
  );
}
