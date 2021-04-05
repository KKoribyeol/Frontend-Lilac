import React, { useState, useEffect } from 'react';
import { getGroup } from "./getGroup";
import GroupContent from "./GroupContent";
import GroupInsertion from "./GroupInsertion";

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
            <GroupInsertion/>
        </div>
    );
};

export default GroupContentProvider;