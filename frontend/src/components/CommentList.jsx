import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import CommentCard from "./CommentCard";
import "../style/components/CommentList.scss";

function CommentList() {
    const [openForm, setOpenForm] = useState(false);

    return (
        <div className="commentList">
            <div className="commentList__header">
                <h1 className="title">Reviews</h1>

                <button className="btn btn-primary" onClick={() => setOpenForm(!openForm)}>
                    <i className={`fa fa-${openForm ? "times" : "pen"}`} />
                </button>
            </div>
            <Form className={`commentList__form ${openForm ? "commentList__form--active" : ""}`}>
                <Form.Group controlId="Write your comment">
                    <Row>
                        <Col md="1">
                            <img
                                src="https://www.themoviedb.org/t/p/w64_and_h64_face/xNLOqXXVJf9m7WngUMLIMFsjKgh.jpg"
                                alt=""
                                className="commentList__avatar"
                            />
                        </Col>
                        <Col md="11">
                            <Form.Control as="textarea" maxLength="100" rows={3} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="text-right">
                    <Button type="submit" className="commentList__form__submit">
                        Submit
                    </Button>
                </Form.Group>
            </Form>

            <CommentCard />
        </div>
    );
}

export default CommentList;
