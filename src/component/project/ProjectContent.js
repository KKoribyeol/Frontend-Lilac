import React from 'react';
import "./Project.css"
import axios from "axios";

const ProjectContent = ({ code, name, description }) => {

    const modifyProject = () => {

    }

    const deleteProject = () => {
        axios.delete(`http://localhost:6180/project/${code}`, {
            headers: {
                Authorization: localStorage.getItem("accessToken"),
            },
        }).then(() => {
            window.location.reload()
        }).catch(error => {
            switch (error.response.status) {
                case 404:
                    alert(`잘못된 프로젝트입니다. [$code]`);
                    break;
                default:
                    alert(error.message)
                    break;
            }
        })
    }

    return (
        <div className="content-wrapper-wrapper">
            <div className="content-wrapper">
                <div className="project-content-code-wrapper">
                    <span className="project-content">{code}</span>
                </div>
                <div className="project-content-name-wrapper">
                    <span className="project-content">{name}</span>
                </div>
                <div className="project-content-description-wrapper">
                    <span className="project-content">{description}</span>
                </div>
            </div>
            <div className="project-modification-image" onClick={modifyProject}/>
            <div className="project-deletion-image" onClick={deleteProject}/>
        </div>
    );
};

export default ProjectContent;