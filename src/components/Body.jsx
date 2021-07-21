import React, { useState } from "react";
import STRINGS from "@constants/strings";
import "@assets/styles/components/Body.scss";
import { fetchGet } from "@utils/fetchApi";
import searchIcon from "@assets/static/search.png";
import LoaderCircle from "@components/LoaderCircle";
import Description from "@components/Description";

const Body = () => {
    const [result, setResult] = useState({ loaded: false });
    const [data, setData] = useState({ array: [] })
    const [error, setError] = useState(false);

    const handleInputChange = (e) => {
        setData(e.target.value);
    };

    const handleSearch = () => {
        result['loaded'] = false;
        const rq = {array: data.split(' ').map(Number)}
        fetchGet('/numbers/sum', rq).then((result) => {
            result['loaded']= true;
            console.log(result);
            setError(false);
            setResult(result);
        }).catch(e => {
            setError(true);
        });
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            handleSearch();
        }
    };
    return (
        <section className="bodySection">
            <Description/>
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
                        <div className="resultBody__item">
                            <div className="resultBody__item__label">
                                Index: 
                            </div>
                            <div className="resultBody__item__input">
                                {result.index}
                            </div>
                        </div>
                        <div className="resultBody__item">
                            <div className="resultBody__item__label">
                                Result Sum: 
                            </div>
                            <div className="resultBody__item__input">
                                {result.sum}
                            </div>
                        </div>
                        <div className="resultBody__item">
                            <div className="resultBody__item__label">
                                Array #1: 
                            </div>
                            <div className="resultBody__item__input">
                                [{result.leftArray.toString()}]
                            </div>
                        </div>
                        <div className="resultBody__item">
                            <div className="resultBody__item__label">
                                Array #2: 
                            </div>
                            <div className="resultBody__item__input">
                                [{result.rightArray.toString()}]
                            </div>
                        </div>
                    </div>
                }
                
                {error &&
                    <div className="error">Error, please verify your syntax is according to specification.</div>
                }
            </div>
        </section>);
};

export default Body;