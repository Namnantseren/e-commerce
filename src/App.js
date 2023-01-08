import './App.css';
import Nav from './Nav/Nav.js';
import Slide from './Slider/Slide';
import Leg from './Leg/Leg.js';
import Footer from './Footer/Footer';
import Section from './Section/Section';


function App() {
  return (
    <div className="App">
        <Nav/>
        <Slide/>
        <Section/>
        <div className='group-laptop flex'>
          <img src="./group.svg" alt="" />
        </div>
        <Leg/>
        <Footer/>
    </div>
  );
}

export default App;
