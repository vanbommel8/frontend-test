import React from "react";

export default function ConfrontaAlert({showBar}) {


    const title = () => {
     
        switch (showBar.length) {
            case 0:

        
              return ' ';  

            case 1:
                return 'Seleziona altri 2 prodotti per confrontarli'  ;
         
            case 2:
                return 'Seleziona ancora un prodotto per un confronto più dettagliato';
                
              
            case 3 :
                return 'Confronta i modelli selezionati';
            

      
              
            default:
                return 'Hai Selezionato troppi prodotti  (max 3)';
         
        }
    };
    return (
        (showBar.length>=1) &&
        <div className='confrontaAlert'>
            <span className='testoConfronta'> {title()} </span>
            <button disabled={ (showBar.length<3) ||( showBar.length>=4)?true:false} className='buttonConfronta'>CONFRONTA</button>
        </div>
    )
}