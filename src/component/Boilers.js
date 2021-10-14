import React from "react";
import Boiler from './shared/Boiler';
import img from '../images/boiler.png'

export default function Boilers(){


    return(
        <Boiler immagine={img} brand={'Ariston'} descrizione={'Matis condens - Condensing Boiler 24 kW Methane - Indoor'} prezzo={'1.350,00 €'} prezzoPreSconto = {''} note = {'Sopralluogo e installazione inclusi'} stelle={''}/>
    )
}