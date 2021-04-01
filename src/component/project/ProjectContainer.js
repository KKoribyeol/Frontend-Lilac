import React from 'react';
import Header from "../common/header/Header";
import Project from "./Project";
import SideBar from "../common/side-bar/SideBar";

const ProjectContainer = () => {
    return (
        <>
            <Header isLoginBefore={false}/>
            <>
                <SideBar />
                <Project />
            </>
        </>
    );
};

export default ProjectContainer;