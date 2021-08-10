import React from "react";
import { EyeOutlined } from "@ant-design/icons";
import { Card } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";

import "../style/components/MovieCard.scss";
import DefaultMovie from "../assets/img/default-movie.png";

MovieCard.propTypes = {};

function MovieCard({ movie }) {
    const percentage = movie.rating_average * 20;
    return (
        <Card className="card">
            <Link to={`/movie/${movie.slug}`}>
                <div style={{ backgroundImage: `url(${DefaultMovie})`, height: "262px" }}>
                    <Card.Img variant="top" src={movie.poster} />
                </div>
                <CircularProgressbar value={percentage} text={`${movie.rating_average}`} className="card--rating" />
            </Link>

            <Card.Body className="card-body">
                <Link to={`/movie/${movie.slug}`}>
                    <Card.Title className="card-title">{movie.title}</Card.Title>
                </Link>

                <Card.Text className="card-text">
                    <span>{movie.year}</span>
                    <span className="view-count">
                        <EyeOutlined />
                        {movie.view_count + 400}
                    </span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MovieCard;
