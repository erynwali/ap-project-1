import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import { InputGroup, FormControl } from "react-bootstrap";
import "../App.css";
import LoginButton from "./login-button";
import SearchBar from "./search";


export default class NavbarComp extends Component {

    
  render() {

    
    return ( 
       
        <Navbar id="main-navbar" fixed="top" collapseOnSelect expand="lg" bg="myRed" variant="light">
          <Container>
          <Navbar.Brand href="/" style={{marginTop:"1%", marginBottom:"1%"}}><img src ="https://res.cloudinary.com/dejzdjexf/image/upload/v1636476022/esa_logo_transparent_fp2tti.png" height = "60px" alt="ESA"/></Navbar.Brand>
          <div>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Men" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/men/tshirts">Tshirts</NavDropdown.Item>
                <NavDropdown.Item href="/men/jeans">Jeans</NavDropdown.Item>
                <NavDropdown.Item href="/men/trousers">Trousers</NavDropdown.Item>
                <NavDropdown.Item href="/women/shirts">Shirts</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/men">View All</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Women" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/women/tshirts">Tshirts</NavDropdown.Item>
                <NavDropdown.Item href="/women/jeans">Jeans</NavDropdown.Item>
                <NavDropdown.Item href="/women/trousers">Trousers</NavDropdown.Item>
                <NavDropdown.Item href="/women/shirts">Shirts</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/women">View All</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav style =
            {{ paddingTop: "17px", 
              marginRight: "5%"
            }}
            >
              {/* <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm"><img src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636482159/search_wcbj6u.png" height="20px"/></InputGroup.Text>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </InputGroup> */}
              <SearchBar/>
            </Nav>
            <Nav style={{marginRight:"10%"}}>
              <Nav.Item style={{marginLeft:"5%", marginRight:"10%"}}> 
                <LoginButton/> 
              </Nav.Item>
              <Nav.Item style={{marginRight:"5%"}}>Favorites</Nav.Item>
              <Nav.Item style={{marginLeft: "5%", marginRight:"5%"}}> Cart
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar> 
    );
  }
}
