import React from "react";
import Footer from "./components/Footer";
import MovieBox from "./components/MovieBox";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar/>
      <MovieBox/>
      <Footer/>
    </>
  );
}
