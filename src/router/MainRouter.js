import { Route, BrowserRouter as Router } from "react-router-dom";
import MainContainer from "../component/main/MainContainer";
import SignUpContainer from "../component/signup/SignupContainer";
import SignInContainer from "../component/signin/SignInContainer";
import React from "react";

const MainRouter = () => {
    return (
        <Router>
            <Route exact path="/" component={MainContainer} />
            <Route exact path="/signup" component={SignUpContainer} />
            <Route exact path="/signin" component={SignInContainer} />
        </Router>
    );
}

export default MainRouter;