import React from "react";


export default function Checkbox({id,dispatch,type}) {
    return (
    <span><input value={id} type="checkbox" onChange={(e)=> dispatch({ type:type, payload:e.target.value})} className="form-check-input" ></input> </span>
    )
} 