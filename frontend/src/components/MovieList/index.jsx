import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import productApi from "../../services/movie";
import MovieCard from "../MovieCard";
import style from "./style.scss";

MovieList.propTypes = {
    movies: PropTypes.array,
};

function MovieList(props) {
    const { title, items } = props;

    return (
        <Row>
            <h1 className={style.title}>{title}</h1>
            {/* <OwlCarousel
                className={style["owl-theme"]}
                loop
                margin={10}
                slideBy="12"
                items="1"
                lazyLoad="true"
                smartSpeed="400"
                nav="true"
            ></OwlCarousel> */}
        </Row>
    );
}

export default MovieList;
