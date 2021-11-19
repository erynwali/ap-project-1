import React, { Component } from "react";
import "../../../App.css";
import {getCategory} from '../../../util/apis';
import ProductDisplayComp from '../../../components/product-display';

export default class MenShirts extends Component {
    

    state = {
        products : [],
        isLoaded : false,
    }

    componentDidMount() {
        fetch('/search/men/shirt')
          .then(res => res.json())
          .then(result => {
            this.setState({
              isLoaded: true,
              products: result
            });
          });
    }
    

    render() {
        if (!this.state.isLoaded) {
          return <div>Loading ... </div>;
        } else {
          return (
            
                <div style={{marginTop: "15%"}}> 
                    <ProductDisplayComp lst = {this.state.products}/>
                </div>
               
          );
        }
    }
}

 