import React, { useState, useEffect } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState({});

    useEffect(() => {
        fetch('https://pranoysarker.github.io/projectapi/details.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div>
            <h2 className='my-5 text-center text-4xl'>My Projects</h2>
        </div>
    );
};

export default Projects;