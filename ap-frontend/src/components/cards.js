import React, { Component } from "react";
import { CardGroup, Card,  } from "react-bootstrap";
import "../App.css";


export default class CardComp extends Component {
    render() {
      return (
        <div>
        <CardGroup>
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
            <Card.Title>Women</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
            <Card.Title>Men</Card.Title>
            <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
            </Card.Text>
            </Card.Body>
        </Card>
        </CardGroup>
        </div>

      )
    } 
} 