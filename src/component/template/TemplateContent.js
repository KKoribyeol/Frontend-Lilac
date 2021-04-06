import React, { useState } from 'react';
import "./Template.css"
import axios from "axios";
import {BASE_URL} from "../../config";

const TemplateContent = ({ id, title, body }) => {
    const [ modificationTitle, setModificationTitle ] = useState("");
    const [ modificationBody, setModificationBody ] = useState("");
    const [ modificationMode, setModificationMode ] = useState(false);

    const handleTitle = title => setModificationTitle(title.currentTarget.value);
    const handleBody = body => setModificationBody(body.currentTarget.value);

    const switchModificationMode = () => {
        setModificationMode(!modificationMode);
    }

    const modifyTemplate = () => {
        axios.patch(BASE_URL + `/template/${id}`, {
            title: modificationTitle,
            body: modificationBody,
        }, {
            headers: {
                Authorization: localStorage.getItem("accessToken"),
                projectCode: localStorage.getItem("projectCode"),
            }
        }).then(() => {
            window.location.reload();
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
                        case "TEMPLATE_NOT_FOUND":
                            alert(`잘못된 템플릿입니다. [${id}]`);
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

    const deleteTemplate = () => {
        axios.delete(BASE_URL + `/template/${id}`, {
            headers: {
                Authorization: localStorage.getItem("accessToken"),
                projectCode: localStorage.getItem("projectCode"),
            }
        }).then(() => {
            window.location.reload();
        }).catch(error => {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("알 수 없는 오류");
            }
        })
    }

    return (
        <div className="content-wrapper-wrapper">
            <div className="content-wrapper">
                <div className="template-content-id-wrapper template-void">
                    <span className="template-content">{id}</span>
                </div>
                {
                    modificationMode ?
                        <>
                            <div className="template-content-title-wrapper template-void">
                                <input
                                    type="text"
                                    onChange={handleTitle}
                                    value={modificationTitle}
                                    className="template-input-tag"
                                />
                            </div>
                            <div className="template-content-body-wrapper template-void">
                                <input
                                    type="text"
                                    onChange={handleBody}
                                    value={modificationBody}
                                    className="template-input-tag"
                                />
                            </div>
                        </>
                        :
                        <>
                            <div className="template-content-title-wrapper template-void">
                                <span className="template-content">{title}</span>
                            </div>
                            <div className="template-content-body-wrapper template-void">
                                <span className="template-content">{body}</span>
                            </div>
                        </>
                }
            </div>
            {
                modificationMode ?
                    <>
                        <div className="content-modification-image" onClick={modifyTemplate}/>
                        <div className="content-cancel-image" onClick={switchModificationMode}/>
                    </>
                    :
                    <>
                        <div className="content-modification-image" onClick={switchModificationMode}/>
                        <div className="content-deletion-image" onClick={deleteTemplate}/>
                    </>
            }
        </div>
    );
}

export default TemplateContent;