import React from "react";
import Boiler from "./component/boiler"
import Filters from "./component/filters";



function App() {
  return (
    <div className='container'>
      <div className='row mb-5 gx-5'>
        <Filters />
        <Boiler />
      </div>
    </div>
  );
}

export default App;
