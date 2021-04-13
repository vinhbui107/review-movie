import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "antd/dist/antd.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "react-circular-progressbar/dist/styles.css";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
