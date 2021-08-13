import React, { useState } from 'react';
import me from './me.jpg';
import './StartPage.css';
import { Link } from 'react-router-dom';
import Typewriter from "typewriter-effect";
import { motion } from 'framer-motion'
import { animationOne, transition } from './../animations/index';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import Modal from "react-modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

Modal.setAppElement("#root");

function StartPage () {

    const [showContact, setShowContact] = useState(false);
    const [showProjects, setShowProjects] = useState(false);

    const Bounce = styled.div`animation : 2s ${keyframes`${bounce}`} infinite`;

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
            <div className="box">
            <Bounce><h1>KOREN WOHL</h1></Bounce>
                <img src={me} className="me" alt="myPhoto" />
                <div className="about">
                    Welcome! I am a
                    Web Developer with advanced skills in Front End Development
        
                    <div className="onMe">

                        <li>Passionate about perfect user experience.</li> 

                        <li> Experienced with both server and client web development, with understanding of performance, security and maintainability.</li>

                        <li> Self learner of new technologies and software development methodologies.</li>

                        <div className="here">Here are a few technologies I've been working with :</div>
                    
                        <Typewriter
    onInit={(typewriter) => {
        typewriter.typeString("HTML, ").pauseFor(2000).start()
        typewriter.typeString("S(CSS), ").pauseFor(2000).start()
        typewriter.typeString("JavaScript (ES6+), ").pauseFor(2000).start()
        typewriter.typeString("React, ").pauseFor(2000).start()
        typewriter.typeString("Node.js, ").pauseFor(1500).start()
        typewriter.typeString("MongoDB ").pauseFor(1500).start()
        typewriter.typeString("And more...").pauseFor(1500).start()
    
    }}

    />            
                <button className="button" onClick={() => setShowContact(true)}>Contact</button>
                <Modal 
                    isOpen={showContact}
                    onRequestClose={() => setShowContact(false)}
                    contentLabel="Contact"
                >
                    <div className="about">
                        <FontAwesomeIcon icon={faPhone} /> 0547944889 <br></br>
                        <FontAwesomeIcon icon={faMailBulk} /> korenwohl@gmail.com</div>
                    <div className="about">
                        <a href="https://www.linkedin.com/in/koren-wohl-a1933b202/">
                        <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/korenwo/">
                        <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>       
                </Modal>
                <Modal
                    isOpen={showProjects}
                    onRequestClose={() => setShowProjects(false)}
                    contentLabel="Projects"
                >
                <div className="box1">
                    <a href="http://vast-tor-85654.herokuapp.com/Login"><div className="callUs1">Mini-Instagram</div></a>
                    <a href="https://korentodo.netlify.app/"><div className="callUs1">Todo-List</div></a>
                    <a href="https://korencoins.netlify.app/"><div className="callUs1">Coins-App</div></a>
                    <a href="https://tetriskoren.herokuapp.com/"><div className="callUs1">Tetris-App</div></a>
                    <Link to="/WeatherApp"><div className="callUs1">Weather</div></Link>
                    <Link to="/"><div className="callUs1">MyApp</div></Link>
                    </div>
                </Modal>
                <button className="button" onClick={() => setShowProjects(true)}>My-Projects</button>
            </div>
        </div>           
    </div>
</motion.div>
    );
}

export default StartPage;

