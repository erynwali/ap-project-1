import React, { Component } from "react";
import { CardGroup, Card,  } from "react-bootstrap";
import "../App.css";


export default class ProductCardComp extends Component {
    render() {
      return (
       
        // <h1>Hi</h1>
        <Card style={{width : "20%"}}>
            <Card.Img variant="top" src={this.props.src} />
            <Card.Body style={{height:"80px"}}>
            <Card.Title class="product-card-title">{this.props.title}</Card.Title>
            <Card.Text class="product-card-text">
                {this.props.description}
            </Card.Text>
            </Card.Body>
        </Card>
      )
    } 
} 