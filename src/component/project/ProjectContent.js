import React, { useState } from 'react';
import "./Project.css"
import axios from "axios";
import * as config from "../../config";

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
        axios.patch(config.BASE_URL + `/project/${code}`, {
            name: modificationName,
            description: modificationDescription,
        }, {
            headers: {
                Authorization: localStorage.getItem("accessToken"),
            },
        }).then(() => {
            window.location.reload()
        }).catch(error => {
            switch (error.response.status) {
                case 400:
                    switch (error.response.data.code) {
                        case "INVALID_REQUEST":
                            alert('잘못된 요청입니다.' + error.response.data.message);
                            break;
                        case "INVALID_JSON":
                            alert(error.response.data.message);
                            break;
                        default:
                            alert(error.response.data.message);
                            break;
                    } break;
                case 404:
                    switch (error.response.data.code) {
                        case "PROJECT_NOT_FOUND":
                            alert(`잘못된 프로젝트입니다. [${code}]`);
                            break;
                        default:
                            alert(error.response.data.message);
                            break;
                    } break;
                default:
                    alert(error.response.data.message);
                    break;
            }
        })
    }

    const deleteProject = () => {
        axios.delete(config.BASE_URL + `/project/${code}`, {
            headers: {
                Authorization: localStorage.getItem("accessToken"),
            },
        }).then(() => {
            window.location.reload()
        }).catch(error => {
            alert(error.response.data.message);
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
                        <div className="content-modification-image" onClick={modifyProject}/>
                        <div className="content-cancel-image" onClick={switchModificationMode}/>
                    </>
                    :
                    <>
                        <div className="content-modification-image" onClick={switchModificationMode}/>
                        <div className="content-deletion-image" onClick={deleteProject}/>
                    </>
            }
        </div>
    );
}

export default ProjectContent;