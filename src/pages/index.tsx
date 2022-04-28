import React, { useState } from "react";
import Footer from "../components/Footer";
import MovieBox from "../components/MovieBox";
import NavBar from "../components/NavBar";

export default function Home() {
  const [movies, setMovies] = useState([]);

  return (
    <>
      <NavBar movies={movies} setMovies={setMovies} />
      <MovieBox movies={movies} setMovies={setMovies} />
      <Footer />
    </>
  );
}
