import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";

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
