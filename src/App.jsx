// import { useState } from "react";
import StarWars from "./components/StarWars";
// import StarWarsAxios from "./components/StarWarsAxios";
import "./index.css";
import "tailwindcss/tailwind.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className="text-red-900">
        Hi this is React Project created with Vite using tailwind
      </div> */}
      <StarWars />
      <div className="text-center my-10">
        <button className="border border-solid border-orange-500 rounded-md px-4 py-2 bg-orange-500">
          Do the same with Axios
        </button>{" "}
      </div>
      {/* <StarWarsAxios /> */}
      {/* <Router>
        <Switch>
          <Route path="/src/components/StarWarsAxios.jsx">
            <StarWarsAxios />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;

// import { useState } from "react";
// import StarWars from "./components/StarWars";
// import StarWarsAxios from "./components/StarWarsAxios";
// import "./index.css";
// import "tailwindcss/tailwind.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// function App() {
//   const [redirectToAxios, setRedirectToAxios] = useState(false);

//   return (
//     <Router>
//       <>
//         <Switch>
//           <Route exact path="/">
//             <StarWars />
//             <div className="text-center my-10">
//               <button
//                 className="border border-solid border-orange-500 rounded-md px-4 py-2 bg-orange-500"
//                 onClick={() => setRedirectToAxios(true)}
//               >
//                 Do the same with Axios
//               </button>
//             </div>
//           </Route>
//           <Route path="/starwarsaxios">
//             {redirectToAxios && <StarWarsAxios />}
//           </Route>
//         </Switch>
//       </>
//     </Router>
//   );
// }

// export default App;
