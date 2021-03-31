import React from 'react';
import Header from "../common/header/Header";
import Target from "./Target";

const TargetContainer = () => {
    return (
        <>
            <Header isLoginBefore={false} />
            <Target/>
        </>
    );
};

export default TargetContainer;