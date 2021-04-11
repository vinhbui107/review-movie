import React from "react";
import { Card } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

MovieCard.propTypes = {};

const BarChart = () => {
    return (
        <div>
            <Doughnut
                data={{
                    datasets: [
                        {
                            label: "# of votes",
                            data: [100, 10],
                            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
                            borderColor: ["rgba(255, 99, 132, 1)", "rgb(54, 162, 235)"],
                        },
                    ],
                }}
                option={{
                    title: {
                        display: true,
                        text: "Predicted world population (millions) in 2050",
                    },
                }}
            />
        </div>
    );
};

function MovieCard({ movie }) {
    return (
        <Card className={style.card}>
            <Link to="/">
                <Card.Img variant="top" src={movie.hinhAnh} />

                {/* {BarChart()} */}
                <span className={style["card--rating"]}>7.6</span>
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
