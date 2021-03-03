import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab } from "react-bootstrap";
import style from "./style.module.scss";
import MovieInfo from "../../MovieInfo";

Banner.propTypes = {};

function Banner(props) {
    const [key, setKey] = useState("home");

    return (
        <>
            <div style={{ position: "relative" }}>
                <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className={style.tab}>
                    <Tab eventKey="home" title="  " style={{ backgroundImage: `url("./img/hero-2.jpg")` }}>
                        <MovieInfo />
                    </Tab>
                    <Tab eventKey="profile" title="Phim 2">
                        <MovieInfo />
                    </Tab>
                    <Tab eventKey="contact" title="Phim 3">
                        <MovieInfo />
                    </Tab>
                </Tabs>
            </div>
        </>
    );
}

export default Banner;
