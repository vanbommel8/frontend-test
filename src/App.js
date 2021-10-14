import React from "react";

import Filters from "./component/Filters";
import Boilers from "./component/Boilers";
import {useReducer} from "react";
import reducer from "./store/actions";
import { INITIAL_STATE } from "./store/reducer";
function App() {

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  console.log(state);
  return (
    <div className='container'>
      <div className='row mb-5 gx-5'>
        <Filters />
         <Boilers/>
      </div>
    </div>
  );
}


export default App;
