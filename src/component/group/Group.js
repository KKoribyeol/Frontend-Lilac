import React from 'react';
import "./Group.css"
import FeatureBackground from "../common/feature/FeatureBackground";
import ProjectHeader from "../project/ProjectHeader";
import ProjectContentProvider from "../project/ProjectContentProvider";

const Group = () => {
    return (
        <>
            <FeatureBackground
                title="Group"
                FeatureHeader={ProjectHeader}
                FeatureContentProvider={ProjectContentProvider}
            />
        </>
    );
};

export default Group;