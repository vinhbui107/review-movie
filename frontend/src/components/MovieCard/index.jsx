import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import WOW from "wowjs";
import "./style.scss";
MovieCard.propTypes = {};

function MovieCard(props) {
    const { movie } = props;

    return (
        <>
            <div className="item">
                <div className="item__inner">
                    <div className="item__inner--img">
                        <Link to="/">
                            <img src={movie.hinhAnh} alt="" />
                        </Link>
                    </div>

                    <div className="item__inner--detail">
                        <div className="d-flex justify-content-between mb-3 ml-2 mr-2">
                            <div>
                                <i className="fa fa-star mr-1"></i>
                                <span>7.8</span>
                            </div>
                            <div>2020</div>
                        </div>

                        <div>
                            <Link to="/">
                                <p>{movie.tenPhim}</p>
                            </Link>

                            <p>{movie.ngayKhoiChieu}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieCard;
