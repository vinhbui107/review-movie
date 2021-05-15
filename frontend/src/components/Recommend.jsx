import React from "react";
import { Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "../style/components/Recommend.scss";
import DefaultMovie from "../assets/img/default-movie.png";

function Recommend({ movies, title }) {
    const renderMovies = (movies) => {
        return movies?.map((movie, index) => {
            return (
                <div className="recommendCard" key={index}>
                    <Link className="recommendCard__link" to={`/movies/${movie.id}`}>
                        <div
                            style={{
                                backgroundImage: `url(${DefaultMovie})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center,0 0",
                                backgroundSize: "100% auto",
                            }}
                        >
                            <Card.Img variant="top" src={movie.poster} loading="lazy" />
                        </div>
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
