import { useState } from "react";
import { comments } from "../../utils/dumies_data";
import Comment from "../Comment";
import StarRatings from "react-star-ratings";
import { FormControl, InputGroup } from "react-bootstrap";

function CommentList(props) {
    const [commentsState, setcommentsState] = useState(comments);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const handleRenderComment = () => {
        return commentsState.map((item, index) => {
            return <Comment item={item} key={index} />;
        });
    };

    const changeRating = (e) => {
        setRating(e.target.value);
    };

    const handleChangeComment = (e) => {
        setComment(e.target.comment);
    };

    return (
        <div className="comment">
            <InputGroup className="comment__input">
                <StarRatings
                    rating={rating}
                    starRatedColor="yellow"
                    changeRating={changeRating}
                    numberOfStars={5}
                    name="rating"
                    className="comment__input__rate"
                />
                <FormControl
                    placeholder="Your comment ... "
                    onChange={handleChangeComment}
                    value={comment}
                    name="comment"
                    className="comment__input__comment"
                />
            </InputGroup>

            <div className="comment_list">
                <div className="comments_inner">{handleRenderComment()}</div>
            </div>
        </div>
    );
}

export default CommentList;
