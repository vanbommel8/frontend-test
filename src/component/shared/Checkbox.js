import React from "react";


export default function Checkbox({titolo}) {
    return (
        <span><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input> {titolo}</span>
    )
}