import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/components/CommentCard.scss";
import { displayDate, displayMemberSince } from "../utils/helpers";

function CommentCard({ comment }) {
    return (
        <Card className="commentCard">
            <Card.Body>
                <Row>
                    <Col md="2" className="commentCard--left">
                        <Avatar icon={<UserOutlined />} src={comment.user.avatar} size={64} />
                    </Col>
                    <Col md="10" className="commentCard--right">
                        <div className="commentCard__author">
                            <h3>
                                <Link to={`/u/${comment.user.username}`}>{comment.user.username}</Link>
                            </h3>
                            <p>
                                Written by
                                <span>
                                    <Link to={`/u/${comment.user.username}`}> {comment.user.username} </Link>
                                </span>
                                on {displayDate(comment.updated_at)}
                            </p>
                        </div>

                        <Card.Text className="commentCard__list">{comment.content}</Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default CommentCard;
