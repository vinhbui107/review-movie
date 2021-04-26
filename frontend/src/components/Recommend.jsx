import React from "react";
import PropTypes from "prop-types";
import OwlCarousel from "react-owl-carousel";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "../style/components/_movie-recommend.module.scss";

MovieRecommend.propTypes = {
    movieListRec: PropTypes.array,
};

function MovieRecommend({ movieListRec }) {
    const renderMovieListRec = (movieList) => {
        return movieList?.map((movie, index) => {
            return (
                <div className={style.card}>
                    <Link to={`movies/${movie.id}`} className={style.card__link}>
                        <Card.Img variant="top" src={movie.poster} loading="lazy" />
                        <p className={`${style["card__datetime"]} mb-0`}>{movie.year}</p>
                        <div className={style.card__overlay}>
                            <i className="fa fa-play"></i>
                        </div>
                    </Link>
                    <p>{movie.title}</p>
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
        </div>
    );
}

export default MovieRecommend;
