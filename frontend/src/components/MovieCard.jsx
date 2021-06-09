import { EyeOutlined } from "@ant-design/icons";
import React from "react";
import { Card } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import DefaultMovie from "../assets/img/default-movie.png";
import "../style/components/MovieCard.scss";

MovieCard.propTypes = {};

function MovieCard({ movie }) {
    const percentage = movie.imdb_rating * 10;
    return (
        <Card className="card">
            <Link to={`/movie/${movie.id}`}>
                <div style={{ backgroundImage: `url(${DefaultMovie})` }}>
                    <Card.Img variant="top" src={movie.poster} />
                </div>
                <CircularProgressbar value={percentage} text={`${movie.imdb_rating}`} className="card--rating" />
            </Link>

            <Card.Body className="card-body">
                <Link to={`/movie/${movie.id}`}>
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
