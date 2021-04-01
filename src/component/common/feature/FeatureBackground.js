import React from 'react';
import FeatureTitle from "./FeatureTitle";
import "../Common.css"
import FeatureBody from "./FeatureBody";

const FeatureBackground = ({ title }) => {
    return (
        <div className="feature-background">
            <FeatureTitle title="Project"/>
            <FeatureBody />
        </div>
    );
};

export default FeatureBackground;