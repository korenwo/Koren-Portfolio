import React from 'react';
import me from './me.jpg';
import './StartPage.css';
import { Link } from 'react-router-dom';

function StartPage () {
    return (
        <div>
            <h1 className="name">KOREN WOHL</h1>
            <img src={me} className="me" alt="myPhoto" />
            <div className="about">
                Welcome!

                I'm Full Stack Developer,
            
                Here are a few technologies I've been working with :
            </div>
            <ul>
                <li>HTML</li> 
                <li>(S)css</li>
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>RestApi</li>
            </ul>
            <Link to="/MyProjects">
                <button className="projects">My-Projects</button>
            </Link>
            <Link to="/Contact">
                <button className="contact">Contact</button>
            </Link>
        </div>
    );
}

export default StartPage;
