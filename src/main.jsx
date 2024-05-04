import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// index.js or main.js
import "tailwindcss/tailwind.css";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);