import PropTypes from "prop-types";
import React from "react";
import { Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";

import style from "../style/components/_movie-list.module.scss";
import MovieCard from "./movie-card";

MovieList.propTypes = {
    movieList: PropTypes.array,
};

const options = {
    0: {
        items: 1,
    },
    600: {
        items: 3,
    },
    1000: {
        items: 6,
    },
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
                responsive={options}
            >
                {renderMovieList()}
            </OwlCarousel>
        </Row>
    );
}

export default MovieList;
