import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
            alert("Fetch Data failed.");
        }
    };

    useEffect(() => {
        _fetchData();
    }, []);

    return (
        <Container>
            <h3 className="title">Genre: {genre}</h3>
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
                    <div style={{ marginBottom: "20px" }}>{"Sorry We don't have any movie for this genre :((("}</div>
                )}
            </Row>
        </Container>
    );
}

export default MoviesGenre;
