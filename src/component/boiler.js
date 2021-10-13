import React from "react";
import boilerImg from '../images/boiler.png';


export default function Boiler() {
    return (
        <div className='row'>
            <div className='col-4'>
                <img
                    src={boilerImg}
                    alt="Boiler"
                />
            </div>
            <div className='col-4'>
                <img
                    src={boilerImg}
                    alt="Boiler"
                />
            </div>
            <div className='col-4'>
                <img
                    src={boilerImg}
                    alt="Boiler"
                />
            </div>
        </div>
    );
}