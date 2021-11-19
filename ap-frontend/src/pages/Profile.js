import React, { Component } from "react";
import "../App.css";
import CarouselComp from "../components/carousel";
import CardComp from "../components/cards";
import CirclesComp from "../components/circles";
import Orders from "../components/orders";
import Addresses from "../components/addresses";


export default class Profile extends Component {

    state = {
        user : {
            name: 'Ammar Sura',
            email: 'ammarsura@gmail.com',
            date: 1637043480486,
            cart: [],
            wishlist: [],
            orders: [
                {
                    _id: "16",
                    type: "Hoodie",
                    name: "Relaxed Fit Hoodie",
                    description: "Hoodie in sweatshirt fabric made from a cotton blend. Relaxed fit with a lined, drawstring hood, long sleeves, kangaroo pocket and ribbing at the cuffs and hem. Soft brushed inside.",
                    gender: "Men",
                    image01: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
                    image02: "model01",
                    image03: "model02",
                    price: "1499",
                    composition: "Shell: Cotton 60%, Polyester 40%Hood lining: Cotton 60%, Polyester 40%",
                    date: 12123213
                  },
                  {
                    _id: "22",
                    type: "Trousers",
                    name: "Cotton chinos Regular Fit",
                    description: "Chinos in stretch cotton twill with a zip fly and button, diagonal side pockets, a coin pocket and welt back pockets with a button. Regular Fit – a classic fit with good room for movement over the thighs and knees to create a comfortable, straight silhouette.",
                    gender: "Men",
                    image01: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
                    image02: "model01",
                    image03: "model02",
                    price: "1999",
                    composition: "Cotton 98%, Elastane 2%Pocket lining: Cotton 100%",
                    date: "12321"
                  }
            ],
            addresses: [
                {
                    name: 'Home',
                    line1: '21, Mooncraft Apts',
                    line2: 'Off Carter Road',
                    pincode: '400050',
                    city: 'Mumbai',
                    state: 'Maharashtra',
                    country: 'India'},
                {
                    name: 'Office',
                    line1: '21, Mooncraft Apts',
                    line2: 'Off Carter Road',
                    pincode: '400050',
                    city: 'Mumbai',
                    state: 'Maharashtra',
                    country: 'India'}
            ],

        },
        isLoaded : false,
    }



  render() {
    return (
      <div style={{marginBottom: "5%", marginTop: "10%", marginLeft: "20%", marginRight: "20%"}}>
          <div>
            <h1>Hi, Ammar!</h1>
            <br/>
          </div>
          
          <Orders orders={this.state.user.orders}/>
          
          <Addresses addresses={this.state.user.addresses}/>
         
         
         
          

       
      </div>
    );
  }
}

 