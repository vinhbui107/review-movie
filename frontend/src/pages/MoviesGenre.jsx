import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
import { Empty, notification, Tag } from "antd";

import { MovieService } from "../services";
import { MovieCard } from "../components";
import { Messages } from "../utils/messages";

function MoviesGenre() {
    const [movies, setMovies] = useState([]);
    const [movieCount, setMovieCount] = useState(0);
    const { genre } = useParams();

    const _fetchData = async () => {
        try {
            const response = await MovieService.getMoviesGenre(genre);
            setMovies(response.results);
            setMovieCount(response.count);
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
            <p className="title" style={{ display: "flex" }}>
                Genre: {genre}
                <span style={{ marginLeft: "10px" }}>
                    <Tag>{movieCount} movies</Tag>
                </span>
            </p>
            {movies.length > 0 ? (
                <Row>
                    {movies?.map((movie, index) => {
                        return (
                            <Col key={index}>
                                <MovieCard movie={movie} />
                            </Col>
                        );
                    })}
                </Row>
            ) : (
                <div style={{ marginTop: "20%" }}>
                    <Empty
                        imageStyle={{
                            height: 160,
                        }}
                        description={<span>We don't have any movies for this genre.</span>}
                    />
                </div>
            )}
        </Container>
    );
}

export default MoviesGenre;
