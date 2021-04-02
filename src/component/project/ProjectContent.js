import React, { useState } from 'react';
import "./Project.css"
import axios from "axios";

const ProjectContent = ({ code, name, description }) => {
    const [ modificationName, setModificationName ] = useState("");
    const [ modificationDescription, setModificationDescription ] = useState("");
    const [ modificationMode, setModificationMode ] = useState(false);

    const handleName = name => setModificationName(name.currentTarget.value);
    const handleDescription = description => setModificationDescription(description.currentTarget.value);

    const switchModificationMode = () => {
        setModificationMode(!modificationMode);
    }

    const modifyProject = () => {
        axios.patch(`http://localhost:6180/project/${code}`, {
            name: modificationName,
            description: modificationDescription,
        }, {
            headers: {
                Authorization: localStorage.getItem("accessToken"),
            },
        }).then(() => {
            window.location.reload()
        }).catch(error => {
            switch (error.response.data.code) {
                case "PROJECT_NOT_FOUND":
                    alert(`잘못된 프로젝트입니다. [$code]`);
                    break;
                case "INVALID_REQUEST":
                    alert(error.response.data.message);
                    break;
                default:
                    alert(error.response.data.message);
                    break;
            }
        })
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
                {
                    modificationMode ?
                        <>
                            <div className="project-content-name-wrapper">
                                <input
                                    type="text"
                                    onChange={handleName}
                                    value={modificationName}
                                    className="project-input-tag"
                                />
                            </div>
                            <div className="project-content-description-wrapper">
                                <input
                                    type="text"
                                    onChange={handleDescription}
                                    value={modificationDescription}
                                    className="project-input-tag"
                                />
                            </div>
                        </>
                        :
                        <>
                            <div className="project-content-name-wrapper">
                                <span className="project-content">{name}</span>
                            </div>
                            <div className="project-content-description-wrapper">
                                <span className="project-content">{description}</span>
                            </div>
                        </>
                }
            </div>
            {
                modificationMode ?
                    <>
                        <div className="project-modification-image" onClick={modifyProject}/>
                        <div className="project-cancel-image" onClick={switchModificationMode}/>
                    </>
                    :
                    <>
                        <div className="project-modification-image" onClick={switchModificationMode}/>
                        <div className="project-deletion-image" onClick={deleteProject}/>
                    </>
            }
        </div>
    );
}

export default ProjectContent;