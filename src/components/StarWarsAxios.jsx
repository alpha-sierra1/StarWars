import { useState, useEffect } from "react";
import axios from "axios";

export default function StarWarsAxios() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchFilms1() {
      try {
        const response = await axios.get("https://swapi.dev/api/films/");
        setFilms(response.data.results);
      } catch (error) {
        console.error("Bleh:", error);
      }
    }
    fetchFilms1();
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-2">
      {films.map((film, index) => (
        <div key={index} className="border p-5 bg-neutral-700">
          <h2 className="text-xl font-semibold text-yellow-600 mb-1">
            {film.title}
          </h2>
          <p className="text-gray-400 mb-1 tracking-wide">
            {film.opening_crawl}
          </p>
          <p className="text-yellow-600 mb-1">Director: {film.director}</p>
          <p className="text-yellow-600 mb-1">Producer: {film.producer}</p>
          <p className="text-yellow-600">Release Date: {film.release_date}</p>
        </div>
      ))}
    </div>
  );
}
