import React from "react";
import Checkbox from "./shared/Checkbox";


export default function Filters() {
    return (
        <div className='col-lg-4 col-md-6'>
            <div className='boxCategorie'>
                <div className='categorie'>
                    <h3>Categorie</h3>
                    <h4>Riscaldamento</h4>
                    <ul>
                        <li>Casa e acqua</li>
                        <li>Casa</li>
                        <li>Acqua</li>
                    </ul>
                </div>
                <div className='filtriCategorie'>
                    <h3>Scegli per</h3>
                <Checkbox /> 
                </div>
            </div>
        </div>
    );
}