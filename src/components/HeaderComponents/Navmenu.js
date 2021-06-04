import React from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import Logo from "./Logo"
import Accounts from "./Accounts"

function Navmenu() {

    const fhNameStyle = {
        color: "rgba(255,255,255,.8)",
        fontSize: 20,
        letterSpacing: "0.3em",
        fontWeight: "500"
    }

    return (
        <div>
            <Navbar className="navbar" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand style={fhNameStyle}>
                    <Logo height="60px" />
                    FICTIONHUB
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="item-style" href="#">HOME</Nav.Link>
                        <NavDropdown title="SHOP" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">BEST SELLERS</NavDropdown.Item>
                            <NavDropdown.Item href="#">MEGA SALE</NavDropdown.Item>
                            <NavDropdown.Item href="#">STORE</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="item-style" href="#">CONTACT US</Nav.Link>
                        <Nav.Link className="item-style" href="#">ABOUT US</Nav.Link>
                        <Nav.Link className="item-style" href="#">CUSTOMER CARE</Nav.Link>
                    </Nav>
                    <Accounts />
                </Navbar.Collapse>
            </Navbar>
            <div className="white-bar"></div>
        </div>
    )
}

export default Navmenu
