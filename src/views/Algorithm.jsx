import React from "react";
import Header from "@components/Header";
import code from "@assets/static/code-snippet.png";
import "@assets/styles/Algorithm.scss";

const Algorithm = () => (
    <div className="algorithm">
        <Header module="algorithm" />
        <div className="title">
            <h1>Code Snippet</h1>
        </div>
        <div className="code">
            <img src={ code }/>
        </div>
    </div>
);

export default Algorithm;