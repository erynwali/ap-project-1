import React, { Component } from "react";
import { CardGroup, Card,  } from "react-bootstrap";
import "../App.css";


export default class CardComp extends Component {
    render() {
      return (
        <div>
        <CardGroup style={{
            paddingTop: "7%", 
            paddingLeft: "10%", 
            paddingRight: "10%", 
            borderRadius: "200px"

        }}>
        <Card>
            <Card.Img variant="top" src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg" />
            <Card.Body>
            <Card.Title>Men</Card.Title>
            <Card.Text>
                Shop Men Here
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636493177/cards.js/model01_rzkjqc.jpg" />
            <Card.Body>
            <Card.Title>Women</Card.Title>
            <Card.Text>
                Shop Women Here{' '}
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636493434/cards.js/model01_svdnwt.jpg" />
            <Card.Body>
            <Card.Title>Sale</Card.Title>
            <Card.Text>
                Shop Sale Here
            </Card.Text>
            </Card.Body>
        </Card>
        </CardGroup>
        </div>

      )
    } 
} 