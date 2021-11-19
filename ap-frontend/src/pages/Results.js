import React, { Component } from "react";
import "../App.css";
import ProductDisplayComp from "../components/product-display";
import ProductCardGroupComp from "../components/product-card-group";

export default class Results extends Component {
    

    state = {
    //     products: [{
    //         _id: "1",
    //         name: "1BLACK HOODED JACKET",
    //         description: "Sweatshirt jacket with a lined drawstring hood. Zip at front, side pockets, and ribbing at cuffs and hem. Soft, brushed inside.",
    //         category: ["jacket","black",trendy","winter"],
    //         image: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
    //         price: 14.99,
    //         rating: 4.7,
    //         reviews: [],
    //         buyers: [],
    //     },
    //     {
    //         _id: "1",
    //         name: "2BLACK HOODED JACKET",
    //         description: "Sweatshirt jacket with a lined drawstring hood. Zip at front, side pockets, and ribbing at cuffs and hem. Soft, brushed inside.",
    //         category: ["jacket","black","trendy","winter"],
    //         image: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
    //         price: 14.99,
    //         rating: 4.7,
    //         reviews: [],
    //         buyers: [],
    //     },
    //     {
    //         _id: "1",
    //         name: "3BLACK HOODED JACKET",
    //         description: "Sweatshirt jacket with a lined drawstring hood. Zip at front, side pockets, and ribbing at cuffs and hem. Soft, brushed inside.",
    //         category: ["jacket","black","trendy","winter"],
    //         image: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
    //         price: 14.99,
    //         rating: 4.7,
    //         reviews: [],
    //         buyers: [],
    //     },{
    //         _id: "1",
    //         name: "4BLACK HOODED JACKET",
    //         description: "Sweatshirt jacket with a lined drawstring hood. Zip at front, side pockets, and ribbing at cuffs and hem. Soft, brushed inside.",
    //         category: ["jacket","black","trendy","winter"],
    //         image: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
    //         price: 14.99,
    //         rating: 4.7,
    //         reviews: [],
    //         buyers: [],
    //     },
    //     {
    //         _id: "1",
    //         name: "5BLACK HOODED JACKET",
    //         description: "Sweatshirt jacket with a lined drawstring hood. Zip at front, side pockets, and ribbing at cuffs and hem. Soft, brushed inside.",
    //         category: ["jacket","black","trendy","winter"],
    //         image: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
    //         price: 14.99,
    //         rating: 4.7,
    //         reviews: [],
    //         buyers: [],
    //     },
    //     {
    //         _id: "1",
    //         name: "6BLACK HOODED JACKET",
    //         description: "Sweatshirt jacket with a lined drawstring hood. Zip at front, side pockets, and ribbing at cuffs and hem. Soft, brushed inside.",
    //         category: ["jacket","black","trendy","winter"],
    //         image: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
    //         price: 14.99,
    //         rating: 4.7,
    //         reviews: [],
    //         buyers: [],
    //     },{
    //         _id: "1",
    //         name: "7BLACK HOODED JACKET",
    //         description: "Sweatshirt jacket with a lined drawstring hood. Zip at front, side pockets, and ribbing at cuffs and hem. Soft, brushed inside.",
    //         category: ["jacket","black","trendy","winter"],
    //         image: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
    //         price: 14.99,
    //         rating: 4.7,
    //         reviews: [],
    //         buyers: [],
    //     },
    //     {
    //         _id: "1",
    //         name: "8BLACK HOOdDED JACKET",
    //         description: "Sweatshirt jacket with a lined drawstring hood. Zip at front, side pockets, and ribbing at cuffs and hem. Soft, brushed inside.",
    //         category: ["jacket","black","trendy","winter"],
    //         image: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
    //         price: 14.99,
    //         rating: 4.7,
    //         reviews: [],
    //         buyers: [],
    //     },
    //    ]
    products : [{
        _id: "16",
        type: "Hoodie",
        name: "Relaxed Fit Hoodie",
        description: "Hoodie in sweatshirt fabric made from a cotton blend. Relaxed fit with a lined, drawstring hood, long sleeves, kangaroo pocket and ribbing at the cuffs and hem. Soft brushed inside.",
        gender: "Men",
        image01: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
        image02: "model01",
        image03: "model02",
        price: "1499",
        composition: "Shell: Cotton 60%, Polyester 40%Hood lining: Cotton 60%, Polyester 40%"
      },{
        _id: "22",
        type: "Trousers",
        name: "Cotton chinos Regular Fit",
        description: "Chinos in stretch cotton twill with a zip fly and button, diagonal side pockets, a coin pocket and welt back pockets with a button. Regular Fit – a classic fit with good room for movement over the thighs and knees to create a comfortable, straight silhouette.",
        gender: "Men",
        image01: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
        image02: "model01",
        image03: "model02",
        price: "1999",
        composition: "Cotton 98%, Elastane 2%Pocket lining: Cotton 100%"
      },{
        _id: "24",
        type: "Trousers",
        name: "Regular Fit Joggers",
        description: "Joggers in sweatshirt fabric made from a cotton blend. Covered elastication and a drawstring at the waist, pockets in the side seams and ribbed hems. Soft brushed inside.",
        gender: "Men",
        image01: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
        image02: "model01",
        image03: "model02",
        price: "1299",
        composition: "Cotton 70%, Polyester 25%, Viscose 5%"
      },{
        _id: "17",
        type: "Hoodie",
        name: "Relaxed Fit Hoodie",
        description: "Hoodie in soft faux shearling with a kangaroo pocket. Hood with an elastic drawstring, long sleeves with concealed elastication at the cuffs, and an elastic drawstring at the hem.",
        category: "new Arrival",
        gender: "Men",
        image01: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
        image02: "model01",
        image03: "model02",
        price: "1999",
        composition: "Polyester 100%"
      },{
        _id: "04",
        type: "Jacket",
        name: "Quilted grape leather puffer jacket",
        description: "Edition by John Boyega. An uncompromising collection made from more sustainable materials developed together with actor and innovator, John Boyega. This quilted puffer jacket is in Vegea™ imitation leather, a material made from bio-waste produced during the winemaking process. The jacket has a stand-up collar, a zip and wind flap with press-studs down the front, fleece-lined front pockets with a press-stud and an inner pocket. Elasticated ribbing at the cuffs and a concealed elastic drawstring at the hem for an adjustable fit. The sleeves can be unzipped and detached to allow the jacket to be worn as a gilet. Lined.",
        category: "Conscious, Edition by John Boyega, New Arrival",
        gender: "Men",
        image01: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
        image02: "model01",
        image03: "model02",
        price: "22999",
        composition: "Coating: Polyurethane 100%Shell: Polyester 90%, Elastane 10%Lining: Polyester 100%Padding: Polyester 100%"
      },{
        _id: "10",
        type: "Sweatshirt",
        name: "Relaxed Fit Sweatshirt",
        description: "Relaxed-fit top in sweatshirt fabric made from a cotton blend with dropped shoulders and ribbing around the neckline, cuffs and hem. Soft brushed inside.",
        gender: "Men",
        image01: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
        image02: "model01",
        image03: "model02",
        price: "799",
        composition: "Cotton 75%, Polyester 22%, Viscose 3%"
      },{
        _id: "11",
        type: "Sweatshirt",
        name: "THERMOLITE® Relaxed Fit sweatshirt",
        description: "Top in sweatshirt fabric with a soft brushed inside. Relaxed fit with a round, rib-trimmed neckline, dropped shoulders, long sleeves and ribbing at the cuffs and hem. Made using THERMOLITE® technology, this product has been developed to keep you warm with minimum bulk and weight.",
        category: "new Arrival",
        gender: "Men",
        image01: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
        image02: "model01",
        image03: "model02",
        price: "2299",
        composition: "Cotton 60%, Polyester 40%"
      },{
        _id: "23",
        type: "Trousers",
        name: "Twill trousers Slim Fit",
        description: "5-pocket trousers in washed stretch twill with a regular waist and zip fly. Slim fit which is relaxed over the thighs and tapers from the knees down for a relaxed, well-tailored look.",
        gender: "Men",
        image01: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
        image02: "model01",
        image03: "model02",
        price: "1499",
        composition: "Pocket: Cotton 100%Cotton 98%, Elastane 2%"
      },{
        _id: "18",
        type: "Hoodie",
        name: "Hoodie",
        description: "Long-sleeved hoodie in soft sweatshirt fabric with a kangaroo pocket, double-layered drawstring hood with a wrapover front, and ribbing at the cuffs and hem. Soft brushed inside.",
        category: "new Arrival",
        gender: "Men",
        image01: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
        image02: "model01",
        image03: "model02",
        price: "2299",
        composition: "Hood lining: Cotton 57%, Polyester 43%Shell: Cotton 57%, Polyester 43%"
      },{
        _id: "12",
        type: "Sweatshirt",
        name: "Printed sweatshirt",
        description: "Top in sweatshirt fabric made from a cotton blend with a print motif. Round, rib-trimmed neckline, dropped shoulders, long sleeves and ribbing at the cuffs and hem. Soft brushed inside.",
        category: "new Arrival",
        gender: "Men",
        image01: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
        image02: "model01",
        image03: "model02",
        price: "1999",
        composition: "Cotton 59%, Polyester 41%"
      },{
        _id: "06",
        type: "Jacket",
        name: "Lined corduroy jacket",
        description: "Jacket in cotton corduroy with a soft, faux shearling lining. Buttons down the front, a yoke front and back, flap chest pockets with a button, and diagonal welt front pockets. Long sleeves with buttoned cuffs, and an adjustable tab at the sides of the hem.",
        category: "Conscious, New Arrival",
        gender: "Men",
        image01: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
        image02: "model01",
        image03: "model02",
        price: "3999",
        composition: "Padding: Polyester 100%Lining: Polyester 100%Shell: Cotton 100%"
      },{
        _id: "05",
        type: "Jacket",
        name: "Imitation suede biker jacket",
        description: "Jacket in soft imitation suede with a diagonal zip down the front, notch lapels with press-studs and long sleeves with a zip at the cuffs. Diagonal, zipped chest pocket and side pockets, small flap coin pocket with a press-stud and one inner pocket. Lined.",
        category: "Conscious",
        gender: "Men",
        image01: "https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg",
        image02: "model01",
        image03: "model02",
        price: "5999",
        composition: "Shell: Polyester 90%, Elastane 10%Lining: Polyester 100%"
      }]
    }


  render(){
      return(
          <div style={{marginTop:"12%"}}>
              <ProductDisplayComp lst = {this.state.products}/>
              {/* <ProductCardGroupComp lst = {this.state.products.slice(0,3)}/> */}
          </div>
      
      );
  
      
    }
    
    
  
}

 