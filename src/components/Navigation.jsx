import React from 'react';
import  { NavLink } from 'react-router-dom';

export default function Nav(){
    return (
        <div>
            <NavLink to= "/">About Me</NavLink>
            <NavLink to= "/Portfolio">Portfolio</NavLink>
            <NavLink to= "/Contact">Contact Me</NavLink>
            <NavLink to= "/Resume">Resume</NavLink>
        </div>
    )
}