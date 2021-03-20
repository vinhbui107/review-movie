import React from "react";
import { Container } from "react-bootstrap";
import SearchForm from "../../components/SearchForm";
import Carousel from "../../components/Carousel";
import Header from "../../components/Header";
import MovieList from "../../components/MovieList";
import "./style.scss";

function Home() {
    const movieList = [
        {
            maPhim: 1314,
            tenPhim: "hello world",
            biDanh: "hello-world",
            trailer: "Minh",
            hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/hello-world_gp01.jpg",
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
            hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/bo-gia-cac-ban-da-xem-chua_gp01.jpg",
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
            hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/gia-dinh_gp01.jpg",
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
            hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/vo-ba_gp01.jpg",
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
            hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/natra-two_gp01.jpg",
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
            hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/diep-van_gp01.jpg",
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
            hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/mat-biec_gp01.png",
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
            hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/hai-dua-tre_gp01.png",
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
            hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/abcabc_gp01.png",
            moTa:
                "In a stark desert landscape where humanity is broken, two rebels just might be able to restore order: Max, a man of action and of few words, and Furiosa, a woman of action who is looking to make it back to her childhood homeland.",
            maNhom: "GP01",
            ngayKhoiChieu: "2020-10-10T00:00:00",
            danhGia: 10,
        },
    ];

    return (
        <div style={{ backgroundColor: "#EEEEEE", padding: "30px" }}>
            <Container>
                <SearchForm />

                <div className="text-center title mb-0">
                    <h1>Welcome to Movie Finder</h1>
                    <p>Welcome to Movie Finder</p>
                </div>
                <hr />

                <MovieList movieList={movieList} />
            </Container>
        </div>
    );
}

export default Home;
