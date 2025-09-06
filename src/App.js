import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Project from "./Project";
import Skills from "./Skills";
import Experience from "./Experience";



function App() {
  return (
    <div className="App">
       <Home />
       <About />
       <Skills />
       <Experience />   
       <Project />
      
       <Contact />
       <Footer />
    </div>
  );
}

export default App;