import React, { useEffect, useState } from "react";
import { Rate, notification } from "antd";
import { EyeOutlined, StarOutlined, CommentOutlined } from "@ant-design/icons";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";

import CommentList from "../components/CommentList";
import Recommend from "../components/Recommend";
import commentApi from "../services/comment";
import movieApi from "../services/movie";
import "../style/pages/MovieDetail.scss";
import { displayGenre, getLocalStorage, isLogin, isUsingRS } from "../utils/helpers.js";
import DefaultMovie from "../assets/img/default-movie.png";

function MovieDetail() {
    const [movieItem, setMovieItem] = useState(null);
    const [comments, setComments] = useState([]);
    const [moviesRecommend, setMoviesRecommend] = useState([]);
    const { movieId } = useParams();
    const currentUser = getLocalStorage("currentUser");
    const [rating, setRating] = useState(null);

    async function _fetchMovieData() {
        let reqRecommend = await movieApi.getMoviesPopular(2);
        if (isUsingRS()) {
            reqRecommend = await movieApi.getMoviesRecommend(currentUser.username);
        }
        const reqComments = await commentApi.getMovieComments(movieId);
        const reqMovieItem = await movieApi.getMovieItem(movieId);

        axios.all([reqRecommend, reqMovieItem, reqComments]).then(
            axios.spread((...response) => {
                let moviesRecommend = response[0].results;
                if (isUsingRS()) {
                    moviesRecommend = response[0].movies;
                }
                setMoviesRecommend(moviesRecommend);
                setMovieItem(response[1][0]);
                setComments(response[2]);
            })
        );
    }

    useEffect(() => {
        _fetchMovieData();
    }, []);

    const handleRating = async (value) => {
        if (isLogin()) {
            try {
                const params = {
                    rating: value,
                };
                const response = await movieApi.postRating(movieId, params);
                setRating(response.rating);
                notification["success"]({
                    message: `You rated ${value} star for this movie.`,
                });
            } catch (error) {}
        } else {
            notification["warning"]({
                message: "You need to login for rate this movie!",
            });
        }
    };

    const getPercentage = (rating) => {
        return rating * 10;
    };

    const ratingInfo = () => {
        return (
            <div style={{ marginTop: "25px" }}>
                <div></div>
                <div className="total__info">
                    <div className="total__info__rating">
                        <span style={{ marginRight: "10px" }}>{movieItem.rating_count}</span>
                        <StarOutlined />
                    </div>
                    <div className="total__info__comment">
                        <span style={{ marginRight: "10px" }}>{movieItem.comment_count}</span>
                        <CommentOutlined />
                    </div>
                </div>

                {movieItem.rating_info.map((item, index) => {
                    return (
                        <div key={index}>
                            <Rate value={index} disabled />
                            <span className="ant-rate-text">{item}</span>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <>
            {movieItem && (
                <>
                    <div className="poster">
                        <div className="poster__wrapper">
                            <Container>
                                <Row className="poster__wrapper--row">
                                    <Col md="4" className="poster__wrapper--left">
                                        <div
                                            style={{
                                                backgroundImage: `url(${DefaultMovie})`,
                                                backgroundSize: "cover",
                                                width: "300px",
                                                height: "450px",
                                            }}
                                        >
                                            <img src={`${movieItem.poster}`} alt="" />
                                        </div>
                                    </Col>
                                    <Col md="8" className="poster__wrapper--right">
                                        <div className="poster__title">
                                            <h1>{`${movieItem.title} (${movieItem.year})`}</h1>
                                            <p className="poster__title__genre">{displayGenre(movieItem.genres)}</p>
                                        </div>

                                        <ul className="poster__action">
                                            <li className="poster__action--score">
                                                <CircularProgressbar
                                                    value={getPercentage(movieItem.imdb_rating)}
                                                    text={`${movieItem.imdb_rating}`}
                                                    className="poster__action--score__rating"
                                                />
                                            </li>
                                            <li className="poster__action__list">
                                                <button>
                                                    <i className="fa fa-bookmark"></i>
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
                                                {isLogin() ? (
                                                    <Rate
                                                        allowHalf
                                                        style={{ display: "block" }}
                                                        className="poster__action--rating-star"
                                                        onChange={handleRating}
                                                        value={movieItem.rated}
                                                    />
                                                ) : (
                                                    <span
                                                        style={{ marginLeft: "10px", paddingTop: "5px" }}
                                                        className="poster__action--rating-star"
                                                    >
                                                        Login to rate
                                                    </span>
                                                )}
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

                                        <div className="poster__view">
                                            <EyeOutlined />
                                            <span style={{ marginLeft: "10px" }}>{movieItem.view_count + 400}</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <Container>
                        <Recommend movies={moviesRecommend} title={"Recommend for you"} />
                        <hr />
                        <Row>
                            <Col md={3}>
                                {ratingInfo()}
                                <br />
                            </Col>
                            <Col md={9}>
                                <CommentList comments={comments} setCommentsSate={setComments} movieId={movieId} />
                            </Col>
                        </Row>
                    </Container>
                </>
            )}
        </>
    );
}

export default MovieDetail;
