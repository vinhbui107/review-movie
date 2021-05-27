import React, { useEffect, useState } from "react";
import { Rate, notification } from "antd";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CommentList from "../components/CommentList";
import Recommend from "../components/Recommend";
import commentApi from "../services/comment";
import movieApi from "../services/movie";
import "../style/pages/MovieDetail.scss";
import { getLocalStorage, isLogin, isUsingRS } from "../utils/helpers.js";
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
                setMovieItem(response[1].results[0]);
                setComments(response[2]);
            })
        );
    }

    const _fetchUserRating = async () => {
        if (isLogin()) {
            try {
                const response = await movieApi.getUserRatings(currentUser.username);
                response.find((rating) => {
                    if (String(rating.movie_id) === movieId) {
                        setRating(rating.rating);
                    }
                });
            } catch (error) {
                notification["warning"]({
                    message: "Get data failed!",
                });
            }
        }
    };

    useEffect(() => {
        _fetchMovieData();
        _fetchUserRating();
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
                    message: "Rating successfully.",
                });
            } catch (error) {}
        } else {
            notification["warning"]({
                message: "You need to login for rate this movie!",
            });
        }
    };

    return (
        <>
            {movieItem && (
                <>
                    <div className="poster">
                        <div className="poster__wrapper">
                            <Container fluid style={{ width: "85%" }}>
                                <Row className="poster__wrapper--row">
                                    <Col md="3" xs="12" className="poster__wrapper--left">
                                        <div
                                            style={{
                                                backgroundImage: `url(${DefaultMovie})`,
                                                backgroundSize: "cover",
                                            }}
                                        >
                                            <img src={`${movieItem.poster}`} alt="" />
                                        </div>
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
                                                    onChange={handleRating}
                                                    value={rating}
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
                    <Container>
                        <Recommend movies={moviesRecommend} title={"Recommend for you"} />
                        <hr />
                        <CommentList comments={comments} setCommentsSate={setComments} movieId={movieId} />
                    </Container>
                </>
            )}
        </>
    );
}

export default MovieDetail;
