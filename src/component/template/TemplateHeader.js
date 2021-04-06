import React from 'react';

const TemplateHeader = () => {
    return (
        <div className="feature-body-header">
            <div className="template-header-id-wrapper feature-header-wrapper">
                <span className="feature-header-font">ID</span>
            </div>
            <div className="template-header-title-wrapper feature-header-wrapper">
                <span className="feature-header-font">Title</span>
            </div>
            <div className="template-header-body-wrapper feature-header-wrapper">
                <span className="feature-header-font">Body</span>
            </div>
        </div>
    );
};

export default TemplateHeader;