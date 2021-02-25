import React, { useState } from "react";
import PropTypes from "prop-types";
import { Carousel, Tabs, Tab } from "react-bootstrap";
import "./style.scss";
import { Container, Row, Col } from "reactstrap";

Banner.propTypes = {};

function Banner(props) {
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState("home");

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="tab"
        >
          <Tab eventKey="home" title="Phim 1" className="tab__item tab__item-1">
            <div className="tab__caption text-left container">
              <div className="tab__caption__info w-50">
                <h3>Scoob!</h3>
                <div className="tab__caption__category">
                  <ul className="tab__caption__category__list">
                    <li>IMDB 5.3</li>
                    <li>
                      <a href="/">Animation</a>
                    </li>
                  </ul>
                </div>
                <p>
                  Scooby-Doo và the Mystery Inc. hợp sức giải cứu thế giới khỏi
                  tên ác nhân Dick Dastardly. Cùng đón xem bộ phim những cuộc
                  phưu lưu của chú chó scooby doo (2…
                </p>
                <div className="play d-flex align-items-center">
                  <button className="text-white">
                    <i className="fa fa-play"></i>
                    Play trailer
                  </button>
                  <button className="text-white">
                    <i className="fa fa-play"></i>
                    Yeu thich
                  </button>
                </div>
              </div>
            </div>
          </Tab>
          <Tab
            eventKey="profile"
            title="Phim 2"
            className="tab__item tab__item-2"
          >
            <div className="tab__caption text-left container">
              <div className="tab__item__info w-50">
                <h3>Scoob!</h3>
                <div className="tab__caption__category">
                  <ul className="tab__caption__category__list">
                    <li>IMDB 5.3</li>
                    <li>
                      <a href="/">Animation</a>
                    </li>
                  </ul>
                </div>
                <h1>
                  Scooby-Doo và the Mystery Inc. hợp sức giải cứu thế giới khỏi
                  tên ác nhân Dick Dastardly. Cùng đón xem bộ phim những cuộc
                  phưu lưu của chú chó scooby doo (2…
                </h1>
                <div className="play d-flex align-items-center">
                  <button className="text-white">
                    <i className="fa fa-play"></i>
                    Play trailer
                  </button>
                  <button className="text-white">
                    <i className="fa fa-play"></i>
                    Like
                  </button>
                </div>
              </div>
            </div>
          </Tab>
          <Tab
            eventKey="contact"
            title="Phim 3"
            className="tab__item tab__item-3"
          >
            <div className="tab__caption text-left container">
              <div className="tab__item__info w-50">
                <h3>Scoob!</h3>
                <div className="tab__caption__category">
                  <ul className="tab__caption__category__list">
                    <li>IMDB 5.3</li>
                    <li>
                      <a href="/">Animation</a>
                    </li>
                  </ul>
                </div>
                <p>
                  Scooby-Doo và the Mystery Inc. hợp sức giải cứu thế giới khỏi
                  tên ác nhân Dick Dastardly. Cùng đón xem bộ phim những cuộc
                  phưu lưu của chú chó scooby doo (2…
                </p>
                <div className="play d-flex align-items-center">
                  <button className="text-white">
                    <i className="fa fa-play"></i>
                    Play trailer
                  </button>
                  <button className="text-white">
                    <i className="fa fa-play"></i>
                    Yeu thich
                  </button>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default Banner;
