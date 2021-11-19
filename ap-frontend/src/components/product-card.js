import React, { Component } from "react";
import { Card, } from "react-bootstrap";
import "../App.css";


export default class ProductCardComp extends Component {
    

    render() {
      return (
       
        <Card style={{width : "20em"}} >
            <Card.Img variant="top" src={this.props.image01} style = {{width:"15em", marginLeft: "auto", marginRight: "auto" ,marginTop:"10%"}}/>
            <Card.Body style={{height:"80px", marginLeft:"15%"}}>
            <Card.Title class="product-card-title">{this.props.name}</Card.Title>
            <Card.Text class="product-card-text">
                {this.props.price}
            </Card.Text>
            </Card.Body>
        </Card>
      )
    } 
} 