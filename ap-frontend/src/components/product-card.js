import React, { Component } from "react";
import { CardGroup, Card,  } from "react-bootstrap";
import "../App.css";


export default class ProductCardComp extends Component {
    

    render() {
      return (
       
        <Card style={{width : "20%"}}>
            <Card.Img variant="top" src={this.props.src} style = {{width:"60%", marginLeft:"20%", marginRight:"20%", marginTop:"10%"}}/>
            <Card.Body style={{height:"80px", marginLeft:"15%"}}>
            <Card.Title class="product-card-title">{this.props.title}</Card.Title>
            <Card.Text class="product-card-text">
                {this.props.description}
            </Card.Text>
            </Card.Body>
        </Card>
      )
    } 
} 