import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";

import { Container, Row, Col } from "react-bootstrap";
import "./style.scss";

import MovieList from "../../components/MovieList";
import Carousel from "../../components/Carousel";
import axios from "axios";
import productApi from "../../services/movie";

function Home() {
    return (
        <div>
            <Carousel />
            <Container fluid style={{ width: "85%" }}>
                <MovieList title={"Reccommend"} items={6} />
                <MovieList title={"Top Rating"} logo={"1"} />
            </Container>
        </div>
    );
}

export default Home;
