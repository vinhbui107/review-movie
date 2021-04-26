import React from "react";

const PublicLayout = ({ children }) => {
    return (
        <div className="rm-app">
            <div>{children}</div>
        </div>
    );
};

export default PublicLayout;
