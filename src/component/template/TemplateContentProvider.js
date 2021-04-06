import React, { useState, useEffect } from 'react';
import { getTemplate } from "./getTemplate";
import TemplateContent from "./TemplateContent";
import TemplateInsertion from "./TemplateInsertion";

const TemplateContentProvider = () => {
    const [ template, setTemplate ] = useState({
        templates: [],
    })

    useEffect(() => {
        getTemplate().then(result => {
            setTemplate(prev =>
                ({ ...prev, templates: prev.templates.concat(result.data.templates)})
            )
        })
    }, []);

    console.log(template)
    return (
        <div className="feature-body-body">
            {
                template.templates.map(template =>
                    (<TemplateContent key={template.id} id={template.id} title={template.title} body={template.body}/>))
            }
            <TemplateInsertion/>
        </div>
    );
};

export default TemplateContentProvider;