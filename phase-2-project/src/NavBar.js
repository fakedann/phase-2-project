import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import { NavLink } from "react-router-dom";

function NavBar(){
  return (
    <Navbar bg="myColor" variant="light">
      <Container>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      </Container>
  </Navbar>

  )
}

export default NavBar