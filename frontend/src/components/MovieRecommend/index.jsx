import React from "react";
import PropTypes from "prop-types";
import OwlCarousel from "react-owl-carousel";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

MovieRecommend.propTypes = {
    movieListRec: PropTypes.array,
};

function MovieRecommend({ movieListRec }) {
    const renderMovieListRec = (movieList) => {
        return movieList?.map((movie, index) => {
            return (
                <div className={style.card}>
                    <Link to="/" className={style.card__link}>
                        <Card.Img variant="top" src={movie.hinhAnh} loading="lazy" />
                        <p className={`${style["card__datetime"]} mb-0`}>{movie.ngayKhoiChieu}</p>
                        <div className={style.card__overlay}>
                            <i className="fa fa-play"></i>
                        </div>
                    </Link>
                    <p>{movie.tenPhim}</p>
                </div>
            );
        });
    };
    return (
        <div>
            <h1 className="title title--rec">Recommend</h1>
            <div className={style.scroller}>
                <div className={style["scroller__wrapper"]}>{renderMovieListRec(movieListRec)}</div>
            </div>
            {/* <OwlCarousel
                className="owl-theme"
                loop={true}
                margin={10}
                items="4"
                lazyLoad="true"
                smartSpeed="400"
                nav="true"
                dots="false"
            >

            </OwlCarousel> */}
        </div>
    );
}

export default MovieRecommend;
