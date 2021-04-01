import React from 'react';
import Header from "../common/header/Header";
import Target from "./Target";
import SideBar from "../common/side-bar/SideBar";

const TargetContainer = () => {
    return (
        <>
            <Header isLoginBefore={false} />
            <>
                <SideBar/>
                <Target/>
            </>
        </>
    );
};

export default TargetContainer;