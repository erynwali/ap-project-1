import React, { Component } from "react";
import { CardGroup, } from "react-bootstrap";
import "../App.css";
import ProductCardComp from "./product-card";


export default class ProductCardGroupComp extends Component {

    looper() {
      const comps = this.props.lst.map((prod) => 
        <ProductCardComp key = {prod._id} name = {prod.name} image01={prod.image01} price={prod.price}/>)

      return comps;
    };

    
    render() {
      return (
       <CardGroup style={{marginLeft:"10%", marginRight:"10%", alignContent:"center"}}>
           
           {this.looper()}
       </CardGroup>
      )
    } 
} 