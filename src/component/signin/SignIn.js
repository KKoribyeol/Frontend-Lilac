import { Link } from "react-router-dom"
import React from 'react';
import "./SignIn.css";
import "../common/Common.css";

const SignIn = () => {
    return (
        <div className="sign-in-wrapper">
            <div className="sign-in-logo"/>
            <span className="sign-in-to-project">Sign in to 꼬리별</span>
            <form onSubmit={submit} className="sign-in-form">
                <span className="sign-in-input-description">ID</span>
                <input type="text" name="id" className="sign-in-input-box"/>
                <span className="sign-in-input-description">Password</span>
                <input type="text" name="password" className="sign-in-input-box"/>
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

const submit = (event) => {
    event.preventDefault();
}

export default SignIn;