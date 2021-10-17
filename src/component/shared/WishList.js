import React from "react";

export default function WishList({ isWishList, id, dispatch }) {
    return (
        <div className="wishlist" onClick={() => dispatch({ type: 'IS_WISHLIST' })}><i className="far fa-heart"></i> <i className="fas fa-heart"></i>
        </div>
    )
}
