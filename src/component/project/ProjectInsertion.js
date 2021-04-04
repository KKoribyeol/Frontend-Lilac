import React, { useState } from 'react';
import "./Project.css"
import axios from "axios";
import * as config from "../../config";

const ProjectInsertion = () => {
    const [ name, setName ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ problemMessage, setProblemMessage ] = useState("")

    const handleName = name => setName(name.currentTarget.value);
    const handleDescription = description => setDescription(description.currentTarget.value);

    const submit = () => {
        axios.post(config.BASE_URL + "/project", {
            name: name,
            description: description,
        }, {
            headers: {
                Authorization: localStorage.getItem("accessToken"),
            },
        }).then(result => {
            window.location.reload();
        }).catch(error => {
            switch (error.response.data.code) {
                case "ALREADY_EXIST_PROJECT":
                    setProblemMessage("다시 한 번 프로젝트를 생성해주세요.");
                    break;
                default:
                    alert(error.response.data.message);
                    break;
            }
        })
    }

    return (
        <div className="content-wrapper-wrapper">
            <div className="content-wrapper">
                <div className="project-content-name-wrapper project-void">
                    <input
                        type="text"
                        onChange={handleName}
                        value={name}
                        className="project-input-tag"
                    />
                </div>
                <div className="project-content-description-wrapper">
                    <input
                        type="text"
                        onChange={handleDescription}
                        value={description}
                        className="project-input-tag"
                    />
                </div>
            </div>
            <div className="project-insertion-image" onClick={submit}/>
        </div>
    );
};

export default ProjectInsertion;