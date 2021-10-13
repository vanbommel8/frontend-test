import React from "react";
import boilerImg from '../images/boiler.png';


export default function Boiler() {
    return (
        <div className='row'>
            <div className='col-4'>
                <div className='boilerCard'>
                    <span className='sale'>Risparmi il 20%</span>
                    <span className='wishlist'><i class="far fa-heart"></i></span>
                    <img
                        src={boilerImg}
                        alt="Boiler"
                    />
                    <div className='boilerData'>
                        <span className='boilerBrand'>Ariston</span><br />
                        <div className='boilerDesc'>Matis condens - Condensing Boiler 24 kW Methane - Indoor</div>
                        <span className='boilerDiscountPrice'>1.350,00 €</span> <span className='boilerPrice'>1.570,00 €</span><br />
                        <span className='boilerService'>Sopralluogo e installazione inclusi</span><br />
                        <hr />
                        <span>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div className='col-4'>
                <div className='boilerCard'>
                    <span className='sale'>Risparmi il 20%</span>
                    <span className='wishlist'><i class="far fa-heart"></i></span>
                    <img
                        src={boilerImg}
                        alt="Boiler"
                    />
                </div>
            </div>
            <div className='col-4'>
                <div className='boilerCard'>
                    <span className='sale'>Risparmi il 20%</span>
                    <span className='wishlist'><i class="far fa-heart"></i></span>
                    <img
                        src={boilerImg}
                        alt="Boiler"
                    />
                </div>
            </div>
        </div>
    );
}