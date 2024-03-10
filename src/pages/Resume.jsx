import React from 'react';
import Button from 'react-bootstrap/Button';
import JSResume from '../../public/sample-resume.pdf';

export default function Resume() {
    return (
        <div align="center">
            <h2>Resume</h2>
            <Button className="btn" href={JSResume} download="jasmine-resume.pdf">Click here to download my resume</Button>
            <hr width="50%"></hr>
            <section>
                <p><em>Skills:</em></p>
                <img src="https://skillicons.dev/icons?i=bootstrap,css,html,jquery,javascript,react,express,mongodb,mysql,nodejs,jest,postman,&perline=6" alt="framwork icons"/>
            </section><br></br>
        </div>
    )
}