import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const Project = () => {
    return (
        <div>
            <h2 className='my-5 text-center text-4xl'>My Projects</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5 mx-5'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure ><img src={project1} alt="Shoes" className='border-2 border-black-300 rounded-t-md' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">MERK Stack application</h2>
                        <p>It is simple a full stack website which is created by the MERN technolgy.for styling used daisyUI</p>
                        <div className="card-actions">
                            <button className="btn btn-secondary text-white">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure ><img src={project2} alt="Shoes" className='border-2 border-black-300 rounded-t-md' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">MERK Stack application</h2>
                        <p>It is simple a full stack website which is created by the MERN technolgy.for styling used react bootstrap</p>
                        <div className="card-actions">
                            <button className="btn btn-secondary text-white">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure ><img src={project3} alt="Shoes" className='border-2 border-black-300 rounded-t-md' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">React application</h2>
                        <p>It is a simple website which is created by the ReactJS.for styling used React bootstrap and core CSS also.</p>
                        <div className="card-actions">
                            <button className="btn btn-secondary text-white">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;