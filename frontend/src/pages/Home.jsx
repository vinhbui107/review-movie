import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import MovieList from "../components/MovieList";
import SearchForm from "../components/SearchForm";
import movieApi from "../services/movie";
import "../style/pages/Home.scss";
import * as Helpers from "../utils/helpers.js";

function Home() {
    const [movieList, setMovieList] = useState({
        recommend: [],
        popular: [],
        topRated: [],
    });

    const { topRated, popular, recommend } = movieList;
    const currentUser = Helpers.getLocalStorage("currentUser");

    useEffect(() => {
        async function fetchData() {
            let reqRecommend = await movieApi.getMoviesPopular(2);
            if (Helpers.isLogin()) {
                reqRecommend = await movieApi.getMoviesRecommend(currentUser.username);
            }
            const reqPopular = await movieApi.getMoviesPopular(1);
            const reqTopRated = await movieApi.getMoviesTopRated(1);

            axios.all([reqRecommend, reqPopular, reqTopRated]).then(
                axios.spread((...response) => {
                    let moviesRecommend = response[0].results;
                    if (Helpers.isLogin()) {
                        moviesRecommend = response[0].movies;
                    }
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
                {topRated?.length > 0 && popular?.length > 0 && recommend?.length > 0 && (
                    <>
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
