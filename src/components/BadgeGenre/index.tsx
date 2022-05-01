import React from "react";
import * as S from "./styles";

type propsType = {
  genre: string;
};

const index = ({genre}: propsType) => {
  return (
    <>
      <S.BadgeGenre>
        <p>{genre}</p>
      </S.BadgeGenre>
    </>
  );
};

export default index;
