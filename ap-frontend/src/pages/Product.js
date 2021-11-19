import React, { Component } from "react";
import "../App.css";
import {Link} from 'react-router-dom';
import {Container, Row, Col, Image, Card, Button, DropdownButton, Dropdown, Nav} from "react-bootstrap"

export default class Product extends Component {

  render() {
    return (
      <div> 

      <Container fluid style={{
        marginTop: "10%", 
        marginLeft: "3%" 
      }}> 

      <Row>

          <Col sm={4}>
            <Image src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636692600/Products/Images/11/model01_ata39d.jpg" height="700px"/>
          </Col>
          <Col sm={4}>
            <Image src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636692600/Products/Images/11/main_izlacx.jpg" height="700px"/>
          </Col>

          <Col sm={3}>


            <div style={{
              marginLeft: "7%", 
            }}>
            
            <h1>Brown Printed Sweatshirt</h1>

            <h3> Rs 1799 </h3>

          Top in printed sweatshirt fabric made from a cotton blend. Relaxed fit with dropped shoulders, long sleeves and ribbing around the neckline, cuffs and hem. The polyester content of the sweatshirt is recycled.
          
              <div> 

                <Dropdown style={{
                  marginTop: "5%", 
                  marginBottom: "5%"
                }}>
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

                <div className="d-grid gap-2">
                <Button variant="secondary" size="lg">
                Add to Cart
                </Button>
                </div>

                <h3 style={{
                  marginTop:"15%"
                }}> Reviews </h3>

                

                Review this product


              </div>

            </div>

          </Col>

      </Row>

      </Container>

      </div> 
    );
  }
}
