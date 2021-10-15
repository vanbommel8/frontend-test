import React from "react";


export default function Checkbox({id,titolo,dispatch}) {
    return (
        <span><input  type="checkbox" value={id} onChange={(e)=> dispatch({ type:'MATCH_BOILER', payload:e.target.value})} className="form-check-input" ></input> {titolo}</span>
    )
}