import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faHome } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion'
import { animationOne, transition } from './../animations/index';

function Contact (props) {
    
    return (
        <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
            <div className="box">
                <div className="callUs">
                    <FontAwesomeIcon icon={faPhone} /> 0547944889 <br></br>
                        Email:korenwohl@gmail.com</div>
                    <div className="links">
                    <a href="https://www.linkedin.com/in/koren-wohl-a1933b202/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                        <a href="https://github.com/korenwo/">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <Link to="/">
                    <FontAwesomeIcon icon={faHome} />
                    </Link>
                </div>       
            </div>
        </motion.div>   
    );
}

export default Contact;
