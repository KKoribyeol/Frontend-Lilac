import React from 'react';
import Header from "../common/header/Header";
import Group from "./Group";
import SideBar from "../common/side-bar/SideBar";

const GroupContainer = () => {
    return (
        <>
            <Header isLoginBefore={false} />
            <>
                <SideBar/>
                <Group/>
            </>
        </>
    );
};

export default GroupContainer;