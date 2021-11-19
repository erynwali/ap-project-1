import React, { Component } from "react";
import "../../../App.css";
// import {getGender} from '../../../util/apis';
import ProductDisplayComp from '../../../components/product-display';



export default class MenTrousers extends Component {
    

    state = {
        products : [],
        isLoaded : false,
    }

    componentDidMount() {
        fetch('/search/men/trousers')
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

 