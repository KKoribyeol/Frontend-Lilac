import Header from "../common/header/Header";
import Signup from "./SignUp";

const SignUpContainer = () => {
    return (
        <>
            <Header isLoginBefore={true}/>
            <Signup />
        </>
    )
}

export default SignUpContainer