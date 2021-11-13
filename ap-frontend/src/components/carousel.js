import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "../App.css";

export default class CarouselComp extends Component {
    render() {
      return (
        
    
        <Carousel variant="light" 
        style=
        {{
            backgroundColor: "#fff",
            height: "100%",
            marginLeft: "15%",
            marginTop: "13%", 
            width: "70%",
            
        }}>
        <Carousel.Item>
            <img
            className="d-block w-1"
            src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636479046/street-styled-man-for-himself-mens-fashion-winter-london_yoqxin.jpg"
            alt="First slide"
            width="100%"
            height="600px"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
            <img
            className="d-block w-1"
            src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636479046/muzhchina-stil-ochki-pricheska-fashion-man_mtymkx.jpg"
            alt="Second slide"
            width="100%"
            height="600px"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
            <img
            className="d-block w-1"
            src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636479051/iStock-1061005314_hn8wub.jpg"
            alt="Third slide"
            width="100%"
            height="600px"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
            
      );
    }
  }