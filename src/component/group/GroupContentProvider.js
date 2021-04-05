import React, { useState, useEffect } from 'react';
import ProjectContent from "../project/ProjectContent";
import ProjectInsertion from "../project/ProjectInsertion";
import { getGroup } from "./getGroup";
import GroupContent from "./GroupContent";

const GroupContentProvider = () => {
    const [ group, setGroup ] = useState({
        groups: []
    })

    useEffect(() => {
        getGroup().then(result => {
            setGroup(prev =>
                ({ ...prev, groups: prev.groups.concat(result.data.groups)})
            )
        })
    }, []);

    return (
        <div className="feature-body-body">
            {
                group.groups.map(group =>
                    (<GroupContent key={group.name} name={group.name}/>))
            }
            <ProjectInsertion/>
        </div>
    );
};

export default GroupContentProvider;