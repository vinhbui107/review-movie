import React, { useEffect, useState } from "react";
import { Container, Row, Col, FormGroup } from "react-bootstrap";
import { Empty, notification, Tag } from "antd";
import { VideoCameraOutlined } from "@ant-design/icons";

import { useParams } from "react-router";
import MovieCard from "../components/MovieCard";
import movieApi from "../services/movie";
import { Messages } from "../utils/messages";

function MoviesGenre() {
    const [movies, setMovies] = useState([]);
    const [movieCount, setMovieCount] = useState(0);
    const { genre } = useParams();
    const _fetchData = async () => {
        try {
            const response = await movieApi.getMoviesGenre(genre);
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
                            <Col>
                                <MovieCard movie={movie} index={index} />
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
