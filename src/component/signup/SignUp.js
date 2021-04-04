import React, { useState } from "react";
import "./SignUp.css";
import SignupForm from "./signup-form/SignupForm";
import axios from "axios";
import { useHistory } from "react-router-dom";
import * as config from "../../config";

const SignUp = () => {
    const history = useHistory();

    const [ id, setId ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ name, setName ] = useState("");
    const [ profile, setProfile ] = useState("");
    const [ problemMessage, setProblemMessage ] = useState("")

    const handleId = event => setId(event.currentTarget.value);
    const handlePassword = event => setPassword(event.currentTarget.value);
    const handleName = event => setName(event.currentTarget.value);
    const handleProfile = event => setProfile(event.currentTarget.value);

    const submit = event => {
        event.preventDefault();

        axios.post(config.BASE_URL + '/account', {
            accountId: id,
            accountPassword: password,
            accountName: name,
        }).then(() => {
            history.push("/signin")
        }).catch(error => {
            switch (error.response.data.code) {
                case "ALREADY_EXIST_ACCOUNT":
                    setProblemMessage("이미 존재하는 계정입니다.");
                    break;
                case "INVALID_REQUEST":
                    setProblemMessage(error.response.data.message);
                    break;
                case "INVALID_JSON":
                    setProblemMessage("JSON 이 잘못되었습니다. 이거 뜨면 안 됨.");
                    break;
                default:
                    setProblemMessage(error.response.data.message);
                    break;
            }
        })
    }

    return (
        <div className="sign-up">
            <div className="sign-up-left"/>
            <div className="sign-up-middle">
                <form onSubmit={submit}>
                    <div className="sign-up-description sort-center">
                        <span className="sign-up-description-join">Join 꼬리별</span>
                        <span className="sign-up-description-create-your-account">Create your account</span>
                    </div>

                    <div className="sign-up-form">
                        <SignupForm
                            valueHandler={handleId}
                            value={id}
                            name="ID"
                            description="8 ~ 20자, 영대소문자, 숫자 가능"
                        />
                        <SignupForm
                            valueHandler={handlePassword}
                            value={password}
                            name="Password"
                            description="8 ~ 20자, 영대소문자, 숫자, 특수문자 !@#$%^&* 가능"
                        />
                        <SignupForm
                            valueHandler={handleName}
                            value={name}
                            name="Name"
                            description="1 ~ 12자, 영대소문자, 한글, 띄워쓰기 가능"
                        />
                    </div>

                    <div className="file-uploader-form">
                        <span className="box-name">Profile</span>
                        <input type="file" className="file-uploader"/>
                    </div>

                    <span className="problem-message">{problemMessage}</span>

                    <input type="submit" value="Create account" className="sign-up-submit" />
                </form>
            </div>
            <div className="sign-up-right"/>
        </div>
    );
}

export default SignUp;