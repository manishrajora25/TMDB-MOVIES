
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Row({ urls, heading, btn1, btn2 }) {
  const [movieData, setMovieData] = useState([]);
  const [selectedUrl, setSelectedUrl] = useState(urls[0]);
  const [activeButton, setActive] = useState(0);
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  // const navigate = useNavigate()

  function handleImageClick(manish) {
    navigate(`/movie/${manish}`);
    console.log(manish);

  };

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(selectedUrl);
        const result = await response.json();
        setMovieData(result.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, [selectedUrl]);

  function trimContent(content) {
    return content.length > 20 ? content.slice(0, 15) + "..." : content;
  }

  const handleClick = (i) => {
    setActive(i);
    setSelectedUrl(urls[i]);
  };

  return (
    <section>
      <header className="header">
        <h2>{heading}</h2>
        <div className="row-buttons">
          <button
            className={activeButton === 0 ? "active" : ""}
            onClick={() => handleClick(0)}
          >
            {btn1}
          </button>
          <button
            className={activeButton === 1 ? "active" : ""}
            onClick={() => handleClick(1)}
          >
            {btn2}
          </button>
        </div>
      </header>


      <div className="movieWrapper">
        {movieData.length > 0 ? (
          movieData.map((movie) => (
            <div key={movie.id}>
              {movie.poster_path && (
                <Link to={`/movie/${movie.id}`}><img
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.title || movie.name}
                  className="nameimg"
                /></Link>
              )}
              <div className="content">
                <h3>{trimContent(movie.title || movie.name)}</h3>
                <p>
                  {movie.release_date
                    ? new Date(movie.release_date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "2-digit",
                    })
                    : ""}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </section>
  );
}

export default Row;
