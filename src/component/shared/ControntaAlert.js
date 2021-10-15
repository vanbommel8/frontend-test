import React from "react";

export default function ConfrontaAlert({showBar}) {
    return (
        (showBar.length>=1) &&
        <div className='confrontaAlert'>
            <span className='testoConfronta'>Seleziona altri 2 prodotti per confrontarli</span>
            <button disabled={1?true:false} className='buttonConfronta'>CONFRONTA</button>
        </div>
    )
}