import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AppLayout = ({ children }) => {
    return (
        <div
            className="rm-app"
            style={{ overflowY: "scroll", position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
        >
            <Header />
            <div style={{ minHeight: "calc(100vh - 120px)" }}>{children}</div>
            <Footer />
        </div>
    );
};

export default AppLayout;
