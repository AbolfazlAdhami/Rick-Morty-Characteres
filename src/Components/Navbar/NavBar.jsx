import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="warning" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link className="fs-1 text-dark text-start" href="#home">
            Rick and Morty
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
