
import React  from "react";
import Rating from "./Rating";
import Checkbox from "./Checkbox";
import {editLabel} from "../../Utility/StringUtillity";
const starsNumbers=[1,2,3,4,5]
export default function Filter({filter}){

    return (
        <div>{

            Object.entries(filter).map(([title, obj], index) => (
                <div key={index}>
                    <h3 key={index}>
                        {editLabel(title)}
                    </h3>
                    {

                        Object.entries(obj).map(([labelFilter,value],keyZ)=>{

                            return (<div key={keyZ}>

                                <label >
                                    <Checkbox />
                                    {
                                        (title==="stelle")? starsNumbers.map((value, key) => {
                                            return <Rating key={key} isRating={ (value <= (5-keyZ)) ?true:false}/>


                                        }):
                                            labelFilter
                                            .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
                                                .replace(/^./, labelFilter[0].toUpperCase())


                                    }

                                    &nbsp;({value})
                                </label>
                                <br />
                                <br/>


                            </div>)
                        })
                    }

            </div>

            ))


        }





        </div>
    );

}