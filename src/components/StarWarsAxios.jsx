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
    <div className="grid grid-cols-2 gap-4">
      {films.map((film, index) => (
        <div key={index} className="border p-4">
          <h2 className="text-xl font-semibold text-orange-500">
            {film.title}
          </h2>
          <p>{film.opening_crawl}</p>
          <p>Director: {film.director}</p>
          <p>Producer: {film.producer}</p>
          <p>Release Date: {film.release_date}</p>
        </div>
      ))}
    </div>
  );
}
