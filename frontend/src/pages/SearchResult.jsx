import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SearchResult() {
    const [movies, setMovies] = useState([]);
    const { searchKey } = useParams();

    useEffect(async () => {});

    return (
        <div>
            <h2>MovieGenre</h2>
        </div>
    );
}

export default SearchResult;
