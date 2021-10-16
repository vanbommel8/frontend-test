import React from "react";


export default function Checkbox({ id, titolo, dispatch, type }) {
    return (
    <span><input value={id} type="checkbox" onChange={(e) => dispatch({ type: type, payload: e.target.value })}></input> {titolo}</span>
    )
}