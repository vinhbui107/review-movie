import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

MovieInfo.propTypes = {};

function MovieInfo(props) {
    return (
        <div className="tab__item">
            <div className="tab__item__caption text-left container">
                <div className="tab__item__caption__info ">
                    <h3>Scoob!</h3>
                    <div className="tab__item__caption__category">
                        <ul className="tab__item__caption__category__list">
                            <li>IMDB 5.3</li>
                            <li>
                                <a href="/">Animation</a>
                            </li>
                        </ul>
                    </div>
                    <p>
                        Scooby-Doo và the Mystery Inc. hợp sức giải cứu thế giới khỏi tên ác nhân Dick Dastardly. Cùng
                        đón xem bộ phim những cuộc phưu lưu của chú chó scooby doo (2…
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
        </div>
    );
}

export default MovieInfo;
