import React from "react";
import "../style/pages/NotFound.scss";
import NotFoundImg from "../assets/img/404.gif";

function NotFound() {
    return (
        <div className="not-found">
            <img src={NotFoundImg}></img>
        </div>
    );
}

export default NotFound;
