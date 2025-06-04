import { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "./script";
import { FaYoutube } from "react-icons/fa6";

function Movie() {
  const [urlPart, setUrlPart] = useState(window.location.pathname);
  const [dataToShow, setDataToShow] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (urlPart) {
      fetchMovieOrTV(urlPart);
    }
  }, [urlPart]);

  async function fetchMovieOrTV(urlPart) {
    const id = urlPart.slice(urlPart.lastIndexOf("/") + 1);
    try {
      let response;
      if (urlPart.includes("movie")) {
        response = await fetch(
          `${BASE_URL}movie/${id}?api_key=${API_KEY}&append_to_response=credits,videos`
        );
      } else if (urlPart.includes("tv")) {
        response = await fetch(
          `${BASE_URL}tv/${id}?api_key=${API_KEY}&append_to_response=credits,videos`
        );
      } else {
        throw new Error("Invalid URL path");
      }

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();

     
      const director = result.credits?.crew?.find(
        (person) => person.job === "Director"
      );
      result.director = director ? director.name : "Not Available";

      setDataToShow(result);
    } catch (err) {
      setError(err.message);
    }
  }

  async function fetchMovieTrailer() {
    try {
      const trailer =
        dataToShow?.videos?.results?.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );

      if (trailer) {
        window.open(`https://www.youtube.com/watch?v=${trailer.key}`, "_blank");
      } else {
        alert("Trailer not available.");
      }
    } catch (err) {
      alert("Error fetching trailer: " + err.message);
    }
  }

  function formatDate(dateString) {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0"); // Two-digit day
    const monthName = date.toLocaleString("default", { month: "long" }); // Get full month name
    const year = date.getFullYear();
    return `${day} ${monthName} ${year}`;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!dataToShow) {
    return <div>Loading...</div>;
  }

  return (
    <div className="wrapper">
      <div className="dataToShow">
        <div className="left">
          {dataToShow.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${dataToShow.poster_path}`}
              alt={dataToShow.title || dataToShow.name}
            />
          )}
        </div>
        <div className="right">
          <h1>{dataToShow.title || dataToShow.name}</h1>
          <p>{dataToShow.overview}</p>
          <hr />
          <div className="paraflex" style={{display:"flex", alignItems:"center",gap:"40px",margin:"12px 0px"}}>
          <p>
            <strong>Release Date:-</strong>{" "}
            {formatDate(dataToShow.release_date || dataToShow.first_air_date)}
          </p>
          <p>
            <strong>Rating:-</strong> {dataToShow.vote_average}
          </p>
          </div> <hr />
          <p>
            <strong>Director:-</strong> {dataToShow.director || "Not Available"}
          </p> <hr />
          <div className="youtube_test">
            <span className="youtube" onClick={fetchMovieTrailer}>
              <FaYoutube />
            </span>
          </div>
        </div>
      </div>

      <div className="top_cast">
        <h1>TOP CAST</h1>
        <div className="cast_list">
          {dataToShow?.credits?.cast?.slice(0, 10).map((actor) => (
            <div key={actor.id} className="cast_member">
              {actor.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                />
              )}
              <p>{actor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movie;
