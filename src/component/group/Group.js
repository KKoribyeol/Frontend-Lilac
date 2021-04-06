import React from 'react';
import "./Group.css"
import FeatureBackground from "../common/feature/FeatureBackground";
import GroupContentProvider from "./GroupContentProvider";
import GroupHeader from "./GroupHeader";

const Group = () => {
    return (
        <>
            <FeatureBackground
                title="Group"
                FeatureHeader={GroupHeader}
                FeatureContentProvider={GroupContentProvider}
            />
        </>
    );
};

export default Group;