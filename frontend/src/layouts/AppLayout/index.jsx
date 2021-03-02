import React from "react";
import Footer from "../../components/Common/Footer";
import Header from "../../components/Common/Header";

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
