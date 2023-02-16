import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Iconbar from './Components/iconbar';
import Hero1 from './Components/hero1';
import Hero2 from './Components/hero2';
import Hero3wp from './Components/hero3-wp';


function App() {
  return (
    <div className="App">
      <Home />
      <Iconbar />
      <h1 className="text-center pt-5"> Latest projects</h1>
      <hr />
      <Hero1 />
    </div>
  );
}

export default App;
