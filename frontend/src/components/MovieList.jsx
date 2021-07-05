import React from "react";
import { Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import { MovieCard } from "./index";

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

function MovieList({ movies, title }) {
    const renderMovieList = () => {
        return movies?.map((movie, index) => {
            return <MovieCard movie={movie} key={index} rec={true} />;
        });
    };

    return (
        <Row>
            <h4 className="title">{title}</h4>
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
