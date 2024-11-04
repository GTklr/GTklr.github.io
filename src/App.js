import "./App.css";
import Home from "./pages/Home";
import Iconbar from "./Components/iconbar";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ProjectSection from "./Components/ProjectSection";
import ProjectSectionWP from "./Components/ProjectSectionWP";

function App() {
  return (
    <div className="App">
      <Home />
      <Iconbar />
      <h1 className="text-5xl text-center my-5"> React projects</h1>
      <hr />
      <ProjectSection />

      <h1 className="text-5xl text-center my-5"> Wordpress projects</h1>
      <hr />
      <ProjectSectionWP />

      <hr />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
