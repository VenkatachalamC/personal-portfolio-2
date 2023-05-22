import Navbar from "./Components/Navbar";
import Home from "./Components/home";
import About from "./Components/about";
import Certificates from "./Components/Certificates";
import Projects from "./Components/projects";
import Contacts from "./Components/contacts";
import './app.css';
import Skills from "./Components/skills";
import Dummy from "./Components/dummy";
function App() {
  return (
    <div className="container">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Certificates/>
      <Skills/>
    </div>
  );
}

export default App;
