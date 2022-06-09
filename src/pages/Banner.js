import React from 'react';
import banner from '../assets/banner.jpg';
// import { Parallax } from 'react-parallax';

const Banner = () => {
    return (
        <div className='z-0 relative'>
            <div className='w-full h-screen bg-no-repeat bg-top bg-contain bg-fixed'
                style={{ 'backgroundImage': `url(${banner})`, 'height': '400px', 'width': '1500px' }}>

            </div>
            {/* <div className='h-screen bg-blue-200'></div> */}
        </div>
    );
};

export default Banner;