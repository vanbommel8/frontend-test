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

    const stock = Object.entries(category).map(([category, obj]) => {

        const value = Object.entries(obj).map(([key, value]) => {

        });
        ;
    });


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


                    {Object.entries(category).map(([category, obj]) => {

                        const value = Object.entries(obj).map(([key, category]) => {
                            console.log("Key", key);
                            console.log("Category", category);



                        });
                        console.log("Value:", value);
                        return (<>
                            <h3>{}</h3>
                            <Checkbox /><h3>{}</h3>
                        </>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}