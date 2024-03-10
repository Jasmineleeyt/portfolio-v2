import React from 'react';
import Navigation from './Navigation';
import './Header.css';
import { Container, Row, Col } from 'react-bootstrap';

  export default function Header() {
    return (
      <header>
        <Container fluid>
          <Row>
            <Col>
              <h1>Jasmine Lee</h1>
            </Col>
            <Col className="d-flex justify-content-end" >
              <Navigation />
            </Col>
          </Row>
        </Container>
      </header>
    );
  }