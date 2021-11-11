import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component, Container } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NavbarComp from "./components/navbar";
import FooterComp from "./components/footer"; 
import CarouselComp from './components/carousel';
import TnC from "./pages/T&C";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Results from "./pages/Results";
import { useAuth0 } from "@auth0/auth0-react";
import CardComp from './components/cards';
import ProductCardComp from './components/product-card'

function App() {

  

  

  return (
    <div>
  
      <NavbarComp />   
      
      <Routes> 
      
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about-us" element={<AboutUs/>}/>
      <Route exact path="/contact-us" element={<ContactUs/>}/>
      <Route exact path="/terms-and-conditions" element={<TnC/>}/>
      <Route exact path="/results" element={<Results/>}/>

      </Routes>


      {/* <ProductCardComp/> */}

      <FooterComp />
      </div>
      

      


    
    
  );
}

export default App;
