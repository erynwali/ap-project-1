import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import { InputGroup, FormControl } from "react-bootstrap";
import "../App.css";
import { useAuth0 } from "@auth0/auth0-react";

// const LoginButton = function() {
//   const { loginWithRedirect } = useAuth0();
//   return (
//     // <button onClick={() => loginWithRedirect()}>Login</button>
//   )}

export default class NavbarComp extends Component {

    
  render() {

    // <div style = {{marginTop: "10%"}}>
    //   {LoginButton()}
      
    //   </div>
    return ( 
       
        <Navbar id="main-navbar" fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
          <Navbar.Brand href="/"><img src = "https://res.cloudinary.com/dejzdjexf/image/upload/v1636476022/esa_logo_transparent_fp2tti.png" height = "60px" alt="ESA"/></Navbar.Brand>
          <div>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Men" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Tops</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Bottoms</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">View All</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Women" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Tops</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Bottoms</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">View All</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav style =
            {{ paddingTop: "17px", 
              paddingRight: "20px"
            }}
            >
              <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm"><img src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636482159/search_wcbj6u.png" height="20px"/></InputGroup.Text>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </InputGroup>
            </Nav>
            <Nav>
              <Nav.Link href="#favourites"><img src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636477321/love_sdy3fm.png" height = "25px"/></Nav.Link>
              <Nav.Link href="#sign-in"> <img src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636476214/user_pjvppm.png" height="25px"/>
              </Nav.Link>
              <Nav.Link href="#cart"> <img src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636475050/shopping-bag_rtxh3c.png" height = "25px"/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar> 
    );
  }
}
