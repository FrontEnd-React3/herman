import React from "react"
import "./menu.scss";
import { useTranslation } from "react-i18next";

export default function Menu({ menuOpen, setMenuOpen }) {

  const { t } = useTranslation();
  return (
    <div className={"menu " + (menuOpen ? "active" : "inactive")}>
      <ul>
        <li
          className={"homeLi " + (menuOpen ? "active" : "inactive")}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <a href="#intro" className="un">
          {t("Home")}
          </a>
        </li>

        <li
          className={"aboutLi " + (menuOpen ? "active" : "inactive")}
          onClick={() => setMenuOpen(false)}
        >
          <a href="#about" className="un">
          {t("About")}
          </a>
        </li>
        <li
          className={"portfolioLi " + (menuOpen ? "active" : "inactive")}
          onClick={() => setMenuOpen(false)}
        >
          <a href="#portfolio" className="un">
          {t("Portfolio")} 
          </a>
        </li>
        <li
          className={"certificationsLi " + (menuOpen ? "active" : "inactive")}
          onClick={() => setMenuOpen(false)}
        >
          <a href="#certifications" className="un">
          {t("Certifications")}  
          </a>
        </li>
        <li
          className={"contactLi " + (menuOpen ? "active" : "inactive")}
          onClick={() => setMenuOpen(false)}
        >
          <a href="#contact" className="un">
          {t("Contact")}  
          </a>
        </li>
      </ul>
    </div>
  );
}
