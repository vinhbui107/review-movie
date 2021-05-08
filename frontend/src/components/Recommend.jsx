import React from "react";
import { Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import style from "../style/components/_movie-recommend.module.scss";

function Recommend({ movies, title }) {
    const history = useHistory();

    const handleClick = (movieId) => {
        history.push(`${movieId}`);
        window.location.reload();
    };

    const renderMovies = (movies) => {
        return movies?.map((movie) => {
            replace;
            return (
                <div className={style.card} key={movie.id} onClick={() => handleClick(movie.id)}>
                    <div className={style.card__link}>
                        <Card.Img variant="top" src={movie.poster} loading="lazy" />
                        <p className={`${style["card__datetime"]} mb-0`}>{movie.year}</p>
                        <div className={style.card__overlay}>
                            <i className="fa fa-play"></i>
                        </div>
                    </div>
                    <p>{movie.title}</p>
                </div>
            );
        });
    };

    return (
        <div>
            <h1 className="title title--rec">{title}</h1>
            <div className={style.scroller}>
                <div className={style["scroller__wrapper"]}>{renderMovies(movies)}</div>
            </div>
        </div>
    );
}

export default Recommend;
