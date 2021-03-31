import { Route, BrowserRouter as Router } from "react-router-dom";
import MainContainer from "../component/main/MainContainer";
import SignUpContainer from "../component/signup/SignupContainer";
import SignInContainer from "../component/signin/SignInContainer";
import TargetContainer from "../component/target/TargetContainer";
import React from "react";

const MainRouter = () => {
    return (
        <Router>
            <Route exact path="/" component={MainContainer} />
            <Route exact path="/signup" component={SignUpContainer} />
            <Route exact path="/signin" component={SignInContainer} />
            <Route exact path="/target" component={TargetContainer} />
        </Router>
    );
}

export default MainRouter;