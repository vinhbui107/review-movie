import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useHistory } from "react-router-dom";
import movieApi from "../services/movie";
import "../style/components/Search.scss";

function SearchForm() {
    const [items, setItems] = useState([]);
    const [searchText, setSearchText] = useState("");
    const history = useHistory();

    const handleOnSearch = async (key) => {
        setSearchText(key.trim().replaceAll(" ", "+"));
        const response = await movieApi.suggestMovie(searchText);
        const respItems = response.title_suggest__completion[0].options;
        setItems(respItems);
    };

    const handleOnSelect = (item) => {
        const movieSlug = item._source.slug;
        history.push(`/movie/${movieSlug}`);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter" && searchText.length > 0) {
            history.push(`/search/?q=${searchText}`);
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
                        placeholder="Search for a movie....."
                        maxResults={10}
                        autoFocus
                    />
                </div>
            </div>
        </Row>
    );
}

export default SearchForm;
