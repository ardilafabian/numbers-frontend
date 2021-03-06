import React from "react";
import STRINGS from "@constants/strings";
import "@assets/styles/components/Description.scss"

const Description = () => {
    return (
        <div className="description">
            <h1>Problem Solution</h1>
            <p className="description__text">
                { STRINGS.BODY.DESCRIPTION }
            </p>
            <p className="description__indications">
                { STRINGS.BODY.SPECIFICATIONS }
            </p>
        </div>
    );
}

export default Description;