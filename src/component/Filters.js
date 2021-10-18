import React, { useState, useEffect } from "react";
import Checkbox from "./shared/Checkbox";
import axios from "axios";

export default function Filters() {

    const [category, setCategory] = useState({});

    useEffect(() => {
        async function fetchData() {

            const url = "http://localhost:9000/stock"
            const response = await axios.get(
                url
            );
            setCategory(response.data);
        }

        fetchData();
    }, []);



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
                        Object.entries(category).map(([category, obj]) => {
                        const  values=Object.entries(obj);
                          console.log(values[0][0])
                             const text= values[0][0].replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2").toUpperCase()


                            return  <h3> {text}
                                {
                                     values.map(([key,value])=>{


                                    return (<div>

                                        <Checkbox  />
                                    </div> )
                                })



                                }


                          </h3>

                    })


                    }
                </div>
            </div>
        </div>
    );
}