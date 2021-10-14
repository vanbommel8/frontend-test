import React from "react";

import Filters from "./component/Filters";
import Boilers from "./component/Boilers";
import { useReducer, useEffect } from "react";
import reducer from "./store/actions";
import { INITIAL_STATE } from "./store/reducer";
import axios from "axios";
function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    async function fetchData() {
      const url = `http://localhost:9000/boilers`;

      const response = await axios.get(url);
      if (response.status === 200) {
        dispatch({ type: "FETCH_DATA", payload: response.data });
      }
    }
    fetchData();
  }, []);

  console.log(state);
  return (
    <div className="container">
      <div className="row mb-5 gx-5">
        <Filters />
        <Boilers />
      </div>
    </div>
  );
}

export default App;
