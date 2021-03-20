import React from "react";
import "./style.scss";

MovieInfo.propTypes = {};

function MovieInfo(props) {
    const { title, desc } = props;
    return (
        <div className="tab__item">
            <div className="tab__item__caption text-left container">
                <div className="tab__item__caption__info ">
                    <h3>{title}</h3>

                    <div className="tab__item__caption__category">
                        <ul className="tab__item__caption__category__list">
                            <li>Director: {props.text}</li>
                            <li>
                                <i className="fa fa-clock mr-2"></i>
                                <span>1h30</span>
                            </li>
                        </ul>
                        <ul className="tab__item__caption__category__list">
                            <li>IMDB 5.3</li>
                            <li>
                                <a href="/">Animation</a>
                            </li>
                        </ul>
                    </div>
                    <p>{desc}</p>
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
