import React from "react";
import "./style.css";

Footer.propTypes = {};

function Footer(props) {
    return (
        <>
            <div className="footer_1its py-5">
                <div className="container py-md-4">
                    <div className="row footer-top mb-md-5 mb-4">
                        <div className="col-lg-4 col-md-6 footer-grid_section_1its" data-aos="fade-right">
                            <div className="footer-title-w3pvt">
                                <h3>Address</h3>
                            </div>
                            <div className="footer-text">
                                <p>Address : 1234 lock, Charlotte, North Carolina, United States</p>
                                <p>Phone : +12 534894364</p>
                                <p>
                                    Email : <a href="mailto:info@example.com">info@example.com</a>
                                </p>
                                <p>Fax : +12 534894364</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-md-0 mt-4 footer-grid_section_1its">
                            <div className="footer-title-w3pvt">
                                <h3>Quick Links</h3>
                            </div>
                            <div className="row no-gutters">
                                <ul className="links">
                                    <li>
                                        <a href="index.html">Home </a>
                                    </li>
                                    <li>
                                        <a href="about.html">About </a>
                                    </li>
                                    <li>
                                        <a href="features.html">Services</a>
                                    </li>
                                    <li>
                                        <a href="gallery.html">Gallery</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-12 mt-lg-0 mt-4 col-sm-12 footer-grid_section_1its"
                            data-aos="fade-left"
                        >
                            <div className="footer-title-w3pvt">
                                <h3>Newsletter</h3>
                            </div>
                            <div className="footer-text">
                                <p>
                                    By subscribing to our mailing list you will always get latest news and updates from
                                    us.
                                </p>
                                <form action="#" method="post">
                                    <input type="email" name="Email" placeholder="Enter your email..." required />
                                    <button className="btn1">
                                        <i className="fab fa-telegram-plane" />
                                    </button>
                                    <div className="clearfix"> </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cpy-right py-3">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-8">
                            <p className="copy-w3layouts">
                                © 2021 Movie Star. All rights reserved | Design by
                                <a href="http://w3layouts.com"> HHH</a>
                            </p>
                        </div>
                        <div className="col-md-4 footer-grid_section">
                            <ul className="top-right-info text-center pl-0">
                                <li className="mr-1">
                                    <a href="#">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li className="mx-1">
                                    <a href="#">
                                        <i className="fab fa-google-plus-g" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-dribbble" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
