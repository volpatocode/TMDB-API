import { useState, useEffect } from "react";
import React from "react";
import MovieCard from "../MovieCard";

type propsType = {
  movies: any;
  setMovies: any;
};

const index = ({ movies, setMovies }: propsType) => {
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f04297956f564d66b4a51ff3da1c6c30"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <>
      {movies.map((movieReq) => (
        <MovieCard key={movieReq.id} {...movieReq} />
      ))}
      ;
    </>
  );
};

export default index;
