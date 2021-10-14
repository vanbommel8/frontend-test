import React from "react";
import Boiler from './shared/Boiler';
import img from '../images/boiler.png'


export default function Boilers({ data }) {
    console.log(data);

    return (

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
            utilizzo }) =>
            <Boiler key={id} immagine={img} brand={brand} descrizione={descrizione} prezzo={`${prezzo} €`} prezzoPreSconto={prezzoPreSconto} note={note} stelle={stelle} />
        )


    )
}