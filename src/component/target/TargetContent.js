import React from 'react';
import "./Target.css"
import "../common/Common.css"

const TargetContent = ({ token, nickname, name }) => {


    return (
        <div className="content-wrapper-wrapper">
            <div className="content-wrapper">
                <div className="target-content-token-wrapper">
                    <span className="target-content">{token}</span>
                </div>
                <div className="target-content-nickname-wrapper">
                    <span className="target-content">{token}</span>
                </div>
                <div className="target-content-name-wrapper">
                    <span className="target-content">{token}</span>
                </div>
            </div>
        </div>
    );
};

export default TargetContent;