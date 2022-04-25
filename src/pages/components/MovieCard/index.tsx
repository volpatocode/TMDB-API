import React from "react";
import MovieTitle from "../MovieTitle";
import MovieVoteAv from "../MovieVoteAv";

import * as S from "./styles";

type propsType = {
  title: string;
  vote_average: string;
  poster_path: string;
};
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const index = ({ title, vote_average, poster_path }: propsType) => {
  return (
    <S.MovieCard>
      <div className="top">
        <MovieTitle titleText={title} />
      </div>

      <div className="middle">
        <img src={API_IMG + poster_path} alt="Movie Poster" />
      </div>

      <div className="bottom">
        <MovieVoteAv voteAverage={vote_average} />
      </div>
    </S.MovieCard>
  );
};

export default index;
