import React from "react";


export default function Checkbox({id,titolo,dispatch}) {
    return (
        <span><input  type="checkbox"  onChange={()=> dispatch({ type:'MATCH_BOILER', payload:id})} className="form-check-input" ></input> {titolo}</span>
    )
}