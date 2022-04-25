import React from "react";
import MovieCard from "../MovieCard";
import * as S from "./styles";

type propsType = {
  title: string;
  poster_path: string;
  vote_average: string;
};

const index = ({ title, poster_path, vote_average }: propsType) => {
  return (
    <S.MovieBox>
      <div className="flex-item">
        <MovieCard
          title={title}
          poster_path={poster_path}
          vote_average={vote_average}
        />
      </div>
    </S.MovieBox>
  );
};

export default index;
