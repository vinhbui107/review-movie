import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Pie, defaults } from "react-chartjs-2";
import MovieList from "../components/MovieList";
import MovieRecommend from "../components/Recommend";
import SearchForm from "../components/SearchForm";
import "../style/pages/_home.scss";
import movieApi from "../services/movie";
import axios from "axios";

function Home() {
    const [movieList, setMovieList] = useState({
        trending: [],
        popular: [],
        recommend: [],
    });

    const { trending, popular, recommend } = movieList;

    useEffect(async () => {
        const reqRecommend = await movieApi.getMoviesTrending(2);
        const reqTrending = await movieApi.getMoviesTrending(1);
        const reqPopular = await movieApi.getMoviesPopular(1);

        axios.all([reqRecommend, reqPopular, reqTrending]).then(
            axios.spread((...response) => {
                console.log(response);
                setMovieList((movieList) => ({
                    ...movieList,
                    recommend: response[0].results,
                    trending: response[1].results,
                    popular: response[2].results,
                }));
            })
        );
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
