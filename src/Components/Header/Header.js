import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase'

const Header = () => {
  const {user , logOut} = useFirebase();
    return (
        <div>
              <Navbar sticky="top" className="header" expand="lg">
                <Container>
                 <Navbar.Brand  className="text-white fw-bolder" to="/home">
                        Evertime Watch
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto ">
                        <Nav.Link as={NavLink} to="/home" className="text-white">Home</Nav.Link>
                        <Nav.Link as ={NavLink} to="/review" className="text-white">Review</Nav.Link>
                        <Nav.Link as={NavLink} to="/products" className="text-white">Explore</Nav.Link>
                        <Nav.Link as={NavLink} to="/about" className="text-white">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/privacy" className="text-white">Privacy Policy</Nav.Link>
                {!user?.email ?  (
                    <>
                      <Nav.Link as={NavLink} to="/register" className="text-white">
                        Register
                      </Nav.Link>

                      <Nav.Link className="text-white" as={NavLink} to="/login">
                        Log in
                      </Nav.Link>
                    </>
                    ) : (
                      <>
                        <Nav.Link as={NavLink} to="/dashboard" className="text-white">Dashboard</Nav.Link>
                    <NavDropdown
                      title={
                        <img
                          style={{
                            width: "45px",
                            borderRadius: "50%",
                          }}
                          src={user?.photoURL}
                          alt=""
                        />
                      }
                    >
                      <div className="text-center">
                        <h6>{user?.displayName}</h6>
                        <p className="m-0 mb-2">{user?.email}</p>
                        <button onClick={logOut} className="btn btn-primary px-5 mx-1">
                          Log Out
                        </button>
                      </div>
                    </NavDropdown>
                    </>
                  )}
          </Nav>
        </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;