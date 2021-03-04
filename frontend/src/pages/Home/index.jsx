import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";

import { Container, Row, Col } from "react-bootstrap";
import "./style.scss";

import MovieList from "../../components/MovieList";
import Carousel from "../../components/Carousel";

function Home() {
    return (
        <div>
            <Carousel />
            <Container fluid style={{ width: "85%" }}>
                <MovieList title={"Reccommend"} />
                <MovieList title={"Top Rating"} logo={"1"} items={10} />
            </Container>
        </div>
    );
}

export default Home;
