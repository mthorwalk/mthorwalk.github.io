import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
// import useState from 'react'

function Navigationbar() {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/project1">Nebraska Environmental Trust - Grant Management</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/project2">Ecommerce Website</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/project3">Spotify Playlist</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Navigationbar;