import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./about.scss";
import { PastModal } from "./modals/PastModal";
import { PresentModal } from "./modals/PresentModal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const [showModalPast, setShowModalPast] = useState(false);
  const [showModalPresent, setShowModalPresent] = useState(false);

  let topDescriptionBox = useRef(null);



  const openModalPast = () => {
    setShowModalPast((prev) => !prev);
  };
  const openModalPresent = () => {
    setShowModalPresent((prev) => !prev);
  };

  const { t } = useTranslation();
  let tl = gsap.timeline();
  useEffect(() => {
    tl.from(
      "h4",
      {
        duration: 0.6,
        css: { translateY: "-50vh" },
        delay: 2,
        ease: "power3.inOut", scrollTrigger: {trigger: "h4", markers: true}
      },
      "Start"
    );
  }, ["h4", tl]);

  // let tl = gsap.timeline();
  // useEffect(() => {
  //   gsa.from(
  //     "h4",
  //     {
  //       duration: 6,
  //       css: { translateY: "-50vh" },
  //       delay: 2,
  //       ease: "power3.inOut",
  //     },
  //     "Start"
  //   );
  // }, ["h4", tl]);
  return (
    <div className="about" id="about">
      <PastModal
        showModalPast={showModalPast}
        setShowModalPast={setShowModalPast}
      />
      <PresentModal
        showModalPresent={showModalPresent}
        setShowModalPresent={setShowModalPresent}
      />

      <div className="leftContainerAbout"></div>
      <div className="rightContainer"  >
        <div className="topDescriptionAbout" >
          <div className="topDescriptionBox" ref={topDescriptionBox}>
            <h4>{t("Born")}</h4>
          </div>
          <div className="midDescriptionBox">
            <p>{t("Coding")}</p>
            <p>{t("loving")}</p>
          </div>
          <div className="botDescriptionBox">
            <p>
              {t("Here you can read about my")}{" "}
              <span className="pastLink" onClick={openModalPast}>
                {t("PAST")}
              </span>{" "}
            </p>
            <p>
              {t("and")}
              <span className="presentLink" onClick={openModalPresent}>
                {t("PRESENT")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
