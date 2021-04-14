import React, { useState } from "react";
import { Button, Col, Form, Row, Tab, Tabs } from "react-bootstrap";
import CommentList from "./comment-list";
import style from "../style/components/_comments.scss";

export default function Comments() {
    const [openForm, setOpenForm] = useState(false);
    console.log("aaa", openForm);
    return (
        <div className="comments">
            <div className="comments__header">
                <h1 className="title">Reviews</h1>

                <button className="btn btn-primary" onClick={() => setOpenForm(!openForm)}>
                    <i className={`fa fa-${openForm ? "times" : "pen"}`} />
                </button>
            </div>
            <Form className={`comments__form ${openForm ? "comments__form--active" : ""}`}>
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
                    <Button type="submit" className="comments__form__submit">
                        Submit
                    </Button>
                </Form.Group>
            </Form>

            <CommentList />
            <CommentList />
        </div>
    );
}
