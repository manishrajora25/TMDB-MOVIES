// import { useEffect, useState } from "react";
// import { API_KEY, BASE_URL,VIDEO_URL } from "./script";

// function Movie() {
//   const [urlPart, setUrlPart] = useState(window.location.pathname);
//   const [dataToShow, setDataToShow] = useState(null); 
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (urlPart) {
//       fetchMovieOrTV(urlPart);
//     }
//   }, [urlPart]);

//   async function fetchMovieOrTV(urlPart) {
//     const id = urlPart.slice(urlPart.lastIndexOf("/") + 1);
//     try {
//       let response;
//       if (urlPart.includes("movie")) {
//         // Fetch movie details
//         response = await fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
//       } else if (urlPart.includes("tv")) {
//         // Fetch TV show details
//         response = await fetch(`${BASE_URL}tv/${id}?api_key=${API_KEY}`);
//       } else {
//         throw new Error("Invalid URL path");
//       }
      
//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }

//       const result = await response.json();
//       setDataToShow(result);
//     } catch (err) {
//       setError(err.message);
//       setDataToShow(null);
//     }
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!dataToShow) {
//     return <div>Loading...</div>;
//   }



//   async function fetchMovieTrailer(movieId) {
//     const response = await fetch(${base_url}/movie/${movieId}/videos?api_key=${API_KEY});
//     const data = await response.json();
//     const trailer = data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
//     if (trailer) {
//       return trailer.key; 
//     } else {
//       alert("Trailer not available.");
//       return null;
//     }
//   }

//   return (
//     <div className="dataToShow">
//   <div className="left">
//     {dataToShow.poster_path && (
//       <img
//         src={`https://image.tmdb.org/t/p/w500${dataToShow.poster_path}`}
//         alt={dataToShow.title || dataToShow.name}
//         onClick={fetchMovieTrailer}
//       />
//     )}
//   </div>
//   <div className="right">
//     <h1>{dataToShow.title || dataToShow.name}</h1>
//     <p>{dataToShow.overview}</p>
//     <p><strong>Release Date:</strong> {dataToShow.release_date || dataToShow.first_air_date}</p>
//     <p><strong>Rating:</strong> {dataToShow.vote_average}</p>
//   </div>
// </div>

//   );
// }

// export default Movie;














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
        response = await fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
      } else if (urlPart.includes("tv")) {
        response = await fetch(`${BASE_URL}tv/${id}?api_key=${API_KEY}`);
      } else {
        throw new Error("Invalid URL path");
      }

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      setDataToShow(result);
    } catch (err) {
      setError(err.message);
    }
  }

  async function fetchMovieTrailer(movieId) {
    try {
      const response = await fetch(
        `${BASE_URL}movie/${movieId}/videos?api_key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch trailer");
      }

      const data = await response.json();
      const trailer = data.results.find(
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

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!dataToShow) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dataToShow">
      <div className="left">
        {dataToShow.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${dataToShow.poster_path}`}
            alt={dataToShow.title || dataToShow.name}
            
          />
          
        )}
        <div className="youtube_test">
          <span className="youtube" onClick={() => fetchMovieTrailer(dataToShow.id)}><FaYoutube /></span>
        </div>
      </div>
      <div className="right">
        <h1>{dataToShow.title || dataToShow.name}</h1>
        <p>{dataToShow.overview}</p>
        <p>
          <strong>Release Date:</strong>{" "}
          {dataToShow.release_date || dataToShow.first_air_date}
        </p>
        <p>
          <strong>Rating:</strong> {dataToShow.vote_average}
        </p>
      </div>
    </div>
  );
}

export default Movie;
