import React from "react";
import { Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import MovieCard from "../MovieCard";
import style from "./style.module.scss";

function MovieList(props) {
    const { title, logo, items } = props;
    return (
        <>
            <h1 className={style.title}>
                {logo ? <span className={style.title__logo}>{logo}</span> : ""}
                {title}
            </h1>
            <OwlCarousel className={style["owl-theme"]} loop margin={10} items="1" lazyLoad="true" nav="true">
                <Row>
                    {items === 10 ? (
                        <>
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
                        </>
                    ) : (
                        <>
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                        </>
                    )}
                    <div className={style.clearFloat}></div>
                </Row>
                <Row className={style.owlItem}>
                    {items === 10 ? (
                        <>
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
                        </>
                    ) : (
                        <>
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                            <MovieCard />
                        </>
                    )}
                    <div className={style.clearFloat}></div>
                </Row>
            </OwlCarousel>
        </>
    );
}

export default MovieList;
