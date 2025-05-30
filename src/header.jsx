// import React, { useEffect, useState } from "react";
// import { IoSearchOutline } from "react-icons/io5";

// function Header() {
//   const [movieData, setMovieData] = useState([]);
//   const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

//   const shows = {
//     "upcoming movies": "https://api.themoviedb.org/3/movie/upcoming?api_key=3fb4c3ddfc88192745a5708f0de70cba&language=en-US&page=1"
//   };

//   useEffect(() => {
//     async function fetchMovies() {
//       try {
//         const response = await fetch(shows["upcoming movies"]);
//         const result = await response.json();
//         console.log(result.results);
//         setMovieData(result.results || []);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     }

//     fetchMovies();
//   }, []);

//   const randomMovie =
//     movieData.length > 0
//       ? movieData[Math.floor(Math.random() * movieData.length)]
//       : null;

//   const backgroundImage = randomMovie?.poster_path
//     ? `${IMAGE_BASE_URL}${randomMovie.poster_path}`
//     : "https://via.placeholder.com/1920x1080?text=No+Image+Available";

//   return (
//     <>
//       <div
     
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height:"100vh"
//         }}
//       >
//         <div className="text_center">
//           <h1>Welcome.</h1>
//           <p>Millions of movies, TV shows and people to discover. Explore now.</p>
//           <div>
//             <input type="text" 
//             placeholder="Search for a movie or tv show..."/>
//             <button >Search </button>
//           </div>
//         </div>
//       </div> 
//     </>
//   );
// }

// export default Header;











import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [movieData, setMovieData] = useState([]);
  const [randomMovie, setRandomMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=3fb4c3ddfc88192745a5708f0de70cba&query=`;
  const UPCOMING_MOVIES_API =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=3fb4c3ddfc88192745a5708f0de70cba&language=en-US&page=1";

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(UPCOMING_MOVIES_API);
        const result = await response.json();
        const movies = result.results || [];
        setMovieData(movies);

       
        if (movies.length > 0) {
          setRandomMovie(movies[Math.floor(Math.random() * movies.length)]);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, []);

  function trimContentText(content) {
    return content.length > 20 ? content.slice(0, 15) + "..." : content;
  }

  const backgroundImage = randomMovie?.poster_path
    ? `${IMAGE_BASE_URL}${randomMovie.poster_path}`
    : "https://via.placeholder.com/1920x1080?text=No+Image+Available";

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      alert("Please enter a valid search query!");
      return;
    }

    try {
      const response = await fetch(`${SEARCH_API}${searchQuery}`);
      const result = await response.json();
      setSearchResults(result.results || []);
    } catch (error) {
      console.error("Error searching for movies:", error);
    }
  };

  return (
    <div>
      {/* Header with random background image */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <div className="text_center">
          <h1>Welcome.</h1>
          <p>
            Millions of movies, TV shows, and people to discover. Explore now.
          </p>
          <div>
            <input
              type="text"
              placeholder="Search for a movie or TV Show..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>

      {/* Search Results Section */}
      {searchResults.length > 0 && (
        <div className="Search_Result">
           <h1>Search Result</h1>
          <div className="setSearchimg">
            {searchResults.map((movie) => (
              <div key={movie.id} className="onlysearchimg">
                {movie.poster_path ? (
                <Link to={`/movie/${movie.id}`}><img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title || movie.name}
                className="nameimg"
              /></Link>
                ) : (
                  <div>
                    <p>No Image</p>
                  </div>
                )}
                <div>
                  {/* <p>{movie.title}</p> */}
                  <p>{trimContentText(movie.title || movie.name)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
