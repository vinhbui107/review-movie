import React from "react";

const PublicLayout = ({ children }) => {
    return (
        <div className="rm-app">
            <div className="container">
                <div className="justify-content-center row">{children}</div>
            </div>
        </div>
    );
};

export default PublicLayout;
