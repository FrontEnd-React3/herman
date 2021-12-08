import React from "react";
import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Video from "./Video";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";

export default function Intro({ menuOpen, setMenuOpen }) {
  const textRef = useRef();
  const { t } = useTranslation();

  let arrowA = useRef(null);
  let textRefA = useRef(null);

  let tl = gsap.timeline();

  useEffect(() => {
    tl.from(
      arrowA,
      {
        duration: 2,
        css: { translateY: "50vh" },
        delay: 2,
        ease: "power3.inOut",
      },
      "Start"
    ).from(
      textRefA,
      {
        duration: 6,
        css: { translateY: "-50vh" },
        delay: 2,
        ease: "power3.inOut",
      },
      "Start"
    );
  }, [textRefA, arrowA, tl]);

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "React.js - Next.js",
        "Javascript - Typescript",
        "CSS - SASS - Tailwind",
        "MongoDb",
        "Node.js",
        "Express",
        "MySQL",
        "GraphQL",
        "React Native",
        "Git",
      ],
    });
  }, []);

  return (
    <div
      className="intro"
      id="intro"
     
    >
      <Video />
      <a
        className="arrowLinkintro"
        href="#about"
        onClick={() => setMenuOpen(false)}
      >
        <img
          src="assets/whitearrow.png"
          alt=""
          ref={(el) => {
            arrowA = el;
          }}
        />
      </a>
      <div
        className="right"
       
      >
        <div
          className="wrapper"
          ref={(el) => {
            textRefA = el;
          }}
        >
          {/* <h2>{t("Hello")}</h2>
          <h2>{t("I am")}</h2> */}
          <h1>Tiago Ferreira</h1>
          <h3>{t("Web Developer")}</h3>
          <h3>
            {t("Technologies")} <br /> <span ref={textRef}></span>
          </h3>
        </div>
      </div>
    </div>
  );
}
