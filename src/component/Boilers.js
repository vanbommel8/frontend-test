import React from "react";
import Boiler from './shared/Boiler';
import img from '../images/boiler.png'

export default function Boilers({data}){


    return(
         
           data.map(({ id,
            alimentazione,
            brand,
            descrizione,
            disponibile,
            immagine,
            inSconto,
            note,
            potenzaNominale,
            prezzo,
            prezzoPreSconto,
            stelle,
            tipologia,
            utilizzo}) =>
            <Boiler immagine={immagine} brand={brand} descrizione={descrizione} prezzo={`${prezzo} euro ` } prezzoPreSconto = {prezzoPreSconto} note = {note} stelle={stelle}/>
           ) 
        
        
    )
}