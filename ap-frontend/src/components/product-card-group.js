import React, { Component } from "react";
import { CardGroup, Card,  } from "react-bootstrap";
import { createPortal } from "react-dom";
import "../App.css";
import ProductCardComp from "./product-card";


export default class ProductCardGroupComp extends Component {

    
    render() {
      return (
       <CardGroup style={{marginLeft:"10%", marginRight:"10%", alignContent:"center"}}>
           <ProductCardComp title={this.props.lst[0].name} src={this.props.lst[0].image} description={this.props.lst[0].price}/>
           <ProductCardComp title={this.props.lst[1].name} src={this.props.lst[1].image} description={this.props.lst[1].price}/>
           <ProductCardComp title={this.props.lst[2].name} src={this.props.lst[2].image} description={this.props.lst[2].price}/>
       </CardGroup>
      )
    } 
} 