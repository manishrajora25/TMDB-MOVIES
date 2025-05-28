import React from "react";
import Header from "./header";
import Mainheader from "./Mainheader";
import Footer from "./Footer";
import Row from "./row";
import { urls } from "./script";
import "./App.css";

function App() {
  return (
    <>
      {/* Header Section */}
      <Mainheader />
      <Header />

      {/* Rows Section */}
      {/* <div className="rows-container"> */}

      <Row
        heading="Trending Movies"
        btn1="Day"
        btn2="Week"
        urls={[urls.trendingByDay, urls.trendingByWeek]}
      />
      <Row
        heading="Popular Movies"
        btn1="Movies"
        btn2="TV "
        urls={[urls.popularMovies, urls.popularTVShows]}
      />
      <Row
        heading="Top Rated Movies"
        btn1="Movies"
        btn2="TV "
        urls={[urls.topRatedMovies, urls.topRatedTVShows]}
      />
      {/* </div> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
