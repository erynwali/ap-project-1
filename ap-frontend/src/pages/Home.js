import React, { Component } from "react";
import "../App.css";
import {Link} from 'react-router-dom';
import CarouselComp from "../components/carousel";
import CardComp from "../components/cards";
import LoginButton from "../components/login-button";
import Profile from "../components/profile";
import { useAuth0 } from '@auth0/auth0-react';


export default class Home extends Component {



  render() {
    return (
      <div style={{marginBottom: "5%"}}>
          
          {/* <CarouselComp/>
          
          <CardComp/> */}

        
          {/* <Profile/> */}

       
      </div>
    );
  }
}

 