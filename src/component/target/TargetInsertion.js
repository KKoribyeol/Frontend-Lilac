import React, { useState } from 'react';
import "../common/Common.css"
import "./Target.css"
import axios from "axios";
import * as config from "../../config";

const TargetInsertion = () => {
    const [ token, setToken ] = useState("");
    const [ nickname, setNickname ] = useState("");
    const [ name, setName ] = useState("")

    const handleToken = token => setToken(token.currentTarget.value);
    const handleNickname = nickname => setNickname(nickname.currentTarget.value);
    const handleName = name => setName(name.currentTarget.value);

    const submit = () => {
        axios.post(config.BASE_URL + "/target", {
            targets: [{
                token: token,
                nickname: nickname,
                name: name,
            }],
        }, {
            headers: {
                Authorization: localStorage.getItem("accessToken"),
                projectCode: localStorage.getItem("projectCode"),
            },
        }).then(() => {
            window.location.reload();
        }).catch(error => {
            switch (error.response.data.code) {
                case "ALREADY_EXIST_TARGET":
                    alert("이미 존재하는 Nickname 이거나 Token 입니다.");
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
                <div className="target-content-token-wrapper target-void">
                    <input
                        type="text"
                        onChange={handleToken}
                        value={token}
                        className="target-input-tag"
                    />
                </div>
                <div className="target-content-nickname-wrapper">
                    <input
                        type="text"
                        onChange={handleNickname}
                        value={nickname}
                        className="target-input-tag"
                    />
                </div>
                <div className="target-content-name-wrapper">
                    <input
                        type="text"
                        onChange={handleName}
                        value={name}
                        className="target-input-tag"
                    />
                </div>
            </div>
            <div className="content-insertion-image" onClick={submit}/>
        </div>
    );
};

export default TargetInsertion;