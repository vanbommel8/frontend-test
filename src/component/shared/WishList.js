import React from "react";

export default function WishList({ isWishList }) {
    return (
        <span className="wishlist">{
            (isWishList) ? <i className="far fa-heart"></i> : <i className="fas fa-heart"></i>
        }
        </span>
    )
}