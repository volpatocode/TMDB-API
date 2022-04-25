import React from "react";
import MovieList from "../MovieList";
import * as S from "./styles";

type propsType = {
};

const index = ({}: propsType) => {
  return (
    <S.MovieBox>
        <MovieList/>
    </S.MovieBox>
  );
};

export default index;
