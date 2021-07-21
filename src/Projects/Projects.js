import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { animationOne, transition } from './../animations/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Projects (props) {

return (
    <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
        <div className="box">
            <h1 className="callUs">My-Projects</h1>
            <a href="http://vast-tor-85654.herokuapp.com/Login"><li className="callUs">Mini-Instagram</li></a>
            <a href="https://korentodo.netlify.app/"><li className="callUs">Todo-List</li></a>
            <div className="links">
                <Link to="/WeatherApp"><li className="callUs">Weather</li>
                </Link>
                <div className="links">
                <Link to="/NewsList"><li className="callUs">News 24/7</li>
                </Link>
            </div>
            </div>
            <div className="links">
                <Link to="/"><li className="callUs">Home Page</li>
                    <FontAwesomeIcon icon={faHome} />
                </Link>
                </div>       
            </div>
    </motion.div>   
    );
}

export default Projects;
