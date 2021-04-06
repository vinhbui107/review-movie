import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CommentList from "../../components/CommentList";
import MovieInfo from "../../components/MovieInfo";
import MovieList from "../../components/MovieList";
import "./style.scss";

/* const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
        itemLayout="horizontal"
        renderItem={(props) => <Comment {...props} />}
    />
); */
const movie = {
    poster: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/gmbsR4SvYhhj4SvLAlTKxIkFxp9.jpg",
    img: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/6SJppowm7cdQgLkvoTlnTUSbjr9.jpg",
};

function MovieDetail(props) {
    const [movieDetail, setMovieDetail] = useState(movie);

    return (
        <div
            style={{
                backgroundImage: `url(${movieDetail.poster})`,
            }}
            className="poster"
        >
            <div className="poster__item">
                <Container fluid style={{ width: "85%" }}>
                    <Row>
                        <Col md="3" xs="12">
                            <img src={movie.img} alt="" />
                        </Col>
                        <Col md="9" xs="12" className="poster__item--detail">
                            <h1>Superman and Lois (2021)</h1>

                            <p>Action and Adventure, Sci-Fi and Fantasy</p>

                            <div className="poster__item--rate">
                                <ul>
                                    <li className="mr-3">
                                        <span className="poster__item--rate--score">7.3</span>
                                    </li>

                                    <li>
                                        <button>
                                            <i class="fa fa-bookmark"></i>
                                        </button>
                                    </li>
                                    <li>
                                        <button>
                                            <i className="fa fa-star" />
                                        </button>
                                    </li>
                                    <li>
                                        <button>
                                            <i className="fa fa-heart" />
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <div className="poster__item--overview my-4">
                                <h3>Overview</h3>
                                <p>
                                    After years of facing megalomaniacal supervillains, monsters wreaking havoc on
                                    Metropolis, and alien invaders intent on wiping out the human race, The Man of Steel
                                    aka Clark Kent and Lois Lane come face to face with one of their greatest challenges
                                    ever: dealing with all the stress, pressures and complexities that come with being
                                    working parents in today's society.
                                </p>
                            </div>

                            <div className="poster__item--time">
                                <div>
                                    <h5>Greg Berlanti</h5>
                                    <p>Creator</p>
                                </div>
                                <div>
                                    <span className="mr-2">105 mins</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default MovieDetail;
