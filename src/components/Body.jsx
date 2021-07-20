import React, { useEffect, useState } from "react";
import STRINGS from "@constants/strings";
import "@assets/styles/components/SearchBar.scss";
import { fetchGet } from "@utils/fetchApi";
import searchIcon from "@assets/static/search.png";

const Body = () => {
    const [result, setResult] = useState(null);

    const handleSearch = () => {
        fetchGet('/numbers/sum').then((result) => {
            setResult(result);
        });
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            handleSearch();
        }
    };
    return (
        <body>
            <section className="searchBar">
                <input
                    onKeyDown={handleKeyDown}
                    type="text"
                    className="input"
                    placeholder={STRINGS.SEARCH_BAR.INPUT_PLACEHOLDER}
                />
                <button onClick={handleSearch}>
                    <img src={searchIcon} alt="search button" />
                </button>
            </section>
            <div>
                { result }
            </div>
        </body>);
};

export default Body;