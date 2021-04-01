import React from 'react';
import "../Common.css"

const FeatureTitle = ({ title }) => {
    return (
        <div className="feature-title-wrapper">
            <span className="feature-title">{title}</span>
        </div>
    );
};

export default FeatureTitle;