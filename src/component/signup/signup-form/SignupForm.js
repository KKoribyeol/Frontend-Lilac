import "../../common/Common.css";
import "./SignupForm.css";

const SignupForm = ({ valueHandler, value, name, description, type }) => {
    return (
        <div>
            <span className="box-name">{name}</span>
            <span className="box-description">{description}</span>
            <input
                type={type}
                onChange={valueHandler}
                value={value}
                className="box-form"
            />
        </div>
    );
}

export default SignupForm;