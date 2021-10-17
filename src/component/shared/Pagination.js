import React from "react";

export default function Pagination() {
    return (
        <div className='d-flex justify-content-between mt-5 mb-5 pb-5'>
            <div className='prev'><i className="fas fa-chevron-left"></i> Prev</div>
            <div className='numberPage'>
                <span className='singleNumber current'>1</span>
                <span className='singleNumber'>2</span>
                <span className='singleNumber'>3</span>
            </div>
            <div className='next'>Next <i className="fas fa-chevron-right"></i></div>
        </div>
    )
}