import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

class navComponent extends React.Component {
    render(){
    return(
    <Navbar expand="lg" sticky="top" bg = "white">
        <Navbar.Brand href="#home" className = "navheader">HENRY NGUYEN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#hobbies">Hobbies</Nav.Link>
                <Nav.Link href="#contacts">Contacts</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
    }
  }

  export default navComponent;