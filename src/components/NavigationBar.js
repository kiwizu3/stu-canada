import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Delegate</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav.Item> */}
          <Nav.Item>
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown" alignRight>
            <NavDropdown.Item className="text-dark" as={Link} to="/students">Student Area</NavDropdown.Item>
            <NavDropdown.Item className="text-dark" as={Link} to="/teachers">Teachers Area</NavDropdown.Item>
            <NavDropdown.Item className="text-dark" as={Link} to="/lessons">Lessons</NavDropdown.Item>
            <NavDropdown.Item className="text-dark" as={Link} to="/studentList">List of Students</NavDropdown.Item>
            <NavDropdown.Item className="text-dark" as={Link} to="/activeLessons">Active Lessons</NavDropdown.Item>
            <NavDropdown.Item className="text-dark" as={Link} to="/tutorials">Tutorials</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)
