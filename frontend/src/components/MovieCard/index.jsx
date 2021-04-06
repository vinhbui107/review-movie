import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import WOW from "wowjs";
import "./style.scss";
MovieCard.propTypes = {};

function MovieCard(props) {
    // const dispatch = useDispatch();

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
                        <p className="d-flex align-items-center mb-3">
                            <span>
                                <span>
                                    <i className="fa fa-star mr-1"></i>
                                </span>
                                <span>7.8</span>
                            </span>
                            <span>
                                <button className="btn ml-3">
                                    <img
                                        src="https://www.pngkit.com/png/full/153-1536260_png-file-svg-transparent-star-icon-png.png"
                                        alt=""
                                    />
                                </button>
                            </span>
                        </p>

                        <div>
                            <Link to="/">
                                <h4>{movie.tenPhim}</h4>
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
