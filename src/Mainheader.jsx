import React from "react";
import "./App.css"
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function HeaderSection() {
  return (
    <header className="hederbaar">
      <div className="header_mani">
        <div className="logo">
        <Link to="/"> 
            <img
              src="https://moviex-olive.vercel.app/assets/movix-logo-d720c325.svg"
              alt="Movix Logo"
            />
          </Link>
        </div>
        <ul className="tvsearch">
          <Link to="/Searchmovies">
           <li>Movies</li>
          </Link>
          
          <Link to="/Searchtvshow">
           <li>TV Shows</li>
          </Link>
          
          
          <span className="cursor"><IoSearchOutline /></span>
        </ul>
      </div>
    </header>
  );
}

export default HeaderSection;
