import React, { Component } from "react";
import "../App.css";
import {Link} from 'react-router-dom';
import {Container, Row, Col, Image, Card, Button, DropdownButton, Dropdown, Nav} from "react-bootstrap"

export default class Product extends Component {

  render() {
    return (
      <div> 

        <Container style={{
            marginTop: "10%",
            marginRight: "7%"
        }}>
        <Row>
            <Col xs={3} md={4}>
            <Image src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636692600/Products/Images/11/model01_ata39d.jpg" height="700px"/>
            </Col>
            <Col xs={3} md={4}>
            <Image src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636692600/Products/Images/11/main_izlacx.jpg" height="700px"/>
            </Col>
            <Col xs={3} md={4}>
            <Image src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636692600/Products/Images/11/model02_uzzznq.jpg" height="700px"/>
            </Col>
        </Row> 
        </Container>

        <div style={{
            justifyContent: "right", 
            marginLeft: "7%", 
            marginRight: "68%"
        }}>
        
        <h1 style={{
            marginTop:"10%"
        }}>Brown Sweatshirt</h1>

        <h3> Rs 1799 </h3>

      Top in printed sweatshirt fabric made from a cotton blend. Relaxed fit with dropped shoulders, long sleeves and ribbing around the neckline, cuffs and hem. The polyester content of the sweatshirt is recycled.
       
      <div style={{
        marginTop: "3%", 
        marginBottom: "5%"
      }}> 

      <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="light">
          Select Size
        </Dropdown.Toggle>

        <Dropdown.Menu variant="light">
          <Dropdown.Item href="#/action-1"> XS </Dropdown.Item>
          <Dropdown.Item href="#/action-2"> S </Dropdown.Item>
          <Dropdown.Item href="#/action-3"> M </Dropdown.Item>
          <Dropdown.Item href="#/action-3"> L </Dropdown.Item>
          <Dropdown.Item href="#/action-3"> XL </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <div className="d-grid gap-2" style={{
        marginTop: "3%"
      }}>
      <Button variant="secondary" size="lg">
      Add to Cart
      </Button>
      </div>

      </div>

      </div>

      </div>
    );
  }
}
