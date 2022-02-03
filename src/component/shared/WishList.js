import React, { useContext } from "react";
import { AppContext } from "../../App";
export default function WishList({ id }) {
    const [state, dispatch] = useContext(AppContext);




    return (
        <span onClick={() => dispatch({ type: 'IS_WISHLIST', payload: id })} className="wishlist">{
            (state['isWishList']) ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>
        }
        </span>
    )

}
