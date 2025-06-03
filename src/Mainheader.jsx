// import React, { useState } from "react";
// import "./App.css";
// import { IoSearchOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";

// function HeaderSection({ setSearchIcons, handleSearch }) {
//   const [showInput, setShowInput] = useState(false);
//   console.log(showInput);
  

//   const toggleInput = () => {
//     setShowInput((prev) => !prev);
//   };

//   return (
//     <header className="hederbaar">
//       <div className="header_mani">
//         <div className="logo">
//           <Link to="/">
//             <img
//               src="https://moviex-olive.vercel.app/assets/movix-logo-d720c325.svg"
//               alt="Movix Logo"
//             />
//           </Link>
//         </div>
//         <ul className="tvsearch">
//           <Link to="/Searchmovies">
//             <li>Movies</li>
//           </Link>
//           <Link to="/Searchtvshow">
//             <li>TV Shows</li>
//           </Link>
//           <span className="cursor" onClick={toggleInput}>
//             <IoSearchOutline />
//           </span>
//         </ul>
//       </div>
//       {showInput && (
//         <div className="search_input">
//           <input
//             type="text"
//             onChange={(e) => setSearchIcons(e.target.value)} // Ensure this prop is passed from the parent
//             placeholder="Search for Movie or TV Show..."
//             className="InputBox"
//           />
//           <button onClick={handleSearch}>Submit</button>
//         </div>
//       )}
//     </header>
//   );
// }

// export default HeaderSection;








import React, { useState } from "react";
import "./App.css";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function HeaderSection({ setSearchIcons, handleSearch }) {
  const [showInput, setShowInput] = useState(false);

  const toggleInput = () => {
    setShowInput((prev) => !prev);
  };

  const hideInput = () => {
    setShowInput(false);
  };

  return (
    <header className="hederbaar">
      <div className="header_mani">
        <div className="logo" onClick={hideInput}>
          <Link to="/">
            <img
              src="https://moviex-olive.vercel.app/assets/movix-logo-d720c325.svg"
              alt="Movix Logo"
            />
          </Link>
        </div>
        <ul className="tvsearch">
          <Link to="/Searchmovies">
            <li onClick={hideInput}>Movies</li>
          </Link>
          <Link to="/Searchtvshow">
            <li onClick={hideInput}>TV Shows</li>
          </Link>
          <span className="cursor" onClick={toggleInput}>
            <IoSearchOutline />
          </span>
        </ul>
      </div>
      {showInput && (
        <div className="search_input">
          <input
            type="text"
            onChange={(e) => setSearchIcons(e.target.value)} // Ensure this prop is passed from the parent
            placeholder="Search for Movie or TV Show..."
            className="InputBox"
          />
          <button onClick={handleSearch}>Submit</button>
        </div>
      )}
    </header>
  );
}

export default HeaderSection;
