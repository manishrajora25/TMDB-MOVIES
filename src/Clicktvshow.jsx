import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

const API_KEY = "3fb4c3ddfc88192745a5708f0de70cba";
const BASE_URL = "https://api.themoviedb.org/3/tv/popular"; 
const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export const Clicktvshow = () => {
  const [tvShows, setTvShows] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [page, setPage] = useState(1); 

  
  const fetchTvShows = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&page=${page}`);
      const data = await response.json();
      setTvShows((prev) => [...prev, ...data.results]); 
    } catch (error) {
      console.error("Error fetching TV shows:", error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchTvShows(); 
  }, [fetchTvShows]);

 
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
      <div className="click_movie">
        {tvShows.map((tvShow) => (
          <div
            key={tvShow.id}
            className="clicktessimg " 
          >
            {tvShow.poster_path ? (
              <>
               <Link to={`/tvshow/${tvShow.id}`}><img
                    src={`${IMAGE_BASE}${tvShow.poster_path}`}
                    alt={tvShow.name} 
                     className="nameimg"
                  /></Link>
                  
                <div >
                  <p >{tvShow.name}</p>
                </div>
              </>
            ) : (
              <div >
                No Image Available
              </div>
            )}
          </div>
        ))}
      </div>
      {loading && (
        <div >
          <span >Loading...</span>
        </div>
      )}
    </div>
  );
};

