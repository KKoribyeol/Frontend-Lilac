import React from 'react';
import Header from "../common/header/Header";
import Document from "./Document";
import SideBar from "../common/side-bar/SideBar";

const DocumentContainer = () => {
    return (
        <>
            <Header isLoginBefore={false} />
            <>
                <SideBar/>
                <Document/>
            </>
        </>
    );
};

export default DocumentContainer;