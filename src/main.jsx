import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import App from "./App.jsx";
// index.js or main.js
import "tailwindcss/tailwind.css";
import "./index.css";
import StarWars from "./components/StarWars";
import StarWarsAxios from "./components/StarWarsAxios";
import StarShips from "./components/StarShips";
import Planets from "./components/Planets";
import People from "./components/People";
import Species from "./components/Species";
import Vehicles from "./components/Vehicle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StarWars />,
  },
  {
    path: "/axios",
    element: <StarWarsAxios />,
  },
  {
    path: "/starships",
    element: <StarShips />,
  },
  {
    path: "/planets",
    element: <Planets />,
  },
  {
    path: "/people",
    element: <People />,
  },
  {
    path: "/species",
    element: <Species />,
  },
  {
    path: "/vehicles",
    element: <Vehicles />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
