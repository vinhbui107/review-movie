import { Empty, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import DefaultMovie from "../assets/img/default-movie.png";
import movieApi from "../services/movie";
import "../style/pages/SearchResult.scss";

function ResultItem(movie) {
    return (
        <Card className="resultItem" key={movie.slug}>
            <Card.Body className="resultItem__body">
                <Row style={{ height: "100%" }}>
                    <Col md="2" className="resultItem--left">
                        <div
                            style={{
                                backgroundImage: `url(${DefaultMovie})`,
                                backgroundPosition: "center,0 0",
                                backgroundSize: "80%",
                            }}
                        >
                            <img src={movie.poster} className="resultItem__poster" />
                        </div>
                    </Col>
                    <Col md="10" className="resultItem--right">
                        <div className="resultItem__title">
                            <h3>
                                <Link to={`/movie/${movie.slug}`}>{movie.title}</Link>
                            </h3>
                            <p>{movie.year}</p>
                        </div>

                        <Card.Text className="resultItem__description">{movie.description}</Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function SearchResult() {
    const [movies, setMovies] = useState([]);
    const [movieCount, setMovieCount] = useState(0);
    const query = useQuery();
    const searchText = query.get("q");

    async function _fetchData() {
        try {
            const response = await movieApi.searchMovie(searchText.replaceAll(" ", "+"));
            setMovies(response.results);
            setMovieCount(response.count);
        } catch (error) {}
    }

    useEffect(() => {
        _fetchData();
    }, []);

    return (
        <Container>
            <p className="title" style={{ display: "flex" }}>
                Search: {searchText}
                <span style={{ marginLeft: "10px" }}>
                    <Tag>{movieCount} movies</Tag>
                </span>
            </p>
            {movies.length > 0 ? (
                movies?.map((movie, index) => {
                    return ResultItem(movie);
                })
            ) : (
                <div style={{ marginTop: "20%" }}>
                    <Empty
                        imageStyle={{
                            height: 160,
                        }}
                        description={<span>We don't have any movies for this keyword.</span>}
                    />
                </div>
            )}
        </Container>
    );
}

export default SearchResult;
