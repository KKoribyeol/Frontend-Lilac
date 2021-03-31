import React from "react";
import "./Signup.css"
import SignupForm from "./signup-form/SignupForm"

const Signup = () => {
    return (
        <div className="signup">
            <div className="signup-left"/>
            <div className="signup-middle">
                <form onSubmit={submit}>
                    <div className="signup-description sort-center">
                        <span className="signup-description-join">Join 꼬리별</span>
                        <span className="signup-description-create-your-account">Create your account</span>
                    </div>
                    <div className="signup-form">
                        <SignupForm name={"ID"} description={"8 ~ 20자, 영대소문자, 숫자 가능"} />
                        <SignupForm name={"Password"} description={"8 ~ 20자, 영대소문자, 숫자, 특수문자 !@#$%^&* 가능"} />
                        <SignupForm name={"Name"} description={"1 ~ 12자, 영대소문자, 한글, 띄워쓰기 가능"} />
                    </div>
                    <div className="file-uploader-form">
                        <span className="box-name">Profile</span>
                        <input type="file" className="file-uploader" />
                    </div>
                    <input type="submit" value="Create account" className="signup-submit" />
                </form>
            </div>
            <div className="signup-right"/>
        </div>
    );
}

const submit = (event) => {
    event.preventDefault();
}

export default Signup