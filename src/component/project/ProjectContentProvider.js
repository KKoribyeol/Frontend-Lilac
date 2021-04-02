import React, { useState, useEffect } from 'react';
import "./Project.css"
import "../common/Common.css"
import { getProject } from "./getProject";
import ProjectContent from "./ProjectContent";
import ProjectInsertion from "./ProjectInsertion";

const ProjectContentProvider = () => {
    const [ project, setProject ] = useState({
        projects: []
    })

    useEffect(() => {
        getProject().then(result => {
            setProject(prev =>
                ({ ...prev, projects: prev.projects.concat(result.data.projects)})
            )
        })
    }, []);

    return (
        <div className="feature-body-body">
            {
                project.projects.map((project) =>
                    (<ProjectContent key={project.code} code={project.code} name={project.name} description={project.description}/>))
            }
            <ProjectInsertion/>
        </div>
    );
};

export default ProjectContentProvider;