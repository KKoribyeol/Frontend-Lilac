import React from 'react';
import "./ProjectInfo.css"
import "../../Common.css"

const ProjectInfo = ({ projectCode }) => {
    const connectProject = () => {
        localStorage.setItem("projectCode", projectCode);
        window.location.reload()
    }

    return (
        <div className="project-box" onClick={connectProject}>
            <div className="project-image"/>
            <span className="project-name">{projectCode}</span>
        </div>
    );
};

export default ProjectInfo;