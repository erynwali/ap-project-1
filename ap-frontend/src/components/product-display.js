import React, { Component } from "react";
import "../App.css";
import ProductCardGroupComp from "../components/product-card-group";


export default class ProductDisplayComp extends Component {
    looper() {
        
        const mainlst = [];
        for (let i = 0; i < this.props.lst.length; i = i + 3) {
            if (this.props.lst.length - i >= 3) {
            const sublst = this.props.lst.slice(i, i + 3);
            mainlst.push(sublst);

            } else {
                const sublst = this.props.lst.slice(i, this.props.lst.length);
                mainlst.push(sublst);
            }
        }

        const comps = mainlst.map( (prod) => 
        <ProductCardGroupComp key = {prod[0]._id} lst = {prod}/>)

        return comps;
    }
    

    render() {
        {console.log(this.props.lst)}
      return (
            
       this.looper()
        
      );
    } 
} 