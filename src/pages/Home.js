import React from 'react';
import About from './About';
import Banner from './Banner';
import Intro from './Intro';
import Project from './Project';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Intro></Intro>
            <About></About>
            <Project></Project>
        </div>
    );
};

export default Home;