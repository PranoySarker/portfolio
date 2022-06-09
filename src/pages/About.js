import React from 'react';
import about from '../assets/about.jpg';

const About = () => {
    return (
        <div className='mt-5'>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row gap-x-32">
                    <img src={about} className="max-w-sm rounded-lg " />
                    <div className=' w-60'>
                        <h1 className="text-4xl">About Me</h1>
                        <p className="py-6">Hi! I am Pranoy Sarker. I've been doing web development since last 1 year.I am very passionate to do well in this field</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;