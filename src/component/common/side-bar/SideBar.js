import React, { useState, useEffect } from 'react';
import "./SideBar.css"
import "../Common.css"
import ProjectInfo from "./project/ProjectInfo";
import { getProject } from "../../project/getProject";
import { useHistory } from "react-router-dom";

const SideBar = () => {
    const history = useHistory();

    const [ project, setProject ] = useState({
        projects: [],
    });

    useEffect(() => {
        getProject().then(result => {
            setProject(prev =>
                ({
                    projects: prev.projects.concat(
                        result.data.projects.map(p => p.code)
                    )
                })
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
                <span className="nickname">{localStorage.getItem("accountName")}</span>
            </div>
            <div className="project-new-wrapper">
                <span className="projects">Projects</span>
            </div>

            {
                project.projects.map(code => (
                    <div className="gong-back">
                        <ProjectInfo projectCode={code}/>
                    </div>)
                )
            }

            <div className="side-bar-bottom">
                <div className="current-project-name-wrapper">
                    <span className="current-project-name">{localStorage.getItem("projectCode")}</span>
                </div>
                <div className="logout-button-wrapper">
                    <span className="logout-button" onClick={logout}>Logout</span>
                </div>
            </div>
        </div>
    );
};

export default SideBar;