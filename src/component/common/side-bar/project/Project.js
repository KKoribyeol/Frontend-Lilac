import React from 'react';
import "./Project.css"
import "../../Common.css"

const Project = ({projectName}) => {
    return (
        <div className="project-box">
            <div className="project-image"/>
            <span className="project-name">{projectName}</span>
        </div>
    );
};

export default Project;