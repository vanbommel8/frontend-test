import React from "react";


/*import Filter from "./shared/Filter"*/
/*import Rating from "./shared/Rating";*/
//import {editLabel} from "../Utility/StringUtillity";
//const starsNumbers=[1,2,3,4,5,6,7]
import Filter from "./shared/Filter";

export default function Filters({filters}) {


    //console.log(filters);


       /* const obj=filters?.map((filter, index) => (

        Object.entries(filter).map(([title,obj])=>{

            return [title,obj]
        }
        )
    ))*/



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
                    {

                        filters?.map((filter,index)=>(

                            <Filter key={index} filter={filter}  />
                        ))

                    }


                </div>
            </div>
        </div>
    );

}


