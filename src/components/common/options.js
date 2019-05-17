import React from "react";

export default function CreateOptions({ properties }) {
    const makeOption = (x) => {
        return <option value={x.id} key={x.id}>{capitalizeFirstLetter(x.name)}</option>;
    };

    const capitalizeFirstLetter = (s) => {
        return s !== undefined && s !== null ? s.charAt(0).toUpperCase() + s.slice(1) : "";
    }

    return (
        properties.map(x => makeOption(x))
    )
}