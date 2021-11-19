import React, { Component } from "react"; 
import {Container, Col, Row} from 'react-bootstrap';
import "../App.css"

export default class Order extends Component{
   
    render(){
        return(
            // <div>
                
            //     {/* <ul style={{listStyleType:"none"}}>
            //         <li>{this.props.name}</li>
            //         <li><img src={this.props.image01} width="20%"/></li>
            //         <li>Price: {this.props.price}</li>
            //         <li>Date: {this.props.date}</li>
            //     </ul> */}

            //     <br/>
            // </div>

            <Container fluid>
                <Row style={{marginBottom: "10%"}}>
                    <Col xs={6}>
                        <img src={this.props.image01} width="60%"/>
                    </Col>
                    <Col xs={5}>
                        <Row ><h3>{this.props.name}</h3></Row>
                        {/* <Row>Description: {this.props.description}</Row> */}
                        <Row><p>Price: {this.props.price}</p></Row>
                        <Row><p>Date: {this.props.date}</p></Row>
                
                    </Col>
                </Row>
                
            </Container>
        );  
    }
}