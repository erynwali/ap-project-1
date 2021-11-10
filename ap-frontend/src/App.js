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
<<<<<<< HEAD
import Homepage from './pages/homepage'; 
=======
import TnC from "./pages/T&C";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs"
import { useAuth0 } from "@auth0/auth0-react";
>>>>>>> 0327082832b9336d047f7d6e2db394dc8eac6c47
import CardComp from './components/cards';

function App() {

  const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
      <button onClick={() => loginWithRedirect()}>Login</button>
    )}
      

  

  return (
    <div>
    
  
  
      
      <NavbarComp />  
      <div style = {{marginTop: "10%"}}>
      {LoginButton()}
      
      </div>
      

      <Routes> 
      
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about-us" element={<AboutUs/>}/>
      <Route exact path="/contact-us" element={<ContactUs/>}/>
      <Route exact path="/terms-and-conditions" element={<TnC/>}/>

<<<<<<< HEAD
      <div>
          <CarouselComp />
          <CardComp />
      </div>
=======
      </Routes>

      <CardComp />
>>>>>>> 0327082832b9336d047f7d6e2db394dc8eac6c47

      

      <FooterComp />
      </div>
      

      


    
    
  );
}

export default App;
