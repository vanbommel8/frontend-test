import React from "react";

export default function ConfrontaAlert() {
    return (
        <div className='confrontaAlert'>
            <span className='testoConfronta'>Seleziona altri 2 prodotti per confrontarli</span>
            <button disabled={1?"true":""} className='buttonConfronta'>CONFRONTA</button>
        </div>
    )
}