import React from "react";
import { Row } from "react-bootstrap";
import "./style.scss";

Banner.propTypes = {};

function Banner(props) {
    return (
        <Row>
            <div className="searchForm">
                <input type="text" placeholder="Search for anything" />
                <i className="fa fa-search" />
            </div>
        </Row>
    );
}

export default Banner;
