import React from "react";
import { Card } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import style from "../style/components/_movie-card.module.scss";

MovieCard.propTypes = {};

function MovieCard({ movie }) {
    const percentage = movie.imdb_rating * 10;
    return (
        <Card className={style.card}>
            <Link to={`movies/${movie.id}`}>
                <Card.Img variant="top" src={movie?.poster} />
                <CircularProgressbar value={percentage} text={`${percentage}%`} className={style["card--rating"]} />
            </Link>

            <Card.Body className={style["card-body"]}>
                <Link to={`movies/${movie.id}`}>
                    <Card.Title className={style["card-title"]}>{movie?.title}</Card.Title>
                </Link>

                <Card.Text className={style["card-text"]}>
                    <span>{movie.year}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MovieCard;
