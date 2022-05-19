import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import {LinkContainer} from 'react-router-bootstrap'
import { NavLink } from "react-router-dom";

function NavBar(){
  return (
    <div id="navnav">
      <Navbar bg="myColor" variant="light">
      <Container>
      <Nav className="me-auto">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/book-selection">
          <Nav.Link>NYT's Search</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/review-book">
          <Nav.Link>DISCOVER</Nav.Link>
        </LinkContainer>
      </Nav>
      </Container>
  </Navbar>
    </div>
  )
}

export default NavBar