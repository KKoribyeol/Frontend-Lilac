import React from 'react';
import "./Document.css";
import FeatureTitle from "../common/feature/FeatureTitle";
import "../common/Common.css";

const Document = () => {
    return (
        <div className="feature-background">
            <FeatureTitle title="API Document"/>
            <div className="document-body">
                <span className="document-big-title">푸시를 보내는 법</span>
                <span className="document-small-title">1. 일반 푸시</span>
                <span className="document-normal-text">일반 푸시는 말이죠... 어쩌구 저쩌구...</span>
                <div className="document-request-response-background">
                    <span className="document-small-title">Request</span>
                    <span className="document-normal-text">{"{"}</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;name</span>
                    <span className="document-normal-text">{"}"}</span>
                </div>
                <div className="document-request-response-background">
                    <span className="document-small-title">Response</span>
                    <span className="document-normal-text">{"{"}</span>
                    <span className="document-normal-text">&nbsp;&nbsp;&nbsp;&nbsp;name</span>
                    <span className="document-normal-text">{"}"}</span>
                </div>
            </div>
        </div>
    );
};

export default Document;