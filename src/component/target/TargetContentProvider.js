import React, { useState, useEffect } from 'react';
import { getTarget } from "./getTarget";
import "../common/Common.css"
import TargetContent from "./TargetContent";
import TargetInsertion from "./TargetInsertion";

const TargetContentProvider = () => {
    const [ target, setTarget ] = useState({
        targets: []
    })

    useEffect(() => {
        getTarget().then(result => {
            setTarget(prev =>
                ({ ...prev, targets: prev.targets.concat(result.data.targets)})
            )
        })
    })

    return (
        <div className="feature-body-body">
            {
                target.targets.map((target) =>
                    (<TargetContent key={target.token} token={target.token} nickname={target.nickname} name={target.name}/>))
            }
            <TargetInsertion/>
        </div>
    );
};

export default TargetContentProvider;