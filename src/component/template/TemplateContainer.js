import React from 'react';
import Header from "../common/header/Header";
import Template from "./Template";

const TemplateContainer = () => {
    return (
        <>
            <Header isLoginBefore={false} />
            <Template/>
        </>
    );
};

export default TemplateContainer;