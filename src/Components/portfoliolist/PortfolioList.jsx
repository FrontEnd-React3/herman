import React from "react"
import "./portfoliolist.scss";

export default function PortfolioList({ id, title, active, setSelected, icon }) {
  return (
    <button
      className={active ? "buttonActive" : "button"}
      onClick={() => setSelected(id)}
    >
      <li className="iconSpin">{icon}</li>
      <li className="listTitle">{title}</li>
    </button>
  );
}
