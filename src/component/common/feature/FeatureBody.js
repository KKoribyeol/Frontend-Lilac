import React from 'react';
import "../Common.css";

const FeatureBody = ({ FeatureHeader, FeatureContentProvider }) => {
    return (
        <div className="feature-body">
            <FeatureHeader/>
            <FeatureContentProvider/>
        </div>
    );
}

export default FeatureBody;