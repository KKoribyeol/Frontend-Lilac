import React from 'react';
import Header from "../common/header/Header";
import Document from "./Document";

const DocumentContainer = () => {
    return (
        <>
            <Header isLoginBefore={false} />
            <Document/>
        </>
    );
};

export default DocumentContainer;