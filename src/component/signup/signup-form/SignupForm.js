import React, { useState } from "react";
import "../../common/Common.css";
import "./SignupForm.css";

const SignupForm = ({ valueHandler, value, name, description }) => {
    return (
        <div>
            <span className="box-name">{name}</span>
            <span className="box-description">{description}</span>
            <input
                type="text"
                onChange={valueHandler}
                value={value}
                className="box-form"
            />
        </div>
    );
}

export default SignupForm;