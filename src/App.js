import './CSS/App.css';
import './CSS/normalize.css';
import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";
import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Home from './Components/Home'
import Nav from './Components/assets/nav'
import Portfolio from "./Components/Portfolio"
import React, { useState } from "react";
import Skill from "./Components/Skills"
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const [nav, setNav] = useState(false);
  const [active_nav, setActive_nav] = useState("");
  AOS.init();

  return (
    <div className="App">
      <Nav  nav={nav} active_nav={active_nav} />
      <Home setNav={setNav} setActive_nav={setActive_nav}/>
      <About setActive_nav={setActive_nav}/>
      <Skill setActive_nav={setActive_nav}/>
      <Portfolio setActive_nav={setActive_nav}/>
      <Contact setActive_nav={setActive_nav}/>
      <Footer setActive_nav={setActive_nav}/>
    </div>
  );
}

export default App;
