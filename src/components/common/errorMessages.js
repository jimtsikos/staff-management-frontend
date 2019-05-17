import React from "react";

export default function ErrorMessages({ errors }) {
    return (
        <div className="alert alert-danger" role="alert">
            <ul>
                { errors.map(x => <li>{x}</li>) }
            </ul>
        </div>
    )
}