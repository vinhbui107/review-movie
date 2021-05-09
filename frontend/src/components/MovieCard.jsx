import React from "react";
import { Card } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import "../style/components/MovieCard.scss";

MovieCard.propTypes = {};

function MovieCard({ movie }) {
    const percentage = movie.imdb_rating * 10;
    return (
        <Card className="card">
            <Link to={`movies/${movie.id}`}>
                <Card.Img variant="top" src={movie?.poster} />
                <CircularProgressbar value={percentage} text={`${percentage}%`} className="card--rating" />
            </Link>

            <Card.Body className="card-body">
                <Link to={`movies/${movie.id}`}>
                    <Card.Title className="card-title">{movie?.title}</Card.Title>
                </Link>

                <Card.Text className="card-text">
                    <span>{movie.year}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MovieCard;
