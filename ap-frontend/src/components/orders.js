import React, { Component } from "react"; 
import "../App.css"
import Order from "./order";

export default class Orders extends Component{
    
    looper() {

        const orders = this.props.orders.map( (order) => 
        <Order key = {order._id} name = {order.name} description = {order.description} price = {order.price} image01 = {order.image01} date = {order.date} />)

        return orders;
    }

    render(){
        return(
            <div style={{marginRight: "30%"}}>
                <h2>Your Orders</h2>
                <br/>
                {this.looper()}
            </div>
        );  
    }
}