import React from "react";
import Boiler from "./component/Boiler"
import Filters from "./component/Filters";



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
