import React from "react";
import { Row } from "react-bootstrap";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import "../style/components/_search.scss";

function SearchForm() {
    const items = [
        {
            id: 0,
            name: "Cobol",
        },
        {
            id: 1,
            name: "JavaScript",
        },
        {
            id: 2,
            name: "Basic",
        },
        {
            id: 3,
            name: "PHP",
        },
        {
            id: 4,
            name: "Java",
        },
    ];

    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results);
    };

    const handleOnSelect = (item) => {
        // the item selected
        console.log(item);
    };

    const handleOnFocus = () => {
        console.log("Focused");
    };
    return (
        <Row className="search">
            <div>
                <div className="search__title">
                    <h1>Welcome.</h1>
                    <h3>Thousands of movies, TV shows and people to discover. Explore now.</h3>
                </div>
                <div className="search__form">
                    <ReactSearchAutocomplete
                        items={items}
                        onSearch={handleOnSearch}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                    />
                </div>
            </div>
        </Row>
    );
}

export default SearchForm;
