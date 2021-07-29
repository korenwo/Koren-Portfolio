import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { animationOne, transition } from './../animations/index';

function Projects (props) {

return (
    <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
        <div className="box1">
            <a href="http://vast-tor-85654.herokuapp.com/Login"><div className="callUs1">Mini-Instagram</div></a>
            <a href="https://korentodo.netlify.app/"><div className="callUs1">Todo-List</div></a>
            <a href="https://korencoins.netlify.app/"><div className="callUs1">Coins-App</div></a>
            <a href="https://tetriskoren.herokuapp.com/"><div className="callUs1">Tetris-App</div></a>
            <Link to="/WeatherApp"><div className="callUs1">Weather</div></Link>
            <Link to="/"><div className="callUs1">MyApp</div></Link>
            </div>
           
           
    </motion.div>   
    );
}

export default Projects;
