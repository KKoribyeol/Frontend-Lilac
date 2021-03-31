import React from "react";
import "../../common/Common.css";
import "./SignupForm.css";

const SignupForm = ({name, description, inputName}) => {
    return (
        <div>
            <span className="box-name">{name}</span>
            <span className="box-description">{description}</span>
            <input type="text" name={inputName} className="box-form" />
        </div>
    );
}

export default SignupForm;