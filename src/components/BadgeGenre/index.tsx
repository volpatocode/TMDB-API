import React from "react";
import * as S from "./styles";

type propsType = {
  genre: string;
};

const index = ({ genre }: propsType) => {
  return (
    <>
      <S.BadgeGenre>{genre}</S.BadgeGenre>
    </>
  );
};

export default index;
