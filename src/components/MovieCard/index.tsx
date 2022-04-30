import React from "react";
import MovieTitle from "../MovieTitle";
import MovieVoteAv from "../MovieVoteAv";
import Link from "next/link";

import * as S from "./styles";

type propsType = {
  title: string;
  vote_average: string;
  poster_path: string;
  id: string;
};

const index = ({ title, vote_average, poster_path, id}: propsType) => {

  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  const movieId = `${id}`

  return (
    <Link href={`http://localhost:3000/movie?movie=${movieId}`}>
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
    </Link>
  );
};

export default index;
