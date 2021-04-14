import { Rate } from "antd";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Comments from "../components/comments";

import MovieRecommend from "../components/movie_recommend";
import "../style/pages/_movie-detail.scss";

const movie = {
    poster: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/gmbsR4SvYhhj4SvLAlTKxIkFxp9.jpg",
    img: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/6SJppowm7cdQgLkvoTlnTUSbjr9.jpg",
};

const movieList = [
    {
        maPhim: 1314,
        tenPhim: "hello world",
        biDanh: "hello-world",
        trailer: "Minh",
        hinhAnh: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/gmbsR4SvYhhj4SvLAlTKxIkFxp9.jpg",
        moTa: "Test,Test,Test,Test",
        maNhom: "GP01",
        ngayKhoiChieu: "2021-03-17T01:29:12.11",
        danhGia: 10,
    },
    {
        maPhim: 1329,
        tenPhim: "Bố già các bạn đã xem chưa",
        biDanh: "bo-gia-cac-ban-da-xem-chua",
        trailer: "https://www.youtube.com/embed/IHNzOHi8sJs",
        hinhAnh: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/gmbsR4SvYhhj4SvLAlTKxIkFxp9.jpg",
        moTa: ".Người càng xinh đẹp, càng dễ lừa dối người khác",
        maNhom: "GP01",
        ngayKhoiChieu: "2021-03-18T07:07:06.697",
        danhGia: 10,
    },
    {
        maPhim: 1344,
        tenPhim: "Gia dinh",
        biDanh: "gia-dinh",
        trailer: "string",
        hinhAnh: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/gmbsR4SvYhhj4SvLAlTKxIkFxp9.jpg",
        moTa: "gfhfghg",
        maNhom: "GP01",
        ngayKhoiChieu: "2021-02-25T00:00:00",
        danhGia: 10,
    },
    {
        maPhim: 1359,
        tenPhim: "Vợ ba",
        biDanh: "vo-ba",
        trailer: "https://www.youtube.com/embed/MyqZf8LiWvM",
        hinhAnh: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/gmbsR4SvYhhj4SvLAlTKxIkFxp9.jpg",
        moTa: "mat hoi lac thoi",
        maNhom: "GP01",
        ngayKhoiChieu: "2020-10-10T00:00:00",
        danhGia: 10,
    },
    {
        maPhim: 1374,
        tenPhim: "Natra Two",
        biDanh: "natra-two",
        trailer: "https://www.youtube.com/embed/U-MxFzqU3QA",
        hinhAnh: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/gmbsR4SvYhhj4SvLAlTKxIkFxp9.jpg",
        moTa: "ab",
        maNhom: "GP01",
        ngayKhoiChieu: "2021-03-16T03:12:19.193",
        danhGia: 10,
    },
    {
        maPhim: 1389,
        tenPhim: "Diep Van",
        biDanh: "diep-van",
        trailer: "https://www.youtube.com/embed/1HpZevFifuo",
        hinhAnh: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/gmbsR4SvYhhj4SvLAlTKxIkFxp9.jpg",
        moTa: "Mắt hút",
        maNhom: "GP01",
        ngayKhoiChieu: "2020-04-30T00:00:00",
        danhGia: 9,
    },
    {
        maPhim: 1404,
        tenPhim: "Mắt biếc",
        biDanh: "mat-biec",
        trailer: "https://www.youtube.com/embed/RFinNxS5KN4",
        hinhAnh: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/gmbsR4SvYhhj4SvLAlTKxIkFxp9.jpg",
        moTa: "Trứng rán cần mỡ, bắp cần bơ, yêu không cần cớ, cần cậu cơ <3",
        maNhom: "GP01",
        ngayKhoiChieu: "2019-07-29T00:00:00",
        danhGia: 9,
    },
    {
        maPhim: 1419,
        tenPhim: "Hai đứa trẻ",
        biDanh: "hai-dua-tre",
        trailer: "https://www.youtube.com/embed/AAgnQdiZFsQ",
        hinhAnh: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/gmbsR4SvYhhj4SvLAlTKxIkFxp9.jpg",
        moTa: "Hai Đứa Trẻ Mồ Côi",
        maNhom: "GP01",
        ngayKhoiChieu: "2020-02-12T00:00:00",
        danhGia: 10,
    },
    {
        maPhim: 1434,
        tenPhim: "Tennet 2",
        biDanh: "tennet-2",
        trailer: "https://www.youtube.com/embed/hEJnMQG9ev8",
        hinhAnh: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/gmbsR4SvYhhj4SvLAlTKxIkFxp9.jpg",
        moTa:
            "In a stark desert landscape where humanity is broken, two rebels just might be able to restore order: Max, a man of action and of few words, and Furiosa, a woman of action who is looking to make it back to her childhood homeland.",
        maNhom: "GP01",
        ngayKhoiChieu: "2020-10-10T00:00:00",
        danhGia: 10,
    },
];

function MovieDetail(props) {
    const [movieDetail, setMovieDetail] = useState(movie);

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url('https://images-na.ssl-images-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg?fbclid=IwAR3_42_7ExJedI0Lx4POG_HjuvgAn1reHyJxvoWhaOp5d_2voeKbUquCs6I')`,
                }}
                className="poster"
            >
                <div className="poster__wrapper">
                    <Container fluid style={{ width: "85%" }}>
                        <Row className="poster__wrapper--row">
                            <Col md="3" xs="12" className="poster__wrapper--left">
                                <img
                                    src="https://image.thanhnien.vn/800/uploaded/caotung/2021_02_24/bogiacomback_uvul.png"
                                    alt=""
                                />
                            </Col>
                            <Col md="9" xs="12" className="poster__wrapper--right">
                                <div className="poster__title">
                                    <h1>Superman and Lois (2021)</h1>
                                    <p>Action and Adventure, Sci-Fi and Fantasy</p>
                                </div>

                                <ul className="poster__action">
                                    <li className="poster__action__list poster__action--score mr-3">
                                        <span>7.3</span>
                                    </li>

                                    <li className="poster__action__list">
                                        <button>
                                            <i className="fa fa-bookmark"></i>
                                        </button>
                                    </li>
                                    <li className="poster__action__list poster__action--like">
                                        <button>
                                            <i className="fa fa-thumbs-up"></i>
                                        </button>
                                    </li>
                                    <li className="poster__action__list">
                                        <button>
                                            <i className="fa fa-heart" />
                                        </button>
                                    </li>
                                    <li className="poster__action__list poster__action--rating">
                                        <button>
                                            <i className="fa fa-star" />
                                        </button>
                                        <Rate
                                            allowHalf
                                            style={{ display: "block" }}
                                            className="poster__action--rating-star"
                                            onChange={() => alert("Rating success")}
                                        />
                                    </li>
                                </ul>

                                <div className="poster__overview my-4">
                                    <h3 className="poster__overview--title">Overview</h3>
                                    <p className="poster__overview--description">
                                        After years of facing megalomaniacal supervillains, monsters wreaking havoc on
                                        Metropolis, and alien invaders intent on wiping out the human race, The Man of
                                        Steel aka Clark Kent and Lois Lane come face to face with one of their greatest
                                        challenges ever: dealing with all the stress, pressures and complexities that
                                        come with being working parents in today's society.
                                    </p>
                                </div>

                                <div className="poster__people">
                                    <h5>Greg Berlanti</h5>
                                    <p>Creator</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Container>
                <MovieRecommend movieListRec={movieList} />
                <hr />
                <Comments />
            </Container>
        </div>
    );
}

export default MovieDetail;
