import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Banner from "../Search";
import style from "./style.scss";

Carousel.propTypes = {};

function Carousel(props) {
    const [key, setKey] = useState("home");

    return (
        <div style={{ position: "relative" }}>
            <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
                <Tab
                    eventKey="home"
                    title="  "
                    className={style.tab}
                    style={{ backgroundImage: `url("./img/hero-1.jpg")` }}
                >
                    <Banner />
                </Tab>
                <Tab
                    eventKey="profile"
                    title="Phim 2"
                    className={style.tab}
                    style={{ backgroundImage: `url("./img/hero-2.jpg")` }}
                >
                    <Banner />
                </Tab>
                <Tab
                    eventKey="contact"
                    title="Phim 3"
                    className={style.tab}
                    style={{ backgroundImage: `url("./img/hero-3.jpg")` }}
                >
                    <Banner />
                </Tab>
            </Tabs>
        </div>
    );
}

export default Carousel;
