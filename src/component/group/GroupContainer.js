import React from 'react';
import Header from "../common/header/Header";
import Group from "./Group";

const GroupContainer = () => {
    return (
        <>
            <Header isLoginBefore={false} />
            <Group/>
        </>
    );
};

export default GroupContainer;