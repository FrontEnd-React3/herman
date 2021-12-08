import React from "react"
import { useState } from "react";
import "./certifications.scss";
import { ModalIntec } from "./modals/ModalIntec";
import { ModalJavascript } from "./modals/ModalJavascript";
import { Button, ModalRWD } from "./modals/ModalRWD";
import bgImage from "./newbg.jpg";
import intecbrussel from "./intecbrussel.jpg";
import { useTranslation } from "react-i18next";
export default function Certifications() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [showModalRWD, setShowModalRWD] = useState(false);
  const [showModalJavascript, setShowModalJavascript] = useState(false);
  const [showModalIntec, setShowModalIntec] = useState(false);

  const { t } = useTranslation();

  const openModalRWD = () => {
    setShowModalRWD((prev) => !prev);
  };
  const openModalJavascript = () => {
    setShowModalJavascript((prev) => !prev);
  };
  const openModalIntec = () => {
    setShowModalIntec((prev) => !prev);
  };


  const data = [
    {
      id: 1,
      icon: "./assets/writing.png",
      title: "Front-end Developer @Intec Brussel",
      modalSrc: openModalIntec,
      img: intecbrussel,
    },
    {
      id: 2,
      icon: "./assets/globe.png",
      title: "Javascript",
      img: "https://i.postimg.cc/XvVgswMM/javascript.png",
      modalSrc: openModalJavascript,
    },
    {
      id: 3,
      icon: "./assets/mobile.png",
      title: "Responsive Web Design",
      img: "https://i.postimg.cc/sx0XC48B/webdesign.png",
      modalSrc: openModalRWD,
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="certifications" id="certifications">
      <ModalRWD showModalRWD={showModalRWD} setShowModalRWD={setShowModalRWD} />
      <ModalJavascript
        showModalJavascript={showModalJavascript}
        setShowModalJavascript={setShowModalJavascript}
      />
      <ModalIntec
        showModalIntec={showModalIntec}
        setShowModalIntec={setShowModalIntec}
      />
      <h1 className="h1Certifications">  {t("Certifications")}</h1>
      <img className="imgBackground" src={bgImage} alt="" />

      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2 >{d.title}</h2>
                  <p >{d.description}</p>
                  <Button onClick={d.modalSrc}>{t("Program")}</Button>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="Certification" onClick={d.modalSrc} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <img
        src="assets/down.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/down.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
