import React from "react";
import { Card } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import style from "../style/components/_movie-card.module.scss";

MovieCard.propTypes = {};

const percentage = 80;

function MovieCard({ movie }) {
    return (
        <Card className={style.card}>
            <Link to="/movie/1314">
                <Card.Img variant="top" src={movie.hinhAnh} />
                <CircularProgressbar value={percentage} text={`${percentage}%`} className={style["card--rating"]} />
            </Link>

            <Card.Body className={style["card-body"]}>
                <Link to="/">
                    <Card.Title className={style["card-title"]}>{movie.tenPhim}</Card.Title>
                </Link>

                <Card.Text className={style["card-text"]}>
                    <span>2021</span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MovieCard;
