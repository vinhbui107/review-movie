import PropTypes from "prop-types";
import React from "react";
import { Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import MovieCard from "../MovieCard";

import style from "./style.module.scss";

MovieList.propTypes = {
    movieList: PropTypes.array,
};

function MovieList({ movieList }) {
    const renderMovieList = () => {
        return movieList?.map((movie, index) => {
            return (
                <>
                    <MovieCard movie={movie} key={index} rec={true} />
                </>
            );
        });
    };

    return (
        <Row>
            <h4 className="title">What's Popular</h4>
            <OwlCarousel
                className="owl-theme"
                loop={true}
                margin={10}
                items="6"
                lazyLoad="true"
                smartSpeed="400"
                nav="true"
                dots="false"
            >
                {renderMovieList()}
            </OwlCarousel>
        </Row>
    );
}

export default MovieList;
