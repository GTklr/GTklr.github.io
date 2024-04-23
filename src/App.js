import './App.css';
import Home from './pages/Home';
import Iconbar from './Components/iconbar';
import Hero1 from './Components/hero1';
import Hero2 from './Components/hero2';
import Hero3 from './Components/hero3';
import Hero4 from './Components/hero4';
import Hero3wp from './Components/hero3-wp';
import Hero4wp from './Components/hero4-wp';
import Hero5wp from './Components/hero5-wp';
import Hero6wp from './Components/hero6-wp';
import Hero7wp from './Components/hero7-wp';
import Hero8wp from './Components/hero8-wp';
import Hero9wp from './Components/hero9-wp';
import Hero10wp from './Components/hero10-wp';
import Hero11wp from './Components/hero11-wp';
import Hero12wp from './Components/hero12-wp';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Home />
      <Iconbar />
      <h1 className="text-center pt-5"> React projects</h1>
      <hr />
      <Hero4 />
      <Hero3 />
      <Hero1 />
      <Hero2 />
      <h1 className="text-center pt-5"> Wordpress projects</h1>
      <hr />
      
      <Hero9wp />
      <Hero5wp />
      <Hero8wp />
      <Hero6wp />
      <Hero7wp />
      <Hero10wp />
      <Hero11wp />
      <Hero12wp />
      <Hero3wp />
      <Hero4wp />
     
      <hr />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
