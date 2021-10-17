import React from "react";

export default function ConfrontaAlert({ showBar }) {


    const title = () => {

        switch (showBar.length) {
            case 0:
                return ' ';
            case 1:
                return 'Seleziona altri 2 prodotti per confrontarli';
            case 2:
                return 'Seleziona ancora un prodotto per un confronto più dettagliato';
            case 3:
                return 'Confronta i modelli selezionati';
            default:
                return 'Puoi selezionare al massimo 3 prodotti per il confronto';

        }
    };
    return (
        (showBar.length >= 1) &&
        <div className='confrontaAlert d-flex justify-content-between'>
            <div className='testoConfronta align-self-center'> {title()} </div>
            <button disabled={(showBar.length < 3) || (showBar.length >= 4) ? true : false} className='buttonConfronta'>CONFRONTA</button>
        </div>
    )
}