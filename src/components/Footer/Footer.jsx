import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
      <div>
        <a href='https://github.com/Jasmineleeyt' target='_blank' rel='noopener noreferrer'>
            <FaGithub />
        </a>
        <a href='https://ca.linkedin.com/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin />
        </a>
      </div>
    );
  }