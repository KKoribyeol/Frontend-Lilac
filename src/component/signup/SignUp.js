import React from "react";
import "./SignUp.css"
import SignupForm from "./signup-form/SignupForm"

const SignUp = () => {
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
                        <SignupForm name="ID" description="8 ~ 20자, 영대소문자, 숫자 가능" inputName="id" />
                        <SignupForm name="Password" description="8 ~ 20자, 영대소문자, 숫자, 특수문자 !@#$%^&* 가능" inputName="password" />
                        <SignupForm name="Name" description="1 ~ 12자, 영대소문자, 한글, 띄워쓰기 가능" inputName="name" />
                    </div>
                    <div className="file-uploader-form">
                        <span className="box-name">Profile</span>
                        <input type="file" className="file-uploader" />
                    </div>
                    <input type="submit" value="Create account" className="sign-up-submit" />
                </form>
            </div>
            <div className="sign-up-right"/>
        </div>
    );
}

const submit = (event) => {
    event.preventDefault();
}

export default SignUp;