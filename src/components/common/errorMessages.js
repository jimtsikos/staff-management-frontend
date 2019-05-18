import React from "react";

export default function ErrorMessages({ errors }) {
    return (
        <div className="alert alert-danger" role="alert">
            <ul>
                { errors.map(x => <li key={x.id}>{x.message}</li>) }
            </ul>
        </div>
    )
}