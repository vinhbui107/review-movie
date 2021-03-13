import React, { useState } from "react";
import { CommentsList, Editor } from "../../utils/constants";
import { Comment, Avatar, Form, Button, List, Input } from "antd";
import moment from "moment";

function Comments(props) {
    const [comments, setComments] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = () => {
        if (!value) {
            return;
        }

        setSubmitting({ submitting: true });

        setTimeout(() => {
            setSubmitting();
            setValue("");
            setComments([
                ...comments,
                {
                    author: "Han Solo",
                    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                    content: <p>{value}</p>,
                    datetime: moment().fromNow(),
                },
            ]);
        }, 1000);
    };
    return (
        <div>
            {comments.length > 0 && <CommentsList comments={comments} />}
            <Comment
                avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />
                }
                content={
                    <Editor onChange={handleChange} onSubmit={handleSubmit} submitting={submitting} value={value} />
                }
            />
        </div>
    );
}

export default Comments;
