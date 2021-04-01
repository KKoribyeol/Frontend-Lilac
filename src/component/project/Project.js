import React from 'react';
import "./Project.css";
import FeatureBackground from "../common/feature/FeatureBackground";
import ProjectHeader from "./ProjectHeader";

const Project = () => {
    return (
        <>
            <FeatureBackground
                title="Project"
                FeatureHeaderName={ProjectHeader}
            />
        </>
    );
}

export default Project;