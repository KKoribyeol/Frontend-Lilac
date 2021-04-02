import React from 'react';
import "../Common.css"
import FeatureTitle from "./FeatureTitle";
import FeatureBody from "./FeatureBody";

const FeatureBackground = ({ title, FeatureHeader, FeatureContentProvider }) => {
    return (
        <div className="feature-background">
            <FeatureTitle title={title}/>
            <FeatureBody
                FeatureHeader={FeatureHeader}
                FeatureContentProvider={FeatureContentProvider}
            />
        </div>
    );
}

export default FeatureBackground;