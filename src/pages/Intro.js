import React from 'react';
import pranoy from '../assets/pranoy.jpg';
import { Link } from 'react-router-dom';
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Intro = () => {

    return (
        <div>
            <div className="avatar flex justify-center lg:-mt-24">
                <div className="w-48 rounded-full">
                    <img src={pranoy} />
                </div>
            </div>
            <div className='text-center'>
                <h2 className='sm:mt-3 lg:mt-10 text-4xl'>Pranoy Sarker</h2>
                <p className='sm:mt-3 lg:mt-4 text-2xl'>Junior Web-Developer</p>
            </div>
            <div className='flex justify-center gap-10 mt-5'>
                <a href="https://github.com/PranoySarker" target='_blank'>
                    <span className='text-4xl'>
                        <FaGithub />
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/pranoy-chandra-sarker-032b62118/" target='_blank'>
                    <span className='text-4xl'>
                        <FaLinkedin />
                    </span>
                </a>
                <Link to='' ><span className='text-4xl'><FaFacebook /></span></Link>
                <Link to=''><span className='text-4xl'><FaInstagram /></span></Link>
            </div>
        </div >
    );
};

export default Intro;