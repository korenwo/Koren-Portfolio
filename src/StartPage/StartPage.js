import React, { useState } from 'react';
import me from './me.jpg';
import './StartPage.css';
import { Link } from 'react-router-dom';
import Typewriter from "typewriter-effect";
import { motion } from 'framer-motion'
import { animationOne, transition } from './../animations/index';
import Modal from "react-modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import emailjs from "emailjs-com";
emailjs.init("user_ThOwBkK3t8JYIcP4hrJ8B");

Modal.setAppElement("#root");

function StartPage () {

    const [showProjects, setShowProjects] = useState(false);

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_r8ucyii', 'template_ru3byga', e.target, 'user_ThOwBkK3t8JYIcP4hrJ8B')
          .then((result) => {
              e.target.reset();
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }

    return (
        <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
            <div className="box">
                <h1><Typewriter onInit ={(typewriter) => {
                    typewriter.typeString("Koren Wohl").pauseFor(1000).start()
                        }}
                    />
                </h1>
                <img src={me} className="me" alt="myPhoto" />
                <div className="about">
                    Welcome! I am a
                    Web Developer with advanced skills in Front End Development
                    
                    <div className="onMe">

                        <nav>-Passionate about perfect user experience.</nav> 

                        <nav>-Experienced with both server and client web development, with understanding of performance, security and maintainability.</nav>

                        <nav>-Self learner of new technologies and software development methodologies.</nav>

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
                    <Modal
                        isOpen={showProjects}
                        onRequestClose={() => setShowProjects(false)}
                        contentLabel="Projects"
                        >
                        <div className="box1">
                            <a href="http://vast-tor-85654.herokuapp.com/Login"><div className="callUs1">Instagram <nav>built with React, node.js, restApi, mongodb</nav><a href="https://github.com/korenwo/instagram-ui">
                                <FontAwesomeIcon className="icon" icon={faGithub} />
                            </a></div></a>
                            <a href="https://korentodo.netlify.app/"><div className="callUs1">TodoList <nav>built with react, Styled by styled component</nav><a href="https://github.com/korenwo/todo-app">
                                <FontAwesomeIcon className="icon" icon={faGithub} />
                            </a></div></a>
                            <a href="https://korencoins.netlify.app/"><div className="callUs1">Coins-App <nav>built with React</nav><a href="https://github.com/korenwo/Coin-App">
                                <FontAwesomeIcon className="icon" icon={faGithub} />
                            </a></div></a>
                            <a href="https://tetriskoren.herokuapp.com/"><div className="callUs1">Tetris <nav>built with React</nav><a href="https://github.com/korenwo/React-Tetris">
                                <FontAwesomeIcon className="icon" icon={faGithub} />
                            </a></div></a>
                            <a href="https://korenstore.herokuapp.com/"><div className="callUs1">Commerce <nav>built with React, node.js, restApi, mongodb</nav><a href="https://github.com/korenwo/store-api">
                                <FontAwesomeIcon className="icon" icon={faGithub} />
                            </a></div></a>
                            <Link to="/WeatherApp"><div className="callUs1">Weather <nav>built with React, using weatherApi</nav><a href="https://github.com/korenwo/Koren-Portfolio/tree/main/src/Weather">
                                <FontAwesomeIcon className="icon" icon={faGithub} />
                            </a></div></Link>
                            <a href="https://ninja.com.im/"><div className="callUs1">Shop<nav>built with Shopify</nav></div></a> 
                        </div>
                    </Modal>
                    <button className="button" onClick={() => setShowProjects(true)}>My-Projects</button>
                    <form className="contact-form" onSubmit={sendEmail}>
                        <div>
                            <input type="text" name="contact_number" />
                            <label>Name</label>
                        </div>
                        <div>
                            <input type="text" name="user_name" />
                            <label>Email</label>
                        </div>
                        <nav>Write me message</nav>
                        <div>
                            <textarea name="message" className="message" />
                            <input type="submit" value="Send" className="send" />
                        </div>
                    </form>
                    <a href="https://www.linkedin.com/in/koren-wohl-a1933b202/">
                        <FontAwesomeIcon className="icon" icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/korenwo/">
                        <FontAwesomeIcon className="icon" icon={faGithub} />
                    </a>
                    <a href="https://wa.me/972547944889">
                        <FontAwesomeIcon className="icon" icon={faWhatsapp} />
                    </a>
                </div>
            </div>           
        </div>
</motion.div>
    );
}

export default StartPage;

