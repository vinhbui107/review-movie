import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useHistory } from "react-router-dom";
import movieApi from "../services/movie";
import "../style/components/_search.scss";

function SearchForm() {
    const [items, setItems] = useState([]);
    const history = useHistory();

    const handleOnSearch = async (key) => {
        let queryString = key.trim().replaceAll(" ", "+");
        const response = await movieApi.suggestMovie(queryString);

        const respItems = response.title_suggest__completion[0].options;
        setItems(respItems);
    };

    const handleOnSelect = (item) => {
        const movieId = item._source.id;
        history.push(`/movies/${movieId}`);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            console.log("enter press here! ");
        }
    };

    return (
        <Row className="search">
            <div>
                <div className="search__title">
                    <h1>Welcome.</h1>
                    <h3>Thousands of movies, TV shows and people to discover. Explore now.</h3>
                </div>
                <div className="search__form" onKeyPress={handleKeyPress}>
                    <ReactSearchAutocomplete
                        items={items}
                        onSearch={handleOnSearch}
                        fuseOptions={{ keys: ["text"] }}
                        resultStringKeyName="text"
                        onSelect={handleOnSelect}
                        maxResults={5}
                        autoFocus
                    />
                </div>
            </div>
        </Row>
    );
}

export default SearchForm;
