import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { MovieService } from "../services";
import { MovieList, SearchForm } from "../components";
// import { isUsingRS, getLocalStorage } from "../utils/helpers.js";

import "../style/pages/Home.scss";

function Home() {
    const [movieList, setMovieList] = useState({
        recommend: [],
        popular: [],
        topRated: [],
    });

    const { topRated, popular, recommend } = movieList;
    // const auth = getLocalStorage("auth");

    useEffect(() => {
        async function fetchData() {
            let reqRecommend = await MovieService.getMoviesPopular(2);
            // if (isUsingRS()) {
            //     reqRecommend = await MovieService.getMoviesRecommend(auth.username);
            // }
            const reqPopular = await MovieService.getMoviesPopular(1);
            const reqTopRated = await MovieService.getMoviesTopRated(1);

            axios.all([reqRecommend, reqPopular, reqTopRated]).then(
                axios.spread((...response) => {
                    let moviesRecommend = response[0].results;
                    // if (isUsingRS()) {
                    //     moviesRecommend = response[0].movies;
                    // }
                    setMovieList((movieList) => ({
                        ...movieList,
                        recommend: moviesRecommend,
                        popular: response[1].results,
                        topRated: response[2].results,
                    }));
                })
            );
        }

        fetchData();
    }, []);

    return (
        <div>
            <Container>
                <SearchForm />
                {topRated.length > 0 && (
                    <>
                        <br />
                        <MovieList movies={recommend} title="Recommend for you" />
                        <MovieList movies={popular} title="What's Popular" />
                        <MovieList movies={topRated} title="Top Rated" />
                    </>
                )}
            </Container>
        </div>
    );
}

export default Home;
