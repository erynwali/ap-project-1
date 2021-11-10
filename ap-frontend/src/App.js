import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComp from "./components/navbar";
import FooterComp from "./components/footer"; 
import CarouselComp from './components/carousel';
import Homepage from './pages/homepage'; 
import CardComp from './components/cards';

function App() {
  return (
      <header className="App-header">  

      <div> <NavbarComp /> </div> 

      <div>
          <CarouselComp />
          <CardComp />
      </div>

      <div> <FooterComp /></div>

      

      </header> 

  );
}

export default App;
