import React, { useState, useEffect } from 'react';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://pranoysarker.github.io/projectapi/details.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className='lg:ml-10'>
            <h2 className='my-10 text-center text-4xl'>My Projects</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3'>
                {
                    projects.map(project => <Project
                        key={project._id}
                        project={project}>
                    </Project>)
                }
            </div>
        </div>
    );
};

export default Projects;