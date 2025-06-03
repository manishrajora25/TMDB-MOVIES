import React, { useState } from "react";
import "./App.css";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function HeaderSection() {
  const [showInput, setShowInput] = useState(false); 
  const [searchValue, setSearchValue] = useState(""); 
  const toggleInput = () => {
    setShowInput((prev) => !prev);
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value); 
  };

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
          <span className="cursor" onClick={toggleInput}>
            <IoSearchOutline />
          </span>
        </ul>
        </div>
        {showInput && (
          <input
            type="search"
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Search for Movie or tv Show..."
            className="search_input"
          />
        )}
      
    </header>
  );
}

export default HeaderSection;







