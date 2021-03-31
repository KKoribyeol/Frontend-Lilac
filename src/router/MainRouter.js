import { Route, BrowserRouter as Router } from "react-router-dom";
import MainContainer from "../component/main/MainContainer";
import SignupContainer from "../component/signup/SignupContainer";
import React from "react";

const MainRouter = () => {
    return (
        <Router>
            <Route exact path="/" component={MainContainer} />
            <Route exact path="/signup" component={SignupContainer} />
            <Route exact path="/signin" component={SignupContainer} />
        </Router>
    );
}

export default MainRouter
