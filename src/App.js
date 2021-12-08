import React from "react";
import Topbar from "./Components/topbar/Topbar";
import Intro from "./Components/intro/Intro";
import Portfolio from "./Components/portfolio/Portfolio";
import Certifications from "./Components/certifications/Certifications";
// import Testimonials from "./Components/testimonials/Testimonials";
import Contact from "./Components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./Components/menu/Menu";
import About from "./Components/about/About";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  let mainAppA = useRef(null);
  let tl = gsap.timeline();


  //why??
  return (
    <div
      className="app"
      ref={(el) => {
        mainAppA = el;
      }}
    >
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro
          className="intro"
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
                 />
        <About />
        <Portfolio className="portfolio" />
        <Certifications className="certifications" />
        {/* <Testimonials className="testimonials" /> */}
        <Contact className="contact" />
      </div>
    </div>
  );
}

export default App;
