import React from 'react';
import './MyProjects.css';
import { Link } from 'react-router-dom';
import { RiHome2Fill, RiInstagramFill } from 'react-icons/ri';
import { FcTodoList } from 'react-icons/fc'

function MyProjects (props) {
    return(
        <div>
            <h1 className="project">My Projects</h1>
            <div className="toWeb">
                <a href="https://korentodo.netlify.app/">
                    <FcTodoList/>
                    <h2>Todo-App</h2>
                </a>
            </div>
            <div className="toWeb">
                <a href="https://vast-tor-85654.herokuapp.com/Login/">
                    <RiInstagramFill/>
                    <h2>Instagram</h2>
                </a>
            </div>
            <div className="toWeb">
                <Link to="/">
                    <RiHome2Fill />
                    <h2>Home Page</h2>
                </Link>
            </div>       
        </div>
    );
}

export default MyProjects;