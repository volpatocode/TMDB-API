import React from "react";
import * as S from "./styles";

type propsType = {
  title:string;
  poster_path:string;
  vote_Average:string;
  overview:string;
  release_date:string;
};

const API_IMG="https://image.tmdb.org/t/p/w500/";

const index = ({
  title,
  poster_path,
  vote_Average,
  overview,
  release_date,
}: propsType) => {
  return (
    <S.MovieBox>
      <h1>{title}</h1>
      <img src={API_IMG+poster_path} alt="Movie Poster" />
      <p>{overview}</p>
    </S.MovieBox>
  );
};

export default index;
