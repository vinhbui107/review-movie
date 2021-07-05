import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import { UnorderedListOutlined, HeartOutlined, CloseOutlined } from "@ant-design/icons";
import DefaultMovie from "../assets/img/default-movie.png";

function ProfileRatingCard({ rating, is_setting }) {
    return (
        <Card className="ratingCard">
            <Card.Body className="ratingCard__body">
                <Row style={{ height: "100%" }}>
                    <Col md="2" className="ratingCard--left">
                        <div
                            style={{
                                backgroundImage: `url(${DefaultMovie})`,
                                backgroundPosition: "center,0 0",
                                backgroundSize: "80%",
                            }}
                        >
                            <img src={rating.movie.poster} className="ratingCard__poster" />
                        </div>
                    </Col>
                    <Col md="10" className="ratingCard--right">
                        <div className="ratingCard__info">
                            <div className="ratingCard__info__movieRating">
                                <CircularProgressbar
                                    value={rating.movie.rating_average * 20}
                                    text={`${rating.movie.rating_average ? rating.movie.rating_average * 2 : 0}`}
                                    className="rating"
                                />
                            </div>
                            <div className="ratingCard__info__title">
                                <h3>
                                    <Link to={`/movie/${rating.movie.slug}`}>{rating.movie.title}</Link>
                                </h3>
                                <p>{rating.movie.year}</p>
                            </div>
                        </div>

                        <p className="ratingCard__description">{rating.movie.description}</p>

                        <div className="ratingCard__action">
                            <ul>
                                <li>
                                    <span className="rating wrapper">
                                        <span className="account_rating">{rating.rating}</span>
                                    </span>
                                    Rating score
                                </li>
                                {is_setting && (
                                    <>
                                        <li>
                                            <a>
                                                <HeartOutlined style={{ fontSize: "1.3rem" }} />
                                                <span style={{ marginLeft: "5px" }}>Favorite</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <UnorderedListOutlined style={{ fontSize: "1.3rem" }} />
                                                <span style={{ marginLeft: "5px" }}>Add to list</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <CloseOutlined style={{ fontSize: "1.3rem" }} />
                                                <span style={{ marginLeft: "5px" }}>Remove</span>
                                            </a>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default ProfileRatingCard;
