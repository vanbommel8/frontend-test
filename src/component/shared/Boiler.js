import React from "react";
import Checkbox from "./Checkbox";
import Rating from "./Rating";
import WishList from "./WishList";
import img from '../../images/boiler.png'

const starsNumbers = [1, 2, 3, 4, 5];

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
  dispatch
}) {



  return (

    <div className="col-lg-4 col-md-6">
      <div className="boilerCard">{
        (inSconto) && <span className="sale">Risparmi il 20%</span>
      }

        <WishList />
        <img src={img} alt="Boiler" />
        <div className="boilerData">
          <span className="boilerBrand">{brand}</span>
          <br />
          <div className="boilerDesc">{descrizione}</div>
          <span className="prezzo">{`${prezzo} €`}</span>{" "}
          <span className="prezzoPreSconto">{`${prezzoPreSconto} €`}</span>
          <br />
          <span className="note">{note}</span>
          <br />
          <hr /> {

            // Facciamo un map del valore dell'array dichiarato "starsNumbers", successivamente si confronta il numero con la prop "stelle" che sarebbe il numero di recensioni che ha avuto (al momento prende il numero dal db.json) e se corrisponde a quel numero stampa la stellina piena altrimenti la stellina vuota.
            starsNumbers.map((value) => {
              return (value <= stelle) ? <Rating isRating={true} /> : <Rating isRating={false} />

            })
          }

          <span className="confronta">
            <Checkbox dispatch={dispatch} type={'MATCH_BOILER'} titolo={"Confronta"} id={id} />
          </span>
        </div>
      </div>
    </div>
  );
}