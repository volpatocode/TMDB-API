import React from "react";
import MovieTitle from "../MovieTitle";
import MovieVoteAv from "../MovieVoteAv";
import MovieDetails from "../MovieDetails";

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
      {poster_path ? (
        <div className="middle">
          <img src={API_IMG + poster_path} alt="Movie Poster" />
        </div>
      ) : (
        <div className="middle">
          <img src="images/posterNF.png" alt="Movie Poster" />
        </div>
      )}

      <div className="bottom">
        <MovieDetails />
        <MovieVoteAv voteAverage={vote_average} />
      </div>
    </S.MovieCard>
  );
};

export default index;
