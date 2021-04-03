import React from 'react';
import "./Target.css"
import TargetHeader from "./TargetHeader"
import TargetContentProvider from "./TargetContentProvider";
import FeatureBackground from "../common/feature/FeatureBackground";

const Target = () => {
    return (
        <>
            <FeatureBackground
                title="Target"
                FeatureHeader={TargetHeader}
                FeatureContentProvider={TargetContentProvider}
            />
        </>
    );
};

export default Target;