import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-secondary bg-opacity-50 text-white shadow-2xl z-10 absolute">
                <div className="flex-1">
                    <ul className="menu menu-horizontal p-0">
                        <li className='font-bold uppercase'><Link to='/'>Home</Link></li>
                        <li className='font-bold uppercase'><Link to='/projects'>projects</Link></li>
                    </ul>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><button className='btn btn-primary'>Download Resume</button></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;