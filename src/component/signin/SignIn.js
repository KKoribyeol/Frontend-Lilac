import { Link, useHistory } from "react-router-dom";
import React, { useState } from 'react';
import "./SignIn.css";
import "../common/Common.css";
import axios from "axios";
import { getAccountName } from "./getAccountName";
import * as config from "../../config";

const SignIn = () => {
    const history = useHistory();

    const [ id, setId ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ problemMessage, setProblemMessage ] = useState("")

    const handleId = event => setId(event.currentTarget.value);
    const handlePassword = event => setPassword(event.currentTarget.value);

    const submit = event => {
        event.preventDefault();

        axios.post(config.BASE_URL + "/auth", {
            accountId: id,
            accountPassword: password,
        }).then(event => {
            const { accessToken, refreshToken } = event.data;

            localStorage.clear();
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);

            getAccountName(accessToken).then(result => {
                localStorage.setItem("accountName", result.data.name);
            })

            history.push("/project");
        }).catch(error => {
            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        setProblemMessage("아이디 또는 비밀번호가 일치하지 않습니다.");
                        break;
                    case 404:
                        setProblemMessage("아이디 또는 비밀번호가 일치하지 않습니다.");
                        break;
                    default:
                        setProblemMessage(error.response.message);
                        break;
                }
            } else if (error.request) {
                setProblemMessage("서버에서 응답을 받는데 실패하였습니다.");
            } else {
                setProblemMessage("요청에 실패하였습니다.");
            }
        })
    }

    return (
        <div className="sign-in-wrapper">
            <div className="sign-in-logo"/>
            <span className="sign-in-to-project">Sign in to 꼬리별</span>
            <form onSubmit={submit} className="sign-in-form">
                <span className="sign-in-input-description">ID</span>
                <input
                    type="text"
                    onChange={handleId}
                    value={id}
                    className="sign-in-input-box"
                />
                <span className="sign-in-input-description">Password</span>
                <input
                    type="password"
                    onChange={handlePassword}
                    value={password}
                    className="sign-in-input-box"
                />
                <span className="problem-message">{problemMessage}</span>
                <input type="submit" value="Sign in" className="sign-in-submit-button"/>
            </form>
            <div className="go-sign-up">
                <span className="new-to-project">New to 꼬리별?</span>
                <Link to="/signup">
                    <span className="create-an-account">Create an account</span>
                </Link>
            </div>
            <a href="https://github.com/KKoRiByeol" className="github">GitHub</a>
        </div>
    );
}

export default SignIn;