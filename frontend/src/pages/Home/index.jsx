import React from "react";
import { Container } from "react-bootstrap";
import { Pie, defaults } from "react-chartjs-2";
import MovieList from "../../components/MovieList";
import MovieRecommend from "../../components/MovieRecommend";
import Search from "../../components/Search";
import "./style.scss";

function Home() {
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

    return (
        <div>
            <Container>
                <Search />

                <MovieList movieList={movieList} />

                <MovieList movieList={movieList} />

                <MovieList movieList={movieList} />
            </Container>
        </div>
    );
}

export default Home;
