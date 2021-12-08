import React from "react"
import { useEffect, useState } from "react";
import PortfolioList from "../portfoliolist/PortfolioList";

import "./portfolio.scss";
import {
  featuredPortfolio,
  reactNativePortfolio,
  javascriptPortfolio,
  reactPortfolio,
  backEndPortfolio,
} from "../../data";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { GoStar, GoDeviceMobile } from "react-icons/go";
import { ModalQuizzz } from "./modals/ModalQuizzz";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);






export default function Portfolio() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const [modal, setModal] = useState("");
  const [showModalQuizzz, setShowModalQuizzz] = useState(false);

  let portfolioImageA = useRef(null);
  
  useEffect(() => {
    gsap.from((portfolioImageA.current), {
      x:700,
      duration: 3,
      scrollTrigger: {
        trigger: portfolioImageA.current,
        
      }
      
    })
    
}, []);


  const openModalQuizzz = () => {
    setShowModalQuizzz((prev) => !prev);
  };
 

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "reactNative":
        setData(reactNativePortfolio);
        break;
      case "javascript":
        setData(javascriptPortfolio);
        break;
      case "react":
        setData(reactPortfolio);
        break;
      case "backend":
        setData(backEndPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  const list = [
    {
      id: "featured",
      title: "Featured",
      icon: <GoStar style={{ color: "white" }} />,
    },
    {
      id: "javascript",
      title: "Javascript",
      icon: <SiJavascript style={{ color: "white" }} />,
    },
    {
      id: "reactNative",
      title: "React Native",
      icon: <GoDeviceMobile style={{ color: "white" }} />,
    },
    {
      id: "react",
      title: "React",
      icon: <FaReact style={{ color: "white" }} />,
    },
    {
      id: "backend",
      title: "Back-End",
      icon: <SiMongodb style={{ color: "white" }} />,
    },
  ];

 

  const openModal = () => {
    return openModalQuizzz();
    
  }

  const translateUl = () => {};

  return (
    <div className="portfolio" id="portfolio">
      <ModalQuizzz
        modal={modal}
        setModal={setModal}
        showModalQuizzz={showModalQuizzz}
        setShowModalQuizzz={setShowModalQuizzz}
      />

      <h1 className="h1Portfolio"> {t("Portfolio")}</h1>
      <ul onMouseEnter={translateUl}>
        <div className="arrowAndInfo">
          <AiOutlineArrowLeft className="ulArrowLeft" />
        </div>
        {list.map((item) => (
          <PortfolioList key={item.id}
            title={item.title}
            active={selected === item.id}
            icon={item.icon}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="containerPortfolio">
        {data.map((d, i) => (
          <div className="item" key={d.id}>
            <img
              key={d.id}
              className="portfolioImg"
              src={d.img}
              alt=""
              // onMouseEnter={() => setModal(d)}
              onClick={() => {openModal(); setModal(d);}}
              ref={portfolioImageA}
            />
            <div className="itemTitle">{d.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}