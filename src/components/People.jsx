// import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default function People() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchPeople() {
      try {
        const response = await axios.get("https://swapi.dev/api/people/");
        setPeople(response.data.results);
      } catch (error) {
        console.error("Bleh:", error);
      }
    }
    fetchPeople();
  }, []);

  return (
    <>
      <Navbar />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-2">
        {people.map((people, index) => (
          <div key={index} className="border p-5 bg-neutral-700">
            <h2 className="text-xl font-semibold  text-gray-400 mb-1">
              {people.name}
            </h2>
            <p className="text-yellow-600 mb-1">
              Birth Year: {people.birth_year}
            </p>
            <p className="text-yellow-600 mb-1">Gender: {people.gender}</p>
            <p className="text-yellow-600 mb-1">height: {people.height}</p>
            <p className="text-yellow-600">Eye Colour: {people.eye_colour}</p>
          </div>
        ))}
      </div>{" "}
    </>
  );
}
