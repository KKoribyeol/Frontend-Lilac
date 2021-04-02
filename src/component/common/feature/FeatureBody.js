import React from 'react';
import "../Common.css"

const FeatureBody = ({ FeatureHeaderName }) => {
    return (
        <div className="feature-body">
            <FeatureHeaderName/>
            <div className="feature-body-body">

            </div>
        </div>
    );
};

export default FeatureBody;