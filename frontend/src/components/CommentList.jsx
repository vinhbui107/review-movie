import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import commentApi from "../services/comment";
import "../style/components/CommentList.scss";
import { isLogin, sortByID } from "../utils/helpers.js";
import CommentCard from "./CommentCard";

function CommentList({ comments, setCommentsSate, movieId }) {
    const [openForm, setOpenForm] = useState(false);
    const [inputComment, setInputComment] = useState("");

    const handleOpenForm = () => {
        if (isLogin()) {
            setOpenForm(!openForm);
        } else {
            alert("Login to review this movie");
        }
    };

    const handleSubmitComment = async (e) => {
        e.preventDefault();

        if (inputComment.length > 0) {
            try {
                const response = await commentApi.postComment(movieId, { content: inputComment });
                const newComments = [...comments, response];
                setCommentsSate(sortByID(newComments));
                setOpenForm(!openForm);
                setInputComment("");
            } catch (error) {}
        }
    };

    const handleChange = (e) => {
        setInputComment(e.target.value);
    };

    return (
        <>
            <div className="commentList__header">
                <h1 className="title">Reviews</h1>

                <button className="btn btn-primary" onClick={handleOpenForm}>
                    <i className={`fa fa-${openForm ? "times" : "pen"}`} />
                </button>
            </div>
            <Form
                className={`commentList__form ${openForm ? "commentList__form--active" : ""}`}
                onSubmit={handleSubmitComment}
            >
                <Form.Group controlId="Write your comment">
                    <Row>
                        <Col md="1">
                            <img
                                src="https://www.themoviedb.org/t/p/w64_and_h64_face/xNLOqXXVJf9m7WngUMLIMFsjKgh.jpg"
                                alt=""
                                className="commentList__form__avatar"
                            />
                        </Col>
                        <Col md="11">
                            <Form.Control
                                as="textarea"
                                rows={3}
                                onChange={handleChange}
                                name="inputComment"
                                value={inputComment}
                                required
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="text-right">
                    <Button type="submit" className="commentList__form__submit">
                        Submit
                    </Button>
                </Form.Group>
            </Form>

            {comments.length > 0 ? (
                comments?.map((comment, index) => <CommentCard comment={comment} key={index} />)
            ) : (
                <p style={{ textAlign: "center" }}>{"We don't have any reviews for this movie :)"}</p>
            )}
        </>
    );
}

export default CommentList;
