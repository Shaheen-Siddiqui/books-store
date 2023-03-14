import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { ListOfBooks } from "../pages/List   OfBooks";
import { Link } from "react-router-dom";


export const NavbarComponent = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                       <Nav.Link href="/book">Listing</Nav.Link> 
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

