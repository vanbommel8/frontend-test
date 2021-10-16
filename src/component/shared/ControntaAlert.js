import React from "react";

export default function ConfrontaAlert({showBar}) {


    const title = () => {
        switch (showBar.length) {
            case 1:
                return 'Seleziona altri 2 prodotti per confrontarli'  ;
            case 2:
                return 'Seleziona un altro  prodotti per confrontarli' ;
            case 3 :
                return 'Confronta';


            default:
                return 'Hai Selezionato troppi prodotti  (max 3)';
        }
    };
    return (
        (showBar.length>0) &&
        <div className='confrontaAlert'>
            <span className='testoConfronta'>{title()}</span>
            <button disabled={ (showBar.length<3) ||( showBar.length>=4)?true:false} className='buttonConfronta'>CONFRONTA</button>
        </div>
    )
}