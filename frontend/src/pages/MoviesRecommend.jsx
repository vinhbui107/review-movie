import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { notification } from "antd";

import { MovieService } from "../services";
import { MovieCard } from "../components";
import { Messages } from "../utils/messages";
// import { getLocalStorage, isUsingRS } from "../utils/helpers";

function MoviesRecommend() {
    const [movies, setMovies] = useState([]);
    // const currentUser = getLocalStorage("currentUser");

    const _fetchData = async () => {
        let reqRecommend = await MovieService.getMoviesPopular(2);
        // if (isUsingRS()) {
        //     reqRecommend = await MovieService.getMoviesRecommend(currentUser.username);
        // }
        try {
            const response = reqRecommend;
            let moviesRecommend = response.results;
            // if (isUsingRS()) {
            //     moviesRecommend = response.movies;
            // }
            setMovies(moviesRecommend);
        } catch (error) {
            notification["error"]({
                message: Messages.apiErrorMes,
                description: Messages.apiErrorDes,
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
