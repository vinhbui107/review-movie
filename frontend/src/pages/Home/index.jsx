import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "../../components/Carousel";
import MovieList from "../../components/MovieList";
import "./style.scss";

function Home() {
    return (
        <div>
            <Carousel />
            <Container fluid style={{ width: "85%" }}>
                {/* <MovieList title={"Reccommend"} items={6} /> */}
            </Container>
        </div>
    );
}

export default Home;
