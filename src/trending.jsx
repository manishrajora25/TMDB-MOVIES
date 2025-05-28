// import { useEffect, useState } from "react";
// import "./App.css";

// function Popular() {
//   const [movies, setMovies] = useState([]);

//   const shows = {
//     "Trending movie":
//       "https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1&api_key=3fb4c3ddfc88192745a5708f0de70cba",
//   };


//   useEffect(() => {
//     const urls = [
//       shows["Trending movie"],
//     ];

//     Promise.all(urls.map((url) => fetch(url).then((response) => response.json())))
//       .then(([popularMovies]) => {
//         const combined = [...popularMovies.results];
//         setMovies(combined);
//       })
//       .catch((error) => console.error("Failed to fetch data", error));
//   }, []);

//   return (
//     <div>
//       <h1 className="text-center m-3 text-white">Trending movie</h1>
//       <div className="flex flex-wrap justify-center gap-2 p-6">
//         {movies.map((movie) => (
//           <div key={movie.id}>
//             {movie.poster_path && (
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
//                 alt={movie.title || "Movie Poster"} 
//                 style={{width:"200px", height:"300px"}}
//               />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Popular;











// import { useEffect, useState } from "react";

// function Row({ urls, heading, btn1, btn2 }) {
//   const [movieData, setMovieData] = useState([]);
//   const [showData, setshowData] = useState(false);
// const baseImageUrl = "https://image.tmdb.org/t/p/w500";


//   useEffect(() => {
//     if (urls) {
//       urls.forEach((url) => {
//         fetchDataByURL(url);
//       });
//       return;
//     }

//     async function fetchDataByURL(url) {
//         console.log();
        
//       const response = await fetch(url);
//       const result = await response.json();
//         console.log(result);
//         setMovieData([...movieData, result.results]);
//     //   const combined = [
//     //     ...movieData,
//     //     result.results,
//         // ...movieData,result.results,
//       //];
//       //setMovieData(combined);
//     }
//   },[urls]);

//   console.log(heading, movieData);
  
// function showTask() {

    
// }

//   return (
//     <section>
//       <header>
//         <h2>{heading}</h2>
//          <button>{btn1}</button>
//           <button onClick={showTask}>{btn2}</button>
//         <div className="flex flex-wrap justify-center gap-5 p-6">
//           {movieData.map((movie) =>
//             // console.log("my movies",movie),
//             movie.map((items) => {
//               console.log(items);
//               return (
//                 <div key={items.id}>
//                      <h1>{items.names}</h1>
//                   {items.poster_path && (
//                     <img
//                       className="rounded-md mb-2 w-[200px] h-[300px] object-cover shadow-[0px_0px_10px_rgba(0,0,0,0.3)]"
//                        src={`${baseImageUrl}${items.poster_path}`}
//                       alt=""
//                     />

//                   )}
//                 </div>
//               );
//             })
//           )}
//            </div>
         
       
//       </header>
//     </section>
//   );
// }
// export default Row;





