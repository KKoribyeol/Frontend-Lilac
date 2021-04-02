import React from 'react';
import "../Common.css"
import FeatureTitle from "./FeatureTitle";
import FeatureBody from "./FeatureBody";

const FeatureBackground = ({ title, FeatureHeaderName }) => {
    return (
        <div className="feature-background">
            <FeatureTitle title={title}/>
            <FeatureBody FeatureHeaderName={FeatureHeaderName} />
        </div>
    );
};

export default FeatureBackground;