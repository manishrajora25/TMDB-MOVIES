import React from "react";
import "./App.css"
import { IoSearchOutline } from "react-icons/io5";

function HeaderSection() {
  return (
    <header className="hederbaar">
      <div className="header_mani">
        <div className="logo">
          <img
            src="https://moviex-olive.vercel.app/assets/movix-logo-d720c325.svg"
            alt="Movix Logo"
          />
        </div>
        <ul className="tvsearch">
          <li><a href="" >Movies</a></li>
          <li><a href="">TV Shows</a></li>
          <span className="cursor"><IoSearchOutline /></span>
        </ul>
      </div>
    </header>
  );
}

export default HeaderSection;
