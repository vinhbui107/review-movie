import React, { useEffect, useState } from "react";
import { Rate, notification, Tag } from "antd";
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
import ratingApi from "../services/rating";
import { Messages } from "../utils/messages";

function MovieDetail() {
    const [movieItem, setMovieItem] = useState(null);
    const [comments, setComments] = useState([]);
    const [moviesRecommend, setMoviesRecommend] = useState([]);
    const { slug } = useParams();
    const currentUser = getLocalStorage("currentUser");
    const [rating, setRating] = useState(null);

    useEffect(() => {
        async function _fetchData() {
            try {
                const response = await movieApi.getMovieItem(slug);
                setMovieItem(response);
                setRating(response.rated);
            } catch (error) {}
        }
        _fetchData();
    }, []);

    useEffect(() => {
        async function _fetchData() {
            let reqRecommend = await movieApi.getMoviesPopular(2);
            // if (isUsingRS()) {
            //     reqRecommend = await movieApi.getMoviesRecommend(currentUser.username);
            // }
            const reqComments = await commentApi.getMovieComments(slug);

            axios.all([reqRecommend, reqComments]).then(
                axios.spread((...response) => {
                    let moviesRecommend = response[0].results;
                    // if (isUsingRS()) {
                    //     moviesRecommend = response[0].movies;
                    // }
                    setMoviesRecommend(moviesRecommend);
                    setComments(response[1].results);
                })
            );
        }
        _fetchData();
    }, []);

    const handleRating = async (value) => {
        if (isLogin()) {
            try {
                const params = {
                    movie_slug: slug,
                    rating: value,
                };
                const response = await ratingApi.postRating(params);
                setRating(response.rating);
                notification["success"]({
                    message: Messages.ratingSuccess,
                });
            } catch (error) {
                notification["error"]({
                    message: Messages.apiErrorMes,
                    description: Messages.apiErrorDes,
                });
            }
        } else {
            notification["warning"]({
                message: Messages.loginWarning,
            });
        }
    };

    const getPercentage = (rating) => {
        return rating * 10;
    };

    const ratingInfo = () => {
        return (
            <div className="rating__info">
                <Tag>
                    {movieItem.rating_count} <StarOutlined />
                </Tag>
                <Tag>
                    {movieItem.comment_count} <CommentOutlined />
                </Tag>
                {movieItem.rating_info.map((item, index) => {
                    return (
                        <div key={index} className="rating__info__rating">
                            <Tag>
                                {index} Star ({item})
                            </Tag>
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
                                            <img src={`${movieItem.poster}`} />
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
                                                        value={rating}
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
                        {ratingInfo()}
                        <CommentList comments={comments} setCommentsSate={setComments} movieSlug={slug} />
                    </Container>
                </>
            )}
        </>
    );
}

export default MovieDetail;
