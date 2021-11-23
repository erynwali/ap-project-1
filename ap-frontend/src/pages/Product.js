import React, { Component } from "react";
import "../App.css";
import {Link} from 'react-router-dom';
import {Container, Row, Col, Image, Button, DropdownButton, Dropdown, List, ListGroup} from "react-bootstrap"
import Reviews from "../components/reviews";

export default class Product extends Component {

    state = {
        reviews : [

            {name: 'Eryn', 
            reviewline: 'Good product!'}
    ], 
        isLoaded : false
    }

  render() {
    return (
      <div> 

      <Container fluid style={{
        marginTop: "14%", 
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
                    <Dropdown.Item href="#/xs"> XS </Dropdown.Item>
                    <Dropdown.Item href="#/s"> S </Dropdown.Item>
                    <Dropdown.Item href="#/m"> M </Dropdown.Item>
                    <Dropdown.Item href="#/l"> L </Dropdown.Item>
                    <Dropdown.Item href="#/xl"> XL </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <div className="d-grid gap-2">
                <Button variant="secondary" size="lg">
                Add to Cart
                </Button>
                </div>

                <h3 style={{
                  marginTop:"12%"
                }}> Reviews </h3>

                <div>
                  <Reviews reviews={this.state.reviews}/>
                </div>


                <form>
                <div class="form-group" style={{
                    marginTop: "5%"
                }}>
                <label for="exampleFormControlTextarea1">Review this product:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                </form>


              </div>

            </div>

          </Col>

      </Row>

      </Container>

      </div> 
    );
  }
}
