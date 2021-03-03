import React from "react";
import OwlCarousel from "react-owl-carousel";

import { Container, Row, Col } from "react-bootstrap";
import "./style.scss";

import MovieList from "../../components/MovieList";
import Banner from "../../components/Banner";

function Home() {
    return (
        <div>
            <Banner />
            <Container>
                <h1 className="title">Reccommend</h1>
                <MovieList />
                <h1 className="title">
                    <span className="title__logo">1</span> Top Rating
                </h1>
                <MovieList />
            </Container>
        </div>
    );
}

export default Home;
