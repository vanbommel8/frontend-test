import React from "react";
import Checkbox from "./Checkbox";
import Rating from "./Rating";
import WishList from "./WishList";

export default function Boiler({
  id,
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
  utilizzo,
}) {
  return (

    <div className="col-lg-4 col-md-6">
      <div className="boilerCard">{

          (inSconto) && <span className="sale">Risparmi il 20%</span>
      }
       
        <WishList />
        <img src={immagine} alt="Boiler" />
        <div className="boilerData">
          <span className="boilerBrand">{brand}</span>
          <br />
          <div className="boilerDesc">{descrizione}</div>
          <span className="prezzo">{prezzo}</span>{" "}
          <span className="prezzoPreSconto">{prezzoPreSconto}</span>
          <br />
          <span className="note">{note}</span>
          <br />
          <hr /> {

           [1,2,3,4,5].map( (value) =>{
            return (value<=stelle)? < Rating isRating={true}/> :<Rating isRating={false}/>
            
           })
          }

          <span className="confronta">
            <Checkbox titolo={"Confronta"} />
          </span>
        </div>
      </div>
    </div>
  );
}