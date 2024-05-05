// import { useState, useEffect } from "react";
// // import StarWars from './components/StarWars';

// export default function StarWars() {
//   const [films, setFilms] = useState([]);

//   useEffect(() => {
//     async function fetchFilms() {
//       try {
//         const response = await fetch("https://swapi.dev/api/films/");
//         if (!response.ok) {
//           throw new Error("Your bad");
//         }
//         const data = await response.json();
//         setFilms(data.results);
//       } catch (error) {
//         console.error("Sucks to be you!:");
//       }
//     }
//     fetchFilms();
//   }, []);
//   return (
//     <>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">
//         {films.map((film, index) => (
//           <div key={index} className="border p-4">
//             <h2 className="text-xl font-semibold text-orange-500">
//               {film.title}
//             </h2>
//             <p>{film.opening_crawl}</p>
//             <p>Director: {film.director}</p>
//             <p>Producer: {film.producer}</p>
//             <p>Release Date: {film.release_date}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

//   return (
//     <>
//       <div className="grid grid-cols-2 gap-4">
//         {films.map((film, index) => (
//           <div key={index} className="border p-4">
//             <h2 className="text-xl font-semibold text-orange-500">
//               {film.title}
//             </h2>
//             <p>{film.opening_crawl}</p>
//             <p>Director: {film.director}</p>
//             <p>Producer: {film.producer}</p>
//             <p>Release Date: {film.release_date}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
// import StarShips from "./StarShips";
// import Vehicles from "./Vehicle";
// import Species from "./Species";
// import People from "./People";
// import Planets from "./Planets";

export default function StarWars() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchFilms() {
      try {
        const response = await fetch("https://swapi.dev/api/films/");
        if (!response.ok) {
          throw new Error("Failed to fetch films");
        }
        const data = await response.json();
        setFilms(data.results);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    }
    fetchFilms();
  }, []);

  return (
    <>
      <Navbar />
      {/* <StarShips />
      <Vehicles />
      <Species />
      <People />
      <Planets /> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-2">
        {films.map((film, index) => (
          <div key={index} className="border p-6 bg-neutral-700">
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
      <div className="text-center my-10">
        <Link to="/axios">
          <button className="border border-solid border-yellow-600 rounded-md px-4 py-2 bg-yellow-600">
            Do the same with Axios
          </button>
        </Link>
      </div>
    </>
  );
}
