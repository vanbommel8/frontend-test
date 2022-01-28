import React, { useContext } from "react";
import Boiler from './shared/Boiler';
import { AppContext } from "../App";

export default function Boilers() {


    const [state, dispatch] = useContext(AppContext);
    return (state.boilers.map(
        (boiler) =>
            <Boiler dispatch={dispatch} key={boiler.id} {...boiler} />
    ))
}