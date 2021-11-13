import React, { Component } from "react";
import "../App.css";
import {Link} from 'react-router-dom';
import CarouselComp from "../components/carousel";
import ProductCardComp from "../components/product-card";
import ProductCardGroupComp from "../components/product-card-group";

export default class Results extends Component {
    
    // lster() {
    //     return [1, 2, 3];
    // }

    state = {
        products: [{
            _id: "1",
            name: "1BLACK HOODED JACKET",
            description: "Sweatshirt jacket with a lined drawstring hood. Zip at front, side pockets, and ribbing at cuffs and hem. Soft, brushed inside.",
            category: ["jacket","black","trendy","winter"],
            image: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
            price: 14.99,
            rating: 4.7,
            reviews: [],
            buyers: [],
        },
        {
            _id: "1",
            name: "2BLACK HOODED JACKET",
            description: "Sweatshirt jacket with a lined drawstring hood. Zip at front, side pockets, and ribbing at cuffs and hem. Soft, brushed inside.",
            category: ["jacket","black","trendy","winter"],
            image: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
            price: 14.99,
            rating: 4.7,
            reviews: [],
            buyers: [],
        },
        {
            _id: "1",
            name: "3BLACK HOODED JACKET",
            description: "Sweatshirt jacket with a lined drawstring hood. Zip at front, side pockets, and ribbing at cuffs and hem. Soft, brushed inside.",
            category: ["jacket","black","trendy","winter"],
            image: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
            price: 14.99,
            rating: 4.7,
            reviews: [],
            buyers: [],
        },{
            _id: "1",
            name: "4BLACK HOODED JACKET",
            description: "Sweatshirt jacket with a lined drawstring hood. Zip at front, side pockets, and ribbing at cuffs and hem. Soft, brushed inside.",
            category: ["jacket","black","trendy","winter"],
            image: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
            price: 14.99,
            rating: 4.7,
            reviews: [],
            buyers: [],
        },
        {
            _id: "1",
            name: "5BLACK HOODED JACKET",
            description: "Sweatshirt jacket with a lined drawstring hood. Zip at front, side pockets, and ribbing at cuffs and hem. Soft, brushed inside.",
            category: ["jacket","black","trendy","winter"],
            image: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
            price: 14.99,
            rating: 4.7,
            reviews: [],
            buyers: [],
        },
        {
            _id: "1",
            name: "6BLACK HOODED JACKET",
            description: "Sweatshirt jacket with a lined drawstring hood. Zip at front, side pockets, and ribbing at cuffs and hem. Soft, brushed inside.",
            category: ["jacket","black","trendy","winter"],
            image: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
            price: 14.99,
            rating: 4.7,
            reviews: [],
            buyers: [],
        },{
            _id: "1",
            name: "7BLACK HOODED JACKET",
            description: "Sweatshirt jacket with a lined drawstring hood. Zip at front, side pockets, and ribbing at cuffs and hem. Soft, brushed inside.",
            category: ["jacket","black","trendy","winter"],
            image: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
            price: 14.99,
            rating: 4.7,
            reviews: [],
            buyers: [],
        },
        {
            _id: "1",
            name: "8BLACK HOOdDED JACKET",
            description: "Sweatshirt jacket with a lined drawstring hood. Zip at front, side pockets, and ribbing at cuffs and hem. Soft, brushed inside.",
            category: ["jacket","black","trendy","winter"],
            image: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
            price: 14.99,
            rating: 4.7,
            reviews: [],
            buyers: [],
        },
        {
            _id: "1",
            name: "9BLACK asdasdsaasdasd JACKET",
            description: "Sweatshirt jacket with a lined drawstring hood. Zip at front, side pockets, and ribbing at cuffs and hem. Soft, brushed inside.",
            category: ["jacket","black","trendy","winter"],
            image: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
            price: 14.99,
            rating: 4.7,
            reviews: [],
            buyers: [],
        }]
    }


    
   
    

  render() {

    
    return (

       
        
      <div style={{marginBottom: "5%", marginTop: "10%"}}>
          {this.looper()}
          
       
       
      </div>
    );
  }
}

 