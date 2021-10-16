import React from "react";
import Filters from "./component/Filters";
import Boilers from "./component/Boilers";
import { useReducer, useEffect, createContext } from "react";
import reducer from "./store/actions";
import { INITIAL_STATE } from "./store/reducer";
import axios from "axios";
import ConfrontaAlert from "./component/shared/ControntaAlert";

export const AppContext = createContext();
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

    <>
      <AppContext.Provider value={[state, dispatch]}>
        <div className="container">
          <div className="row mb-5 gx-5">
            <Filters />
            <div className="col-lg-8 col-md-6">
              <div className="row gx-5">
                <Boilers data={state.boiler.boilers} />
              </div>
            </div>
          </div>
        </div>
        <ConfrontaAlert showBar={state.matchBoiler.arrayProdotti}/>
      </AppContext.Provider>
    </>
  );
}

export default App;
