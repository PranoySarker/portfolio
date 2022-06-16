import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    const { _id, name, image1 } = project;

    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image1} alt="project" style={{ 'height': '500px', 'width': '300px' }} /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>You can see the details of projects</p>
                    <div class="card-actions ">
                        <Link to={`/details/${_id}`}> <button class="btn btn-secondary text-white">Click Here..</button></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Project;