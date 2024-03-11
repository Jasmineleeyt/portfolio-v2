import React from 'react';
import  { NavLink } from 'react-router-dom';
import './Header.css';

export default function Nav(){
    return (
        <div className="nav-sec">
            <NavLink to= "/" className="nav-link" activeClassName="active">About Me</NavLink>
            <NavLink to= "/Portfolio" className="nav-link" activeClassName="active">Portfolio</NavLink>
            <NavLink to= "/Contact" className="nav-link" activeClassName="active">Contact Me</NavLink>
            <NavLink to= "/Resume" className="nav-link" activeClassName="active">Resume</NavLink>
        </div>
    )
}