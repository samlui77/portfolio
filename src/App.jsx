import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Workhistory from "./components/workhistory/Workhistory";
import About from "./components/about/About";
import Menu from "./components/menu/Menu";
import "./app.scss";
import {useState} from "react"

function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Workhistory/>
        <Projects/> 
        <Skills/>
        <About/> 
      </div>
    </div>
  );
}

export default App;
