import React from 'react';
import Header from "../common/header/Header";
import Template from "./Template";
import SideBar from "../common/side-bar/SideBar";

const TemplateContainer = () => {
    return (
        <>
            <Header isLoginBefore={false} />
            <>
                <SideBar/>
                <Template/>
            </>
        </>
    );
};

export default TemplateContainer;