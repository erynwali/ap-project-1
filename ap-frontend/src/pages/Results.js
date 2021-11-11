import React, { Component } from "react";
import "../App.css";
import {Link} from 'react-router-dom';
import CarouselComp from "../components/carousel";
import ProductCardComp from "../components/product-card";

export default class Results extends Component {

  render() {
    return (
      <div style={{marginBottom: "5%", marginTop: "10%"}}>
          <ProductCardComp name="ammar" src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg" title="Product Title" description="Rs. 1000"/>

       
      </div>
    );
  }
}

 