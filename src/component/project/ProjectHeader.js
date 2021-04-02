import React from 'react';
import "./Project.css"
import "../common/Common.css"

const ProjectHeader = () => {
    return (
        <div className="feature-body-header">
            <div className="project-header-name-wrapper feature-header-wrapper">
                <span className="feature-header-font">Name</span>
            </div>
            <div className="project-header-description-wrapper feature-header-wrapper">
                <span className="feature-header-font">Description</span>
            </div>
        </div>
    );
};

export default ProjectHeader;