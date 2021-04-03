import React from 'react';
import "./Target.css"
import "../common/Common.css"
import "../project/Project.css"

const TargetHeader = () => {
    return (
        <div className="feature-body-header">
            <div className="target-header-token-wrapper feature-header-wrapper">
                <span className="feature-header-font">Token</span>
            </div>
            <div className="target-header-nickname-wrapper feature-header-wrapper">
                <span className="feature-header-font">Nickname</span>
            </div>
            <div className="target-header-name-wrapper feature-header-wrapper">
                <span className="feature-header-font">Name</span>
            </div>
        </div>
    );
};

export default TargetHeader;