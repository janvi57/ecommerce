import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/ImgStyle.css';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';

class Header extends Component {

    render() {
        return(
            <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home"> <img src={'Flogo.png'} alt='' width="auto" height="60px"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Profile">Profile</Nav.Link>
                    <Nav.Link href="/AboutUs">About Us</Nav.Link>
                    <Nav.Link href="/Garden">Garden</Nav.Link>
                    <Nav.Link href="/Seasonal">Seasonal</Nav.Link>
                    <Nav.Link href="/Interior">Interior</Nav.Link>
                    </Nav>
                    <Nav>
                    <button className="btn btn-primary">Buy Now</button>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
            </>
        );
    }
}

export default Header;