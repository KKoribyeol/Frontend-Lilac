import React from 'react';
import "./SideBar.css"
import "../Common.css"
import Project from "./project/Project";

const SideBar = () => {
    return (
        <div className="side-bar">
            <div className="name-box">
                <div className="profile"/>
                <span className="nickname">Nickname</span>
            </div>
            <div className="project-new-wrapper">
                <span className="projects">Projects</span>
                <div className="new-project">
                    <div className="new-project-image"/>
                    <span className="new-project-description">New</span>
                </div>
            </div>

            <Project projectName="Kkoribyeol"/>
            <Project projectName="PICK"/>
            <Project projectName="english-memorization-boo..."/>
        </div>
    );
};

export default SideBar;