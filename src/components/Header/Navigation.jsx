import React from 'react';
import  { NavLink } from 'react-router-dom';
import './Header.css';

export default function Nav(){
    return (
        <div className="nav-sec">
            <NavLink to= "/" className="nav-link">About Me</NavLink>
            <NavLink to= "/Portfolio" className="nav-link">Portfolio</NavLink>
            <NavLink to= "/Contact" className="nav-link">Contact Me</NavLink>
            <NavLink to= "/Resume" className="nav-link">Resume</NavLink>
        </div>
    )
}