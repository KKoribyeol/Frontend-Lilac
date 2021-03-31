import { Route, BrowserRouter as Router } from 'react-router-dom';
import Test from "./Test";
import React from "react";

const MainRouter = () => {
    return (
        <Router>
            <Route path="/test" component={Test} />
        </Router>
    );
}

export default MainRouter