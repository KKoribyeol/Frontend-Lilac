import { Route, BrowserRouter as Router } from "react-router-dom";
import MainContainer from "../component/main/MainContainer";
import SignUpContainer from "../component/signup/SignupContainer";
import SignInContainer from "../component/signin/SignInContainer";
import ProjectContainer from "../component/project/ProjectContainer";
import TargetContainer from "../component/target/TargetContainer";
import GroupContainer from "../component/group/GroupContainer";
import TemplateContainer from "../component/template/TemplateContainer";
import DocumentContainer from "../component/document/DocumentContainer";
import React from "react";

const MainRouter = () => {
    return (
        <Router>
            <Route exact path="/" component={MainContainer} />
            <Route exact path="/signup" component={SignUpContainer} />
            <Route exact path="/signin" component={SignInContainer} />
            <Route exact path="/project" component={ProjectContainer} />
            <Route exact path="/target" component={TargetContainer} />
            <Route exact path="/group" component={GroupContainer} />
            <Route exact path="/template" component={TemplateContainer} />
            <Route exact path="/document" component={DocumentContainer} />
        </Router>
    );
}

export default MainRouter;