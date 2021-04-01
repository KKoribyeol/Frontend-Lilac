import React from 'react';
import "./ProjectInfo.css"
import "../../Common.css"

const ProjectInfo = ({projectName}) => {
    return (
        <div className="project-box">
            <div className="project-image"/>
            <span className="project-name">{projectName}</span>
        </div>
    );
};

export default ProjectInfo;