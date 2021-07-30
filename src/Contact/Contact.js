import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faHome } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion'
import { animationOne, transition } from './../animations/index';

function Contact() {

    var Tawk_API="218fed3648cd822d08c2335e9ac9be415cce1ddf"||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/60f5660a649e0a0a5ccce9d0/1fav9d68r';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();

    return (
        <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
            <div className="box1">
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
