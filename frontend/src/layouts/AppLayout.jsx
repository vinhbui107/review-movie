import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AppLayout = ({ children }) => {
    return (
        <div className="rm-app">
            <Header />
            <div style={{ minHeight: "calc(100vh - 120px)" }}>{children}</div>
            <Footer />
        </div>
    );
};

export default AppLayout;
