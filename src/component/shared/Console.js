 import React from "react";
 const   Console = prop => (
     console[Object.keys(prop)[0]](...Object.values(prop))
         ,null // ➜ React components must return something
 )