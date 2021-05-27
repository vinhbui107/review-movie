import { UserOutlined } from "@ant-design/icons";
import { Avatar, Empty, notification } from "antd";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import commentApi from "../services/comment";
import "../style/components/CommentList.scss";
import { getLocalStorage, isLogin, sortByID } from "../utils/helpers.js";
import CommentCard from "./CommentCard";

function CommentList({ comments, setCommentsSate, movieId }) {
    const [openForm, setOpenForm] = useState(false);
    const [inputComment, setInputComment] = useState("");
    const currentUser = getLocalStorage("currentUser");

    const handleOpenForm = () => {
        if (isLogin()) {
            setOpenForm(!openForm);
        } else {
            notification["warning"]({
                message: "You need to login for review this movie!",
            });
        }
    };

    const handleSubmitComment = async (e) => {
        e.preventDefault();

        if (inputComment.length > 0) {
            try {
                const response = await commentApi.postComment(movieId, { content: inputComment });
                const newComments = [...comments, response];
                notification["success"]({
                    message: "Review successfully.",
                });
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
                        <Col md="1" className="commentList__avatar">
                            <Avatar icon={<UserOutlined />} src={currentUser?.avatar} size={48} />
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
                <div style={{ marginBottom: "20px" }}>
                    <Empty
                        imageStyle={{
                            height: 120,
                        }}
                        description={
                            <span>We don't have any reviews for this movie. Would you like to write one?</span>
                        }
                    />
                </div>
            )}
        </>
    );
}

export default CommentList;
