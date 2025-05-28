import MainHeader from "./Mainheader";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function First() {
  return (
    <>
      <MainHeader />
      <Outlet />
      <Footer />
    </>
  );
}

export default First;
