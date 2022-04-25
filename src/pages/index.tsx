import { useState, useEffect } from "react";
import MovieBox from "./components/MovieBox";
import React from "react";
import NavBar from "./components/NavBar";
import MovieCard from "./components/MovieCard";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f04297956f564d66b4a51ff3da1c6c30"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div>
      {movies.map((movieReq) => (
        <MovieBox key={movieReq.id} {...movieReq} />
      ))}
      ;
    </div>
  );
}
