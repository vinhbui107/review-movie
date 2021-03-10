import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import MovieInfo from "../../components/MovieInfo";
import MovieList from "../../components/MovieList";
import { Comment, Tooltip, List, Avatar, Form, Button, Input } from "antd";
import moment from "moment";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import productApi from "../../services/movie";
import Comments from "../../components/Comment";
import CommentList from "../../components/CommentList";

const { TextArea } = Input;

/* const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
        itemLayout="horizontal"
        renderItem={(props) => <Comment {...props} />}
    />
); */

function MovieDetail(props) {
    const [movieDetail, setMovieDetail] = useState({});
    // const stateMovieDetail = useSelector((state) => state.movieReducer.movieDetail);

    useEffect(() => {
        const getMovieById = async () => {
            const response = await productApi.getMovieById(props.match.params.id);

            console.log("responseMovieDetail", response);
            setMovieDetail(response);
        };
        getMovieById();
    }, []);

    return (
        <>
            {console.log("Match:", props.match.params.id)}
            <div style={{ backgroundImage: `url("./img/hero-2.jpg")`, height: "700px" }}>
                <p></p>
                <MovieInfo text={movieDetail.Director} title={movieDetail.Title} desc={movieDetail.Description} />
            </div>
            <Container fluid style={{ width: "85%" }}>
                <h2>Recommend</h2>
                <MovieList title={"Reccommend"} items={6} />

                <div className="comment">
                    <h1>Comment</h1>

                    <CommentList />
                </div>
            </Container>
        </>
    );
}

export default MovieDetail;
