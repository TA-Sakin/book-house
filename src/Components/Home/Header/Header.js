import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div className="sticky-top">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Book Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
            </Nav>
            <Nav>
              {user ? (
                <>
                  <Nav.Link as={Link} to="/manageinventory">
                    Manage Books
                  </Nav.Link>
                  <Nav.Link as={Link} to="/addbook">
                    Add Book
                  </Nav.Link>
                  <Nav.Link as={Link} to="/mybooks">
                    My Books
                  </Nav.Link>
                  <Nav.Link onClick={logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
