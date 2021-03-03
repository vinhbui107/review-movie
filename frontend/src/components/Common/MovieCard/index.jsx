import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import WOW from "wowjs";
import { Col } from "react-bootstrap";
MovieCard.propTypes = {};

function MovieCard(props) {
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
    }, []);
    return (
        <Col md="2">
            <Link to="/">
                <div className="item">
                    <div className="item__info">
                        <div className="item__info__img">
                            <img src="https://static2.yan.vn/YanNews/2167221/202012/1_tajl-af57ff52.jpg" alt="" />
                        </div>

                        <div className="item__info__detail">
                            <Animated animationIn="fadeInUp" animationInDuration={500}>
                                <h1>Alvin and the Chipmunks: Chipwrecked (2011)</h1>

                                <p>Sóc Siêu Quậy (2011)</p>
                            </Animated>
                        </div>

                        <div className="item__info__overlay text-light ">
                            <p style={{ alignSelf: "flex-end", paddingRight: "5px" }}>
                                <i class="fa fa-heart"></i>{" "}
                            </p>
                            <i className="fa fa-play"></i>
                            <div className="item__info__overlay__detail">
                                <h1>Alvin and the Chipmunks: Chipwrecked (2011)</h1>
                                <p>Sóc Siêu Quậy (2011)</p>
                                <p className="d-flex justify-content-between align-items-center">
                                    <span>
                                        <span className="item__info__overlay__detail__logo">1</span>
                                        <span>Beginner</span>
                                    </span>
                                    <span>
                                        <i className="fa fa-clock"></i>
                                        <span>1h30</span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </Col>
    );
}

export default MovieCard;
