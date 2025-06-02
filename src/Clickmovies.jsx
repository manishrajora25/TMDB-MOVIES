import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

const API_KEY = "3fb4c3ddfc88192745a5708f0de70cba";
const BASE_URL = "https://api.themoviedb.org/3/movie/popular";
const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

const Clickmovies = () => {
  const [movies, setMovies] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [page, setPage] = useState(1); 

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&page=${page}`);
      const data = await response.json();
      setMovies((prev) => [...prev, ...data.results]); 
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchMovies(); 
  }, [fetchMovies]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
        !loading
      ) {
        setPage((prev) => prev + 1); 
      }
    };

    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll); 
  }, [loading]);

  return (
    <div >
      <div className="click_movie" >
      {movies.map((movie) => (
  <div
    key={movie.id}
    className="clicktessimg "
  >
    {movie.poster_path ? (
      <>
          <Link to={`/movie/${movie.id}`}><img
                src={`${IMAGE_BASE}${movie.poster_path}`}
                alt={movie.title || movie.name}
                className="nameimg"
              /></Link>
        <div >
          <p >{movie.title}</p>
        </div>
      </>
    ) : (
      <div className="h-80 flex items-center justify-center bg-gray-200 text-gray-600">
        No Image Available
      </div>
    )}
  </div>
))}

      </div>
      {loading && (
        <div className="">
          <span >Loading...</span>
        </div>
      )}
    </div>
  );
};

export default Clickmovies;








