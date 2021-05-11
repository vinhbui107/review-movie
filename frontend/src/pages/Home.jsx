import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import MovieList from "../components/MovieList";
import SearchForm from "../components/SearchForm";
import movieApi from "../services/movie";
import "../style/pages/Home.scss";

function Home() {
    const [movieList, setMovieList] = useState({
        trending: [],
        popular: [],
        recommend: [],
    });

    const { trending, popular, recommend } = movieList;

    useEffect(() => {
        async function fetchData() {
            const reqRecommend = await movieApi.getMoviesTrending(2);
            const reqTrending = await movieApi.getMoviesTrending(1);
            const reqPopular = await movieApi.getMoviesPopular(1);

            axios.all([reqRecommend, reqPopular, reqTrending]).then(
                axios.spread((...response) => {
                    setMovieList((movieList) => ({
                        ...movieList,
                        recommend: response[0].results,
                        trending: response[1].results,
                        popular: response[2].results,
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
                {trending?.length > 0 && popular?.length > 0 && recommend?.length > 0 && (
                    <>
                        <MovieList movies={recommend} title="Recommend" />
                        <MovieList movies={trending} title="Trending" />
                        <MovieList movies={popular} title="Popular" />
                    </>
                )}
            </Container>
        </div>
    );
}

export default Home;
