import React from "react";


export default function Rating({ isRating }) {
    return (
        <span className="stars">{
            (isRating) ? <i className="fas fa-star"></i> : <i className="far fa-star"></i>
        }
        </span>
    )
}