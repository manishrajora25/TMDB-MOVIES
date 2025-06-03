// import React from 'react'

// export const TvShow = () => {
//   return (
//     <div>TvShow</div>
//   )
// }






// import { useEffect, useState } from "react";
// import { API_KEY, BASE_URL } from "./script";
// import { FaYoutube } from "react-icons/fa6";

// function TvShow() {
//   const [urlPart, setUrlPart] = useState("/tv/1399"); // Default to a TV show path
//   const [dataToShow, setDataToShow] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (urlPart) {
//       fetchMediaDetails(urlPart);
//     }
//   }, [urlPart]);

//   async function fetchMediaDetails(urlPart) {
//     const id = urlPart.slice(urlPart.lastIndexOf("/") + 1);
//     try {
//       const endpoint = urlPart.includes("movie") ? "movie" : "tv";
//       const response = await fetch(
//         `${BASE_URL}${endpoint}/${id}?api_key=${API_KEY}&append_to_response=credits,videos`
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }

//       const result = await response.json();
//       setDataToShow(result);
//     } catch (err) {
//       setError(err.message);
//     }
//   }

//   async function fetchTrailer() {
//     try {
//       const trailer =
//         dataToShow?.videos?.results?.find(
//           (video) => video.type === "Trailer" && video.site === "YouTube"
//         );

//       if (trailer) {
//         window.open(`https://www.youtube.com/watch?v=${trailer.key}`, "_blank");
//       } else {
//         alert("Trailer not available.");
//       }
//     } catch (err) {
//       alert("Error fetching trailer: " + err.message);
//     }
//   }

//   function formatDate(dateString) {
//     if (!dateString) return "N/A";
//     const date = new Date(dateString);
//     const day = date.getDate().toString().padStart(2, "0");
//     const monthName = date.toLocaleString("default", { month: "long" });
//     const year = date.getFullYear();
//     return `${day} ${monthName} ${year}`;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!dataToShow) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="wrapper">
//       <div className="dataToShow">
//         <div className="left">
//           {dataToShow.poster_path && (
//             <img
//               src={`https://image.tmdb.org/t/p/w500${dataToShow.poster_path}`}
//               alt={dataToShow.title || dataToShow.name}
//             />
//           )}
//         </div>
//         <div className="right">
//           <h1>{dataToShow.title || dataToShow.name}</h1>
//           <p>{dataToShow.overview}</p>
//           <p>
//             <strong>{dataToShow.release_date ? "Release Date:" : "First Air Date:"}</strong>{" "}
//             {formatDate(dataToShow.release_date || dataToShow.first_air_date)}
//           </p>
//           <p>
//             <strong>Rating:</strong> {dataToShow.vote_average}
//           </p>
//           <div className="youtube_test">
//             <span className="youtube" onClick={fetchTrailer}>
//               <FaYoutube />
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="top_cast">
//         <h1>TOP CAST</h1>
//         <div className="cast_list">
//           {dataToShow?.credits?.cast?.slice(0, 10).map((actor) => (
//             <div key={actor.id} className="cast_member">
//               {actor.profile_path && (
//                 <img
//                   src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
//                   alt={actor.name}
//                 />
//               )}
//               <p>{actor.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TvShow;








import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaYoutube } from "react-icons/fa6";

const API_KEY = "3fb4c3ddfc88192745a5708f0de70cba";
const BASE_URL = "https://api.themoviedb.org/3/";

function TvShow() {
  const { id } = useParams(); // Get TV show ID from URL
  const [dataToShow, setDataToShow] = useState(null);
  const [error, setError] = useState(null);
console.log(id);

  useEffect(() => {
    if (id) {
      fetchMediaDetails();
    }
  }, [id]);

  async function fetchMediaDetails() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&append_to_response=videos,credits`
      );
console.log(response);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      setDataToShow(result);
    } catch (err) {
      setError(err.message);
    }
  }

  async function fetchTrailer() {
    const trailer = dataToShow?.videos?.results?.find(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );

    if (trailer) {
      window.open(`https://www.youtube.com/watch?v=${trailer.key}`, "_blank");
    } else {
      alert("Trailer not available.");
    }
  }

  function formatDate(dateString) {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("default", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }

  if (error) return <div>Error: {error}</div>;
  if (!dataToShow) return <div>Loading...</div>;

  return (
    <div className="wrapper">
      <div className="dataToShow">
        <div className="left">
          {dataToShow.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${dataToShow.poster_path}`}
              alt={dataToShow.name}
            />
          )}
        </div>
        <div className="right">
          <h1>{dataToShow.name}</h1>
          <p>{dataToShow.overview}</p>
          <p>
            <strong>First Air Date:</strong> {formatDate(dataToShow.first_air_date)}
          </p>
          <p>
            <strong>Rating:</strong> {dataToShow.vote_average}
          </p>
          <button onClick={fetchTrailer}>
            <FaYoutube /> Watch Trailer
          </button>
        </div>
      </div>

      <div className="top_cast">
        <h1>Top Cast</h1>
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

export default TvShow;
