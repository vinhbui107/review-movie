import React from "react";
import "../style/components/Footer.scss";
import { Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";

function Footer() {
    return (
        <div className="footer">
            <Container style={{ padding: 0 }}>
                <div className="row no-gutters">
                    <div className="col-md-8">
                        <img src={logo} style={{ width: "154px", height: "50px" }}></img>
                    </div>
                    <div className="col-md-4 right-info">
                        <p>{"Made by Vinh Bui <3"}</p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Footer;
