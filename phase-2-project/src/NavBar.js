import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import {LinkContainer} from 'react-router-bootstrap'
import { NavLink } from "react-router-dom";

function NavBar(){
  return (
    <Navbar bg="myColor" variant="light">
      <Container>
      <Nav className="me-auto">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/book-selection">
          <Nav.Link>Book Selection</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/review-book">
          <Nav.Link>Review a Book</Nav.Link>
        </LinkContainer>
      </Nav>
      </Container>
  </Navbar>

  )
}

export default NavBar