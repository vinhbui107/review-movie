import { Rate } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Comments from "../components/Comment";
import axios from "axios";

import Recommend from "../components/Recommend";
import movieApi from "../services/movie";
import "../style/pages/_movie-detail.scss";

function MovieDetail() {
    const [movieItem, setMovieItem] = useState(null);
    // const [comments, setComments] = useState([]);
    const [moviesRecommend, setMoviesRecommend] = useState([]);

    const { movieId } = useParams();

    useEffect(async () => {
        const reqRecommend = await movieApi.getMoviesTrending(1);
        // const reqComments = await movieApi.getMovieComments(movieId);
        const reqMovieItem = await movieApi.getMovieItem(movieId);

        axios.all([reqRecommend, reqMovieItem]).then(
            axios.spread((...response) => {
                setMoviesRecommend(response[0].results);
                setMovieItem(response[1].results[0]);
            })
        );
    }, []);

    return (
        <div>
            {movieItem && (
                <div
                    style={{
                        backgroundImage: `url(${movieItem.poster})`,
                    }}
                    className="poster"
                >
                    <div className="poster__wrapper">
                        <Container fluid style={{ width: "85%" }}>
                            <Row className="poster__wrapper--row">
                                <Col md="3" xs="12" className="poster__wrapper--left">
                                    <img src={`${movieItem.poster}`} alt="" />
                                </Col>
                                <Col md="9" xs="12" className="poster__wrapper--right">
                                    <div className="poster__title">
                                        <h1>{`${movieItem.title} (${movieItem.year})`}</h1>
                                        {/* <p>{movieItem.genres[0]}</p> */}
                                    </div>

                                    <ul className="poster__action">
                                        <li className="poster__action__list poster__action--score mr-3">
                                            <span>{movieItem.imdb_rating}</span>
                                        </li>

                                        <li className="poster__action__list">
                                            <button>
                                                <i className="fa fa-bookmark"></i>
                                            </button>
                                        </li>
                                        <li className="poster__action__list poster__action--like">
                                            <button>
                                                <i className="fa fa-thumbs-up"></i>
                                            </button>
                                        </li>
                                        <li className="poster__action__list">
                                            <button>
                                                <i className="fa fa-heart" />
                                            </button>
                                        </li>
                                        <li className="poster__action__list poster__action--rating">
                                            <button>
                                                <i className="fa fa-star" />
                                            </button>
                                            <Rate
                                                allowHalf
                                                style={{ display: "block" }}
                                                className="poster__action--rating-star"
                                                onChange={() => alert("Rating success")}
                                            />
                                        </li>
                                    </ul>

                                    <div className="poster__overview my-4">
                                        <h3 className="poster__overview--title">Overview</h3>
                                        <p className="poster__overview--description">{movieItem.description}</p>
                                    </div>

                                    <div className="poster__people">
                                        <h5>{movieItem.director}</h5>
                                        <p>Director</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            )}
            <Container>
                <Recommend movies={moviesRecommend} />
                <hr />
                <Comments />
            </Container>
        </div>
    );
}

export default MovieDetail;
