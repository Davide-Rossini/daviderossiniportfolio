import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Projects from "./components/Projects/projects";
import About from "./components/About/about";
import ContactMe from "./components/ContactMe/contactme";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <div className="elementi">
        <Projects/>
        <About/>
        <ContactMe/>
      </div>
    </div>
  );
}

export default App;
