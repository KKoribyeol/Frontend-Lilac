import React from 'react';
import "./Template.css"
import FeatureBackground from "../common/feature/FeatureBackground";
import TemplateHeader from "./TemplateHeader";
import TemplateContentProvider from "./TemplateContentProvider";

const Template = () => {
    return (
        <>
            <FeatureBackground
                title="Template"
                FeatureHeader={TemplateHeader}
                FeatureContentProvider={TemplateContentProvider}
            />
        </>
    );
};

export default Template;