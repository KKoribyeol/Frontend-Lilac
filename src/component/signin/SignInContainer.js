import Header from "../common/header/Header";
import SignIn from "./SignIn";

const SignInContainer = () => {
    return (
        <>
            <Header isLoginBefore={true}/>
            <SignIn />
        </>
    )
}

export default SignInContainer;