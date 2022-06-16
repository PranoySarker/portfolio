import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    const { _id, name, image1 } = project;

    return (
        <div className='mt-5 '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image1} alt="project" style={{ 'height': '500px', 'width': '300px' }} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>You can see the details of projects</p>
                    <div className="card-actions ">
                        <Link to={`/details/${_id}`}> <button className="btn btn-secondary text-white">Click Here..</button></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Project;