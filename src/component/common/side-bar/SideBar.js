import React, { useState, useEffect } from 'react';
import "./SideBar.css"
import "../Common.css"
import ProjectInfo from "./project/ProjectInfo";
import { getProject } from "../../project/getProject";
import { useHistory } from "react-router-dom";

const SideBar = () => {
    const history = useHistory();

    const [ projectName, setProjectName ] = useState({
        projectNames: [],
    });
    const [ currentProjectName, setCurrentProjectName ] = useState("");

    useEffect(() => {
        getProject().then(result => {
            setProjectName(prev =>
                ({ ...prev, projectNames: prev.projectNames.concat(result.data.projects.map(p => p.name))})
            )
        })
    }, []);

    const logout = () => {
        localStorage.clear()
        history.push("/")
    }

    return (
        <div className="side-bar">
            <div className="name-box">
                <div className="profile"/>
                <span className="nickname">Nickname</span>
            </div>
            <div className="project-new-wrapper">
                <span className="projects">Projects</span>
            </div>

            {
                projectName.projectNames.map(projectName => (<ProjectInfo projectName={projectName}/> ))
            }

            <div className="side-bar-bottom">
                <span className="current-project-name">dfsdf</span>
                <span className="logout-button" onClick={logout}>Logout</span>
            </div>
        </div>
    );
};

export default SideBar;