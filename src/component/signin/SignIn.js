import { Link, useHistory } from "react-router-dom"
import React, { useState } from 'react';
import "./SignIn.css";
import "../common/Common.css";
import axios from "axios";

const SignIn = () => {
    const history = useHistory();

    const [ id, setId ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ problemMessage, setProblemMessage ] = useState("")

    const handleId = event => setId(event.currentTarget.value);
    const handlePassword = event => setPassword(event.currentTarget.value);

    const submit = event => {
        event.preventDefault();

        axios.post("http://localhost:6180/account/login", {
            accountId: id,
            accountPassword: password,
        }).then(event => {
            const { accessToken, refreshToken } = event.data;
            // 토큰 처리하는 로직
            history.push("/project");
        }).catch(error => {
            switch (error.response.status) {
                case 400:
                case 404:
                    setProblemMessage("아이디 또는 비밀번호가 일치하지 않습니다.");
                    break;
                default:
                    setProblemMessage(error.response.message);
                    break;
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
                    type="text"
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