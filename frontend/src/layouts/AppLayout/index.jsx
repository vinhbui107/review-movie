import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const AppLayout = ({ children }) => {
    return (
        <div className="rm-app">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default AppLayout;
