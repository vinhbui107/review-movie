import React from "react";
import { Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "../style/components/Recommend.scss";

function Recommend({ movies, title }) {
    const history = useHistory();

    const handleClick = (movieId) => {
        history.push(`${movieId}`);
        window.location.reload();
    };

    const renderMovies = (movies) => {
        return movies?.map((movie) => {
            return (
                <div className="recommendCard" key={movie.id}>
                    <Link
                        className="recommendCard__link"
                        onClick={() => {
                            handleClick(movie.id);
                        }}
                    >
                        <Card.Img variant="top" src={movie.poster} loading="lazy" />
                        <p className="recommendCard__datetime mb-0">{movie.year}</p>
                        <div className="recommendCard__overlay">
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
            <h1 className="title title--rec">{title}</h1>
            <div className="scroller">
                <div className="scroller__wrapper">{renderMovies(movies)}</div>
            </div>
        </div>
    );
}

export default Recommend;
