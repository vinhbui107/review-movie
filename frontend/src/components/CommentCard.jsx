import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../style/components/CommentCard.scss";
import DefaultAvatar from "../assets/img/avatar.png";

function CommentCard({ comment }) {
    return (
        <Card className="commentCard">
            <Card.Body>
                <Row>
                    <Col md="2" className="commentCard--left">
                        <div
                            style={{
                                backgroundImage: `url("${DefaultAvatar}")`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center,0 0",
                                backgroundSize: "70% auto",
                            }}
                            className="commentCard__avatar"
                        ></div>
                    </Col>
                    <Col md="10" className="commentCard--right">
                        <div className="commentCard__author">
                            <h3>{comment.user.username}</h3>
                            <small>{comment.created_at}</small>
                        </div>

                        <Card.Text className="commentCard__list">{comment.content}</Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default CommentCard;
