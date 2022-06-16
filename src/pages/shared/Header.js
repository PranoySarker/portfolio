import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='relative'>
            <div className="navbar bg-secondary bg-opacity-80 text-white shadow-2xl z-10 fixed top-0 left-0 right-0">
                <div className="flex-1">
                    <ul className="menu menu-horizontal p-0">
                        <li className='font-bold uppercase'><Link to='/'>Home</Link></li>
                        <li className='font-bold uppercase ' id='projects'><Link to=''>projects</Link></li>
                    </ul>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><button className='btn btn-primary'><a href="https://drive.google.com/file/d/1ekbTRcRraT8nCuTiTQALD0wpRESDCzzI/view?usp=sharing" target='_blank'>Download Resume</a></button></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;