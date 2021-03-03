import React from "react";
import { Row, Col } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import MovieCard from "../MovieCard";

import style from "./style.module.scss";

function MovieList() {
    return (
        <OwlCarousel className={style["owl-theme"]} loop margin={10} items="1" lazyLoad="true" nav="true">
            <div className="row">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
            {/* <div className="row">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div> */}
        </OwlCarousel>
    );
}

export default MovieList;
