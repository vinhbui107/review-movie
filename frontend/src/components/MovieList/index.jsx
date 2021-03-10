import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import MovieCard from "../MovieCard";
import style from "./style.module.scss";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import productApi from "../../services/movie";

MovieList.propTypes = {
    movies: PropTypes.array,
};

function MovieList(props) {
    const stateMovie = useSelector((state) => state.movieReducer.movies);
    const dispatch = useDispatch();
    useEffect(() => {
        const getAllMovies = async () => {
            try {
                const response = await productApi.getAll();

                const action = { type: "GET_ALL_MOVIES", data: response };
                dispatch(action);
            } catch (error) {
                console.log("error:", error);
            }
        };
        getAllMovies();
    }, []);

    const { title, logo, items } = props;

    const getDataMovie = (first, last) => {
        const currentPages = stateMovie.slice(first, last);
        return currentPages?.map((movie, index) => {
            return (
                <>
                    <MovieCard movie={movie} key={index} rec={true} />
                </>
            );
        });
    };

    const content = [];

    const pagination = (lastItem) => {
        let indexOfPage = {
            first: 0,
            last: lastItem,
        };

        const ItemPerPage = lastItem;
        const toTalItem = stateMovie.length; //18
        const limitItem = ItemPerPage; //12
        const pages = Math.ceil(toTalItem / limitItem); //2

        for (let i = 0; i < pages; i++) {
            content.push({ ...indexOfPage });
            indexOfPage.first += ItemPerPage;
            indexOfPage.last += ItemPerPage;
        }
    };

    console.log("stateMovie: ", stateMovie);

    const handleRender = () => {
        if (items !== 6) {
            pagination(12);
            return (
                <OwlCarousel
                    className={style["owl-theme"]}
                    loop
                    margin={10}
                    slideBy="12"
                    items="1"
                    lazyLoad="true"
                    smartSpeed="400"
                    nav="true"
                >
                    {content.map((item, index) => {
                        return <Row key={index}>{getDataMovie(item.first, item.last)}</Row>;
                    })}
                </OwlCarousel>
            );
        } else {
            pagination(6);
            return (
                <OwlCarousel
                    className={style["owl-theme"]}
                    loop
                    margin={10}
                    slideBy="12"
                    items="1"
                    lazyLoad="true"
                    smartSpeed="400"
                    nav="true"
                >
                    {content.map((item, index) => {
                        return <Row key={index}>{getDataMovie(item.first, item.last)}</Row>;
                    })}
                </OwlCarousel>
            );
        }
    };

    return (
        <Row>
            <h1 className={style.title}>
                {logo ? <span className={style.title__logo}>{logo}</span> : ""}
                {title}
            </h1>
            {handleRender()}
        </Row>
    );
}

export default MovieList;
