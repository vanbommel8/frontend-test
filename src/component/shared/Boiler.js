import React from "react";
import boilerImg from "../../images/boiler.png";

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
    <>
      <div className="col-lg-8 col-md-6">
        <div className="row gx-5">
          <div className="col-lg-4 col-md-6">
            <div className="boilerCard">
              <span className="sale">Risparmi il 20%</span>
              <span className="wishlist">
                <i className="far fa-heart"></i>
              </span>
              <img src={boilerImg} alt="Boiler" />
              <div className="boilerData">
                <span className="boilerBrand">Ariston</span>
                <br />
                <div className="boilerDesc">
                  Matis condens - Condensing Boiler 24 kW Methane - Indoor
                </div>
                <span className="prezzo">1.350,00 €</span>{" "}
                <span className="prezzoPreSconto">1.570,00 €</span>
                <br />
                <span className="note">
                  Sopralluogo e installazione inclusi
                </span>
                <br />
                <hr />
                <span className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </span>
                <span className="confronta">
                  Confronta{" "}
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  ></input>
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="boilerCard">
              <span className="sale">Risparmi il 20%</span>
              <span className="wishlist">
                <i className="far fa-heart"></i>
              </span>
              <img src={boilerImg} alt="Boiler" />
              <div className="boilerData">
                <span className="boilerBrand">Ariston</span>
                <br />
                <div className="boilerDesc">
                  Matis condens - Condensing Boiler 24 kW Methane - Indoor
                </div>
                <span className="prezzo">1.350,00 €</span>{" "}
                <span className="prezzoPreSconto">1.570,00 €</span>
                <br />
                <span className="note">
                  Sopralluogo e installazione inclusi
                </span>
                <br />
                <hr />
                <span className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </span>
                <span className="confronta">
                  Confronta{" "}
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  ></input>
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="boilerCard">
              <span className="sale">Risparmi il 20%</span>
              <span className="wishlist">
                <i className="far fa-heart"></i>
              </span>
              <img src={boilerImg} alt="Boiler" />
              <div className="boilerData">
                <span className="boilerBrand">Ariston</span>
                <br />
                <div className="boilerDesc">
                  Matis condens - Condensing Boiler 24 kW Methane - Indoor
                </div>
                <span className="prezzo">1.350,00 €</span>{" "}
                <span className="prezzoPreSconto">1.570,00 €</span>
                <br />
                <span className="note">
                  Sopralluogo e installazione inclusi
                </span>
                <br />
                <hr />
                <span className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </span>
                <span className="confronta">
                  Confronta{" "}
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  ></input>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
