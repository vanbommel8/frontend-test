import React from "react";

import Filters from "./component/Filters";

import Boilers from "./component/Boilers";

function App() {
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
