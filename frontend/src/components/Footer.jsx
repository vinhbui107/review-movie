import React from "react";
import "../style/components/_footer.scss";
import logo from "../assets/img/logo.svg";

function Footer() {
    return (
        <>
            <div className="cpy-right py-3">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-8">
                            <img src={logo} style={{ width: "154px", height: "50px" }}></img>
                        </div>
                        <div className="col-md-4 right-info">
                            <p>{"Made by Vinh Bui <3"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
