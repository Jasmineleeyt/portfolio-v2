import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ConnectUs from '../assets/connect-us.png';
import HoldText from '../assets/hold-onto-my-text.png';
import LogoMaker from '../assets/svg-logo-maker.png';
import Kumamo from '../assets/kumamo.png';
import Weather from '../assets/hows-the-weather.png';
import DailyPlanner from '../assets/daily-planner.png';



const Portfolio = () => {
    const projects = [
        {
            title: 'Connect Us',
            keywords: 'Express.js, Javascript, MongoDB, Mongoose',
            description: 'An API for a social network web application.',
            img: ConnectUs,
            github_link: 'https://github.com/Jasmineleeyt/connect-us',
            deployed_demo: 'https://github.com/Jasmineleeyt/connect-us?tab=readme-ov-file#demo',
        },
        {
            title: 'Hold Onto My Text',
            keywords: 'IndexedDB, Workbox, Webpack',
            description: 'A single-page text editing application that meets the PWA criteria.',
            img: HoldText,
            github_link: 'https://github.com/Jasmineleeyt/hold-onto-my-text',
            deployed_demo: 'https://github.com/Jasmineleeyt/hold-onto-my-text?tab=readme-ov-file#usage',
        },
        {
            title: 'SVG Logo Maker',
            keywords: 'Node.js, Inquirer, Jest',
            description: `A command-line application that generates a logo and save it as an SVG file based on user's inputs.`,
            img: LogoMaker,
            github_link: 'https://github.com/Jasmineleeyt/svg-logo-maker',
            deployed_demo: 'https://github.com/Jasmineleeyt/svg-logo-maker?tab=readme-ov-file#demo',
        },
        {
            title: 'Kumamo',
            keywords: 'HTML, CSS, API',
            description: 'A website that will find you recipes using the ingredients you inputted.',
            img: Kumamo,
            github_link: 'https://github.com/Jasmineleeyt/culinary_curation_app',
            deployed_demo: 'https://jasmineleeyt.github.io/culinary_curation_app/',
        },
        {
            title: `How's the Weather`,
            keywords: 'HTML, CSS, API',
            description: 'A weather dashboard that displays current and future weather conditions.',
            img: Weather,
            github_link: 'https://github.com/Jasmineleeyt/hows-the-weather',
            deployed_demo: 'https://jasmineleeyt.github.io/hows-the-weather/',
        },
        {
            title: 'Daily Planner',
            keywords: 'HTML, CSS, API',
            description: 'A daily planner to help organize your schedule.',
            img: DailyPlanner,
            github_link: 'https://github.com/Jasmineleeyt/daily-planner',
            deployed_demo: 'https://jasmineleeyt.github.io/daily-planner/',
        },
    ];
    return(
        <div>
            <h1>Check out some of my work!</h1>
            {projects.map((project, index) =>(
                <div className="" key={index}>
                    <Card style={{ width: '20rem' }} >
                        <Card.Img variant="top" src={project.image} alt={project.title} />
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
                        <Card.Text>{project.keywords}</Card.Text>
                        <Button variant="dark" href={project.github_link} target="_blank" rel="noopener noreferrer">Github Repo</Button>
                        <Button variant="dark" href={project.deployed_demo} target="_blank" rel="noopener noreferrer">Demo/Deployed App</Button>
                    </Card>
                </div>
            ))}
        </div>
    );
     
}

export default Portfolio;