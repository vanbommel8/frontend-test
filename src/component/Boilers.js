import React, {useContext } from "react";
import Boiler from './shared/Boiler';
import { AppContext } from "../App";

export default function Boilers({ data }) {
    console.log(data);

    const [state, dispatch] = useContext(AppContext);

    console.log(state.boiler.boilers);

    return (
        state.boiler.boilers.map((boiler) =>
            <Boiler key={boiler.id} {...boiler} />
        )
    )
}