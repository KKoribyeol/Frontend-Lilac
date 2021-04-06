import React, { useState } from 'react';
import "./Template.css"
import axios from "axios";
import * as config from "../../config";

const TemplateInsertion = () => {
    const [ title, setTitle ] = useState("");
    const [ body, setBody ] = useState("");

    const handleTitle = title => setTitle(title.currentTarget.value)
    const handleBody = body => setBody(body.currentTarget.value)

    const submit = () => {
        axios.post(config.BASE_URL + "/template", {
            title: title,
            body: body,
        }, {
            headers: {
                Authorization: localStorage.getItem("accessToken"),
                projectCode: localStorage.getItem("projectCode"),
            },
        }).then(() => {
            window.location.reload();
        }).catch(error => {
            switch (error.response.status) {
                case 400:
                    switch (error.response.data.code) {
                        case "ALREADY_EXIST_TEMPLATE":
                            alert("title 과 body 가 일치하는 템플릿이 이미 존재합니다.");
                            break;
                        default:
                            alert(error.response.data.message);
                            break;
                    } break;
                default:
                    alert("알 수 없는 에러");
                    break;
            }
        })
    }

    return (
        <div className="content-wrapper-wrapper">
            <div className="content-wrapper">
                <div className="template-content-title-wrapper template-void template-first">
                    <input
                        type="text"
                        onChange={handleTitle}
                        value={title}
                        className="template-input-tag"
                    />
                </div>
                <div className="template-content-body-wrapper template-void">
                    <input
                        type="text"
                        onChange={handleBody}
                        value={body}
                        className="template-input-tag"
                    />
                </div>
            </div>
            <div className="content-insertion-image" onClick={submit}/>
        </div>
    );
};

export default TemplateInsertion;