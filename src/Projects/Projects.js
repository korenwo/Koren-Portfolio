import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { animationOne, transition } from './../animations/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';

function Projects (props) {

return (
    <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
        <div className="box">
            <h1 className="callUs">My-Projects</h1>
            <a href="http://vast-tor-85654.herokuapp.com/Login"><li className="callUs">Mini-Instagram</li></a>
            <div className="links">
                <Link to="/NewsList"><li className="callUs">News 24/7</li>
                    <FontAwesomeIcon icon={faNewspaper} />
                </Link>
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
