import { useState } from "react";
import { Image } from "react-bootstrap";
import "./style.scss";

function Comment(props) {
    const { item } = props;

    return (
        <div className="comment">
            <div className="comment__inner">
                <div className="comment__inner__grouped">
                    <div className="comment__inner__grouped__avatar">
                        <Image src={item.avatar} width={70} height={70} roundedCircle />
                    </div>
                    <div className="comment__inner__grouped__info">
                        <div className="comment__inner__grouped__info__username">{item.username}</div>
                        <div className="comment__inner__grouped__info__date">{item.date}</div>
                    </div>
                </div>

                <div className="comment__inner__teaser">
                    <div className="comment__inner__teaser__content">
                        <p>{item.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment;
