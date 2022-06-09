import React from 'react';
import About from './About';
import Banner from './Banner';
import Intro from './Intro';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Intro></Intro>
            <About></About>
        </div>
    );
};

export default Home;