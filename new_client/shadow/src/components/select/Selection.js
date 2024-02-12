import React from "react";

const Selection = ({title,option}) => {
    return(
        <select className="select select-bordered w-full max-w-xs bg-neutral">
            <option disabled selected>{title}</option>
            <option>Shadow Garden</option>
        </select>
    )

}

export default Selection;