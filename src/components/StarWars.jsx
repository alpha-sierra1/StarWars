import { useState, useEffect } from "react";
// import StarWars from './components/StarWars';

export default function StarWars() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchFilms() {
      try {
        const response = await fetch("https://swapi.dev/api/films/");
        if (!response.ok) {
          throw new Error("Your bad");
        }
        const data = await response.json();
        setFilms(data.results);
      } catch (error) {
        console.error("Sucks to be you!:", error);
      }
    }
    fetchFilms();
  }, []);
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">
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
    </>
  );
}

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
