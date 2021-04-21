import React from 'react';
import me from './me.jpg';
import './StartPage.css';
import { Link } from 'react-router-dom';
import Typewriter from "typewriter-effect";

function StartPage () {
    return (
        <div>
            <h1 className="name">KOREN WOHL</h1>
            <img src={me} className="me" alt="myPhoto" />
            <div className="about">
                Welcome! I am 
                Web Developer with advanced skills in Front End Development
    
                <div className="onMe">

                    <li>Passionate about perfect user experience.</li> 

                    <li> Experienced with both server and client web development, with understanding of performance, security and maintainability.</li>

                    <li> Self learner of new technologies and software development methodologies.</li>

                    <div className="here">Here are a few technologies I've been working with :</div>
                
                    <Typewriter
onInit={(typewriter) => {
    typewriter.typeString("HTML,").pauseFor(2000).start()
    typewriter.typeString("S(CSS),").pauseFor(2000).start()
    typewriter.typeString("JavaScript (ES6+),").pauseFor(2000).start()
    typewriter.typeString("React,").pauseFor(2000).start()
    typewriter.typeString("Node.js,").pauseFor(1500).start()
    typewriter.typeString("MongoDB ").pauseFor(1500).start()
    typewriter.typeString("And more...").pauseFor(1500).start()
   
}}

/>
                    <Link to="/MyProjects">
                        <button className="button">My-Projects</button>
                    </Link>
                    <Link to="/Contact">
                    <button className="button">Contact</button>
                    </Link>
                </div>
            </div>           
        </div>
    );
}

export default StartPage;

