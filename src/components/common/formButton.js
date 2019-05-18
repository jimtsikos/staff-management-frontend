import React from "react";

export default function FormButton({ sending }) {
    if (sending) {
        return (
            <span>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span> Sending...</span>
            </span>
        );
    } else {
        return "Submit";
    }
}