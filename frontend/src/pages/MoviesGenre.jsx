import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Empty, notification } from "antd";
import { useParams } from "react-router";
import MovieCard from "../components/MovieCard";
import movieApi from "../services/movie";

function MoviesGenre() {
    const [movies, setMovies] = useState([]);
    const { genre } = useParams();
    const _fetchData = async () => {
        try {
            const response = await movieApi.getMoviesGenre(genre);
            setMovies(response.results);
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
            <h3 className="title">Genre: {genre}</h3>
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
                <div style={{ marginBottom: "20px" }}>
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
