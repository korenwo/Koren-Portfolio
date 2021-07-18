import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faHome } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion'
import { animationOne, transition } from './../animations/index';

function chat(props) {
    
    var Tawk_API="eb457b4f55ccc072b632e0c508a71c2bc2034e2a";
    (function(Tawk_API){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/60f45bf9649e0a0a5ccccc22/1fat8ei89';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();

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
            <Tawk_API/>
        </motion.div>   
    );
}

export default chat;
