import Navbar from "./Components/Navbar";
import Home from "./Components/home";
import About from "./Components/about";
import Certificates from "./Components/Certificates";
import Projects from "./Components/projects";
import Contacts from "./Components/contacts";
import './app.css';
import Skills from "./Components/skills";
import Footer from "./Components/footer";
import ThemeContext from "./context/theme";
function App() {
  return (
    <ThemeContext>
    <div>
    <div className="container">
      <Navbar/>
      <div id="#home"></div>
      <Home/>
      <About/>
      <Projects/>
      <Certificates/>
      <Skills/>
      <Footer/>
    </div>
    </div>
    </ThemeContext>
  );
}

export default App;
