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
                Welcome! I am

                
    Web Developer with advanced skills in Front End Development
    
            <div className="onMe">

    <li>Passionate about perfect user experience.</li> 

    <li> Experienced with both server and client web development, with understanding of performance, security and maintainability.</li>

    <li> Self learner of new technologies and software development methodologies.</li>

    <div>Here are a few technologies I've been working with :</div>
            
           
                <li>HTML</li> 
                <li>(S)css</li>
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>RestApi</li>
            </div>
            </div>

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
