import React from "react";
import MovieList from "../MovieList";
import * as S from "./styles";

type propsType = {
  movies: any;
  setMovies: any;
};

const index = ({ movies, setMovies }: propsType) => {
  return (
    <S.MovieBox>
      <MovieList movies={movies} setMovies={setMovies} />
    </S.MovieBox>
  );
};

export default index;
