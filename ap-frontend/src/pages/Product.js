import React, { Component } from "react";
import "../App.css";
import {Link} from 'react-router-dom';
import {Container, Row, Col, Image, Card, Button} from "react-bootstrap"

export default class Product extends Component {

  render() {
    return (
      <div> 

        <Container style={{
            marginTop: "8%",
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
            marginLeft: "7%"
        }}>
        
        <h1 style={{
            marginTop:"5%"
        }}>Brown Sweatshirt</h1>

         Heart </div>


       
      </div>
    );
  }
}
