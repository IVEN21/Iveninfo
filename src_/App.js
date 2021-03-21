import React, { useState } from "react";
import "font-awesome/css/font-awesome.css";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [nav, setNav] = useState(false);
  const [active_nav, setActive_nav] = useState("");

  return (
    <div className="App">
      <Navbar nav={nav} active_nav={active_nav} />

      <Home setNav={setNav} setActive_nav={setActive_nav} />
      <ToastContainer />
      <About setActive_nav={setActive_nav} />
      <Skills setActive_nav={setActive_nav} />
      <Portfolio setActive_nav={setActive_nav} />
      <Contact setActive_nav={setActive_nav} />
      <Footer />
    </div>
  );
}

export default App;
