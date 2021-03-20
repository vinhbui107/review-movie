import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import productApi from "../../services/movie";
import MovieCard from "../MovieCard";
import style from "./style.scss";

MovieList.propTypes = {
    movieList: PropTypes.array,
};

function MovieList(props) {
    const { movieList } = props;

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
            <h1 className="title">123123</h1>
            <OwlCarousel
                className={style["owl-theme"]}
                loop
                margin={10}
                slideBy="12"
                items="6"
                lazyLoad="true"
                smartSpeed="400"
                nav="true"
            >
                {renderMovieList()}
            </OwlCarousel>
        </Row>
    );
}

export default MovieList;
