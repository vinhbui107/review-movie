import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "../components/MovieCard";
import movieApi from "../services/movie";
import { getLocalStorage, isUsingRS } from "../utils/helpers";
import { notification } from "antd";

function MoviesRecommend() {
    const [movies, setMovies] = useState([]);
    const currentUser = getLocalStorage("currentUser");

    const _fetchData = async () => {
        let reqRecommend = await movieApi.getMoviesPopular(2);
        if (isUsingRS()) {
            reqRecommend = await movieApi.getMoviesRecommend(currentUser.username);
        }
        try {
            const response = reqRecommend;
            let moviesRecommend = response.results;
            if (isUsingRS()) {
                moviesRecommend = response.movies;
            }
            setMovies(moviesRecommend);
        } catch (error) {
            notification["warning"]({
                message: "Get data failed!",
            });
        }
    };

    useEffect(() => {
        _fetchData();
    }, []);

    return (
        <Container>
            <h3 className="title">Recommend movies for you</h3>
            <Row>
                {movies.length > 0 ? (
                    movies?.map((movie, index) => {
                        return (
                            <Col>
                                <MovieCard movie={movie} index={index} />
                            </Col>
                        );
                    })
                ) : (
                    <div style={{ marginBottom: "20px" }}>{"Sorry We don't have any movie :((("}</div>
                )}
            </Row>
        </Container>
    );
}

export default MoviesRecommend;
