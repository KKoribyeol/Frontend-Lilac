import React from 'react';
import "./Project.css";
import FeatureBackground from "../common/feature/FeatureBackground";
import ProjectHeader from "./ProjectHeader";
import ProjectContentProvider from "./ProjectContentProvider";

const Project = () => {
    return (
        <>
            <FeatureBackground
                title="Project"
                FeatureHeader={ProjectHeader}
                FeatureContentProvider={ProjectContentProvider}
            />
        </>
    );
}

export default Project;