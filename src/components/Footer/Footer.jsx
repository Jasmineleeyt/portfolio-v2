import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
    return (
      <footer>
        <a href='https://github.com/Jasmineleeyt' target='_blank' rel='noopener noreferrer'>
            <FaGithub />
        </a>
        <a href='https://ca.linkedin.com/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin />
        </a>
      </footer>
    );
  }