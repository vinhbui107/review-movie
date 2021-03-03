import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import MovieInfo from "../../components/MovieInfo";
import MovieList from "../../components/MovieList";
import { Comment, Tooltip, List, Avatar, Form, Button, Input } from "antd";
import moment from "moment";
import "./style.scss";

const { TextArea } = Input;

const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
        itemLayout="horizontal"
        renderItem={(props) => <Comment {...props} />}
    />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Add Comment
            </Button>
        </Form.Item>
    </>
);

const data = [
    {
        actions: [<span key="comment-list-reply-to-0">Reply to</span>],
        author: "Han Solo",
        avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        content: (
            <p>
                We supply a series of design principles, practical patterns and high quality design resources (Sketch
                and Axure), to help people create their product prototypes beautifully and efficiently.
            </p>
        ),
        datetime: (
            <Tooltip title={moment().subtract(1, "days").format("YYYY-MM-DD HH:mm:ss")}>
                <span>{moment().subtract(1, "days").fromNow()}</span>
            </Tooltip>
        ),
    },
    {
        actions: [<span key="comment-list-reply-to-0">Reply to</span>],
        author: "Han Solo",
        avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        content: (
            <p>
                We supply a series of design principles, practical patterns and high quality design resources (Sketch
                and Axure), to help people create their product prototypes beautifully and efficiently.
            </p>
        ),
        datetime: (
            <Tooltip title={moment().subtract(2, "days").format("YYYY-MM-DD HH:mm:ss")}>
                <span>{moment().subtract(2, "days").fromNow()}</span>
            </Tooltip>
        ),
    },
];

function MovieDetail() {
    const [comments, setComments] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = () => {
        data.push({
            actions: [<span key="comment-list-reply-to-0">Reply to</span>],
            author: "Han Solo",
            avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            content: <p>{value}</p>,
            datetime: (
                <Tooltip title={moment().subtract(1, "days").format("YYYY-MM-DD HH:mm:ss")}>
                    <span>{moment().subtract(1, "days").fromNow()}</span>
                </Tooltip>
            ),
        });
        console.log(data.length);
        /* if (!value) {
            return;
        }

        setSubmitting({ submitting: true });

        setTimeout(() => {
            setSubmitting({ submitting: false });
            setValue("");
            setComments({
                ...comments,
                author: "Han Solo",
                avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                content: <p>{value}</p>,
                datetime: moment().fromNow(),
            });
        }, 1000); */
    };

    return (
        <>
            <div style={{ backgroundImage: `url("./img/hero-2.jpg")`, height: "700px" }}>
                <div></div>
                <p></p>
                <MovieInfo text={"MovieDetail"} />
            </div>
            <Container>
                <h2>Recommend</h2>
                <MovieList />

                <div className="comment">
                    <h1>Comment</h1>
                    <List
                        className="comment-list"
                        header={`${data.length} replies`}
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item) => (
                            <li>
                                <Comment
                                    actions={item.actions}
                                    author={item.author}
                                    avatar={item.avatar}
                                    content={item.content}
                                    datetime={item.datetime}
                                />
                            </li>
                        )}
                    />
                    {
                        <List
                            className="comment-list"
                            header={`${data.length} replies`}
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={(item) => (
                                <li>
                                    <Comment
                                        actions={item.actions}
                                        author={item.author}
                                        avatar={item.avatar}
                                        content={item.content}
                                        datetime={item.datetime}
                                    />
                                </li>
                            )}
                        />
                    }
                    <Comment
                        avatar={
                            <Avatar
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"
                            />
                        }
                        content={
                            <Editor
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                                submitting={submitting}
                                value={value}
                            />
                        }
                    />
                </div>
            </Container>
        </>
    );
}

export default MovieDetail;
