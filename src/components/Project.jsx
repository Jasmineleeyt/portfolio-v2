import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Project = (project) => {
  return (
    <div>
      <div className="card-sec" key={project.index}>
        <Card style={{ width: "20rem", height: "100%" }} className="card-proj">
          <Card.Img variant="top" src={project.img} alt={project.title} />
          <Card.Body className="d-flex flex-column justify-content-end">
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <Card.Text>{project.keywords}</Card.Text>
            <div className="btn-container">
              <Button
                className="btn"
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Repo
              </Button>
              <Button
                className="btn"
                href={project.deployed_demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo/Deployed App
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Project;