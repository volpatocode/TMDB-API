import React from "react";
import * as S from "./styles";

type propsType = { voteAverage: string };

const index = ({ voteAverage }: propsType) => {
  return (
    <>
      <S.MovieVoteAv>
        <img src="images/icon-star.png" alt="Star" />
        <p>{voteAverage}</p>
      </S.MovieVoteAv>
    </>
  );
};

export default index;
