import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Bar.css';

class Bar extends Component {
    
 render(){

    return (
      <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#services" className="ideSelected">Services</Nav.Link>
            <Nav.Link href="#projects" className="ideSelected">Projects</Nav.Link>
            <Nav.Link href="#skills" className="ideSelected">Technologies</Nav.Link>
            <Nav.Link href="#contact" className="ideSelected">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
 }
}

export default Bar;
