import React, { useState } from 'react';
import "./Target.css"
import "../common/Common.css"
import axios from "axios";
import {BASE_URL} from "../../config";

const TargetContent = ({ token, nickname, name }) => {
    const [ modificationNickname, setModificationNickname ] = useState("");
    const [ modificationName, setModificationName ] = useState("");
    const [ modificationMode, setModificationMode ] = useState(false);

    const handleNickname = nickname => setModificationNickname(nickname.currentTarget.value);
    const handleName = name => setModificationName(name.currentTarget.value);

    const switchModificationMode = () => {
        setModificationMode(!modificationMode);
    }

    const modifyTarget = () => {
        axios.patch(BASE_URL + `/target/${token}`, {
            nickname: modificationNickname,
            name: modificationName,
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
                        case "TARGET_NOT_FOUND":
                            alert(`잘못된 타겟입니다.. [${token}]`);
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

    const deleteTarget = () => {
        axios.delete(BASE_URL + `/target/${token}`, {
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
                <div className="target-content-token-wrapper target-void">
                    <span className="target-content">{token}</span>
                </div>
                {
                    modificationMode ?
                        <>
                            <div className="target-content-nickname-wrapper">
                                <input
                                    type="text"
                                    onChange={handleNickname}
                                    value={modificationNickname}
                                    className="target-input-tag"
                                />
                            </div>
                            <div className="target-content-name-wrapper">
                                <input
                                    type="text"
                                    onChange={handleName}
                                    value={modificationName}
                                    className="target-input-tag"
                                />
                            </div>
                        </>
                        :
                        <>
                            <div className="target-content-nickname-wrapper">
                                <span className="target-content">{nickname}</span>
                            </div>
                            <div className="target-content-name-wrapper">
                                <span className="target-content">{name}</span>
                            </div>
                        </>
                }
            </div>
            {
                modificationMode ?
                    <>
                        <div className="content-modification-image" onClick={modifyTarget}/>
                        <div className="content-cancel-image" onClick={switchModificationMode}/>
                    </>
                    :
                    <>
                        <div className="content-modification-image" onClick={switchModificationMode}/>
                        <div className="content-deletion-image" onClick={deleteTarget}/>
                    </>
            }
        </div>
    );
};

export default TargetContent;