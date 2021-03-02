import React from "react";
import { Row, Col } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import MovieCart from "../Common/MovieCart";

import style from "./style.module.scss";

function MovieList() {
    return (
        <div>
            <OwlCarousel className={style["owl-theme"]} loop margin={10} items="1" lazyLoad="true" nav="true">
                <Row>
                    <MovieCart />
                    <MovieCart />
                    <MovieCart />
                    <MovieCart />
                    <MovieCart />
                    <MovieCart />
                </Row>
                <Row>
                    <MovieCart />
                    <MovieCart />
                    <MovieCart />
                    <MovieCart />
                    <MovieCart />
                    <MovieCart />
                </Row>
            </OwlCarousel>
        </div>
    );
}

export default MovieList;
