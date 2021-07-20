import React, { useEffect, useState } from "react";
import STRINGS from "@constants/strings";
import "@assets/styles/components/Body.scss";
import { fetchGet } from "@utils/fetchApi";
import searchIcon from "@assets/static/search.png";
import LoaderCircle from "@components/LoaderCircle";

const Body = () => {
    const [result, setResult] = useState({ loaded: false });
    const [data, setData] = useState({array:[]})

    const handleInputChange = (e) => {
        setData(e.target.value);
    };
    const handleSearch = () => {
        result['loaded'] = false;
        const rq = {array: data.split(' ').map(Number)}
        fetchGet('/numbers/sum', rq).then((result) => {
            result['loaded']= true;
            console.log(result);
            setResult(result);
        });
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            handleSearch();
        }
    };
    return (
        <section>
            <div className="searchBar">
                <input
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    type="text"
                    className="input"
                    placeholder={STRINGS.SEARCH_BAR.INPUT_PLACEHOLDER}
                />
                <button onClick={handleSearch}>
                    <img src={searchIcon} alt="search button" />
                </button>
            </div>
            <div className="resultBody">
                {result.loaded &&
                    <div>
                        Index: {result.index}
                        <br></br>
                        Result Sum: {result.sum}
                        <br></br>
                        Array #1: {result.leftArray}
                        <br></br>
                        Array #2: {result.rightArray}
                    </div>
                }
                {!result.loaded &&
                    <div>
                        <LoaderCircle />
                    </div>
                }
            </div>
        </section>);
};

export default Body;