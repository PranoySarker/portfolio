import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Intro from './Intro';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Intro></Intro>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;