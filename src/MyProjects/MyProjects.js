import React from 'react';
import './MyProjects.css';
import { Link } from 'react-router-dom';
import { icons } from 'react-icons';
import { RiHome2Fill, RiInstagramFill } from 'react-icons/ri';
import { FcTodoList } from 'react-icons/fc'

function MyProjects() {
    return(
        <div>
            <h1 className="project">My Projects</h1>
            <div className="toWeb">
                <Link to="/https://optimistic-agnesi-d11461.netlify.app/">
                    <FcTodoList/>
                    <h2>Todo-App</h2>
                </Link>
            </div>
            <div className="toWeb">
                <Link to="/https://vast-tor-85654.herokuapp.com/Login/">
                    <RiInstagramFill/>
                    <h2>Instagram</h2>
                </Link>
            </div>
            <div className="toWeb">
                <Link to="/startPage">
                    <RiHome2Fill />
                    <h2>Home Page</h2>
                </Link>
            </div>       
        </div>
    );
}

export default MyProjects;